import { useContext } from "react"

import {
  FavoriteContext,
} from "../context/FavoriteContext"

import PropertyCard from "../components/PropertyCard"

const Favorites = () => {

  const { favorites } =
    useContext(FavoriteContext)

  return (
    <div className="min-h-screen bg-gray-100 p-10">

      <h1 className="text-5xl font-bold mb-10">
        Favorite Properties ❤️
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

        {favorites.map((property) => (

          <PropertyCard
            key={property.id}
            property={property}
          />

        ))}

      </div>

    </div>
  )
}

export default Favorites