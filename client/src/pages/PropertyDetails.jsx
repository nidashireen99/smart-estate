import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const PropertyDetails = () => {

  const { id } = useParams();

  const [property, setProperty] = useState(null);

  useEffect(() => {

    const fetchProperty = async () => {

      try {

        const response = await axios.get(
          `https://smart-estate-production.up.railway.app/api/properties/${id}`
        );

        setProperty(response.data);

      } catch (error) {

        console.log(error);
      }
    };

    fetchProperty();

  }, [id]);

  if (!property) {

    return (

      <h1 className="text-center text-3xl mt-20">

        Loading...
      </h1>
    );
  }

  return (

    <div className="p-10">

      <img
        src={property.image}
        alt=""
        className="w-full h-[500px] object-cover rounded-2xl"
      />

      <h1 className="text-5xl font-bold mt-10">

        {property.title}

      </h1>

      <p className="text-2xl text-gray-600 mt-4">

        📍 {property.location}

      </p>

      <h2 className="text-4xl text-orange-500 font-bold mt-6">

        ₹ {property.price}

      </h2>

      <div className="mt-10 bg-gray-100 p-6 rounded-2xl">

        <h2 className="text-3xl font-bold mb-5">

          Seller Details
        </h2>

        <p className="text-xl">

          👤 {property.sellerName}
        </p>

        <p className="text-xl mt-3">

          📞 {property.sellerPhone}
        </p>

      </div>

    </div>
  );
};

export default PropertyDetails;