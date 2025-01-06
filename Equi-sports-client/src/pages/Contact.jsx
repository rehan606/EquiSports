import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaCableCar, FaLocationArrow, FaLocationPin, FaPhone } from "react-icons/fa6";

const Contact = () => {
  return (
    
    <div className="bg-gray-50">
        <Navbar></Navbar>

        <section className="w-11/12 mx-auto py-12 ">
            {/* Introduction Section */}
            <div className="text-center mb-12 bg-[#000A50] py-20 text-white px-10 md:px-20">
                <h1 className="text-2xl md:text-3xl font-semibold  mb-4 font-ZenDots">Contact Us</h1>
                <p className=" md:text-lg ">
                    Welcome to EquiSports, your trusted partner for premium sports equipment and accessories. 
                </p>
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Contact Form */}
                <div className="bg-white shadow-lg rounded-lg p-6">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Get in Touch</h2>
                <p className="text-gray-600 mb-6">
                    Have a question or need assistance? Fill out the form below, and we'll get back to you as soon as possible.
                </p>
                <form className="space-y-4">
                    <div>
                    <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
                        Your Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        placeholder="Enter your name"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    </div>
                    <div>
                    <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
                        Your Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Enter your email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    </div>
                    <div>
                    <label className="block text-gray-700 font-medium mb-2" htmlFor="message">
                        Your Message
                    </label>
                    <textarea
                        id="message"
                        rows="5"
                        placeholder="Enter your message"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    ></textarea>
                    </div>
                    <button
                    type="submit"
                    className="w-full bg-[#000A50] text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition duration-300"
                    >
                    Send Message
                    </button>
                </form>
                </div>

                {/* Contact Details */}
                <div className="flex flex-col justify-center bg-white shadow-lg rounded-lg p-6">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Contact Information</h2>
                <p className="text-gray-600 mb-6">
                    Reach out to us directly through the following contact details or visit us at our location.
                </p>
                <ul className="space-y-4">
                    <li className="flex items-center">
                    <span className="w-6 h-6 text-blue-500 mr-3">
                    <FaLocationPin></FaLocationPin>
                    </span>
                    
                    <span>Sandwip, Chittagong, Bangladesh.</span>
                    </li>
                    <li className="flex items-center">
                    <span className="w-6 h-6 text-blue-500 mr-3">
                    <FaPhone></FaPhone>
                    </span>
                    
                    <span>880 1822 1822 07</span>
                    </li>
                    <li className="flex items-center">
                    <span className="w-6 h-6 text-blue-500 mr-3">
                    <FaLocationArrow></FaLocationArrow>
                        
                    </span>
                    
                    <span>rehanlemu@gmail.com</span>
                    </li>
                </ul>
                </div>
            </div>
        </section>

        <Footer></Footer>
    </div>
  );
};

export default Contact;
