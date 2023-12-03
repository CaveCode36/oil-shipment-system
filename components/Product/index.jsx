import Image from "next/image";
import React from "react";

const Product = () => {
  return (
    <div className="bg-white p-4 rounded-md shadow-md w-64">
      <div className="h-32 bg-cover bg-center mb-4 rounded-md">
        <Image
          width={500}
          src={
            "/product.png"
          }
          height={400}
        />
      </div>
      <div>
        <h2 className="text-lg font-semibold mb-2">Product 1</h2>
        <p className="text-gray-600">Description of Product 1.</p>
      </div>
    </div>
  );
};

export default Product;
