import Header from "../components/Header";

export default function ConfirmationPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="flex flex-col items-center justify-center text-center px-6 py-20">
        <div className="bg-white p-8 rounded-xl shadow-lg max-w-xl w-full">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-600 mb-4">
            Thank you for Shopping!
          </h1>

          <p className="text-gray-600 text-lg sm:text-xl mb-6">
            Your order will be delivered within <span className="font-semibold text-black">3 business days</span>.
          </p>

          <div className="mt-4">
            <a
              href="/"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
            >
              Back to Home
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
