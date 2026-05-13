const Footer = () => {
  return (
    <footer className="bg-black text-white py-16 px-6">

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

        <div>
          <h1 className="text-3xl font-bold text-orange-500">
            SmartEstate
          </h1>

          <p className="mt-4 text-gray-400">
            Buy, sell and rent premium properties across India.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">
            Quick Links
          </h2>

          <ul className="space-y-3 text-gray-400">
            <li>Home</li>
            <li>Buy</li>
            <li>Rent</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">
            Locations
          </h2>

          <ul className="space-y-3 text-gray-400">
            <li>Bangalore</li>
            <li>Mumbai</li>
            <li>Hyderabad</li>
            <li>Delhi</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">
            Contact
          </h2>

          <ul className="space-y-3 text-gray-400">
            <li>Email: info@smartestate.com</li>
            <li>Phone: +91 9876543210</li>
            <li>India</li>
          </ul>
        </div>

      </div>

      <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500">
        © 2026 SmartEstate. All rights reserved.
      </div>

    </footer>
  )
}

export default Footer