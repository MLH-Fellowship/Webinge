const express = require('express');
const app = express();
const cors = require('cors')
const dotenv = require('dotenv');
dotenv.config(); // reads the .env file

// Middleware
app.use(express.json());
app.use(cors())

// Import Routes
const moviesRoute = require("./routes/movies");

// Route Middlewares
app.use("/api/movies", moviesRoute);

module.exports = app