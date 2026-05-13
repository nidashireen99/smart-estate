import { Link }
from "react-router-dom"

const Navbar = () => {

  const user =
    JSON.parse(
      localStorage.getItem("user")
    )

  const logout = () => {

    localStorage.removeItem(
      "token"
    )

    localStorage.removeItem(
      "user"
    )

    window.location.reload()
  }

  return (

    <nav className="bg-white shadow-md px-8 py-4 flex justify-between items-center">

      <Link
        to="/"
        className="text-3xl font-bold text-orange-500"
      >
        SmartEstate
      </Link>

      <div className="flex gap-5 items-center">

        <Link to="/">
          Home
        </Link>

        {/* SELLER ONLY */}

        {
          user?.role ===
          "seller" && (

            <>
              <Link
                to="/add-property"
                className="font-semibold"
              >
                Add Property
              </Link>

              <Link
                to="/my-listings"
                className="font-semibold"
              >
                My Listings
              </Link>
            </>
          )
        }

        {
          user ? (

            <>
              <span className="font-bold text-orange-500">

                {user.name}

              </span>

              <span className="text-sm bg-gray-200 px-3 py-1 rounded-full">

                {user.role}

              </span>

              <button
                onClick={logout}
                className="bg-red-500 text-white px-4 py-2 rounded-xl"
              >
                Logout
              </button>
            </>

          ) : (

            <Link
              to="/login"
              className="bg-orange-500 text-white px-5 py-2 rounded-xl"
            >
              Login
            </Link>

          )
        }

      </div>

    </nav>
  )
}

export default Navbar