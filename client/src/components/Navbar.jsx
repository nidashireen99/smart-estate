import { Link } from "react-router-dom";

const Navbar = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="bg-white shadow-md px-8 py-5 flex justify-between items-center">

      {/* LOGO */}
      <Link to="/">
        <h1 className="text-3xl font-bold text-orange-500">
          SmartEstate
        </h1>
      </Link>

      {/* MENU */}
      <div className="flex items-center gap-6">

        <Link to="/">
          <button className="font-semibold hover:text-orange-500">
            Home
          </button>
        </Link>

        {user && (
          <>
            <Link to="/my-listings">
              <button className="font-semibold hover:text-orange-500">
                My Listings
              </button>
            </Link>

            <Link to="/add-property">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-xl">
                Add Property
              </button>
            </Link>
          </>
        )}

        {!user ? (
          <>
            <Link to="/login">
              <button className="font-semibold hover:text-orange-500">
                Login
              </button>
            </Link>

            <Link to="/register">
              <button className="bg-black text-white px-5 py-2 rounded-xl">
                Register
              </button>
            </Link>
          </>
        ) : (
          <button
            onClick={() => {
              localStorage.removeItem("user");
              localStorage.removeItem("token");
              window.location.reload();
            }}
            className="bg-red-500 text-white px-5 py-2 rounded-xl"
          >
            Logout
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;