const Property = require("../models/Property");

// GET ALL
const getProperties = async (req, res) => {
  try {
    const properties = await Property.find();
    res.json(properties);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET SINGLE
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
    res.status(500).json({ message: error.message });
  }
};

// CREATE
const createProperty = async (req, res) => {
  try {
    const property = new Property(req.body);

    const savedProperty = await property.save();

    res.status(201).json(savedProperty);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// UPDATE
const updateProperty = async (req, res) => {
  try {
    const updated = await Property.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(updated);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// DELETE
const deleteProperty = async (req, res) => {
  try {
    await Property.findByIdAndDelete(req.params.id);

    res.json({
      message: "Property deleted",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getProperties,
  createProperty,
  getPropertyById,
  updateProperty,
  deleteProperty,
};