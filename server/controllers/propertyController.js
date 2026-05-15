const Property = require("../models/Property");
const cloudinary = require("../config/cloudinary");

// GET ALL

exports.getProperties = async (req, res) => {
  try {
    const properties = await Property.find();

    res.json(properties);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET SINGLE

exports.getProperty = async (req, res) => {
  try {
    const property = await Property.findById(req.params.id);

    res.json(property);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ADD PROPERTY

exports.addProperty = async (req, res) => {
  try {
    const uploadedImages = [];

    if (req.files && req.files.length > 0) {
      for (const file of req.files) {
        const result = await cloudinary.uploader.upload(file.path);

        uploadedImages.push(result.secure_url);
      }
    }

    const property = new Property({
      title: req.body.title,
      location: req.body.location,
      price: req.body.price,
      images: uploadedImages,
      beds: req.body.beds,
      baths: req.body.baths,
      area: req.body.area,
      description: req.body.description,
      sellerName: req.body.sellerName,
      sellerPhone: req.body.sellerPhone,
      seller: req.user.id,
    });

    await property.save();

    res.status(201).json(property);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
