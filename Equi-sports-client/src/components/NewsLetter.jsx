import React from "react";

const NewsLetter = () => {
  return (
    <section className="bg-gray-100 py-20 px-4 ">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-[#000A50] mb-4 font-ZenDots">
          Stay Updated with EquiSports
        </h2>
        <p className="text-gray-600 mb-6">
          Subscribe to our newsletter for the latest updates, promotions, and exclusive deals on sports equipment.
        </p>
        <form className="flex flex-col md:flex-row gap-4 justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full md:w-2/3 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full md:w-auto px-6 py-2  bg-[#0A14F5] text-white hover:bg-white hover:text-[#0A14F5]  font-semibold rounded-lg  transition duration-300"
          >
            Subscribe
          </button>
        </form>
        <p className="text-sm text-gray-500 mt-4">
          We respect your privacy. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
};

export default NewsLetter;
