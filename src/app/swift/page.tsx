// app/swift/page.tsx

import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";

export default function SwiftPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6 mt-8">
        <h1 className="text-3xl font-bold text-center text-red-600 mb-6">
          Suzuki Swift 2024 - Specs & Price
        </h1>

        <div className="flex flex-col items-center">
          <Image
            src="/swift.webp"
            alt="Suzuki Swift"
            width={400}
            height={250}
            className="rounded shadow mb-6"
          />

          <div className="flex flex-wrap gap-4 justify-center mb-6">
            {["Book a test Drive", "Request Bank Finance", "Visit Place", "Car Inspection"].map((text, i) => (
              <button
                key={i}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded shadow"
              >
                {text}
              </button>
            ))}
          </div>

          <h2 className="text-xl font-semibold mb-4 text-gray-800">
            Vehicle Description
          </h2>

          <div className="grid grid-cols-2 gap-4 w-full text-gray-700 text-sm font-medium mb-6">
            <div className="flex justify-between bg-gray-50 p-2 rounded">Number of Doors: <span>4</span></div>
            <div className="flex justify-between bg-gray-50 p-2 rounded">Engine: <span>1200 CC</span></div>
            <div className="flex justify-between bg-gray-50 p-2 rounded">Condition: <span>9 / 10</span></div>
            <div className="flex justify-between bg-gray-50 p-2 rounded">Driven: <span>45000 KM</span></div>
            <div className="flex justify-between bg-gray-50 p-2 rounded">Suspension Type: <span>Normal Suspension</span></div>
            <div className="flex justify-between bg-gray-50 p-2 rounded">Avg: <span>16 KM per ltr</span></div>
            <div className="flex justify-between bg-gray-50 p-2 rounded">Transmission: <span>Automatic</span></div>
            <div className="flex justify-between bg-gray-50 p-2 rounded">Fuel Type: <span>Petrol</span></div>
          </div>

          <p className="text-green-600 text-2xl font-bold mb-6">PKR 45,00,000</p>
          
          <Link href="/checkout">
            <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded font-semibold shadow mb-4">
              Make a Payment
            </button>
          </Link>

          <Link
            href="/"
            className="text-blue-600 underline hover:text-blue-800 text-sm mt-4"
          >
            ← Back to Home Page
          </Link>
        </div>
      </div>
    </div>
  );
}
