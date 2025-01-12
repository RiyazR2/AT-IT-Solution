import React from "react";
import Card from "../components/Card";

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-blue-500 text-white p-6 text-center">
        <h1 className="text-4xl font-bold">Welcome to Our Shop</h1>
        <p className="mt-2">
          Laptop and Computer Repair Services with Accessories
        </p>
      </header>

      <Card />
    </div>
  );
};

export default Home;
