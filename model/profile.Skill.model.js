const mongoose = require("mongoose");

const ProfileSkillSchema = new mongoose.Schema({
  skill: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("UserSkill", ProfileSkillSchema);
