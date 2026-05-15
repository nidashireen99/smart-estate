import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import toast from "react-hot-toast";

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "buyer",
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
        "https://smart-estate-production.up.railway.app/api/auth/register",
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

You have successfully registered as a ${response.data.user.role}.

Thanks for joining SmartEstate 🏡

Explore properties,
connect with trusted sellers,
and find your perfect home today.`,
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

      toast.error("Registration Failed ❌");
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
          Register
        </h1>

        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border p-4 rounded-xl mb-5"
          required
        />

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
          className="w-full border p-4 rounded-xl mb-5"
          required
        />

        {/* ROLE */}
        <select
          name="role"
          value={formData.role}
          onChange={handleChange}
          className="w-full border p-4 rounded-xl mb-6"
        >
          <option value="buyer">Buyer</option>
          <option value="seller">Seller</option>
        </select>

        <button
          type="submit"
          disabled={loading}
          className="bg-orange-500 hover:bg-orange-600 text-white w-full py-4 rounded-xl text-lg font-semibold"
        >
          {loading ? "Registering..." : "Register"}
        </button>

        <p className="text-center mt-6">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-orange-500 font-semibold"
          >
            Login
          </Link>
        </p>

      </form>
    </div>
  );
};

export default Register;