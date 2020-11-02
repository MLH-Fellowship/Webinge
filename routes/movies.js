const router = require("express").Router();
const { recommendationsValidation } = require("../validation");
const { API_KEY } = require("../constants");
const axios = require("axios");

router.get("/recommendations", async (req, res) => {
  try {
    const { error, value } = recommendationsValidation(req.body);
    if (error) return res.status(400).send(error);
    let movieIds = [];
    let errors = [];

    // Get Id for each movie
    await getIdsForMoviesGivenArray(req, movieIds, errors);

    console.log(movieIds)

    if (errors.length != 0 ) {
        return res.status(500).send({ message: "Multiple errors have occurred: " + errors.length });
    }

    return res.send({ message: "Success" });
  } catch (e) {
    console.log(e);
    return res.status(500).send({ message: "An error has occurred" });
  }
});

module.exports = router;
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
            .then(function () {
            });
    }
}

