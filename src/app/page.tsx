// app/page.tsx

import Image from "next/image";
import Link from "next/link";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";

export default function Home() {
  const cars = [
    {
      name: "Toyota Corolla",
      price: "PKR 59.7-65.5 lac",
      image: "/corolla (2).webp",
      link: "/corolla",
    },
    {
      name: "Suzuki Alto",
      price: "PKR 23-30.5 lac",
      image: "/alto.webp",
      link: "/alto",
    },
    {
      name: "Suzuki Swift",
      price: "PKR 39.7-45.5 lac",
      image: "/swift.webp",
      link: "/swift",
    },
    {
      name: "Honda Civic",
      price: "PKR 65.5-70.5 lac",
      image: "/civic.webp",
      link: "/civic", // ✅ ✅ ✅ Link added here
    },
  ];

  return (
    <div>
      <Header />
      <HeroSection />

      <section className="p-6">
        <h2 className="text-2xl font-bold mb-6 text-center">Featured Cars</h2>

        <div className="flex flex-wrap gap-6 justify-center">
          {cars.map((car, i) => {
            const Card = (
              <div
                className="w-52 border border-gray-300 rounded-lg p-4 bg-gray-50 text-center shadow hover:shadow-md transition"
              >
                <Image
                  src={car.image}
                  alt={car.name}
                  width={180}
                  height={120}
                  className="object-contain mx-auto"
                />
                <h3 className="mt-3 text-blue-700 font-semibold">{car.name}</h3>
                <p className="text-green-600 text-sm">{car.price}</p>
              </div>
            );

            return car.link ? (
              <Link href={car.link} key={i} className="hover:scale-105 transition-transform">
                {Card}
              </Link>
            ) : (
              <div key={i}>{Card}</div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
