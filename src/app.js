// Imports/Dependencies
const express = require("express");
const debug = require("debug")("app");
const morgan = require("morgan");
const path = require("path");

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
app.listen(3000, () => {
    debug("Express is listening on Port 3000");
});
