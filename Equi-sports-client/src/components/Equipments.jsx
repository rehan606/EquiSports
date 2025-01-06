import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import EquipCard from './EquipCard';
import { FaSortAmountDownAlt } from 'react-icons/fa';

const Equipments = () => {
    const loadedData = useLoaderData();

    // State for Equipments
    const [equipments, setEquipments] = useState(loadedData);
    // const [equipments, setEquipments] = useState(Array.isArray(loadedData) ? loadedData : []);

    // Sort Handler
    const handleSortByPrice = () => {
        const sortedData = [...equipments].sort((a, b) => a.price - b.price); // Price Ascending Order
        setEquipments(sortedData);
    };

    return (
        <div className='py-20 bg-gray-50'>
            <div className='w-11/12 mx-auto'>
                {/* Section Title */}
                <div className="mb-10 text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#000A50] font-ZenDots pb-1">
                        Equipments
                    </h2>
                    <p className='text-gray-500 font-ZenDots'>Collect your Favourite Equipments</p>


                </div>
                <div className='flex justify-end mb-10 border-t'>
                    {/* Sort Button */}
                    <button
                        onClick={handleSortByPrice}
                        className="mt-4 bg-[#0A14F5] hover:bg-gray-600 text-white py-2 px-4 flex items-center gap-2"
                    >
                        Sort by Price <FaSortAmountDownAlt />
                    </button>
                </div>
            </div>

            {/* Equipments Display */}
             <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5 gap-6">
                 {equipments.slice(0, 8).map((equip) => (
                     <EquipCard key={equip._id} equip={equip}></EquipCard>
                 ))}
            </div>

            
            
            {/* <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {Array.isArray(equipments) && equipments.length > 0 ? (
                    equipments.slice(0, 8).map((equip) => (
                        <EquipCard key={equip._id} equip={equip}></EquipCard>
                    ))
                ) : (
                    <p>No data available to show.</p>
                )}
            </div> */}
           
            
        </div>
    );
};

export default Equipments;
