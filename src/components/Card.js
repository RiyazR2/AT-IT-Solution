import React from "react";

const images = require.context(
  "../assets/images/Laptop",
  false,
  /\.(jpg|png|jpeg)$/
);

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
          <p className="text-gray-600 text-sm">
            <strong>Processor:</strong> {item.Processor}
          </p>
          <p className="text-gray-600 text-sm">
            <strong>RAM:</strong> {item.RAM}
          </p>
          <p className="text-gray-600 text-sm">
            <strong>Storage:</strong> {item.Storage}
          </p>
          <p className="text-gray-600 text-sm">
            <strong>Screen Size:</strong> {item.ScreenSize}
          </p>
        </>
      );
    case "desktop":
      return (
        <>
          <p className="text-gray-600 text-sm">
            <strong>Processor:</strong> {item.Processor}
          </p>
          <p className="text-gray-600 text-sm">
            <strong>RAM:</strong> {item.RAM}
          </p>
          <p className="text-gray-600 text-sm">
            <strong>Storage:</strong> {item.Storage}
          </p>
        </>
      );
    case "printerScanner":
      return (
        <>
          <p className="text-gray-600 text-sm">
            <strong>Type:</strong> {item.Type}
          </p>
          <p className="text-gray-600 text-sm">
            <strong>Features:</strong> {item.Features}
          </p>
          <p className="text-gray-600 text-sm">
            <strong>Connectivity:</strong> {item.Connectivity}
          </p>
        </>
      );
    case "accessory":
      return (
        <>
          <p className="text-gray-600 text-sm">
            <strong>Type:</strong> {item.Type}
          </p>
          <p className="text-gray-600 text-sm">
            <strong>Features:</strong> {item.Features}
          </p>
          <p className="text-gray-600 text-sm">
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
    <div className="container mx-auto my-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {data.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow-md hover:shadow-lg transform hover:translate-y-[-5px] transition duration-300 border border-gray-300 overflow-hidden"
          >
            <div className="relative">
              <img
                src={getImage(item.id, type)}
                alt={item.Name}
                className="w-full h-80 object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {item.Name}
              </h3>

              {renderDetails(item, type)}
              <p className="text-gray-600 text-sm">
                <strong>Price:</strong> {item.Price}
              </p>
              <button className=" mt-6 w-full py-2 bg-gray-800 text-white text-sm rounded-lg hover:bg-gray-700 transition duration-200">
                <p>
                  For More Details:{" "}
                  <span className="font-bold ml-8">9272003194</span>
                </p>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
