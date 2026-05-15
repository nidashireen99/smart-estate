import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AddProperty from "./pages/AddProperty";
import MyListings from "./pages/MyListings";
import PropertyDetails from "./pages/PropertyDetails";
import Favorites from "./pages/Favorites";

function App() {
  return (
    <Routes>

      {/* HOME */}
      <Route path="/" element={<Home />} />

      {/* AUTH */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* PROPERTY */}
      <Route
        path="/property/:id"
        element={<PropertyDetails />}
      />

      {/* SELLER */}
      <Route
        path="/add-property"
        element={<AddProperty />}
      />

      <Route
        path="/my-listings"
        element={<MyListings />}
      />

      {/* FAVORITES */}
      <Route
        path="/favorites"
        element={<Favorites />}
      />

    </Routes>
  );
}

export default App;