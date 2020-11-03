const http = require('http')
const app = require('./app')
const dotenv = require('dotenv')
//require('@tensorflow/tfjs-node');
const tf = require('@tensorflow/tfjs');
const loadCSV = require('./load-csv');
const LinearRegression = require("./linear-regression");

dotenv.config();

let { features, labels, testFeatures, testLabels } = loadCSV('./data/tmdb_5000_movies/tmdb_5000_movies_edited.csv', {
    shuffle: false,
    splitTest: 2000,
    dataColumns: ['budget'],
    labelColumns: ['revenue']
});

const regression = new LinearRegression(
    features,
    labels,
    {
        learningRate: .1,
        iterations: 1000
    }
);

regression.train();

const r2 = regression.test(testFeatures, testLabels);

console.log("Accuracy Rating (negative = bad accuracy, 1 = perfect): ", r2)

const server = http.createServer(app)

const PORT = process.env.PORT || 4000
server.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`)
})