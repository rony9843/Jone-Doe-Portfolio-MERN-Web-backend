const {
  postProfileImageRoute,
  getProfileImageRoute,
  updateProfileTitle,
  getProfileTopTitle,
  getProfileName,
  updateProfileName,
  updateProfileBottomTitle,
  getProfileBottomTitle,
  postProfileSkill,
  removeProfileSkill,
  getProfileSkill,
} = require("../controllers/editProfile.controllers");

const route = require("express").Router();

// ~ get profile image link
route.get("/", getProfileImageRoute);

// ~ upload profile image link
route.patch("/", postProfileImageRoute);

// ~ get profile top title
route.get("/getProfileTitle", getProfileTopTitle);

// ~ update profile top title
route.patch("/updateProfileTitle", updateProfileTitle);

// ~ get profile Name
route.get("/getProfileName", getProfileName);

// ~ update profile Name
route.patch("/updateProfileTName", updateProfileName);

// ~ update profile bottom title
route.patch("/updateProfileBottomTitle", updateProfileBottomTitle);

// ~ update profile bottom title
route.get("/getProfileBottomTitle", getProfileBottomTitle);

// ~ update profile bottom title
route.post("/postProfileSkill", postProfileSkill);

// ~ update profile bottom title
route.delete("/removeProfileSkill", removeProfileSkill);

// ~ update profile bottom title
route.get("/getProfileSkill", getProfileSkill);

module.exports = route;
