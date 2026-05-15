import { useEffect, useState } from "react";
import API from "../services/api";
import PropertyCard from "../components/PropertyCard";

const Home = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetchProperties();
  }, []);

  const fetchProperties = async () => {
    try {
      const res = await API.get("/properties");
      setProperties(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* HERO */}
      <div className="bg-black text-white p-10 rounded-xl mb-10 text-center">
        <h1 className="text-5xl font-bold mb-4">
          Find Your Dream Home
        </h1>

        <p className="text-gray-300 text-lg">
          Buy, Sell & Rent Properties Easily
        </p>
      </div>

      {/* PROPERTY GRID */}
      <div className="grid md:grid-cols-3 gap-6">
        {properties.map((property) => (
          <PropertyCard
            key={property._id}
            property={property}
          />
        ))}
      </div>

      {/* STATS */}
      <div className="bg-white mt-16 rounded-xl shadow-md p-10 grid md:grid-cols-4 gap-6 text-center">
        <div>
          <h1 className="text-3xl font-bold text-orange-500">
            10K+
          </h1>
          <p>Properties Listed</p>
        </div>

        <div>
          <h1 className="text-3xl font-bold text-orange-500">
            5K+
          </h1>
          <p>Happy Buyers</p>
        </div>

        <div>
          <h1 className="text-3xl font-bold text-orange-500">
            2K+
          </h1>
          <p>Trusted Sellers</p>
        </div>

        <div>
          <h1 className="text-3xl font-bold text-orange-500">
            24/7
          </h1>
          <p>Customer Support</p>
        </div>
      </div>
    </div>
  );
};

export default Home;