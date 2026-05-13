const Dashboard = () => {

  const user =
    JSON.parse(
      localStorage.getItem("user")
    )

  return (

    <div className="min-h-screen bg-gray-100 p-10">

      <h1 className="text-4xl font-bold mb-6">

        Seller Dashboard

      </h1>

      <div className="bg-white p-8 rounded-2xl shadow-lg">

        <h2 className="text-2xl font-bold mb-4">

          Welcome, {user.name}

        </h2>

        <p className="text-gray-600">

          Email: {user.email}

        </p>

        <p className="text-gray-600 mt-2">

          Role: {user.role}

        </p>

      </div>

    </div>
  )
}

export default Dashboard