const router = require("express").Router();
const {
  recommendationsValidation,
  revenuePredictionValidation,
} = require("../util/validation");
const { API_KEY } = require("../util/constants");
const axios = require("axios");
const dynamicSort = require("../util/dynamicSort");
const ModelCreation = require("../util/ModelCreation");


router.post("/recommendations", async (req, res) => {
  try {
    const { error, value } = recommendationsValidation(req.body);
    if (error) return res.status(400).send(error);
    let movieIds = [];
    let errors = [];
    let recommendedMovies = [];

    // Get Id for each movie
    await getIdsForMoviesGivenArray(req, movieIds, errors);

    // Get Recommendations for each movie using Movie Id
    for await (id of movieIds) {
      // get list of recommendations
      let movieRecommendationsUrl = `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${API_KEY}&language=en-US&page=1`;

      let response = await axios.get(movieRecommendationsUrl);

      let results = response.data.results;

      // sort list in order of vote_average field
      // Data is sorted in ascending order
      results.sort(dynamicSort("vote_average"));

      // add top two to recommended movies
      // the bottom two are the highest rated
      if (results[results.length - 1] != null)
        recommendedMovies.push(results[results.length - 1]);
      if (results[results.length - 2] != null)
        recommendedMovies.push(results[results.length - 2]);

      //console.log(results.length)
    }

    //console.log(recommendedMovies)

    if (errors.length != 0) {
      return res
        .status(500)
        .send({ message: "Multiple errors have occurred: " + errors.length });
    }

    return res.send({ recommendedMovies });
  } catch (e) {
    console.log(e);
    return res.status(500).send({ message: "An error has occurred" });
  }
});

router.post("/revenue-prediction", async (req, res) => {
  const { error, value } = revenuePredictionValidation(req.body);
  if (error) return res.status(400).send(error);

  const predictedRevenue = ModelCreation.moviesRegression
    .predict([
      //budget genre id runtime
      [req.body.budget, req.body.genre_id, req.body.runtime],
    ])
    .arraySync();

  return res.send({ predictedRevenue: predictedRevenue[0][0], accuracy: ModelCreation.moviesAccuracy });
});

async function getIdsForMoviesGivenArray(req, movieIds, errors) {
  for await (title of req.body.movieTitles) {
    const movieSearchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${title}`;
    //console.log(movieSearchUrl);

    await axios
      .get(movieSearchUrl)
      .then(function (response) {
        //console.log(response.data.results[0].original_title);
        movieIds.push(response.data.results[0].id);
      })
      .catch(function (error) {
        errors.push("An error has occurred");
        console.log(error);
        return;
      })
      .then(function () {});
  }
}

module.exports = router;
