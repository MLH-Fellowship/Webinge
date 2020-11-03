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
    splitTest: 20,
    dataColumns: ['budget_by_millions'],
    labelColumns: ['revenue_by_millions']
});

const regression = new LinearRegression(
    features,
    labels,
    {
        learningRate: 0.00000000001,
        iterations: 1000
    }
);

regression.train();

console.log('updated m is: ' + regression.weights.arraySync()[1]);
console.log('updated b is: ' + regression.weights.arraySync()[0]);

const server = http.createServer(app)

const PORT = process.env.PORT || 4000
server.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`)
})