const express = require('express'); // Express as dependency for Routing

const homeController = express.Router(); // The Router

// The Controller Method - Index
homeController.route("/").get((req, res) => {
    res.render("index", {
        message: "Hello from the Express Web App!",
        title: "The Express Web App",
    });
});

// The Controller Method - About
homeController.route("/about").get((req, res) => {
    res.render("about", {
        message: "This is about",
        title: "The Express Web App",
    });
});

// Making the Controller Available
module.exports = homeController;