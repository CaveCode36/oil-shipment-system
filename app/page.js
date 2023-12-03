import { Product } from "@/components";
import Image from "next/image";
import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const Home = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      {/* Oil Refineries Image */}
      <div className="main-welcome relative h-[60vh] w-full">
        {/* Next.js Image Component */}
        <Image
          src="/refinery.webp"
          alt="Oil Refineries"
          layout="fill"
          objectFit="cover"
          className="z-0"
        />
        

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black opacity-30"></div>

        {/* Text and Shop Now button */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h1 className="text-4xl font-bold mb-4 text-center">
            Welcome to our Oil Products Store
          </h1>
          <button className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition duration-300">
            Shop Now
          </button>
        </div>
      </div>

      {/* Available Products Section */}
      <div className="flex-props-c flex-wrap gap-8 mt-8">
        <Product />
      </div>
    </main>
  );
};

export default Home;
