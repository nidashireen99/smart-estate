import { useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const AddProperty = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    location: "",
    price: "",
    beds: "",
    baths: "",
    area: "",
    description: "",
    sellerName: "",
    sellerPhone: "",
  });

  const [images, setImages] = useState([]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (e) => {
    setImages(e.target.files);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");

      const data = new FormData();

      Object.keys(formData).forEach((key) => {
        data.append(key, formData[key]);
      });

      for (let i = 0; i < images.length; i++) {
        data.append("images", images[i]);
      }

      await API.post(
        "https://smart-estate-production.up.railway.app/api/properties",
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      toast.success("Property Added Successfully 🎉");

      navigate("/");
    } catch (error) {
      console.log(error);

      toast.error("Failed to Add Property");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-10">

      <form
        onSubmit={handleSubmit}
        className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-3xl"
      >

        <h1 className="text-4xl font-bold text-center mb-8">
          Add Property
        </h1>

        <div className="grid md:grid-cols-2 gap-5">

          <input
            type="text"
            name="title"
            placeholder="Property Title"
            onChange={handleChange}
            className="border p-4 rounded-xl"
            required
          />

          <input
            type="text"
            name="location"
            placeholder="Location"
            onChange={handleChange}
            className="border p-4 rounded-xl"
            required
          />

          <input
            type="number"
            name="price"
            placeholder="Price"
            onChange={handleChange}
            className="border p-4 rounded-xl"
            required
          />

          <input
            type="number"
            name="beds"
            placeholder="Bedrooms"
            onChange={handleChange}
            className="border p-4 rounded-xl"
          />

          <input
            type="number"
            name="baths"
            placeholder="Bathrooms"
            onChange={handleChange}
            className="border p-4 rounded-xl"
          />

          <input
            type="text"
            name="area"
            placeholder="Area"
            onChange={handleChange}
            className="border p-4 rounded-xl"
          />

          <input
            type="text"
            name="sellerName"
            placeholder="Seller Name"
            onChange={handleChange}
            className="border p-4 rounded-xl"
          />

          <input
            type="text"
            name="sellerPhone"
            placeholder="Seller Phone"
            onChange={handleChange}
            className="border p-4 rounded-xl"
          />

        </div>

        <textarea
          name="description"
          placeholder="Description"
          onChange={handleChange}
          className="border p-4 rounded-xl w-full mt-5 h-32"
        />

        <div className="mt-5">

          <label className="font-semibold block mb-3">
            Upload Multiple Images
          </label>

          <input
            type="file"
            multiple
            accept="image/*"
            onChange={handleImageChange}
            className="border p-3 rounded-xl w-full"
          />

        </div>

        <button
          type="submit"
          className="bg-orange-500 text-white w-full py-4 rounded-xl mt-6"
        >
          Add Property
        </button>

      </form>

    </div>
  );
};

export default AddProperty;