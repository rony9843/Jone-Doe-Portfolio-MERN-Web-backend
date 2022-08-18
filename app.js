const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const editProfileRoute = require("./routes/editProfile.route");

// ~ parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// ~ parse application/json
app.use(bodyParser.json());

// ~ use cors
app.use(cors());

// ~ use edit profile route
app.use("/editProfile", editProfileRoute);

// & home route
app.get("/", (req, res) => {
  res.send("hello,this is home route");
});

// & 404 not found
app.use((req, res) => {
  res.send("404 server is not found ");
});

// & server error
app.use((error, req, res, next) => {
  res.send("server error : ", error);
});

module.exports = app;
