const Stats = () => {
  return (
    <div className="bg-white py-20 px-6">

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-center">

        <div className="shadow-lg rounded-2xl p-10">

          <h1 className="text-5xl font-bold text-orange-500">
            10K+
          </h1>

          <p className="mt-4 text-gray-600 text-lg">
            Properties Listed
          </p>

        </div>

        <div className="shadow-lg rounded-2xl p-10">

          <h1 className="text-5xl font-bold text-orange-500">
            5K+
          </h1>

          <p className="mt-4 text-gray-600 text-lg">
            Happy Clients
          </p>

        </div>

        <div className="shadow-lg rounded-2xl p-10">

          <h1 className="text-5xl font-bold text-orange-500">
            150+
          </h1>

          <p className="mt-4 text-gray-600 text-lg">
            Cities Covered
          </p>

        </div>

        <div className="shadow-lg rounded-2xl p-10">

          <h1 className="text-5xl font-bold text-orange-500">
            24/7
          </h1>

          <p className="mt-4 text-gray-600 text-lg">
            Customer Support
          </p>

        </div>

      </div>

    </div>
  )
}

export default Stats