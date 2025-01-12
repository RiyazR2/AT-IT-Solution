import React from "react";
import laptop from "../helper/laptop.json";

const Card = () => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white border mx-auto my-4">
      {console.log(laptop)}
      {laptop.map((item) => (
        <div key={item.id} className="flex flex-wrap">
          <img
            className="w-full h-48 object-cover"
            src="https://via.placeholder.com/300x200"
            alt="Laptop"
          />
          <div className="px-6 py-4">
            <h3 className="font-bold text-xl mb-2">{item.Name}</h3>
            <p className="text-gray-700 text-base">
              <strong>Price:</strong> {item.Price}
            </p>
            <p className="text-gray-700 text-base">
              <strong>Processor:</strong> {item.Processor}
            </p>
            <p className="text-gray-700 text-base">
              <strong>Screen Size:</strong> {item.ScreenSize}
            </p>
            <p className="text-gray-700 text-base">
              <strong>Storage:</strong> {item.Storage}
            </p>
            <p className="text-gray-700 text-base">
              <strong>RAM:</strong> {item.RAM}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
