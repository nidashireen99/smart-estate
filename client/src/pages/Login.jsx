import { useState } from "react";
import API from "../services/api";
import { useNavigate, Link } from "react-router-dom";
import toast from "react-hot-toast";

const Login = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({

    email: "",
    password: "",

  });

  const handleChange = (e) => {

    setFormData({

      ...formData,
      [e.target.name]: e.target.value,

    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const response = await API.post(

        "https://smart-estate-production.up.railway.app/api/auth/login",

        formData
      );

      // SAVE USER DATA

      localStorage.setItem(

        "token",
        response.data.token
      );

      localStorage.setItem(

        "user",

        JSON.stringify(
          response.data.user
        )
      );

      // BEAUTIFUL POPUP

      toast.success(

        `Welcome ${response.data.user.name} 🎉

Thanks for visiting SmartEstate.

Explore premium properties,
connect with trusted sellers,
and discover your dream home today 🏡`,

        {
          duration: 8000,
        }
      );

      // NAVIGATE

      navigate("/");

    } catch (error) {

      toast.error(

        "Invalid email or password"
      );

      console.log(error);
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

        <div className="flex flex-col gap-5">

          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            className="border p-4 rounded-xl"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            className="border p-4 rounded-xl"
            required
          />

          <button
            type="submit"
            className="bg-orange-500 text-white py-4 rounded-xl hover:bg-orange-600"
          >

            Login

          </button>

        </div>

        <p className="text-center mt-6">

          Don't have an account?

          <Link
            to="/register"
            className="text-orange-500 font-semibold ml-2"
          >

            Register

          </Link>

        </p>

      </form>

    </div>
  );
};

export default Login;