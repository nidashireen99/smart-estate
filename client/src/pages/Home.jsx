import { useEffect, useState } from "react";
import axios from "axios";
import PropertyCard from "../components/PropertyCard";
import Navbar from "../components/Navbar";

const Home = () => {
  const [properties, setProperties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);

  const [search, setSearch] = useState("");
  const [priceFilter, setPriceFilter] = useState("");

  useEffect(() => {
    fetchProperties();
  }, []);

  const fetchProperties = async () => {
    try {
      const res = await axios.get(
        "https://smart-estate-production.up.railway.app/api/properties"
      );

      setProperties(res.data);
      setFilteredProperties(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  // SEARCH + FILTER
  useEffect(() => {
    let updated = [...properties];

    // SEARCH
    if (search) {
      updated = updated.filter(
        (property) =>
          property.title
            .toLowerCase()
            .includes(search.toLowerCase()) ||
          property.location
            .toLowerCase()
            .includes(search.toLowerCase())
      );
    }

    // FILTER
    if (priceFilter === "low") {
      updated = updated.filter((p) => p.price <= 5000000);
    }

    if (priceFilter === "medium") {
      updated = updated.filter(
        (p) => p.price > 5000000 && p.price <= 10000000
      );
    }

    if (priceFilter === "high") {
      updated = updated.filter((p) => p.price > 10000000);
    }

    setFilteredProperties(updated);
  }, [search, priceFilter, properties]);

  return (
    <div className="bg-gray-100 min-h-screen">

      {/* NAVBAR */}
      <Navbar />

      {/* HERO */}
      <div className="bg-black text-white py-20 rounded-3xl mx-6 mt-6 text-center">
        <h1 className="text-6xl font-bold mb-6">
          Find Your Dream Home
        </h1>

        <p className="text-2xl text-gray-300">
          Buy, Sell & Rent Properties Easily
        </p>
      </div>

      {/* SEARCH + FILTER */}
      <div className="flex flex-col md:flex-row gap-4 px-6 mt-10">

        <input
          type="text"
          placeholder="Search by title or location..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 p-4 rounded-xl border outline-none shadow"
        />

        <select
          value={priceFilter}
          onChange={(e) => setPriceFilter(e.target.value)}
          className="p-4 rounded-xl border outline-none shadow"
        >
          <option value="">Filter By Price</option>
          <option value="low">Below ₹50 Lakhs</option>
          <option value="medium">₹50 Lakhs - ₹1 Crore</option>
          <option value="high">Above ₹1 Crore</option>
        </select>
      </div>

      {/* PROPERTIES */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-6 mt-6">

        {filteredProperties.length > 0 ? (
          filteredProperties.map((property) => (
            <PropertyCard
              key={property._id}
              property={property}
            />
          ))
        ) : (
          <h2 className="text-2xl font-bold text-center col-span-full">
            No Properties Found
          </h2>
        )}
      </div>

      {/* STATS SECTION */}
      <div className="bg-black text-white mt-20 py-16 px-6">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">

          <div>
            <h1 className="text-5xl font-bold text-orange-500">
              500+
            </h1>

            <p className="text-xl mt-4">
              Premium Properties
            </p>
          </div>

          <div>
            <h1 className="text-5xl font-bold text-orange-500">
              1000+
            </h1>

            <p className="text-xl mt-4">
              Happy Clients
            </p>
          </div>

          <div>
            <h1 className="text-5xl font-bold text-orange-500">
              24/7
            </h1>

            <p className="text-xl mt-4">
              Customer Support
            </p>
          </div>

        </div>
      </div>

    </div>
  );
};

export default Home;