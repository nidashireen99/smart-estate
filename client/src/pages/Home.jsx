import Navbar from "../components/Navbar";
import PropertyCard from "../components/PropertyCard"
import properties  from "../data/properties";

const Home = () => {

  return (

    <div className="bg-gray-100 min-h-screen">
      <Navbar />

      {/* HERO */}

      <div className="bg-black text-white py-24 text-center">

        <h1 className="text-6xl font-bold mb-6">

          Find Your Dream Home

        </h1>

        <p className="text-xl text-gray-300 mb-8">

          Buy, Sell & Rent Properties Easily

        </p>

        <button className="bg-orange-500 px-8 py-4 rounded-xl text-xl">

          Explore Properties

        </button>

      </div>

      {/* PROPERTIES */}

      <div className="p-10">

        <h1 className="text-4xl font-bold text-center mb-10">

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

      {/* STATS */}

      <div className="bg-white py-20 px-10">

        <div className="grid md:grid-cols-4 gap-8 text-center">

          <div className="shadow-lg p-8 rounded-2xl">

            <h1 className="text-5xl font-bold text-orange-500">

              10K+

            </h1>

            <p className="mt-3 text-gray-600">

              Properties

            </p>

          </div>

          <div className="shadow-lg p-8 rounded-2xl">

            <h1 className="text-5xl font-bold text-orange-500">

              5K+

            </h1>

            <p className="mt-3 text-gray-600">

              Customers

            </p>

          </div>

          <div className="shadow-lg p-8 rounded-2xl">

            <h1 className="text-5xl font-bold text-orange-500">

              100+

            </h1>

            <p className="mt-3 text-gray-600">

              Cities

            </p>

          </div>

          <div className="shadow-lg p-8 rounded-2xl">

            <h1 className="text-5xl font-bold text-orange-500">

              24/7

            </h1>

            <p className="mt-3 text-gray-600">

              Support

            </p>

          </div>

        </div>

      </div>

    </div>
  )
}

export default Home