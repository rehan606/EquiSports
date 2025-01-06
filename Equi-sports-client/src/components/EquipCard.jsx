import React from 'react';
import { Link, useNavigate,  } from 'react-router-dom';

const EquipCard = ({ equip  }) => {

    // const equipment = useLoaderData();
    const navigate = useNavigate();

    const handleViewDetails = (equip) => {
        navigate('/details', { state: { equipment: equip } });
    };
    
    const { _id, image, title, category, description, price, rating, customization, time, status } = equip
    return (
        <div>

            <div className="max-w-sm mx-auto border bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg  hover:scale-110 ease-in-out duration-300">
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
                    <div className="flex  items-center   justify-center">
                        <span className="text-yellow-500 text-lg">★ ★ ★ ★ ☆  </span>
                        <span className="text-gray-600 text-sm ml-2">({rating})</span>
                    </div>

                    {/* Price */}
                    <p className="text-gray-800 font-bold text-xl ">${price}</p>

                    {/* View Details Button */}
                   
                    <button onClick={() => handleViewDetails(equip)} className="mt-4 w-full bg-[#0A14F5] text-white hover:bg-[#000a50] py-2 px-4 rounded-md ">
                                    View Details
                                </button>
                </div>
            </div>
        </div>
    );
};

export default EquipCard;