import {
  useParams,
} from "react-router-dom"

import {
  useEffect,
  useState,
} from "react"

import axios from "axios"

import {
  FaBed,
  FaBath,
} from "react-icons/fa"

const PropertyDetails = () => {

  const { id } = useParams()

  const [property,
    setProperty] =
      useState(null)

  useEffect(() => {

    const fetchProperty =
      async () => {

        try {

          const response =
            await axios.get(
              `http://localhost:8000/api/properties`
            )

          const foundProperty =
            response.data.find(
              (item) =>
                item._id === id
            )

          setProperty(
            foundProperty
          )

        } catch (error) {

          console.log(error)
        }
      }

    fetchProperty()

  }, [id])

  if (!property) {

    return (
      <h1 className="text-center mt-20 text-3xl">

        Loading...

      </h1>
    )
  }

  return (

    <div className="bg-gray-100 min-h-screen">

      {/* IMAGE */}

      <img
        src={property.image}
        alt={property.title}
        className="w-full h-[500px] object-cover"
      />

      {/* DETAILS */}

      <div className="max-w-6xl mx-auto p-10">

        <h1 className="text-5xl font-bold mb-4">

          {property.title}

        </h1>

        <p className="text-gray-500 text-xl mb-6">

          {property.location}

        </p>

        <h2 className="text-orange-500 text-4xl font-bold mb-8">

          ₹ {

            property.price >= 10000000

              ? (property.price / 10000000)
                  .toFixed(1) + " Crore"

              : property.price >= 100000

              ? (property.price / 100000)
                  .toFixed(1) + " Lakh"

              : property.price

          }

        </h2>

        <div className="flex gap-10 text-xl mb-8">

          <div className="flex items-center gap-3">

            <FaBed />

            {property.beds} Bedrooms

          </div>

          <div className="flex items-center gap-3">

            <FaBath />

            {property.baths} Bathrooms

          </div>

        </div>

        <div className="bg-white p-8 rounded-3xl shadow-lg">

          <h3 className="text-3xl font-bold mb-4">

            Description

          </h3>

          <p className="text-gray-600 leading-8">

            {property.description}

          </p>

        </div>

        {/* CONTACT */}

        <div className="mt-10 bg-white p-8 rounded-3xl shadow-lg">

          <h3 className="text-3xl font-bold mb-6">

            Contact Seller

          </h3>

          <button className="bg-orange-500 text-white px-8 py-4 rounded-xl text-xl">

            Contact Now

          </button>

        </div>

      </div>

    </div>
  )
}

export default PropertyDetails