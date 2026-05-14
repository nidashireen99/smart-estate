import { useEffect, useState } from "react";
import axios from "axios";

import Navbar from "../components/Navbar";
import PropertyCard from "../components/PropertyCard";

const Home = () => {

  const [properties, setProperties] = useState([]);

  const [search, setSearch] = useState("");

  const [priceFilter, setPriceFilter] = useState("All");

  useEffect(() => {

    const fetchProperties = async () => {

      try {

        const response = await axios.get(
          "https://smart-estate-production.up.railway.app/api/properties"
        );

        setProperties(response.data);

      } catch (error) {

        console.log(error);
      }
    };

    fetchProperties();

  }, []);

  // FILTERS

  const filteredProperties =
    properties.filter((property) => {

      const matchesSearch =

        property.title
          .toLowerCase()
          .includes(search.toLowerCase())

        ||

        property.location
          .toLowerCase()
          .includes(search.toLowerCase());

      let matchesPrice = true;

      if (priceFilter === "Below 50 Lakhs") {

        matchesPrice =
          property.price < 5000000;
      }

      if (priceFilter === "50 Lakhs - 1 Crore") {

        matchesPrice =

          property.price >= 5000000 &&

          property.price <= 10000000;
      }

      if (priceFilter === "Above 1 Crore") {

        matchesPrice =
          property.price > 10000000;
      }

      return matchesSearch && matchesPrice;
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

          Buy, Rent & Sell Premium Properties
        </p>

      </div>

      {/* SEARCH + FILTER */}

      <div className="flex flex-col md:flex-row gap-5 p-10">

        <input
          type="text"
          placeholder="Search by property or location..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          className="flex-1 p-4 rounded-xl border"
        />

        <select
          value={priceFilter}
          onChange={(e) =>
            setPriceFilter(e.target.value)
          }
          className="p-4 rounded-xl border"
        >

          <option>All</option>

          <option>
            Below 50 Lakhs
          </option>

          <option>
            50 Lakhs - 1 Crore
          </option>

          <option>
            Above 1 Crore
          </option>

        </select>

      </div>

      {/* PROPERTY CARDS */}

      <div className="grid md:grid-cols-3 gap-8 p-10">

        {filteredProperties.length > 0 ? (

          filteredProperties.map((property) => (

            <PropertyCard
              key={property._id}
              property={property}
            />
          ))

        ) : (

          <h1 className="text-3xl font-bold">

            No Properties Found
          </h1>
        )}

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