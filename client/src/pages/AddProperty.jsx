import { useState } from "react";
import axios from "axios";

const AddProperty = () => {
  const [formData, setFormData] = useState({
    title: "",
    location: "",
    price: "",
    beds: "",
    baths: "",
    area: "",
    description: "",
  });

  const [images, setImages] = useState([]);
  const [previewImages, setPreviewImages] = useState([]);
  const [loading, setLoading] = useState(false);

  // HANDLE INPUT CHANGE
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // HANDLE IMAGE UPLOAD
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);

    setImages(files);

    const imagePreviews = files.map((file) =>
      URL.createObjectURL(file)
    );

    setPreviewImages(imagePreviews);
  };

  // HANDLE SUBMIT
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const token = localStorage.getItem("token");

      // TEMP IMAGE LINKS
      // (later you can use Cloudinary)
      const uploadedImages = previewImages;

      const propertyData = {
        ...formData,
        images: uploadedImages,
        image: uploadedImages[0],
      };

      const response = await axios.post(
        "https://smart-estate-production.up.railway.app/api/properties",
        propertyData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log(response.data);

      alert("Property Added Successfully ✅");

      setFormData({
        title: "",
        location: "",
        price: "",
        beds: "",
        baths: "",
        area: "",
        description: "",
      });

      setImages([]);
      setPreviewImages([]);
    } catch (error) {
      console.log(error);

      alert("Failed To Add Property ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-3xl"
      >
        <h1 className="text-4xl font-bold mb-8 text-center">
          Add New Property
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <input
            type="text"
            name="title"
            placeholder="Property Title"
            value={formData.title}
            onChange={handleChange}
            className="border p-3 rounded-lg"
            required
          />

          <input
            type="text"
            name="location"
            placeholder="Location"
            value={formData.location}
            onChange={handleChange}
            className="border p-3 rounded-lg"
            required
          />

          <input
            type="number"
            name="price"
            placeholder="Price"
            value={formData.price}
            onChange={handleChange}
            className="border p-3 rounded-lg"
            required
          />

          <input
            type="number"
            name="beds"
            placeholder="Bedrooms"
            value={formData.beds}
            onChange={handleChange}
            className="border p-3 rounded-lg"
            required
          />

          <input
            type="number"
            name="baths"
            placeholder="Bathrooms"
            value={formData.baths}
            onChange={handleChange}
            className="border p-3 rounded-lg"
            required
          />

          <input
            type="text"
            name="area"
            placeholder="Area in sqft"
            value={formData.area}
            onChange={handleChange}
            className="border p-3 rounded-lg"
            required
          />
        </div>

        <textarea
          name="description"
          placeholder="Property Description"
          value={formData.description}
          onChange={handleChange}
          rows="4"
          className="border p-3 rounded-lg w-full mt-5"
        />

        {/* MULTIPLE IMAGE UPLOAD */}
        <div className="mt-6">
          <label className="font-semibold block mb-2">
            Upload Property Images
          </label>

          <input
            type="file"
            multiple
            accept="image/*"
            onChange={handleImageChange}
            className="w-full"
          />
        </div>

        {/* IMAGE PREVIEW */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          {previewImages.map((img, index) => (
            <img
              key={index}
              src={img}
              alt="preview"
              className="h-32 w-full object-cover rounded-xl shadow"
            />
          ))}
        </div>

        <button
          type="submit"
          disabled={loading}
          className="bg-black text-white w-full py-4 rounded-xl mt-8 hover:bg-gray-800 transition"
        >
          {loading ? "Adding Property..." : "Add Property"}
        </button>
      </form>
    </div>
  );
};

export default AddProperty;