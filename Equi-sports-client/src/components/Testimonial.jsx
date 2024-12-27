import React from 'react';

const Testimonial = () => {
    return (
        <div>
            <section className="bg-[#28394b] py-12">
                <div className="max-w-7xl mx-auto px-4">
                    {/* Section Title */}
                    <div className="mb-8 text-center">
                        <h2 className="text-2xl md:text-3xl font-bold text-white font-ZenDots">
                            Feedback From Our Clients
                        </h2>
                        <div className="flex justify-center items-center mt-2 text-gray-600">
                            <span className="text-red-500 text-xl mr-2">★</span>
                            <p className="text-lg text-white">
                                4.8 <span className="text-gray-400">(8000 Reviews)</span>
                            </p>
                        </div>
                    </div>

                    {/* Feedback Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Card 1 */}
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <div className="mb-4">
                                <p className="text-yellow-500 font-bold">★★★★★</p>
                                <h3 className="text-lg font-semibold text-red-500 mt-2">
                                    So Comfy And Great!
                                </h3>
                            </div>
                            <p className="text-gray-600 text-sm">
                                "The delivery was quite quick, as on the website it said that it
                                would arrive by around Thursday, but it actually arrived a day
                                sooner, and also quite early in the morning!"
                            </p>
                            <div className="mt-4 flex items-center">
                                <img
                                    src="https://cdn4.iconfinder.com/data/icons/mixed-set-1-1/128/28-512.png"
                                    alt="Bruce Jones"
                                    className="w-10 h-10 rounded-full"
                                />
                                <div className="ml-3">
                                    <p className="text-sm font-medium text-gray-800">Bruce Jones</p>
                                    <p className="text-xs text-gray-500">Web Developer</p>
                                </div>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <div className="mb-4">
                                <p className="text-yellow-400 font-bold">★★★★☆</p>
                                <h3 className="text-lg font-semibold text-red-500 mt-2">
                                    Very Professional
                                </h3>
                            </div>
                            <p className="text-gray-600 text-sm">
                                "Very professional and knowledgeable about their products. Quick
                                and reliable delivery. Probably the only webshop in Europe where
                                you can find the best range of sports equipment."
                            </p>
                            <div className="mt-4 flex items-center">
                                <img
                                    src="https://cdn3.iconfinder.com/data/icons/avatar-set/512/Avatar01-512.png"
                                    alt="Deanna Rose"
                                    className="w-10 h-10 rounded-full"
                                />
                                <div className="ml-3">
                                    <p className="text-sm font-medium text-gray-800">Deanna Rose</p>
                                    <p className="text-xs text-gray-500">Consultant</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Testimonial;