import {
  useParams,
  useNavigate,
} from "react-router-dom"

import {
  useEffect,
  useState,
} from "react"

import axios from "axios"

const EditProperty = () => {

  const { id } = useParams()

  const navigate = useNavigate()

  const [formData,
    setFormData] =
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

  useEffect(() => {

    fetchProperty()

  }, [])

  const fetchProperty =
    async () => {

      try {

        const response =
          await axios.get(
            "http://localhost:8000/api/properties"
          )

        const property =
          response.data.find(
            (item) =>
              item._id === id
          )

        setFormData(property)

      } catch (error) {

        console.log(error)
      }
    }

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

        await axios.put(
          `http://localhost:8000/api/properties/${id}`,
          formData
        )

        alert(
          "Property Updated"
        )

        navigate("/my-listings")

      } catch (error) {

        console.log(error)
      }
    }

  return (

    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-10">

      <div className="bg-white p-10 rounded-3xl shadow-xl w-full max-w-2xl">

        <h1 className="text-4xl font-bold mb-8">

          Edit Property

        </h1>

        <form
          onSubmit={handleSubmit}
          className="grid gap-5"
        >

          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="border p-4 rounded-xl"
          />

          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="border p-4 rounded-xl"
          />

          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="border p-4 rounded-xl"
          />

          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
            className="border p-4 rounded-xl"
          />

          <input
            type="number"
            name="beds"
            value={formData.beds}
            onChange={handleChange}
            className="border p-4 rounded-xl"
          />

          <input
            type="number"
            name="baths"
            value={formData.baths}
            onChange={handleChange}
            className="border p-4 rounded-xl"
          />

          <input
            type="text"
            name="area"
            value={formData.area}
            onChange={handleChange}
            className="border p-4 rounded-xl"
          />

          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="border p-4 rounded-xl h-32"
          />

          <button
            type="submit"
            className="bg-orange-500 text-white py-4 rounded-xl"
          >

            Update Property

          </button>

        </form>

      </div>

    </div>
  )
}

export default EditProperty