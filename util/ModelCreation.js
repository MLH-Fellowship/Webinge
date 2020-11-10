
const tf = require("@tensorflow/tfjs");
const loadCSV = require("../util/load-csv");
const LinearRegression = require("../models/linear-regression");


class ModelCreation {
  static moviesRegression = null;
  static moviesAccuracy = null;
  static VideoGamesRegression = null;
  static videoGamesAccuracy = null;

  static staticConstructor() {

    // MOVIES
    let moviesData = loadCSV(
      "./data/tmdb_5000_movies/tmdb_5000_movies_edited.csv",
      {
        shuffle: false,
        splitTest: 2000,
        dataColumns: ["budget", "genre_id", "runtime"],
        labelColumns: ["revenue"],
      }
    );

    this.moviesRegression = new LinearRegression(moviesData.features, moviesData.labels, {
      learningRate: 0.01,
      iterations: 100,
      batchSize: 16,
    });

    this.moviesRegression.train();
    this.moviesAccuracy = this.moviesRegression.test(moviesData.testFeatures, moviesData.testLabels);
    //console.log("Accuracy Rating (negative = bad accuracy, 1 = perfect): ", r2);

    // VIDEO GAMES
    let videoGamesData = loadCSV(
        "./data/video-games/video_game_sales_short.csv",
        {
          shuffle: true,
          splitTest: 5,
          dataColumns: ["platform_id", "genre_id", "age_rating_id", "developer_id"],
          labelColumns: ["global_sales"],
        }
      );
    
    
      this.VideoGamesRegression = new LinearRegression(videoGamesData.features, videoGamesData.labels, {
        learningRate: 0.01,
        iterations: 10,
        batchSize: 1
      });
    
      this.VideoGamesRegression.train();
    
      this.videoGamesAccuracy = this.VideoGamesRegression.test(videoGamesData.testFeatures, videoGamesData.testLabels);
    
      //console.log("Accuracy Rating (negative = bad accuracy, 1 = perfect): ", r2);
    
  }
}

module.exports = ModelCreation;
