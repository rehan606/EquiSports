import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

const Details = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const equipment = location.state?.equipment;

    if (!equipment) {
        return <div>No equipment data found!</div>;
    }

    return (
        <div className=''>
            <header>
                <Navbar></Navbar>
            </header>
            <div className="w-11/12 lg:w-8/12 mx-auto mt-8 p-6 border  bg-white shadow-md rounded-lg">
                <button
                    className="bg-gray-500  hover:bg-gray-600 text-white px-4 py-2 rounded-md mb-4"
                    onClick={() => navigate(-1)} // Go back to the previous page
                >
                    Go Back
                </button>
                <div className="flex flex-col md:flex-row items-center gap-6">
                    <img
                        src={equipment.image}
                        alt={equipment.title}
                        className="w-full h-full md:w-6/12  object-cover rounded-md"
                    />
                    <div>
                        <h2 className="text-2xl font-bold text-gray-800"><span className='font-bold text-gray-600'>Title:</span> {equipment.title}</h2>

                        <p className="text-sm text-gray-600 mb-2"><span className='font-bold text-gray-600'>Category:</span> {equipment.category}</p>

                        <p className="text-gray-700 "><span className='font-bold text-gray-600'>Description:</span> {equipment.description}</p>

                        <p className="text-sm text-gray-500 mt-2"><span className='font-bold text-gray-600'>Customization:</span> {equipment.customization}</p>

                        <p className="text-sm text-gray-500"><span className='font-bold text-gray-600'>Stock:</span> {equipment.status} Pices</p>

                        <p className="text-sm text-gray-500"><span className='font-bold text-gray-600'>Rating:</span> {equipment.rating} ⭐</p>

                        <p className="text-sm font-bold text-purple-600 mb-2"><span className=' text-gray-600'>Price:</span> $ {equipment.price}</p>

                        <button className=' mt-4 btn bg-[#0A14F5] text-white hover:bg-white hover:text-[#0A14F5] px-10 py-4  font-semibold cursor-pointer '>Purchese Now</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Details;
