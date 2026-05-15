import { useEffect, useState } from "react";
import axios from "axios";
import PropertyCard from "../components/PropertyCard";

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

    // SEARCH BY LOCATION OR TITLE
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

    // PRICE FILTER
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

      {/* HERO SECTION */}
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

        {/* SEARCH BAR */}
        <input
          type="text"
          placeholder="Search by title or location..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 p-4 rounded-xl border outline-none shadow"
        />

        {/* FILTER */}
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

      {/* PROPERTY SECTION */}
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
    </div>
  );
};

export default Home;