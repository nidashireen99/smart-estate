import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/register";
import Dashboard from "./pages/Dashboard";
import Favorites from "./pages/Favorites";
import MyListings from "./pages/MyListings";
import PropertyDetails from "./pages/PropertyDetails";
import EditProperty from "./pages/EditProperty";
import AddProperty from "./pages/AddProperty";

function App() {

  return (

    <Routes>

      <Route
        path="/"
        element={<Home />}
      />

      <Route
        path="/login"
        element={<Login />}
      />

      <Route
        path="/register"
        element={<Register />}
      />

      <Route
        path="/dashboard"
        element={<Dashboard />}
      />

      <Route
        path="/favorites"
        element={<Favorites />}
      />

      <Route
        path="/my-listings"
        element={<MyListings />}
      />

      <Route
        path="/property/:id"
        element={<PropertyDetails />}
      />

      <Route
        path="/edit-property/:id"
        element={<EditProperty />}
      />

      <Route
        path="/add-property"
        element={<AddProperty />}
      />

    </Routes>
  );
}

export default App;