
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import { FaStar } from 'react-icons/fa6';
import Footer from './Footer';

const AllEquipments = () => {

    // const equipment = useLoaderData();
    const navigate = useNavigate();

    const handleViewDetails = (equip) => {
        navigate('/details', { state: { equipment: equip } });
    };

    const equipment = useLoaderData()
    const { _id, image, title, category, description, price, rating, customization, time, status } = equipment
    return (
        <div>

            <header>
                <Navbar></Navbar>
            </header>

            <div className=" w-11/12 mx-auto pt-10 pb-10 ">
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 '>
                    {
                        equipment.map(equip => <div key={equip._id} className="w-full mx-auto border bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg  hover:scale-110 ease-in-out duration-300">
                            {/* Product Image */}
                            <img
                                src={equip.image}
                                alt="Product"
                                className="w-full h-48 object-cover"
                            />
            
                            {/* Product Details */}
                            <div className="p-6 text-center">
                                {/* Title */}
                                <h3 className="text-md  font-ZenDots text-gray-800">
                                    {equip.title}
                                </h3>
            
                                {/* Rating */}
                                <div className="flex  items-center   justify-center">
                                    <span className="text-yellow-500 text-lg">★ ★ ★ ★ ☆  </span>
                                    <span className="text-gray-600 text-sm ml-2">({equip.rating})</span>
                                </div>
            
                                {/* Price */}
                                <p className="text-gray-800 font-bold text-xl ">${equip.price}</p>
            
                                {/* View Details Button */}
                               
                                <button onClick={() => handleViewDetails(equip)} className="mt-4 w-full bg-[#0A14F5] text-white hover:bg-[#000a50] py-2 px-4 rounded-md ">
                                    View Details
                                </button>

                               
                            </div>
                        </div>)
                    }
                </div>

                
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AllEquipments;