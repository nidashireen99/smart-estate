import {
  useEffect,
  useState,
} from "react"

import axios from "axios"

import { Link } from "react-router-dom"

const MyListings = () => {

  const [properties,
    setProperties] =
      useState([])

  const user =
    JSON.parse(
      localStorage.getItem("user")
    )

  useEffect(() => {

    fetchProperties()

  }, [])

  const fetchProperties =
    async () => {

      try {

        const response =
          await API.get(
            "https://smart-estate-production.up.railway.app/api/properties"
          )

        const myProperties =
          response.data.filter(
            (property) =>
              property.createdBy ===
              user.email
          )

        setProperties(
          myProperties
        )

      } catch (error) {

        console.log(error)
      }
    }

  const deleteProperty =
    async (id) => {

      const confirmDelete =
        window.confirm(
          "Delete this property?"
        )

      if (!confirmDelete) {
        return
      }

      try {

        await axios.delete(
          `https://smart-estate-production.up.railway.app/api/properties/${id}`
        )

        fetchProperties()

      } catch (error) {

        console.log(error)
      }
    }

  // BUYER BLOCK

  if (user?.role !== "seller") {

    return (

      <h1 className="text-4xl text-center mt-20 font-bold">

        Only Sellers Have Listings

      </h1>
    )
  }

  return (

    <div className="min-h-screen bg-gray-100 p-10">

      <div className="flex justify-between items-center mb-10">

        <h1 className="text-4xl font-bold">

          My Listings

        </h1>

        <Link
          to="/add-property"
          className="bg-orange-500 text-white px-6 py-3 rounded-xl"
        >
          Add Property
        </Link>

      </div>

      {
        properties.length === 0 && (

          <p className="text-xl text-gray-500">

            No properties added yet.

          </p>
        )
      }

      <div className="grid md:grid-cols-3 gap-8">

        {
          properties.map(
            (property) => (

              <div
                key={property._id}
                className="bg-white rounded-3xl overflow-hidden shadow-lg"
              >

                <img
                  src={property.image}
                  alt=""
                  className="h-60 w-full object-cover"
                  onError={(e) => {
                    e.target.src =
                      "https://via.placeholder.com/400x300?text=No+Image"
                  }}
                />

                <div className="p-6">

                  <h2 className="text-2xl font-bold mb-3">

                    {property.title}

                  </h2>

                  <p className="text-gray-500 mb-3">

                    {property.location}

                  </p>

                  <p className="text-orange-500 font-bold text-xl mb-5">

                    ₹ {

                      property.price >= 10000000

                        ? (property.price / 10000000)
                            .toFixed(1) + " Crore"

                        : property.price >= 100000

                        ? (property.price / 100000)
                            .toFixed(1) + " Lakh"

                        : property.price

                    }

                  </p>

                  <div className="flex gap-3">

                    <Link
                      to={`/edit-property/${property._id}`}
                      className="bg-orange-500 text-white px-5 py-3 rounded-xl"
                    >
                      Edit
                    </Link>

                    <button
                      onClick={() =>
                        deleteProperty(
                          property._id
                        )
                      }
                      className="bg-red-500 text-white px-5 py-3 rounded-xl"
                    >

                      Delete

                    </button>

                  </div>

                </div>

              </div>

            )
          )
        }

      </div>

    </div>
  )
}

export default MyListings