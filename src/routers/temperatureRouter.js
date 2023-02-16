const express = require("express"); // Express as dependency for Routing
const data = require("../data/temperatureData.json");

const temperatureController = express.Router(); // The Router

// The Controller Method - Index
temperatureController.route("/").get((req, res) => {
    res.render("temperatures", {
        message: "Hello from the Express Web App!",
        title: "The Express Web App",
        data: data
    });
});

// The Controller Method - About
temperatureController.route("/:id").get((req, res) => {
    res.render("about", {
        message: "This is about",
        title: "The Express Web App",
    });
});

module.exports = temperatureController;