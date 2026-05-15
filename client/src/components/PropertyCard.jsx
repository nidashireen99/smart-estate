import { Link } from "react-router-dom";

const PropertyCard = ({ property }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300">

      {/* IMAGE */}
      <img
        src={
          property.images && property.images.length > 0
            ? property.images[0]
            : property.image
        }
        alt={property.title}
        className="w-full h-64 object-cover"
      />

      {/* DETAILS */}
      <div className="p-5">

        <h2 className="text-3xl font-bold mb-2">
          {property.title}
        </h2>

        <p className="text-gray-500 mb-4">
          📍 {property.location}
        </p>

        <p className="text-orange-500 text-3xl font-bold mb-6">
          ₹ {property.price}
        </p>

        <div className="flex justify-between text-gray-600 mb-6">
          <span>🛏 {property.beds} Beds</span>
          <span>🛁 {property.baths} Baths</span>
          <span>📐 {property.area} sqft</span>
        </div>

        <Link to={`/property/${property._id}`}>
          <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl font-semibold">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PropertyCard;