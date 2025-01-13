import React from "react";
import Products from "./Products";

const Home = () => {
  return (
    <div className="bg-gradient-to-b from-blue-200 via-white to-blue-100 min-h-screen">
      <header className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white p-10 text-center shadow-xl relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-72 h-72 bg-blue-400 rounded-full opacity-30 -top-10 -left-10 animate-pulse"></div>
          <div className="absolute w-96 h-96 bg-pink-400 rounded-full opacity-20 -bottom-16 -right-16 animate-ping"></div>
        </div>

        {/* Main Content */}
        <div className="relative z-10">
          <h1 className="text-5xl font-extrabold tracking-wider drop-shadow-md animate-fade-in-up">
            Welcome to <span className="text-yellow-300">AT IT Solution</span>
          </h1>
          <p className="mt-6 text-xl font-light drop-shadow-sm animate-fade-in-up delay-100">
            Your One-Stop Solution for Laptop Repairs and Accessories
          </p>
        </div>
      </header>

      <div className="py-8">
        <Products />
      </div>
    </div>
  );
};

export default Home;
