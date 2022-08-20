const mongoose = require("mongoose");

const ProfileTopTitleSchema = new mongoose.Schema({
  topTitle: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("UserTopTitle", ProfileTopTitleSchema);
