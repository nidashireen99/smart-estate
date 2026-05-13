import { useState } from "react"
import axios from "axios"

const AddProperty = () => {

  const [formData, setFormData] =
    useState({
      title: "",
      location: "",
      price: "",
      image: "",
      beds: "",
      baths: "",
      area: "",
      description: "",
    })

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    })
  }

  const handleSubmit =
  async (e) => {

    e.preventDefault()

    try {

      const user =
        JSON.parse(
          localStorage.getItem("user")
        )

      const propertyData = {
        ...formData,
        createdBy: user.email,
      }

      await axios.post(
        "https://smart-estate-production.up.railway.app/api/properties",
        propertyData
      )

      alert(
        "Property Added Successfully"
      )

    } catch (error) {

      console.log(error)

      alert(
        "Error adding property"
      )
    }
  }

  const user =
  JSON.parse(
    localStorage.getItem("user")
  )

if (user?.role !== "seller") {

  return (

    <h1 className="text-4xl text-center mt-20 font-bold">

      Only Sellers Can Add Properties

    </h1>
  )
}

  return (

    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-8">

      <div className="bg-white p-10 rounded-3xl shadow-xl w-full max-w-2xl">

        <h1 className="text-4xl font-bold mb-8">

          Add Property

        </h1>

        <form
          onSubmit={handleSubmit}
          className="grid gap-5"
        >

          <input
            type="text"
            name="title"
            placeholder="Property Title"
            onChange={handleChange}
            className="border p-4 rounded-xl"
          />

          <input
            type="text"
            name="location"
            placeholder="Location"
            onChange={handleChange}
            className="border p-4 rounded-xl"
          />

          <input
            type="number"
            name="price"
            placeholder="Price"
            onChange={handleChange}
            className="border p-4 rounded-xl"
          />

          <input
            type="text"
            name="image"
            placeholder="Image URL"
            onChange={handleChange}
            className="border p-4 rounded-xl"
          />

          <input
            type="number"
            name="beds"
            placeholder="Bedrooms"
            onChange={handleChange}
            className="border p-4 rounded-xl"
          />

          <input
            type="number"
            name="baths"
            placeholder="Bathrooms"
            onChange={handleChange}
            className="border p-4 rounded-xl"
          />

          <input
            type="text"
            name="area"
            placeholder="Area"
            onChange={handleChange}
            className="border p-4 rounded-xl"
          />

          <textarea
            name="description"
            placeholder="Description"
            onChange={handleChange}
            className="border p-4 rounded-xl h-32"
          />

          <button
            type="submit"
            className="bg-orange-500 text-white py-4 rounded-xl"
          >
            Add Property
          </button>

        </form>

      </div>

    </div>
  )
}

export default AddProperty