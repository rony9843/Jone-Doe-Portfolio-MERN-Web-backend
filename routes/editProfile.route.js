const {
  postProfileImageRoute,
  getProfileImageRoute,
} = require("../controllers/editProfile.controllers");

const route = require("express").Router();

// ~ get profile image link
route.get("/", getProfileImageRoute);

// ~ upload profile image link
route.patch("/", postProfileImageRoute);

module.exports = route;
