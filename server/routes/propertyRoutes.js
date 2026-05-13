const express = require("express")

const {
  createProperty,
  getProperties,
  updateProperty,
  deleteProperty,
} = require(
  "../controllers/propertyController"
)

const router = express.Router()

router.post(
  "/",
  createProperty
)

router.get(
  "/",
  getProperties
)

router.put(
  "/:id",
  updateProperty
)

router.delete(
  "/:id",
  deleteProperty
)

module.exports = router