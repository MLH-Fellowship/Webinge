const express = require('express');
const app = express();
const cors = require('cors')
const dotenv = require('dotenv');
dotenv.config(); // reads the .env file
const tf = require('@tensorflow/tfjs');
const loadCSV = require('./util/load-csv');
const LinearRegression = require("./models/linear-regression");

// Middleware
app.use(express.json());
app.use(cors())

// Import Routes
const moviesRoute = require("./routes/movies");

// Route Middlewares
app.use("/api/movies", moviesRoute);


// ML Functionality

let { features, labels, testFeatures, testLabels } = loadCSV('./data/tmdb_5000_movies/tmdb_5000_movies_edited.csv', {
    shuffle: false,
    splitTest: 2000,
    dataColumns: ['budget', 'genre_id', 'runtime'],
    labelColumns: ['revenue']
});


const regression = new LinearRegression(
    features,
    labels,
    {
        learningRate: .01,
        iterations: 100,
        batchSize: 16
    }
);

regression.train();

const r2 = regression.test(testFeatures, testLabels);

console.log("Accuracy Rating (negative = bad accuracy, 1 = perfect): ", r2)

const predictedRevenue = regression.predict([
    //budget genre id runtime
    [237000000, 28, 162]
]).print();

//console.log(predictedRevenue)

module.exports = app