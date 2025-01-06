
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div>
        <Navbar></Navbar>
        <section className="bg-gray-50 py-12 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Introduction Section */}
                <div className="text-center mb-12 bg-[#000A50] py-20 text-white px-10 md:px-20">
                    <h1 className="font-ZenDots text-2xl md:text-3xl font-semibold  mb-4">About EquiSports</h1>
                    <p className=" md:text-lg ">
                        Welcome to EquiSports, your trusted partner for premium sports equipment and accessories. 
                    </p>
                </div>

                {/* Mission and Vision */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 ">
                    <div className="bg-white shadow-lg rounded-lg p-6 border hover:scale-110 ease-in-out duration-300">
                        <h2 className="text-2xl font-bold text-[#000A50] mb-4">Our Mission</h2>
                        <p className="text-gray-600">
                        To provide world-class sports equipment that enhances performance and promotes a healthy lifestyle for athletes of all levels.
                        </p>
                    </div>
                    <div className="bg-white shadow-lg rounded-lg p-6 border hover:scale-110 ease-in-out duration-300">
                        <h2 className="text-2xl font-bold text-[#000A50] mb-4">Our Vision</h2>
                        <p className="text-gray-600">
                        To be a global leader in sports innovation, inspiring athletes to push their limits and achieve greatness.
                        </p>
                    </div>
                </div>

                {/* Team Spotlight */}
                <div>
                <h2 className="text-3xl font-bold text-[#000A50] text-center mb-8 font-ZenDots">Meet Our Team</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Team Member 1 */}
                    <div className="bg-white hover:bg-[#000A50]  group shadow-lg rounded-lg p-6 text-center hover:scale-110 ease-in-out duration-300">
                    <img
                        src="https://powerpackelements.com/wp-content/uploads/2017/11/Team-memeber-01.png"
                        alt="Team Member"
                        className="w-24 h-24 rounded-full mx-auto mb-4"
                    />
                    <h3 className="text-xl font-bold group-hover:text-white text-gray-800 ">John Doe</h3>
                    <p className="text-gray-500">Founder & CEO</p>
                    </div>
                    {/* Team Member 2 */}
                    <div className="bg-white hover:bg-[#000A50]  group shadow-lg rounded-lg p-6 text-center hover:scale-110 ease-in-out duration-300">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5XWqlmON1G75BbuqhsDfkb6V7to9IbBtpG9HFE6QQJIy26u1YxHXCFLeL4bzAcGAkm1I&usqp=CAU"
                        alt="Team Member"
                        className="w-24 h-24 rounded-full mx-auto mb-4"
                    />
                    <h3 className="text-xl font-bold group-hover:text-white text-gray-800">Jane Smith</h3>
                    <p className="text-gray-500">Product Manager</p>
                    </div>
                    {/* Team Member 3 */}
                    <div className="bg-white hover:bg-[#000A50]  group shadow-lg rounded-lg p-6 text-center hover:scale-110 ease-in-out duration-300">
                    <img
                        src="https://cbeyondsal.com/wp-content/uploads/2017/02/team_member_02-540x540.jpg"
                        alt="Team Member"
                        className="w-24 h-24 rounded-full mx-auto mb-4"
                    />
                    <h3 className="text-xl font-bold group-hover:text-white text-gray-800">Mike Johnson</h3>
                    <p className="text-gray-500">Lead Designer</p>
                    </div>
                    {/* Team Member 4 */}
                    <div className="bg-white hover:bg-[#000A50]  group shadow-lg rounded-lg p-6 text-center hover:scale-110 ease-in-out duration-300">
                    <img
                        src="https://cbeyondsal.com/wp-content/uploads/2017/02/team_member_01-540x540.jpg"
                        alt="Team Member"
                        className="w-24 h-24 rounded-full mx-auto mb-4"
                    />
                    <h3 className="text-xl font-bold group-hover:text-white text-gray-800">Sara Lee</h3>
                    <p className="text-gray-500">Marketing Head</p>
                    </div>
                </div>
                </div>
            </div>
        </section>
        <Footer></Footer>
    </div>
  );
};

export default About;
