const express = require('express'); // Express as dependency for Routing

const homeController = express.Router(); // The Router

homeController.route("/").get((req, res) => {
    res.render("index", {
        message: "Hello from the Express Web App!",
        title: "The Express Web App",
    });
});

module.exports = homeController;