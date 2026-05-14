import { useParams } from "react-router-dom"
import properties from "../data/properties";

const PropertyDetails = () => {

  const { id } = useParams()

  const property =
    properties.find(
      (item) =>
        item.id === Number(id)
    )

  if (!property) {
    return (
      <h1 className="text-center text-4xl mt-20">
        Property Not Found
      </h1>
    )
  }

  return (

    <div className="min-h-screen bg-gray-100 p-10">

      <div className="max-w-5xl mx-auto bg-white rounded-3xl overflow-hidden shadow-xl">

        <img
          src={property.image}
          alt=""
          className="w-full h-[500px] object-cover"
        />

        <div className="p-10">

          <h1 className="text-5xl font-bold mb-5">
            {property.title}
          </h1>

          <p className="text-2xl text-orange-500 font-bold mb-5">
            ₹ {property.price}
          </p>

          <p className="text-gray-600 text-lg mb-4">
            📍 {property.location}
          </p>

          <p className="text-gray-600 text-lg mb-6">
            🏠 {property.exactAddress}
          </p>

          <p className="text-lg leading-8 mb-10">
            {property.description}
          </p>

          <div className="bg-gray-100 p-8 rounded-2xl">

            <h2 className="text-3xl font-bold mb-5">
              Contact Seller
            </h2>

            <p className="mb-3">
              👤 {property.sellerName}
            </p>

            <p className="mb-3">
              📧 {property.sellerEmail}
            </p>

            <p className="mb-3">
              📞 {property.sellerPhone}
            </p>

          </div>

        </div>

      </div>

    </div>
  )
}

export default PropertyDetails