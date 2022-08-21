const mongoose = require("mongoose");

const ProfileTopBottomTitleSchema = new mongoose.Schema({
  bottomTitle: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("UserBottomTitle", ProfileTopBottomTitleSchema);
