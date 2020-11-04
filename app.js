const express = require('express');
const app = express();
const cors = require('cors')
const dotenv = require('dotenv');
dotenv.config(); // reads the .env file


app.use(cors());

// Middleware
app.use(express.json());


// Import Routes
const moviesRoute = require("./routes/movies");

// Route Middlewares
app.use("/api/movies", moviesRoute);



//console.log(predictedRevenue)

module.exports = app