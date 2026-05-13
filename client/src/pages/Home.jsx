import {
  useEffect,
  useState,
} from "react"

import axios from "axios"

import PropertyCard
from "../components/PropertyCard"

import SearchBar
from "../components/SearchBar"

const Home = () => {

  const [properties,
    setProperties] =
      useState([])

  const [search,
    setSearch] =
      useState("")

  const [priceFilter,
    setPriceFilter] =
      useState("")

  // FETCH PROPERTIES

  useEffect(() => {

    const fetchProperties =
      async () => {

        try {

          const response =
            await axios.get(
              "http://localhost:8000/api/properties"
            )

          setProperties(
            response.data
          )

        } catch (error) {

          console.log(error)
        }
      }

    fetchProperties()

  }, [])

  // FILTERED PROPERTIES

  const filteredProperties =
    properties.filter(
      (property) => {

        const matchesSearch =

          property.title
            .toLowerCase()
            .includes(
              search.toLowerCase()
            )

          ||

          property.location
            .toLowerCase()
            .includes(
              search.toLowerCase()
            )

        const matchesPrice =

          priceFilter
            ? property.price <=
              Number(priceFilter)

            : true

        return (
          matchesSearch &&
          matchesPrice
        )
      }
    )

  return (

    <div className="bg-gray-100 min-h-screen">

      {/* HERO */}

      <div className="bg-black text-white py-32 text-center">

        <h1 className="text-6xl font-bold mb-6">

          Find Your Dream Property

        </h1>

        <p className="text-2xl text-gray-300 mb-10">

          Buy, rent, and invest in premium properties across India.

        </p>

      </div>

      {/* CONTENT */}

      <div className="max-w-7xl mx-auto px-6 py-16">

        <SearchBar
          search={search}
          setSearch={setSearch}
          priceFilter={priceFilter}
          setPriceFilter={setPriceFilter}
        />

        <h2 className="text-4xl font-bold mb-10">

          Latest Properties

        </h2>

        <div className="grid md:grid-cols-3 gap-10">

          {
            filteredProperties.map(
              (property) => (

                <PropertyCard
                  key={property._id}
                  property={property}
                />

              )
            )
          }

        </div>

      </div>

    </div>
  )
}

export default Home