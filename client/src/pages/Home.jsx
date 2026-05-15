import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import PropertyCard from "../components/PropertyCard";

const Favorites = () => {

  const [favorites, setFavorites] = useState([]);

  useEffect(() => {

    const storedFavorites =
      JSON.parse(localStorage.getItem("favorites")) || [];

    setFavorites(storedFavorites);

  }, []);

  return (
    <div className="bg-gray-100 min-h-screen">

      <Navbar />

      <div className="p-6">

        <h1 className="text-4xl font-bold mb-8">
          ❤️ Favorite Properties
        </h1>

        {favorites.length === 0 ? (
          <h2 className="text-2xl">
            No favorite properties yet.
          </h2>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {favorites.map((property) => (
              <PropertyCard
                key={property._id}
                property={property}
              />
            ))}

          </div>
        )}

      </div>
    </div>
  );
};

export default Favorites;