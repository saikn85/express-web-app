// Imports/Dependencies
const express = require("express");
const chalk = require("chalk");
const debug = require("debug")("app");
const morgan = require("morgan");
const path = require("path");

const homeRouter = require("./routers/homeRouter");
const temperatureROuter = require("./routers/temperatureRouter")

// Application Constants
const PORT = process.env.PORT || 3000; // Application's port

// The instance of express
const app = express();

// The middleware
app.use(morgan("combined")); // Logs, the request details
app.use(express.static(path.join(__dirname, "/static/"))); // Servers up the static content

// Configurations
app.set("views", path.join(__dirname, "views")); // Renders dynamic HTML
app.set("view engine", "ejs"); // Informs express, the view engine used

// The controller - home/index
app.use("/", homeRouter);
app.use("/temperature", temperatureROuter);

// The final step is to have it up and running
app.listen(PORT, () => {
    debug(`Express is listening on Port ${chalk.green(PORT)}`);
});
