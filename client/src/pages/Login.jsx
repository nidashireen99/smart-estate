import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import toast from "react-hot-toast";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await axios.post(
        "https://smart-estate-production.up.railway.app/api/auth/login",
        formData
      );

      // SAVE TOKEN
      localStorage.setItem("token", response.data.token);

      // SAVE USER
      localStorage.setItem(
        "user",
        JSON.stringify(response.data.user)
      );

      // POPUP
      toast.success(
        `Welcome ${response.data.user.name} 🎉

Thanks for visiting SmartEstate.

Explore premium properties,
connect with trusted sellers,
and discover your dream home today 🏡`,
        {
          duration: 15000,
        }
      );

      // REDIRECT
      navigate("/");

      // REFRESH NAVBAR
      window.location.reload();

    } catch (error) {
      console.log(error);

      toast.error("Invalid Email or Password ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">

      <form
        onSubmit={handleSubmit}
        className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-md"
      >

        <h1 className="text-4xl font-bold text-center mb-8">
          Login
        </h1>

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full border p-4 rounded-xl mb-5"
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={formData.password}
          onChange={handleChange}
          className="w-full border p-4 rounded-xl mb-6"
          required
        />

        <button
          type="submit"
          disabled={loading}
          className="bg-orange-500 hover:bg-orange-600 text-white w-full py-4 rounded-xl text-lg font-semibold"
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        <p className="text-center mt-6">
          Don’t have an account?{" "}
          <Link
            to="/register"
            className="text-orange-500 font-semibold"
          >
            Register
          </Link>
        </p>

      </form>
    </div>
  );
};

export default Login;