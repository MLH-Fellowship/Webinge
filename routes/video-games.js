const router = require("express").Router();
const {
  revenuePredictionValidation_VG
} = require("../util/validation");
const ModelCreation = require("../util/ModelCreation");


router.post("/global-sales", async (req, res) => {

  const predictedSales = ModelCreation.VideoGamesRegression
    .predict([
      //budget platform id, genre id, age rating id, developer id
      [req.body.platform_id, req.body.genre_id, req.body.age_rating_id, req.body.developer_id],
    ])
    .arraySync();

  return res.send({ predictedSales: predictedSales[0][0], accuracy: r2 });
});

module.exports = router;
