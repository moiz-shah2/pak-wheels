import Image from "next/image";

export default function Header() {
  return (
    <div className="bg-blue-950 text-white font-sans mb-7">
    
      <div className="flex items-center justify-between px-20 py-2 text-xs border-b border-blue-700">
        <div className="flex items-center gap-2">
          <Image
            src="/phone.webp"
            alt="phone icon"
            width={20}
            height={20}
            className="h-5 w-5"
          />
          <p>Download via SMS</p>
        </div>
        <p className="cursor-pointer">Sign In | Sign Up</p>
      </div>

      
      <div className="border-t mx-20"></div>

    
      <div className="flex items-center justify-between px-20 py-4">
        
        <div>
          <Image
            src="/logo.webp"
            alt="logo"
            width={100}
            height={100}
            className="h-16 w-auto"
          />
        </div>

        
        <nav className="text-sm">
          <ul className="flex gap-6">
            <li className="cursor-pointer hover:underline">New Cars</li>
            <li className="cursor-pointer hover:underline">Bikes</li>
            <li className="cursor-pointer hover:underline">Auto Store</li>
            <li className="cursor-pointer hover:underline">Videos</li>
            <li className="cursor-pointer hover:underline">Blogs</li>
            <li className="cursor-pointer hover:underline">Forums</li>
            <li className="cursor-pointer hover:underline">More</li>
          </ul>
        </nav>
        <div className="button">  <button className="bg-red-700 px-4 py-2 rounded-md text-sm hover:bg-red-800 transition">
            Post an Ad
          </button></div>
      </div>
    </div>
  );
}
