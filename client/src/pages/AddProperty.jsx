import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const AddProperty = () => {

  const navigate = useNavigate()

  const user = JSON.parse(
    localStorage.getItem("user")
  )

  const [formData, setFormData] =
    useState({
      title: "",
      location: "",
      exactAddress: "",
      price: "",
      image: "",
      description: "",
      sellerName: user?.name || "",
      sellerEmail: user?.email || "",
      sellerPhone: "",
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

        await axios.post(
          "http://localhost:8000/api/properties",
          {
            ...formData,
            createdBy:
              user.email,
          }
        )

        alert(
          "Property Added Successfully"
        )

        navigate("/my-listings")

      } catch (error) {

        console.log(error)

        alert("Error")
      }
    }

  return (

    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-10">

      <form
        onSubmit={handleSubmit}
        className="bg-white p-10 rounded-3xl shadow-xl w-full max-w-2xl"
      >

        <h1 className="text-4xl font-bold mb-8 text-center">
          Add Property
        </h1>

        <div className="grid gap-5">

          <input
            type="text"
            name="title"
            placeholder="Property Title"
            onChange={handleChange}
            className="border p-4 rounded-xl"
            required
          />

          <input
            type="text"
            name="location"
            placeholder="City / Area"
            onChange={handleChange}
            className="border p-4 rounded-xl"
            required
          />

          <input
            type="text"
            name="exactAddress"
            placeholder="Exact Address"
            onChange={handleChange}
            className="border p-4 rounded-xl"
          />

          <input
            type="number"
            name="price"
            placeholder="Price"
            onChange={handleChange}
            className="border p-4 rounded-xl"
            required
          />

          <input
            type="text"
            name="image"
            placeholder="Image URL"
            onChange={handleChange}
            className="border p-4 rounded-xl"
            required
          />

          <textarea
            name="description"
            placeholder="Description"
            onChange={handleChange}
            className="border p-4 rounded-xl"
          />

          <input
            type="text"
            name="sellerPhone"
            placeholder="Seller Phone Number"
            onChange={handleChange}
            className="border p-4 rounded-xl"
          />

          <button
            className="bg-orange-500 text-white py-4 rounded-xl text-lg"
          >
            Publish Property
          </button>

        </div>

      </form>

    </div>
  )
}

export default AddProperty