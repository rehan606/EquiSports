
import { useLoaderData, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import { FaStar } from 'react-icons/fa6';

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

            <div className=" w-11/12 mx-auto pt-10  ">


                <table className="w-full border-collapse">
                    <thead>
                        <tr className="bg-[#232d35] text-white">
                            <th className="py-3 px-4 text-left text-sm font-medium text-white">
                                ID
                            </th>
                            <th className="py-3 px-4 text-left text-sm font-medium text-white">
                                Title
                            </th>
                            <th className="py-3 px-4 text-left text-sm font-medium text-white">
                                Category
                            </th>
                            <th className="py-3 px-4 text-left text-sm font-medium text-white">
                                Price
                            </th>
                            <th className="py-3 px-4 text-left text-sm font-medium text-white">
                                Rating
                            </th>
                            <th className="py-3 px-4 text-left text-sm font-medium text-white">
                                Status
                            </th>
                            
                            <th className="py-3 px-4 text-center text-sm font-medium text-white">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            equipment.map((equip, index) => <tr key={equip._id} className="border-b">
                                <td className="py-2 px-4 text-sm text-gray-700">{index + 1}</td>
                                <td className="py-2 px-4 text-sm text-gray-700">
                                    {equip.title}
                                </td>
                                <td className="py-2 px-4 text-sm text-gray-700">
                                    {equip.category}
                                </td>
                                <td className="py-2 px-4 text-sm text-gray-700 "><span className='font-bold'>$</span> {equip.price}</td>
                                <td className="py-2 px-4 text-sm text-gray-700 flex flex-row items-center gap-1"> {equip.rating} <FaStar/></td>
                                <td className="py-2 px-4 text-sm text-gray-700 ">Stock: {equip.status} Pic</td>
                                <td className="py-2 px-4 text-center">
                                    <button onClick={() => handleViewDetails(equip)} className="bg-purple-500 hover:bg-purple-600 text-white px-2 py-1 rounded-md mr-2">
                                        View Details
                                    </button>
                                    
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllEquipments;