const mongoose = require("mongoose");

const ProfileNameSchema = new mongoose.Schema({
  ProfileName: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("ProfileName", ProfileNameSchema);
