import React from "react";
import Header from "../components/Header";
import Link from "next/link";

export default function CheckoutPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      
      <Header />

      <div className="flex justify-center px-4">
        <div className="w-full max-w-lg bg-white p-8 rounded-xl shadow-md">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">
            Enter Your Details
          </h2>
          <form action="#" method="POST" className="space-y-5">
            <input
              type="text"
              name="name"
              placeholder="Enter Your Name"
              required
              className="w-full p-3 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your Email"
              required
              className="w-full p-3 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="tel"
              name="card"
              placeholder="Card Number"
              maxLength={16}
              required
              className="w-full p-3 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="text"
              name="address"
              placeholder="Address"
              required
              className="w-full p-3 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
             <Link href={"/confirmationdd"}>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-3 rounded-md hover:bg-blue-700 transition"
            >
              Place Your Order
            </button></Link>
          </form>
        </div>
      </div>
    </div>
  );
}
