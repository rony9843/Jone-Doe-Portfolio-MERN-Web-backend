const ProfileImageSchema = require("../model/porfileImage.model");

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
