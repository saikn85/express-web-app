const express = require("express");

// The instance of express
const app = express();

// The controller - home/index
app.get("/", (req, res) => {
    res.send("Hello from the Express Web App!");
});

// The final step is to have it up and running
app.listen(1995, () => {
    console.log("Express is listening on Port 1995");
});
