import React from 'react';

const HeroSection = () => {
  return (
    <div className="mt-10 px-6">

      {/* 🔷 Centered Heading With Lighter Lines */}
      <div className="flex items-center mx-auto my-6 max-w-5xl">
        <div className="flex-grow h-[1px] bg-gray-200"></div>
        <span className="px-4 text-xl text-gray-700 font-bold whitespace-nowrap">
          Sell Your Car On PakWheels and Get Best Price
        </span>
        <div className="flex-grow h-[1px] bg-gray-200"></div>
      </div>

      {/* 🔷 Two Boxes Side by Side */}
      <div className="flex flex-col md:flex-row justify-center items-start gap-6 max-w-5xl mx-auto">

        {/* Left Box */}
        <div className="flex-1 bg-white border border-gray-200 p-5 rounded-xl shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Post your Ad on PakWheels</h2>
          <ul className="space-y-2 text-gray-700">
            <li>✔ Post your Ad for Free in 3 Easy Steps</li>
            <li>✔ Get Genuine offers from Verified Buyers</li>
            <li>✔ Sell your car Fast at the Best Price</li>
          </ul>
          <button className="mt-5 bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition">
            Post Your Ad
          </button>
        </div>

        {/* Vertical Line */}
        <div className="hidden md:block w-[1px] bg-gray-200"></div>

        {/* Right Box */}
        <div className="flex-1 bg-white border border-gray-200 p-5 rounded-xl shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Try PakWheels Sell It For Me</h2>
          <ul className="space-y-2 text-gray-700">
            <li>✔ Dedicated Sales Expert to Sell your Car</li>
            <li>✔ We Bargain for you and share the Best Offer</li>
            <li>✔ We ensure Safe & Secure Transaction</li>
          </ul>
          <button className="mt-5 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
            Register Your Car
          </button>
        </div>

      </div>
    </div>
  );
};

export default HeroSection;
