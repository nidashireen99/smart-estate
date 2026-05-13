const Hero = () => {
  return (
    <div className="h-[90vh] bg-black text-white flex flex-col justify-center items-center text-center px-4">
      
      <h1 className="text-6xl font-bold leading-tight">
        Find Your Dream Property
      </h1>

      <p className="mt-6 text-xl text-gray-300 max-w-2xl">
        Buy, rent, and invest in premium properties across India.
      </p>

      <button className="mt-8 bg-orange-500 px-8 py-4 rounded-xl text-lg hover:bg-orange-600 transition">
        Explore Properties
      </button>

    </div>
  )
}

export default Hero