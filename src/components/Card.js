import React from "react";

// Dynamically load all images from the folder
const images = require.context("../assets/images", false, /\.(jpg|png|jpeg)$/);

const getImage = (id, type) => {
  try {
    return images(`./${type}${id}.jpg`); // Dynamically load images based on type and id
  } catch (error) {
    return "https://via.placeholder.com/300x200"; // Fallback image
  }
};

const Card = ({ data, type }) => {
  return (
    <div className="container mx-auto my-4">
      <div className="flex flex-wrap justify-center gap-4">
        {data.map((item) => (
          <div
            key={item.id}
            className="max-w-sm w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 bg-white border rounded overflow-hidden shadow-lg"
          >
            <img
              className="w-full h-48 object-cover"
              src={getImage(item.id, type)} // Fetch the image dynamically based on id and type
              alt={item.Name}
            />
            <div className="px-6 py-4">
              <h3 className="font-bold text-xl mb-2">{item.Name}</h3>
              <p className="text-gray-700 text-base">
                <strong>Price:</strong> {item.Price}
              </p>
              {item.Type && (
                <p className="text-gray-700 text-base">
                  <strong>Type:</strong> {item.Type}
                </p>
              )}
              {item.Processor && (
                <p className="text-gray-700 text-base">
                  <strong>Processor:</strong> {item.Processor}
                </p>
              )}
              {item.ScreenSize && (
                <p className="text-gray-700 text-base">
                  <strong>Screen Size:</strong> {item.ScreenSize}
                </p>
              )}
              {item.Storage && (
                <p className="text-gray-700 text-base">
                  <strong>Storage:</strong> {item.Storage}
                </p>
              )}
              {item.RAM && (
                <p className="text-gray-700 text-base">
                  <strong>RAM:</strong> {item.RAM}
                </p>
              )}
              {item.Features && (
                <p className="text-gray-700 text-base">
                  <strong>Features:</strong> {item.Features}
                </p>
              )}
              {item.Connectivity && (
                <p className="text-gray-700 text-base">
                  <strong>Connectivity:</strong> {item.Connectivity}
                </p>
              )}
              {item.Warranty && (
                <p className="text-gray-700 text-base">
                  <strong>Warranty:</strong> {item.Warranty}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
