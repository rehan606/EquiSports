import React from 'react';
import { GiWallet } from 'react-icons/gi';
import { IoIosWallet } from 'react-icons/io';
import { MdHeadsetMic } from 'react-icons/md';
import { SlCalender } from 'react-icons/sl';

const Service = () => {
    return (
        <div>
            <section className="bg-gray-50 py-10 md:py-20">
            <h2 className='font-ZenDots text-3xl text-center text-[#000A50]  mb-7'>Our Services</h2>
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* Card 1 */}
                        
                        <div className="bg-white hover:bg-[#000A50]  group p-6 rounded-lg shadow-md text-center cursor-pointer border hover:scale-110 ease-in-out duration-300">
                            <div className="flex justify-center mb-4">
                            <IoIosWallet className="text-4xl text-[#0A14F5] group-hover:text-white"/>
                            </div>
                            <h3 className="text-md  group-hover:text-white text-gray-800 mb-2 font-ZenDots">
                                Payment & Delivery
                            </h3>
                            <p className="text-gray-600 text-sm">
                                Delivered, when your package arrives.
                            </p>
                        </div>
                        

                        {/* Card 2 */}
                        <div className="bg-white hover:bg-[#000A50]  group p-6 rounded-lg shadow-md text-center cursor-pointer border hover:scale-110 ease-in-out duration-300">
                            <div className="flex justify-center mb-4">
                            <GiWallet className="text-4xl text-[#0A14F5] group-hover:text-white" />
                            </div>
                            <h3 className="text-md  group-hover:text-white text-gray-800 mb-2 font-ZenDots">
                                Return Product
                            </h3>
                            <p className="text-gray-600 text-sm">
                                Retail, a Product Return Process.
                            </p>
                        </div>

                        {/* Card 3 */}

                        <div className="bg-white hover:bg-[#000A50]  group p-6 rounded-lg shadow-md text-center cursor-pointer border hover:scale-110 ease-in-out duration-300">
                            <div className="flex justify-center mb-4">
                            <SlCalender className="text-4xl text-[#0A14F5] group-hover:text-white"/>
                            </div>
                            <h3 className="text-md  group-hover:text-white text-gray-800 mb-2 font-ZenDots">
                                30 Days Guarantee
                            </h3>
                            <p className="text-gray-600 text-sm">
                                30-days free return policy.
                            </p>
                        </div>

                        {/* Card 4 */}
                        <div className="bg-white hover:bg-[#000A50]  group p-6 rounded-lg shadow-md text-center cursor-pointer border  hover:scale-110 ease-in-out duration-300">
                            <div className="flex justify-center mb-4">
                            <MdHeadsetMic className="text-4xl text-[#0A14F5] group-hover:text-white"/>
                            </div>
                            <h3 className="text-md  group-hover:text-white text-gray-800 mb-2 font-ZenDots">
                                Quality Support
                            </h3>
                            <p className="text-gray-600 text-sm">
                                Support options including 24/7.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Service;