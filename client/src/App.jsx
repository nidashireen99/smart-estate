import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import AddProperty from "./pages/AddProperty";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/add-property" element={<AddProperty />} />
    </Routes>
  );
}

export default App;