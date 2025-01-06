import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Navbar from "../components/Navbar";
import Swal from 'sweetalert2'
import { Link, useParams } from "react-router-dom";

const MyEquipments = () => {
  const { user } = useContext(AuthContext);
  const [equipments, setEquipments] = useState([]);
  
  

  useEffect(() => {
    fetch(`https://equi-sports-server-mu.vercel.app/equipments/${user.email}`)
    // fetch(`http://localhost:5000/equipments/${user.email}`)
      .then((res) => res.json())
      .then((data) => setEquipments(data));
  }, []);

  // Delete item 
  const handleDelete = id => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        
        fetch(`https://equi-sports-server-mu.vercel.app/equipments/${id}`, {
          method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          
          if(data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "Your equipment has been deleted.",
              icon: "success"
            });
            const remaining = equipments.filter(equip => equip._id !== id)
            setEquipments(remaining)
          }
        })
        
      }
    });
    
  }



  return (
    <div>
      <section>
        <Navbar></Navbar>
      </section>

      <div className="w-11/12 mx-auto">
        <h2 className="text-center font-ZenDots text-3xl py-6">
          My Added Equipments
        </h2>

        <ul className="grid grid-cols-1  lg:grid-cols-3 gap-4 ">
          {equipments.map((equipment) => (
            <li className="bg-[#000A50]  hover:scale-110 ease-in-out duration-300 p-3 rounded-md" key={equipment._id}>
              <div className="flex items-center justify-between gap-4 border rounded-md p-4">
                <div className="text-white space-y-2">
                  <h3 className="font-semibold text-xl">{equipment.title}</h3>
                  <p className="text-sm"> <span className="font-semibold">Description:</span> {equipment.description.slice(0,100)} ...</p>
                  <p> <span className="font-semibold">Category: </span>{equipment.category}</p>
                  <p  className="text-orange-400"> <span className="font-semibold">Price: </span> $ {equipment.price}</p>
                </div>
                <div className="flex flex-col justify-end gap-2">
                    <button onClick={() => handleDelete(equipment._id)} className="btn bg-red-500">Delete</button>
                    <button className="btn">Update</button>
                </div>
              </div>
            </li>
          ))}
        </ul>

      </div>
    </div>
  );
};

export default MyEquipments;
