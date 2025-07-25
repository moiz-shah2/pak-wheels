import Image from "next/image";
import Header from "./components/Header";

export default function Home() {
  return (
    <div>
      <Header />
      <h1 className="text-4xl font-bold text-orange-600 text-center my-6">
        Welcome to My Demo Website
      </h1>

      <div className="cars flex justify-center gap-7">
        {/* Corolla */}
        <div className="corolla border h-64 w-64 relative bg-white">
          <Image
            src="/Corolla (2).webp"
            alt="corolla"
            fill
            className="object-contain"
          />
        </div>

        {/* Alto */}
        <div className="alto border h-64 w-64 relative bg-white">
          <Image
            src="/Alto.webp"
            alt="Alto"
            fill
            className="object-contain"
          />
        </div>

        {/* Swift */}
        <div className="swift border h-64 w-64 relative bg-white">
          <Image
            src="/Swift.webp"
            alt="Swift"
            fill
            className="object-contain"
          />
        </div>

        {/* Civic */}
        <div className="civics border h-64 w-64 relative bg-white">
          <Image
            src="/Civic.webp"
            alt="Civic"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}
