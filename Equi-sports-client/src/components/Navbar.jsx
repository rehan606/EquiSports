import { Link, NavLink } from 'react-router-dom';
import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';



const Navbar = () => {
    const { user, logOutUser } = useContext(AuthContext)
    console.log(user)



    const links = <>
        
        <li className="text-white font-ZenDots" > <NavLink to='/'>Home</NavLink> </li>
        
        <li className="text-white font-ZenDots"> <NavLink to='/allEquipment'>All Equipments</NavLink> </li>
        {
            user && <>
                <li className="text-white font-ZenDots"> <NavLink to='/addEquipment'>Add Sports</NavLink> </li>
            </>
        }
        {
            user && <>
                <li className="text-white font-ZenDots"> <NavLink to='/myEquipments'>My Equipments</NavLink> </li>
            </>
        }
        
        
    </>
    return (
        <div className="bg-[#28394b] ">
            <div className="navbar w-11/12 mx-auto ">
                <div className="navbar-start ">
                    <div className="dropdown -ml-2">
                        <div tabIndex={0} role="button" className="btn bg-white lg:hidden mr-1 ">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4 "
                                fill="none"
                                viewBox="0 0 20 20"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-[#28394B] rounded-box z-50 mt-3 w-52 p-2 shadow">

                            {links}

                        </ul>
                    </div>
                    <Link to="/" className=" text-md md:text-xl text-white font-ZenDots">Equi Sports</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">

                        {links}

                    </ul>
                </div>
                <div className="navbar-end space-x-2">
                    {
                        user && user?.email ?
                            (<div className="dropdown dropdown-end flex items-center gap-3">

                                <div tabIndex={0} role="button" className="btn  btn-circle avatar ">

                                    <div className="w-10 rounded-full">

                                        <img
                                            alt="User Profile"
                                            // src={user?.photoURL || 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp'}
                                            src={user?.photoURL ? user.photoURL : 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp'}

                                            className="object-cover w-full h-full"
                                        />


                                    </div>
                                </div>
                                <ul
                                    tabIndex={0}
                                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[50] mt-56 w-52 p-2 shadow">

                                    <div className=' border-b px-4 '>

                                        <div >
                                            <h2 className='text-orange-400 pt-3 font-bold rounded-lg text-center text-md  '>{user.displayName}</h2>
                                            <h2 className='text-orange-400   rounded-lg text-center text-xs mb-3  '>{user.email}</h2>
                                        </div>


                                    </div>
                                    <li>
                                        <Link to="/profile" className="justify-between text-green-500  font-semibold">
                                            Profile
                                            <span className="badge bg-green-500 text-white">New</span>
                                        </Link>
                                    </li>

                                    <li className='font-semibold text-blue-500'><a>Settings</a></li>


                                    <li
                                        onClick={() => {
                                            if (window.confirm('Are you sure you want to log out?')) {
                                                logOutUser();
                                            }
                                        }}
                                        className="text-red-500 font-semibold"
                                    >
                                        <Link to="/">Logout</Link>
                                    </li>
                                </ul>
                            </div>)

                            :

                            (<div className=''>
                                (<Link to='/auth/register' className="bg-white px-2 py-2 md:px-7 md:py-3 text-[#ff7029] md:font-semibold rounded-md cursor-pointer">  Register </Link>)

                                (<Link to='/auth/login' className="bg-[#ff7029] px-2 py-2 md:px-7 md:py-3 text-white md:font-semibold rounded-md cursor-pointer">  Login </Link>)
                            </div>)


                    }
                    {/* <Link to='/auth/register' className="btn">Register</Link>
                    <Link to='/auth/login' className="btn">{user?.email}</Link> */}
                </div>
            </div>
        </div>
    );
};

export default Navbar;