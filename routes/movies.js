const router = require("express").Router();
const { recommendationsValidation } = require("../validation");

router.get("/recommendations", async (req, res) => {
  try {
    const { error, value } = recommendationsValidation(req.body);
    if (error) return res.status(400).send(error);

    const titlesFromUser = res.body.movieTitles;

    return res.send({ titlesFromUser });
  } catch (e) {
    return res.status(500).send({ message: "An error has occurred" });
  }
});

module.exports = router;
