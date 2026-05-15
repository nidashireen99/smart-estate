import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

const AddProperty = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    location: "",
    price: "",
    image: "",
    beds: "",
    baths: "",
    area: "",
    description: "",
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
      const user = JSON.parse(localStorage.getItem("user"));

      const res = await API.post(
        "/properties",
        formData,
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );

      alert("Property Added Successfully ✅");

      navigate("/");
    } catch (error) {
      console.log(error);

      alert(
        error.response?.data?.message ||
          "Failed to add property"
      );
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-lg w-full max-w-2xl"
      >
        <h1 className="text-3xl font-bold mb-6 text-center">
          Add Property
        </h1>

        <div className="grid md:grid-cols-2 gap-4">
          <input
            type="text"
            name="title"
            placeholder="Property Title"
            onChange={handleChange}
            className="border p-3 rounded"
            required
          />

          <input
            type="text"
            name="location"
            placeholder="Location"
            onChange={handleChange}
            className="border p-3 rounded"
            required
          />

          <input
            type="number"
            name="price"
            placeholder="Price"
            onChange={handleChange}
            className="border p-3 rounded"
            required
          />

          <input
            type="text"
            name="image"
            placeholder="Image URL"
            onChange={handleChange}
            className="border p-3 rounded"
          />

          <input
            type="number"
            name="beds"
            placeholder="Bedrooms"
            onChange={handleChange}
            className="border p-3 rounded"
          />

          <input
            type="number"
            name="baths"
            placeholder="Bathrooms"
            onChange={handleChange}
            className="border p-3 rounded"
          />

          <input
            type="text"
            name="area"
            placeholder="Area in sqft"
            onChange={handleChange}
            className="border p-3 rounded"
          />
        </div>

        <textarea
          name="description"
          placeholder="Description"
          onChange={handleChange}
          className="border p-3 rounded w-full mt-4"
          rows="4"
        ></textarea>

        <button
          type="submit"
          className="bg-orange-500 text-white px-6 py-3 rounded mt-6 w-full"
        >
          Add Property
        </button>
      </form>
    </div>
  );
};

export default AddProperty;