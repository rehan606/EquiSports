import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const SupportPage = () => {
  return (
    <div className='bg-gray-100'>
        <Navbar></Navbar>
        <div className="w-11/12 mx-auto min-h-screen  flex flex-col items-center mt-12">
            {/* Header Section */}
            <div className="text-center mb-8 bg-[#000A50] w-full py-20">
                <h1 className="text-2xl md:text-3xl font-ZenDots font-bold text-white">
                EquiSports Support
                </h1>
                <p className="text-white mt-4">
                Have questions? We're here to help.
                </p>
            </div>

            {/* Main Content */}
            <div className="w-full max-w-4xl py-10">
                {/* Contact Form */}
                <section className="bg-white shadow-lg rounded-lg p-6 mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Us</h2>
                <form className="space-y-4">
                    <div className="flex flex-col">
                    <label className="text-gray-600 font-medium" htmlFor="name">
                        Your Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        placeholder="Enter your name"
                        className="mt-2 p-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                    />
                    </div>
                    <div className="flex flex-col">
                    <label className="text-gray-600 font-medium" htmlFor="email">
                        Your Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Enter your email"
                        className="mt-2 p-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                    />
                    </div>
                    <div className="flex flex-col">
                    <label className="text-gray-600 font-medium" htmlFor="message">
                        Your Message
                    </label>
                    <textarea
                        id="message"
                        placeholder="Write your message here"
                        rows="4"
                        className="mt-2 p-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                    ></textarea>
                    </div>
                    <button
                    type="submit"
                    className="w-full bg-[#000A50] text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
                    >
                    Send Message
                    </button>
                </form>
                </section>

                {/* FAQ Section */}
                <section className="bg-[#000A50]  shadow-lg rounded-lg p-6">
                <h2 className="text-2xl font-bold text-white mb-4">FAQs</h2>
                <div className="space-y-4">
                    {/* FAQ Item */}
                    <div>
                    <h3 className="text-lg font-semibold text-white">
                        How do I track my order?
                    </h3>
                    <p className="text-gray-400 mt-2">
                        You can track your order by logging into your EquiSports account
                        and visiting the "Orders" section.
                    </p>
                    </div>
                    {/* FAQ Item */}
                    <div>
                    <h3 className="text-lg font-semibold text-white">
                        What is the return policy?
                    </h3>
                    <p className="text-gray-400 mt-2">
                        Returns are accepted within 30 days of purchase. Make sure the
                        item is in its original condition.
                    </p>
                    </div>
                    {/* FAQ Item */}
                    <div>
                    <h3 className="text-lg font-semibold text-white">
                        How can I contact customer support?
                    </h3>
                    <p className="text-gray-400 mt-2">
                        You can reach us via the contact form above or email us directly
                        at <a href="mailto:support@equisports.com" className="text-blue-500">support@equisports.com</a>.
                    </p>
                    </div>
                </div>
                </section>
            </div>
        </div>

        <Footer></Footer>
    </div>
  );
};

export default SupportPage;
