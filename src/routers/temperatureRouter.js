const express = require("express"); // Express as dependency for Routing
const data = require("../data/temperatureData.json");

const temperatureController = express.Router(); // The Router

// The Controller Method - Index
temperatureController.route("/").get((req, res) => {
    res.render("temperatures", {
        message: "OMG! the Temperatures!",
        title: "The Express Web App",
        data: data
    });
});

// The Controller Method - About
temperatureController.route("/:id").get((req, res) => {
    res.render("idedtemperature", {
        message: "Summary for Day!",
        title: "The Express Web App",
        data: data[req.params.id]
    });
});

module.exports = temperatureController;