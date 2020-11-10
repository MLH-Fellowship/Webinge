const router = require("express").Router();
const {
  recommendationsValidation,
  recommendationsValidationV2,
  revenuePredictionValidation,
} = require("../util/validation");
const { API_KEY } = require("../util/constants");
const axios = require("axios");
const dynamicSort = require("../util/dynamicSort");
const ModelCreation = require("../util/ModelCreation");
const arraysEqual = require("../util/arraysEqual");

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
    await getRecommendations(movieIds, recommendedMovies);

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

router.post("/recommendations-v2", async (req, res) => {
  try {
    const { error, value } = recommendationsValidationV2(req.body);
    if (error) return res.status(400).send(error);
    let recommendedMovies = [];

    const moviesFromUser = req.body.movies;

    for await (movieFromUser of moviesFromUser) {
      // Get Id for movie
      let title = movieFromUser.title;
      let releaseYear = movieFromUser.releaseYear;
      let genreIds = movieFromUser.genreIds;
      


      let movieIds = await getMovieIds(title, releaseYear, genreIds);
      recommendedMovies = await getRecommendations(movieIds);
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

  return res.send({
    predictedRevenue: predictedRevenue[0][0],
    accuracy: ModelCreation.moviesAccuracy,
  });
});

async function getRecommendations(movieIds) {
  let recommendations = [];
  for await (id of movieIds) {
    // get list of recommendations
    let movieRecommendationsUrl = `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${API_KEY}&language=en-US&page=1`;

    let response = await axios.get(movieRecommendationsUrl);

    let results = response.data.results;

    // sort list in order of vote_average field
    // Data is sorted in descending order
    results.sort(dynamicSort("vote_average"));

    console.log(results.length);

    // add first six movies to the array
    recommendations = results.slice(0, 15)


  }
  return recommendations;
}

async function getMovieIds(title, releaseYear, genreIds) {
  let movieIds = [];
  const movieSearchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${title}`;

  const response = await axios.get(movieSearchUrl);
  const results = response.data.results;

  results.forEach((result) => {
    let releaseYearOfResult = result.release_date.substring(0, 4);
    let genreIdsOfResult = result.genre_ids;

    if (
      releaseYearOfResult == releaseYear &&
      arraysEqual(genreIdsOfResult, genreIds)
    ) {
      movieIds.push(result.id);
    }
  });
  return movieIds;
}

async function getIdsForMoviesGivenArray(req, movieIds, errors) {
  for await (title of req.body.movieTitles) {
    const movieSearchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${title}`;
    //console.log(movieSearchUrl);

    await axios
      .get(movieSearchUrl)
      .then(function (response) {
        //console.log(response.data.results);
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
