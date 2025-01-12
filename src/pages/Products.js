import React, { useState } from "react";
import Marquee from "../components/Marquee";
import Card from "../components/Card";

// Import JSON data
import laptopData from "../helper/laptop.json";
import desktopData from "../helper/desktop.json";
import printerScannerData from "../helper/printerScanner.json";
import accessoriesData from "../helper/accessories.json";

const Products = () => {
  // State to track the selected category
  const [selectedCategory, setSelectedCategory] = useState("laptop");

  // Function to get data based on the selected category
  const getCategoryData = () => {
    switch (selectedCategory) {
      case "laptop":
        return { data: laptopData, type: "laptop" };
      case "desktop":
        return { data: desktopData, type: "desktop" };
      case "printerScanner":
        return { data: printerScannerData, type: "printerScanner" };
      case "accessory":
        return { data: accessoriesData, type: "accessory" };
      default:
        return { data: [], type: "" };
    }
  };

  const { data, type } = getCategoryData();

  return (
    <div className="container mx-auto my-2">
      {/* Navigation Buttons */}
      <div className="flex space-x-4 items-center bg-gray-400 p-2">
        {/* Laptop */}
        <div className="relative group">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={() => setSelectedCategory("laptop")} // Update state on click
          >
            Laptop
          </button>
          <ul className="absolute left-0 bg-white shadow-lg rounded mt-2 w-40 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
              Gaming Laptop
            </li>
            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
              Ultrabook
            </li>
            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
              Business Laptop
            </li>
          </ul>
        </div>

        {/* Desktop */}
        <div className="relative group">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={() => setSelectedCategory("desktop")} // Update state on click
          >
            Desktop
          </button>
          <ul className="absolute left-0 bg-white shadow-lg rounded mt-2 w-40 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
              Gaming Desktop
            </li>
            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
              All-in-One
            </li>
            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
              Workstation
            </li>
          </ul>
        </div>

        {/* Printer/Scanner */}
        <div className="relative group">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={() => setSelectedCategory("printerScanner")} // Update state on click
          >
            Printer/Scanner
          </button>
          <ul className="absolute left-0 bg-white shadow-lg rounded mt-2 w-40 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
              Inkjet Printer
            </li>
            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
              Laser Printer
            </li>
            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
              Scanner
            </li>
          </ul>
        </div>

        {/* Accessories */}
        <div className="relative group">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={() => setSelectedCategory("accessory")} // Update state on click
          >
            Accessories
          </button>
          <ul className="absolute left-0 bg-white shadow-lg rounded mt-2 w-40 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
              Keyboards
            </li>
            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Mice</li>
            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
              Monitors
            </li>
          </ul>
        </div>

        {/* Marquee */}
        <div className="flex-1 bg-gray-100 rounded-lg">
          <Marquee />
        </div>
      </div>

      {/* Render Products */}
      <div className="my-6">
        <Card data={data} type={type} /> {/* Pass data and type to Card */}
      </div>
    </div>
  );
};

export default Products;
