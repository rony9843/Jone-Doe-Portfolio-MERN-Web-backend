const mongoose = require("mongoose");
const config = require("./config");

const dbURL = config.db.url;

mongoose
  .connect(dbURL)
  .then(() => console.log("DB Connected"))
  .catch((error) => {
    console.log("DB not connected : ", error);
  });
