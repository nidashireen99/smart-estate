import EditProperty from "./pages/EditProperty"
import MyListings from "./pages/MyListings"
import PropertyDetails from "./pages/PropertyDetails"
import AddProperty from "./pages/AddProperty"
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"

import Home from "./pages/Home"
import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard"

import Navbar from "./components/Navbar"
import ProtectedRoute from "./components/ProtectedRoute"

const App = () => {

  return (

    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route
          path="/edit-property/:id"
          element={
           <ProtectedRoute>
            <EditProperty />
           </ProtectedRoute>
          }
        />

        <Route
          path="/my-listings"
          element={
            <ProtectedRoute>
              <MyListings />
            </ProtectedRoute>
          }
        />

        <Route
          path="/property/:id"
          element={<PropertyDetails />}
        />

        <Route
          path="/add-property"
          element={
            <ProtectedRoute>
              <AddProperty />
            </ProtectedRoute>
          }
        />

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>

              <Dashboard />

            </ProtectedRoute>
          }
        />

      </Routes>

    </BrowserRouter>
  )
}

export default App