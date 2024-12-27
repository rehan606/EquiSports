import React from 'react';
import { Link,  } from 'react-router-dom';

const EquipCard = ({ equip  }) => {
    
    const { _id, image, title, category, description, price, rating, customization, time, status } = equip
    return (
        <div>

            <div className="max-w-sm mx-auto border bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                {/* Product Image */}
                <img
                    src={image}
                    alt="Product"
                    className="w-full h-48 object-cover"
                />

                {/* Product Details */}
                <div className="p-6 text-center">
                    {/* Title */}
                    <h3 className="text-md  font-ZenDots text-gray-800">
                        {title}
                    </h3>

                    {/* Rating */}
                    <div className="flex  items-center my-3  justify-center">
                        <span className="text-yellow-500 text-lg">★ ★ ★ ★ ☆  </span>
                        <span className="text-gray-600 text-sm ml-2">({rating})</span>
                    </div>

                    {/* Price */}
                    <p className="text-gray-800 font-bold text-xl mb-5">${price}</p>

                    {/* View Details Button */}
                   

                    <Link to={`/equipments/${_id}`}  className="mt-4 w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-orange-500">
                        View Details
                        
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default EquipCard;