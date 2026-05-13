import properties
from "../data/properties"

import PropertyCard
from "../components/PropertyCard"

const Home = () => {

  return (

    <div>

      {/* HERO SECTION */}

      <div className="bg-black text-white min-h-screen flex flex-col justify-center items-center text-center px-5">

        <h1 className="text-6xl font-bold mb-6">

          Find Your Dream Property

        </h1>

        <p className="text-2xl text-gray-300 mb-8">

          Buy, rent, and invest in premium properties across India.

        </p>

        <button className="bg-orange-500 px-8 py-4 rounded-xl text-xl hover:bg-orange-600">

          Explore Properties

        </button>

      </div>

      {/* STATS SECTION */}

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-10 bg-white text-center">

        <div className="shadow-lg rounded-2xl p-6">

          <h1 className="text-4xl font-bold text-orange-500">

            10K+

          </h1>

          <p className="mt-2 text-gray-600">

            Properties

          </p>

        </div>

        <div className="shadow-lg rounded-2xl p-6">

          <h1 className="text-4xl font-bold text-orange-500">

            5K+

          </h1>

          <p className="mt-2 text-gray-600">

            Happy Customers

          </p>

        </div>

        <div className="shadow-lg rounded-2xl p-6">

          <h1 className="text-4xl font-bold text-orange-500">

            100+

          </h1>

          <p className="mt-2 text-gray-600">

            Cities Covered

          </p>

        </div>

        <div className="shadow-lg rounded-2xl p-6">

          <h1 className="text-4xl font-bold text-orange-500">

            24/7

          </h1>

          <p className="mt-2 text-gray-600">

            Support

          </p>

        </div>

      </div>

      {/* PROPERTY SECTION */}

      <div className="p-10 bg-gray-100">

        <h1 className="text-4xl font-bold mb-10 text-center">

          Featured Properties

        </h1>

        <div className="grid md:grid-cols-3 gap-8">

          {properties.map((property) => (

            <PropertyCard

              key={property.id}

              property={property}

            />
          ))}

        </div>

      </div>

    </div>
  )
}

export default Home