import { useState }
from "react"

import axios
from "axios"

import {
  Link,
  useNavigate,
} from "react-router-dom"

import toast
from "react-hot-toast"

const Login = () => {

  const navigate =
    useNavigate()

  const [formData,
    setFormData] =
      useState({

        email: "",

        password: "",
      })

  const handleChange =
    (e) => {

      setFormData({

        ...formData,

        [e.target.name]:
          e.target.value,
      })
    }

  const handleSubmit =
    async (e) => {

      e.preventDefault()

      try {

        const response =
          await axios.post(

            "http://localhost:8000/api/auth/login",

            formData
          )

        localStorage.setItem(

          "token",

          response.data.token
        )

        localStorage.setItem(

          "user",

          JSON.stringify(
            response.data.user
          )
        )

        // POPUP

        toast.success(

          `Welcome ${response.data.user.name} 🎉

Thanks for visiting SmartEstate.

Find your dream property,
connect with sellers,
and explore premium homes!`,

          {
            duration: 5000,
          }
        )

        navigate("/")

        window.location.reload()

      } catch (error) {

        console.log(error)

        alert(
          "Invalid Credentials"
        )
      }
    }

  return (

    <div className="min-h-screen flex justify-center items-center bg-gray-100">

      <form
        onSubmit={handleSubmit}
        className="bg-white p-10 rounded-3xl shadow-xl w-full max-w-md"
      >

        <h1 className="text-5xl font-bold text-center mb-10">

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
            className="bg-orange-500 text-white py-4 rounded-xl text-lg hover:bg-orange-600"
          >

            Login

          </button>

        </div>

        <p className="text-center mt-6">

          Don't have an account?

          <Link
            to="/register"
            className="text-orange-500 font-bold ml-2"
          >

            Register

          </Link>

        </p>

      </form>

    </div>
  )
}

export default Login