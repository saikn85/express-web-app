// Imports/Dependencies
const express = require("express");
const chalk = require("chalk");
const debug = require("debug")("app");
const morgan = require("morgan");
const path = require("path");

// Application Constants
const PORT = process.env.PORT || 3000;

// The instance of express
const app = express();

// The middleware
app.use(morgan("combined")); // Logs, the request details
app.use(express.static(path.join(__dirname, "/static/"))); // Servers up the static content

// The controller - home/index
app.get("/", (req, res) => {
    res.send("Hello from the Express Web App!");
});

// The final step is to have it up and running
app.listen(PORT, () => {
    debug(`Express is listening on Port ${chalk.green(PORT)}`);
});
