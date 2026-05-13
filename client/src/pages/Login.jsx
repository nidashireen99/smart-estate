import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const Login = () => {

  const navigate = useNavigate()

  const [isLogin, setIsLogin] =
    useState(true)

  const [formData, setFormData] =
    useState({
      name: "",
      email: "",
      password: "",
      role: "buyer",
    })

  const handleChange = (e) => {

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

        const url = isLogin
          ? "http://localhost:8000/api/auth/login"
          : "http://localhost:8000/api/auth/register"

        const response =
          await axios.post(
            url,
            formData
          )

        // SAVE TOKEN

        localStorage.setItem(
          "token",
          response.data.token
        )

        // SAVE USER

        localStorage.setItem(
          "user",
          JSON.stringify(
            response.data.user
          )
        )

        alert(
          isLogin
            ? "Login Successful"
            : "Registration Successful"
        )

        navigate("/")

      } catch (error) {

        console.log(error)

        alert(
          error.response?.data?.message ||
          "Something went wrong"
        )
      }
    }

  return (

    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-6">

      <div className="bg-white shadow-2xl rounded-3xl w-full max-w-md p-10">

        <h1 className="text-4xl font-bold text-center mb-8">

          {
            isLogin
              ? "Welcome Back"
              : "Create Account"
          }

        </h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >

          {
            !isLogin && (

              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border p-4 rounded-xl"
              />

            )
          }

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full border p-4 rounded-xl"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full border p-4 rounded-xl"
          />

          {/* ROLE SELECT */}

          {
            !isLogin && (

              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="w-full border p-4 rounded-xl"
              >

                <option value="buyer">
                  Buyer
                </option>

                <option value="seller">
                  Seller
                </option>

              </select>

            )
          }

          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-4 rounded-xl hover:bg-orange-600 transition"
          >

            {
              isLogin
                ? "Login"
                : "Register"
            }

          </button>

        </form>

        <p className="text-center mt-6">

          {
            isLogin
              ? "Don't have an account?"
              : "Already have an account?"
          }

          <button
            onClick={() =>
              setIsLogin(!isLogin)
            }
            className="text-orange-500 ml-2 font-bold"
          >

            {
              isLogin
                ? "Register"
                : "Login"
            }

          </button>

        </p>

      </div>

    </div>
  )
}

export default Login