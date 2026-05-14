import { useEffect, useState } from "react";
import axios from "axios";

import Navbar from "../components/Navbar";
import PropertyCard from "../components/PropertyCard";

const Home = () => {

  const [properties, setProperties] = useState([]);

  const [search, setSearch] = useState("");

  const [filter, setFilter] = useState("All");

  useEffect(() => {

    const fetchProperties = async () => {

      try {

        const response = await axios.get(
          "https://YOUR-RAILWAY-URL/api/properties"
        );

        setProperties(response.data);

      } catch (error) {

        console.log(error);
      }
    };

    fetchProperties();

  }, []);

  const filteredProperties =
    properties.filter((property) => {

      const matchesSearch =
        property.title
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesFilter =
        filter === "All"
          ? true
          : property.type === filter;

      return matchesSearch && matchesFilter;
    });

  return (

    <div className="bg-gray-100 min-h-screen">

      <Navbar />

      {/* HERO */}

      <div className="bg-black text-white py-24 text-center">

        <h1 className="text-6xl font-bold mb-5">

          Find Your Dream Home

        </h1>

        <p className="text-gray-300 text-xl">

          Buy, Sell & Rent Premium Properties
        </p>

      </div>

      {/* SEARCH + FILTER */}

      <div className="flex flex-col md:flex-row gap-5 p-10">

        <input
          type="text"
          placeholder="Search property..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          className="flex-1 p-4 rounded-xl border"
        />

        <select
          value={filter}
          onChange={(e) =>
            setFilter(e.target.value)
          }
          className="p-4 rounded-xl border"
        >

          <option>All</option>
          <option>Buy</option>
          <option>Rent</option>

        </select>

      </div>

      {/* PROPERTIES */}

      <div className="grid md:grid-cols-3 gap-8 p-10">

        {filteredProperties.map((property) => (

          <PropertyCard
            key={property._id}
            property={property}
          />
        ))}

      </div>

      {/* STATS */}

      <div className="bg-white py-20 px-10">

        <div className="grid md:grid-cols-4 gap-8 text-center">

          <div className="shadow-lg p-8 rounded-2xl">

            <h1 className="text-5xl font-bold text-orange-500">

              10K+

            </h1>

            <p className="mt-3">

              Properties
            </p>

          </div>

          <div className="shadow-lg p-8 rounded-2xl">

            <h1 className="text-5xl font-bold text-orange-500">

              5K+

            </h1>

            <p className="mt-3">

              Customers
            </p>

          </div>

          <div className="shadow-lg p-8 rounded-2xl">

            <h1 className="text-5xl font-bold text-orange-500">

              100+

            </h1>

            <p className="mt-3">

              Cities
            </p>

          </div>

          <div className="shadow-lg p-8 rounded-2xl">

            <h1 className="text-5xl font-bold text-orange-500">

              24/7

            </h1>

            <p className="mt-3">

              Support
            </p>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Home;