import { Link } from "react-router-dom";

const PropertyCard = ({ property }) => {

  return (

    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">

      <img
        src={property.image}
        alt=""
        className="h-64 w-full object-cover"
      />

      <div className="p-5">

        <h1 className="text-2xl font-bold">

          {property.title}

        </h1>

        <p className="text-gray-500 mt-2">

          📍 {property.location}

        </p>

        <h2 className="text-orange-500 text-3xl font-bold mt-4">

          ₹ {property.price}
        </h2>

        <Link to={`/property/${property._id}`}>

          <button className="bg-orange-500 text-white px-6 py-3 rounded-xl mt-5 w-full">

            View Details

          </button>

        </Link>

      </div>

    </div>
  );
};

export default PropertyCard;