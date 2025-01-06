import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import { AuthContext } from "../providers/AuthProvider";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Footer from "../components/Footer";

const AddEquipment = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleAddEquipment = (e) => {
    e.preventDefault();

    const form = e.target;
    const image = form.image.value;
    const title = form.title.value;
    const category = form.category.value;
    const description = form.description.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const customization = form.customization.value;
    const time = form.time.value;
    const status = form.status.value;

    const newEquipment = {
      image,
      title,
      category,
      description,
      price,
      rating,
      customization,
      time,
      status,
      userName: user?.displayName,
      userEmail: user?.email,
    };

    console.log(newEquipment);

    fetch("https://equi-sports-server-mu.vercel.app/equipments", {
    // fetch("http://localhost:5000/equipments", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newEquipment),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to save equipment");
        }
        return res.json();
      })
      .then((data) => {
        console.log("Response Data:", data);
        if (data.insertedId) {
          Swal.fire({
            title: "Congratulations!",
            text: "Equipment added Successfully!",
            icon: "success",
          });
          form.reset("");
          navigate("/myEquipments");
        } else {
          Swal.fire({
            title: "Error!",
            text: "Failed to add equipment!",
            icon: "error",
          });
        }
      })
      .catch((error) => {
        console.error("Error:", error.message);
        Swal.fire({
          title: "Error!",
          text: "Something went wrong! Please try again.",
          icon: "error",
        });
      });
  };

  return (
    <div>
      <header>
        <Navbar></Navbar>
      </header>

      <div className="bg-gray-100 p-6  min-h-screen flex justify-center items-center">
        <div className="w-full md:w-9/12 lg:w-6/12 bg-white shadow-lg rounded-lg  p-8">
          <h1 className="text-2xl font-bold mb-6 text-gray-800 font-ZenDots text-center">
            Add Equipment
          </h1>
          <hr />
          <form onSubmit={handleAddEquipment} className="space-y-6 mt-4">
            {/* Row 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="image"
                  className="block font-medium text-gray-700"
                >
                  Image Url
                </label>
                <input
                  type="text"
                  name="image"
                  id="image"
                  placeholder="Enter Image ULR"
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label
                  htmlFor="itemName"
                  className="block font-medium text-gray-700"
                >
                  Item Name
                </label>
                <input
                  type="text"
                  name="title"
                  id="itemName"
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  placeholder="Enter item name"
                />
              </div>
            </div>
            {/* Row 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div className="w-full">
                <label
                  for="category"
                  class="block text-md font-medium text-gray-700 mb-2"
                >
                  Select a Category
                </label>
                <select
                  id="category"
                  name="category"
                  className="block w-full py-2 rounded-md border shadow-sm focus:border-indigo-500 focus:ring-indigo-500 "
                >
                  <option value="">Choose a category</option>
                  <option value="cricket">Cricket</option>
                  <option value="football">Football</option>
                  <option value="hockey">Hockey</option>
                  <option value="apparels">Apparels</option>
                  <option value="shoes">Shoes</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <div>
                  <label
                    htmlFor="stockStatus"
                    className="block font-medium text-gray-700"
                  >
                    Stock Status
                  </label>
                  <input
                    type="number"
                    name="status"
                    id="stockStatus"
                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    placeholder="Enter stock quantity"
                  />
                </div>
              </div>
            </div>
            {/* Row 3 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="price"
                  className="block font-medium text-gray-700"
                >
                  Price
                </label>
                <input
                  type="number"
                  name="price"
                  id="price"
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  placeholder="Enter price"
                />
              </div>

              <div>
                <label
                  htmlFor="rating"
                  className="block font-medium text-gray-700"
                >
                  Rating
                </label>
                <input
                  type="number"
                  name="rating"
                  id="rating"
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  placeholder="Enter rating"
                />
              </div>
            </div>
            {/* Row 4 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="customization"
                  className="block font-medium text-gray-700"
                >
                  Customization
                </label>
                <input
                  type="text"
                  name="customization"
                  id="customization"
                  className="mt-1 p-2 border block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  placeholder="Enter customization options"
                />
              </div>
              <div>
                <label
                  htmlFor="processingTime"
                  className="block font-medium text-gray-700"
                >
                  Processing Time
                </label>
                <input
                  type="time"
                  name="time"
                  id="processingTime"
                  className="mt-1 p-2 border block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  placeholder="Enter processing time"
                />
              </div>
            </div>
            {/* Row 5 */}
            <div className="grid grid-cols-1  gap-2">
              <label
                htmlFor="description"
                className="block font-medium text-gray-700"
              >
                Description
              </label>
              <textarea
                id="description"
                name="description"
                className="mt-1 p-2 border block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                placeholder="Enter description"
                rows="3"
              ></textarea>
            </div>

            {/* Row 6 */}
            <div className="grid grid-cols-1 md:grid-cols-2  gap-6">
              <div>
                <label
                  htmlFor="description"
                  className="block font-medium text-gray-700"
                >
                  User Name
                </label>
                <p className="text-green-500 border p-2">{user?.displayName}</p>
              </div>
              <div>
                <label
                  htmlFor="description"
                  className="block font-medium text-gray-700"
                >
                  User Email
                </label>
                <p className="text-green-500 border p-2">{user?.email}</p>
              </div>
            </div>
            {/* Submit Button */}
            <div className="text-right">
              <button
                type="submit"
                className="bg-indigo-500 text-white font-bold py-2 px-4 rounded hover:bg-indigo-600"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default AddEquipment;
