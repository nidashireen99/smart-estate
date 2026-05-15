import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({

    name: "",
    email: "",
    password: "",
    role: "buyer",

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

      await axios.post(

        "https://smart-estate-production.up.railway.app/api/auth/register",

        formData
      );

      alert("Registered Successfully");

      navigate("/login");

    } catch (error) {

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

          Register

        </h1>

        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
          className="w-full border p-4 rounded-xl mb-5"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          className="w-full border p-4 rounded-xl mb-5"
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          className="w-full border p-4 rounded-xl mb-5"
          required
        />

        <select
          name="role"
          onChange={handleChange}
          className="w-full border p-4 rounded-xl mb-5"
        >

          <option value="buyer">

            Buyer

          </option>

          <option value="seller">

            Seller

          </option>

        </select>

        <button
          type="submit"
          className="bg-orange-500 text-white w-full py-4 rounded-xl"
        >

          Register

        </button>

        <p className="mt-5 text-center">

          Already have an account?

          <Link
            to="/login"
            className="text-orange-500 ml-2"
          >

            Login

          </Link>

        </p>

      </form>

    </div>
  );
};

export default Register;