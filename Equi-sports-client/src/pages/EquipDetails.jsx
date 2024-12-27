import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Details = () => {
  const { id } = useParams(); // Get the ID from the URL
  const [equipment, setEquipment] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEquipment = async () => {
      try {
        const response = await fetch(`https://equi-sports-server-mu.vercel.app/equipments/${id}`);
        const data = await response.json();
        if (data.status) {
          setEquipment(data.data);
        }
      } catch (error) {
        console.error("Failed to fetch equipment details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEquipment();
  }, [id]);

  if (loading) return <div>Loading...</div>;

  if (!equipment)
    return <div className="text-red-500">Equipment not found</div>;

  const {
    image,
    title,
    category,
    description,
    price,
    rating,
    customization,
    time,
    status,
  } = equipment;

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6 mt-10">
      <img
        src={image}
        alt={title}
        className="w-full h-64 object-cover rounded-md"
      />
      <div className="mt-6">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p>
          <strong>Category:</strong> {category}
        </p>
        <p>
          <strong>Description:</strong> {description}
        </p>
        <p>
          <strong>Customization:</strong> {customization}
        </p>
        <p>
          <strong>Processing Time:</strong> {time}
        </p>
        <p>
          <strong>Status:</strong> {status}
        </p>
        <p className="text-xl font-bold mt-4">
          <strong>Price:</strong> ${price}
        </p>
        <div className="flex items-center mt-3">
          <span className="text-yellow-500 text-lg">★ ★ ★ ★ ☆</span>
          <span className="text-gray-600 text-sm ml-2">({rating})</span>
        </div>
      </div>
    </div>
  );
};

export default Details;
