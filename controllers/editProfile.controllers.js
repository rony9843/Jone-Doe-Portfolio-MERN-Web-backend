const ProfileImageSchema = require("../model/profileImage.model");
const ProfileTopTitleSchema = require("../model/profile.topTitle.model");
const ProfileNameSchema = require("../model/profileName.model");
const ProfileTopBottomTitleSchema = require("../model/profile.BottomTitle.model");
const ProfileSkillSchema = require("../model/profile.Skill.model");

// * Update The Profile image Link
exports.postProfileImageRoute = async (req, res) => {
  try {
    const profile_image_link = req.body.profileImageLink;

    // ~ find
    const newProfile_image_link = await ProfileImageSchema.findOne({
      _id: "62fd864f54fbb02e224a8b14",
    });

    // ~ update the link
    newProfile_image_link.url = profile_image_link;

    await newProfile_image_link.save();

    res.status(201).json({
      message: "Image updated",
      image_url: profile_image_link,
    });
  } catch (error) {
    console.log(error);
  }
};

// * Update The Profile image Link
exports.getProfileImageRoute = async (req, res) => {
  try {
    // ~ find
    const image_url = await ProfileImageSchema.findOne({
      _id: "62fd864f54fbb02e224a8b14",
    });

    res.status(201).json({
      message: "Image updated",
      image_url: image_url,
    });
  } catch (error) {
    console.log(error);
  }
};

// * get The Profile top title
exports.getProfileTopTitle = async (req, res) => {
  try {
    // ~ find
    const newProfileTopTitle = await ProfileTopTitleSchema.findOne({
      _id: "62fe51a9cbb6aa54a065b31c",
    });

    res.status(200).json({
      message: newProfileTopTitle,
    });
  } catch (error) {
    res.send(500).send(error.message);
  }
};

// * Update The Profile title
exports.updateProfileTitle = async (req, res) => {
  try {
    // * get data in the value
    const ProfileTopTitle = req.body.title;

    // ~ find
    const newProfileTopTitle = await ProfileTopTitleSchema.findOne({
      _id: "62fe51a9cbb6aa54a065b31c",
    });

    // ~ update the link
    newProfileTopTitle.topTitle = ProfileTopTitle;

    await newProfileTopTitle.save();

    res.status(200).json({
      message: newProfileTopTitle,
    });
  } catch (error) {
    res.send(500).send(error.message);
  }
};

// * get The Profile Name
exports.getProfileName = async (req, res) => {
  try {
    // ~ find
    const newProfileName = await ProfileNameSchema.findOne({
      _id: "62fe7d9fa9f81c9eac7d4566",
    });

    res.status(200).json({
      message: newProfileName,
    });
  } catch (error) {
    res.send(500).send(error.message);
  }
};

// * Update The Profile Name
exports.updateProfileName = async (req, res) => {
  try {
    // * get data in the value
    const userName = req.body.name;

    // * find data
    const newUser = await ProfileNameSchema.findOne({
      _id: "62fe7d9fa9f81c9eac7d4566",
    });

    // ~ update the name
    newUser.ProfileName = userName;

    await newUser.save();

    res.status(200).json({
      message: userName,
    });
  } catch (error) {
    res.send(500).send(error.message);
  }
};

// * Update The Profile Bottom Title
exports.updateProfileBottomTitle = async (req, res) => {
  try {
    // * get data in the value
    const BottomTitle = req.body.BottomTitle;

    // * find data
    const getBottomTitle = await ProfileTopBottomTitleSchema.findOne({
      _id: "6301370836def834ed70519f",
    });

    // ~ update the name
    getBottomTitle.bottomTitle = BottomTitle;

    await getBottomTitle.save();

    res.status(200).json({
      message: BottomTitle,
    });
  } catch (error) {
    res.send(500).send(error.message);
  }
};

// * Update The Profile Name
exports.getProfileBottomTitle = async (req, res) => {
  try {
    // * find data
    const bottomTitle = await ProfileTopBottomTitleSchema.findOne({
      _id: "6301370836def834ed70519f",
    });

    res.status(200).json({
      message: bottomTitle,
    });
  } catch (error) {
    res.send(500).send(error.message);
  }
};

// * post The Profile Skill
exports.postProfileSkill = async (req, res) => {
  try {
    // * get data in the value
    const skillName = req.body.skillName;

    // * create a new document in "User"
    const newSkill = new ProfileSkillSchema({
      skill: skillName,
    });

    await newSkill.save();

    res.status(200).json({
      message: newSkill,
    });
  } catch (error) {
    res.send(500).send(error.message);
  }
};

// * remove The Profile Skill
exports.removeProfileSkill = async (req, res) => {
  try {
    // * get data in the value
    const skillId = req.body.id;

    const UserDataBase = await ProfileSkillSchema.findOne({
      _id: skillId,
    });

    await UserDataBase.remove();

    res.status(201).json({ UserDataBase });
  } catch (error) {
    res.send(500).send(error.message);
  }
};

// * remove The Profile Skill
exports.getProfileSkill = async (req, res) => {
  try {
    const ProfileSkill = await ProfileSkillSchema.find({});

    res.status(201).json({ ProfileSkill });
  } catch (error) {
    res.send(500).send(error.message);
  }
};
