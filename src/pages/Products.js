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
    <div className="container mx-auto my-8 px-4">
      {/* Section Title */}
      <h1 className="text-3xl font-extrabold text-center text-gray-800 mb-8">
        Explore Our Products
      </h1>

      {/* Category Navigation */}
      <div className="flex flex-wrap justify-center gap-4 mb-6">
        {/* Laptop */}
        <button
          className={`px-6 py-3 rounded-lg shadow-lg text-white font-semibold transition duration-300 ${
            selectedCategory === "laptop"
              ? "bg-gradient-to-r from-blue-500 to-purple-500"
              : "bg-gray-300 hover:bg-blue-400 hover:text-white"
          }`}
          onClick={() => setSelectedCategory("laptop")}
        >
          Laptop
        </button>

        {/* Desktop */}
        <button
          className={`px-6 py-3 rounded-lg shadow-lg text-white font-semibold transition duration-300 ${
            selectedCategory === "desktop"
              ? "bg-gradient-to-r from-blue-500 to-purple-500"
              : "bg-gray-300 hover:bg-blue-400 hover:text-white"
          }`}
          onClick={() => setSelectedCategory("desktop")}
        >
          Desktop
        </button>

        {/* Printer/Scanner */}
        <button
          className={`px-6 py-3 rounded-lg shadow-lg text-white font-semibold transition duration-300 ${
            selectedCategory === "printerScanner"
              ? "bg-gradient-to-r from-blue-500 to-purple-500"
              : "bg-gray-300 hover:bg-blue-400 hover:text-white"
          }`}
          onClick={() => setSelectedCategory("printerScanner")}
        >
          Printer/Scanner
        </button>

        {/* Accessories */}
        <button
          className={`px-6 py-3 rounded-lg shadow-lg text-white font-semibold transition duration-300 ${
            selectedCategory === "accessory"
              ? "bg-gradient-to-r from-blue-500 to-purple-500"
              : "bg-gray-300 hover:bg-blue-400 hover:text-white"
          }`}
          onClick={() => setSelectedCategory("accessory")}
        >
          Accessories
        </button>
      </div>

      {/* Marquee Section */}
      <div className="mb-8">
        <Marquee />
      </div>

      {/* Product Cards */}
      <div>
        <Card data={data} type={type} />
      </div>
    </div>
  );
};

export default Products;
