import { Link } from "react-router-dom"
import {
  FaBed,
  FaBath,
  FaHeart,
} from "react-icons/fa"

import { useState } from "react"

const PropertyCard = ({
  property,
}) => {

  const [liked, setLiked] =
    useState(false)

  return (

  <Link
    to={`/property/${property._id}`}
  >

    <div className="bg-white rounded-3xl shadow-lg overflow-hidden hover:scale-105 transition relative">

      {/* FAVORITE */}

      <button
        onClick={(e) => {

          e.preventDefault()

          setLiked(!liked)
        }}
        className="absolute top-4 right-4 bg-white p-3 rounded-full shadow-lg z-10"
      >

        <FaHeart
          className={
            liked
              ? "text-red-500"
              : "text-gray-400"
          }
        />

      </button>

      {/* IMAGE */}

      <img
        src={property.image}
        alt={property.title}
        className="w-full h-64 object-cover"
        onError={(e) => {
          e.target.src =
            "https://via.placeholder.com/400x300?text=No+Image"
        }}
      />

      {/* INFO */}

      <div className="p-6">

        <h2 className="text-2xl font-bold mb-2">

          {property.title}

        </h2>

        <p className="text-gray-500 mb-3">

          {property.location}

        </p>

        <h3 className="text-orange-500 text-2xl font-bold mb-4">

          ₹ {

            property.price >= 10000000

              ? (property.price / 10000000)
                  .toFixed(1) + " Crore"

              : property.price >= 100000

              ? (property.price / 100000)
                  .toFixed(1) + " Lakh"

              : property.price

          }

        </h3>

        <div className="flex justify-between text-gray-600 mb-4">

          <div className="flex items-center gap-2">

            <FaBed />

            {property.beds} Beds

          </div>

          <div className="flex items-center gap-2">

            <FaBath />

            {property.baths} Baths

          </div>

        </div>

        <p className="text-gray-500">

          {property.area}

        </p>

      </div>

    </div>

  </Link>
)
}

export default PropertyCard