import React from 'react';
import Marquee from '../components/Marquee';



const Products = () => {
    return (
        <div className="container mx-auto my-2">
            <div className="flex space-x-4 items-center bg-gray-400 p-2">
                {/* Laptop */}
                <div className="relative group">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded">
                        Laptop
                    </button>
                    <ul className="absolute left-0 bg-white shadow-lg rounded mt-2 w-40 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                        <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Gaming Laptop</li>
                        <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Ultrabook</li>
                        <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Business Laptop</li>
                    </ul>
                </div>

                {/* Desktop */}
                <div className="relative group">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded">
                        Desktop
                    </button>
                    <ul className="absolute left-0 bg-white shadow-lg rounded mt-2 w-40 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                        <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Gaming Desktop</li>
                        <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">All-in-One</li>
                        <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Workstation</li>
                    </ul>
                </div>

                {/* Printer/Scanner */}
                <div className="relative group">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded">
                        Printer/Scanner
                    </button>
                    <ul className="absolute left-0 bg-white shadow-lg rounded mt-2 w-40 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                        <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Inkjet Printer</li>
                        <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Laser Printer</li>
                        <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Scanner</li>
                    </ul>
                </div>

                {/* Accessories */}
                <div className="relative group">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded">
                        Accessories
                    </button>
                    <ul className="absolute left-0 bg-white shadow-lg rounded mt-2 w-40 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                        <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Keyboards</li>
                        <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Mice</li>
                        <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Monitors</li>
                    </ul>
                </div>
                <div className="flex-1 bg-gray-100 rounded-lg">
                    <Marquee />
                </div>
            </div>
        </div>
    );
};

export default Products;
