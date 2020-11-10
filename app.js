const express = require('express');
const app = express();
const cors = require('cors')
const dotenv = require('dotenv');
dotenv.config(); // reads the .env file
const ModelCreation = require("./util/ModelCreation");


ModelCreation.staticConstructor();

app.use(cors());

// Middleware
app.use(express.json());


// Import Routes
const moviesRoute = require("./routes/movies");
const videoGamesRoute = require("./routes/video-games")

// Route Middlewares
app.use("/api/movies", moviesRoute);
app.use("/api/video-games", videoGamesRoute)


//console.log(predictedRevenue)

module.exports = app