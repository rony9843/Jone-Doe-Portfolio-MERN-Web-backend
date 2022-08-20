const {
  postProfileImageRoute,
  getProfileImageRoute,
  updateProfileTitle,
  getProfileTopTitle,
  getProfileName,
  updateProfileName,
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

module.exports = route;
