const express = require("express"); // Express as dependency for Routing
const data = require("../data/temperatureData.json");

const temperatureController = express.Router(); // The Router

// The Controller Method - Index
homeController.route("/").get((req, res) => {
    res.render("temperatures", {
        message: "Hello from the Express Web App!",
        title: "The Express Web App",
        data: data
    });
});

// The Controller Method - About
homeController.route("/:id").get((req, res) => {
    res.render("about", {
        message: "This is about",
        title: "The Express Web App",
    });
});

module.exports = temperatureController;