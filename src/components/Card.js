import React from "react";

const images = require.context("../assets/images", false, /\.(jpg|png|jpeg)$/);

const getImage = (id, type) => {
  try {
    return images(`./${type}${id}.jpg`);
  } catch {
    return "https://via.placeholder.com/300x200";
  }
};

const renderDetails = (item, type) => {
  switch (type) {
    case "laptop":
      return (
        <>
          <p className="text-gray-600">
            <strong>Processor:</strong> {item.Processor}
          </p>
          <p className="text-gray-600">
            <strong>RAM:</strong> {item.RAM}
          </p>
          <p className="text-gray-600">
            <strong>Storage:</strong> {item.Storage}
          </p>
          <p className="text-gray-600">
            <strong>Screen Size:</strong> {item.ScreenSize}
          </p>
        </>
      );
    case "desktop":
      return (
        <>
          <p className="text-gray-600">
            <strong>Processor:</strong> {item.Processor}
          </p>
          <p className="text-gray-600">
            <strong>RAM:</strong> {item.RAM}
          </p>
          <p className="text-gray-600">
            <strong>Storage:</strong> {item.Storage}
          </p>
        </>
      );
    case "printerScanner":
      return (
        <>
          <p className="text-gray-600">
            <strong>Type:</strong> {item.Type}
          </p>
          <p className="text-gray-600">
            <strong>Features:</strong> {item.Features}
          </p>
          <p className="text-gray-600">
            <strong>Connectivity:</strong> {item.Connectivity}
          </p>
        </>
      );
    case "accessory":
      return (
        <>
          <p className="text-gray-600">
            <strong>Type:</strong> {item.Type}
          </p>
          <p className="text-gray-600">
            <strong>Features:</strong> {item.Features}
          </p>
          <p className="text-gray-600">
            <strong>Connectivity:</strong> {item.Connectivity}
          </p>
        </>
      );
    default:
      return null;
  }
};

const Card = ({ data, type }) => {
  return (
    <div className="container mx-auto my-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.map((item) => (
          <div
            key={item.id}
            className="bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300"
          >
            <img
              src={getImage(item.id, type)}
              alt={item.Name}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold text-gray-800">{item.Name}</h3>
              <p className="text-gray-600">
                <strong>Price:</strong> {item.Price}
              </p>
              {renderDetails(item, type)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
