const router = require("express").Router();
const {
  revenuePredictionValidation_VG
} = require("../util/validation");
const { API_KEY } = require("../util/constants");
const axios = require("axios");
const dynamicSort = require("../util/dynamicSort");
const tf = require("@tensorflow/tfjs");
const loadCSV = require("../util/load-csv");
const LinearRegression = require("../models/linear-regression");

router.post("/global-sales", async (req, res) => {
  // const { error, value } = revenuePredictionValidation_VG(req.body);
  // if (error) return res.status(400).send(error);

  let { features, labels, testFeatures, testLabels } = loadCSV(
    "./data/video-games/video_game_sales.csv",
    {
      shuffle: true,
      splitTest: 8000,
      dataColumns: ["platform_id", "genre_id"],
      labelColumns: ["global_sales"],
    }
  );

  console.log(features)
  console.log(labels)

  const regression = new LinearRegression(features, labels, {
    learningRate: 0.01,
    iterations: 100,
    batchSize: 10
  });

  regression.train();

  const r2 = regression.test(testFeatures, testLabels);

  console.log("Accuracy Rating (negative = bad accuracy, 1 = perfect): ", r2);

  const predictedSales = regression
    .predict([
      //budget genre id runtime
      [req.body.platform_id, req.body.genre_id],
    ])
    .arraySync();

  return res.send({ predictedSales: predictedSales[0][0], accuracy: r2 });
});

module.exports = router;
