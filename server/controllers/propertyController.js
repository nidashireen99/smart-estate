const Property = require("../models/Property");

// GET ALL PROPERTIES
const getProperties = async (req, res) => {
  try {
    const properties = await Property.find();

    res.json(properties);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// GET SINGLE PROPERTY
const getPropertyById = async (req, res) => {
  try {
    const property = await Property.findById(req.params.id);

    if (!property) {
      return res.status(404).json({
        message: "Property not found",
      });
    }

    res.json(property);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// CREATE PROPERTY
const createProperty = async (req, res) => {
  try {

    const {
      title,
      location,
      price,
      image,
      beds,
      baths,
      area,
      description,
    } = req.body;

    const property = new Property({
      title,
      location,
      price,
      image,
      beds,
      baths,
      area,
      description,
    });

    const savedProperty = await property.save();

    res.status(201).json(savedProperty);

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: error.message,
    });
  }
};

// UPDATE PROPERTY
const updateProperty = async (req, res) => {
  try {

    const updatedProperty =
      await Property.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );

    res.json(updatedProperty);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });
  }
};

// DELETE PROPERTY
const deleteProperty = async (req, res) => {
  try {

    await Property.findByIdAndDelete(
      req.params.id
    );

    res.json({
      message: "Property deleted",
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getProperties,
  getPropertyById,
  createProperty,
  updateProperty,
  deleteProperty,
};