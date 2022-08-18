const mongoose = require("mongoose");

const ProfileImageSchema = new mongoose.Schema({
  url: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("UserDP", ProfileImageSchema);
