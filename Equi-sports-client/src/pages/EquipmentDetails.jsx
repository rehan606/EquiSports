import React from 'react';
import { useLoaderData } from 'react-router-dom';

const EquipmentDetails = () => {
    
    const equipment = useLoaderData();
    console.log(equipment);
    

    return (
        <div>
            <div className="w-full md:w-9/12 lg:w-7/12 mx-auto bg-white shadow-md rounded-lg p-6 mt-10">
                {/* Image */}
                <img
                    src={equipment.image}
                    alt={equipment.title}
                    className="w-full h-64 object-cover rounded-md"
                />

                {/* Details */}
                <div className="mt-6">
                    <h1 className="text-2xl font-bold text-gray-800">{equipment.title}</h1>
                    <p className="text-gray-600 mt-2">{equipment.description}</p>

                    {/* Price */}
                    <p className="text-xl text-gray-900 font-semibold mt-4">
                        Price: ${equipment.price}
                    </p>

                    {/* Rating */}
                    <div className="flex items-center mt-3">
                        <span className="text-yellow-500 text-lg">★ ★ ★ ★ ☆</span>
                        <span className="text-gray-600 text-sm ml-2">({equipment.rating})</span>
                    </div>

                    {/* Additional Info */}
                    <p className="text-gray-700 mt-4">
                        <strong>Category:</strong> {equipment.category}
                    </p>
                    <p className="text-gray-700 mt-2">
                        <strong>Customization:</strong> {equipment.customization}
                    </p>
                    <p className="text-gray-700 mt-2">
                        <strong>Processing Time:</strong> {equipment.time}
                    </p>
                    <p className="text-gray-700 mt-2">
                        <strong>Status:</strong> {equipment.status}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default EquipmentDetails;