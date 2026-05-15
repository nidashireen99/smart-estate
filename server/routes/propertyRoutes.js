const express = require("express");
const multer = require("multer");

const {
  getProperties,
  getProperty,
  addProperty,
} = require("../controllers/propertyController");

const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

const upload = multer({ dest: "uploads/" });

router.get("/", getProperties);

router.get("/:id", getProperty);

router.post(
  "/",
  authMiddleware,
  upload.array("images", 10),
  addProperty
);

module.exports = router;