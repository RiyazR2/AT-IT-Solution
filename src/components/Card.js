import React from "react";
import laptop from "../helper/laptop.json";

// Dynamically load all images from the folder
const images = require.context("../assets/images", false, /\.(jpg|png|jpeg)$/);

const getImage = (id) => {
  try {
    return images(`./laptop${id}.jpg`);
  } catch (error) {
    return "https://via.placeholder.com/300x200"; // Fallback image
  }
};

const Card = () => {
  return (
    <div className="container mx-auto my-4">
      <div className="flex flex-wrap justify-center gap-4">
        {laptop.map((item) => (
          <div
            key={item.id}
            className="max-w-sm w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 bg-white border rounded overflow-hidden shadow-lg"
          >
            <img
              className="w-full h-48 object-cover"
              src={getImage(item.id)} // Dynamically fetch the image
              alt={item.Name}
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
    </div>
  );
};

export default Card;
