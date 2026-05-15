const express = require("express");

const router = express.Router();

const {
  getProperties,
  createProperty,
  getPropertyById,
  updateProperty,
  deleteProperty,
} = require("../controllers/propertyController");

const { protect } = require("../middleware/authMiddleware");

// GET ALL PROPERTIES
router.get("/", getProperties);

// GET SINGLE PROPERTY
router.get("/:id", getPropertyById);

// CREATE PROPERTY
router.post("/", protect, createProperty);

// UPDATE PROPERTY
router.put("/:id", protect, updateProperty);

// DELETE PROPERTY
router.delete("/:id", protect, deleteProperty);

module.exports = router;