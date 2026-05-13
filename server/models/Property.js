const mongoose = require("mongoose")

const propertySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    location: {
      type: String,
      required: true,
    },

    exactAddress: {
      type: String,
    },

    price: {
      type: Number,
      required: true,
    },

    image: {
      type: String,
      required: true,
    },

    description: {
      type: String,
    },

    sellerName: {
      type: String,
    },

    sellerEmail: {
      type: String,
    },

    sellerPhone: {
      type: String,
    },

    createdBy: {
      type: String,
    },
  },

  {
    timestamps: true,
  }
)

module.exports =
  mongoose.model(
    "Property",
    propertySchema
  )