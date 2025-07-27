'use client';

import Image from "next/image";
import Header from "../components/Header";
import Link from "next/link";

export default function Civic() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow mt-6">
        <h1 className="text-2xl font-bold text-center text-red-600 mb-4">
          Honda Civic 2024 - Specs & Price
        </h1>

        <div className="flex justify-center">
          <Image
            src="/civic.webp"
            alt="Honda Civic"
            width={300}
            height={200}
            className="object-contain"
          />
        </div>

        <div className="flex justify-center gap-4 mt-6 flex-wrap">
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Book a test Drive
          </button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Request Bank Finance
          </button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Visit Place
          </button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Car Inspection
          </button>
        </div>

        <h2 className="text-xl font-bold mt-8 mb-4 text-center">
          Vehicle Description
        </h2>

        <div className="grid grid-cols-2 gap-4 text-sm text-gray-700">
          <p><strong>Number of Doors:</strong> 4</p>
          <p><strong>Engine:</strong> 1800 CC</p>
          <p><strong>Condition:</strong> 8.5 / 10</p>
          <p><strong>Driven:</strong> 95000 KM</p>
          <p><strong>Suspension Type:</strong> Soft Suspension</p>
          <p><strong>Avg:</strong> 13 KM per ltr</p>
          <p><strong>Transmission:</strong> Automatic</p>
          <p><strong>Fuel Type:</strong> High Octane</p>
        </div>

        <p className="text-green-600 text-center text-2xl font-bold mt-6">
          PKR 70,50,000
        </p>

        <div className="mt-6 flex flex-col items-center">
          <Link href="/checkout">
            <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded font-semibold text-lg mb-3">
              Make a Payment
            </button>
          </Link>

          <Link
            href="/"
            className="text-blue-600 underline hover:text-blue-800 text-sm"
          >
            ← Back to Home Page
          </Link>
        </div>
      </div>
    </div>
  );
}
