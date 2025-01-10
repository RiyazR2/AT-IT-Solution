import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="bg-gray-800 text-white">


            <nav className="container mx-auto flex justify-between items-center py-4 ">
                {/* Logo */}
                <div className="text-2xl font-bold">
                    <Link to="/">
                        <img src="./images/logo.png" alt="ATIT Solution" className='ml-4 rounded-full h-16' />
                    </Link>
                </div>

                <h1 className='text-2xl font-bold'> ATIT Solution </h1>
                {/* Navigation Links */}
                <ul className="flex space-x-6">
                    <li>
                        <Link to="/" className="hover:text-gray-300">Home</Link>
                    </li>
                    <li>
                        <Link to="/about" className="hover:text-gray-300">About</Link>
                    </li>
                    <li>
                        <Link to="/contact" className="hover:text-gray-300 mr-4">Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
