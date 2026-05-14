import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Buy from "./pages/Buy";
import Rent from "./pages/Rent";
import Favorites from "./pages/Favorites";
import MyListings from "./pages/MyListings";
import PropertyDetails from "./pages/PropertyDetails";
import EditProperty from "./pages/EditProperty";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/buy" element={<Buy />} />
      <Route path="/rent" element={<Rent />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/my-listings" element={<MyListings />} />
      <Route path="/property/:id" element={<PropertyDetails />} />
      <Route path="/edit-property/:id" element={<EditProperty />} />
    </Routes>
  );
}

export default App;