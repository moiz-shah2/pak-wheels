import Header from "../components/Header";
import Link from "next/link";

export default function CorollaPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      <div className="flex justify-center items-start p-6">
        <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-4xl">
          <h1 className="text-3xl font-bold text-center text-red-600 mb-6">
            Toyota Corolla 2024 - Specs & Price
          </h1>

          <div className="flex justify-center mb-6">
            <img
              src="/corolla (2).webp"
              alt="Toyota Corolla"
              className="w-96 rounded shadow"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-6">
            {["Book a test Drive", "Request Bank Finance", "Visit Place", "Car Inspection"].map((label, index) => (
              <button
                key={index}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                {label}
              </button>
            ))}
          </div>

          <h2 className="text-xl font-semibold text-center mb-4">
            Vehicle Description
          </h2>

          <div className="grid grid-cols-2 gap-4 text-sm text-gray-700">
            <div className="bg-gray-50 p-2 rounded">Number of Doors: <span className="float-right">4</span></div>
            <div className="bg-gray-50 p-2 rounded">Engine: <span className="float-right">1800 CC</span></div>
            <div className="bg-gray-50 p-2 rounded">Condition: <span className="float-right">9.2 / 10</span></div>
            <div className="bg-gray-50 p-2 rounded">Driven: <span className="float-right">60,000 KM</span></div>
            <div className="bg-gray-50 p-2 rounded">Suspension Type: <span className="float-right">Normal</span></div>
            <div className="bg-gray-50 p-2 rounded">Avg: <span className="float-right">15 KM/L</span></div>
            <div className="bg-gray-50 p-2 rounded">Transmission: <span className="float-right">Automatic</span></div>
            <div className="bg-gray-50 p-2 rounded">Fuel Type: <span className="float-right">Petrol</span></div>
          </div>

          <p className="text-green-600 text-center text-2xl font-bold mt-6">
            PKR 59.7–65.5 Lac
          </p>

          <div className="flex flex-col items-center mt-5">
            <Link href={"/checkout"}>
            <button className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded font-semibold shadow mb-4">
              Make Payment
            </button></Link>

            <Link
              href="/"
              className="text-blue-600 underline hover:text-blue-800 text-sm"
            >
              ← Back to Home Page
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
