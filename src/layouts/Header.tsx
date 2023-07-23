import React from "react";
import logo from "../assets/logo.png"
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="bg-white text-gray-900">
            <div className="container mx-auto flex justify-between items-center py-4">
                <Link to="/" className="flex items-center">
                    <img src={logo} alt="Brand logo" className="xl:w-8 w-7 hidden lg:block" />
                </Link>
                <nav className="flex space-x-4">
                    <Link to="/about" className="text-base">About</Link>
                    <Link to="/products" className="text-base">Products</Link>
                    <Link to="/contact" className="text-base">Contact</Link>
                </nav>
                <Link
                    to="/signup"
                    className="`py-2.5 px-4 text-center rounded-lg duration-150 flex items-center justify-center gap-x-1 font-medium text-sm text-white bg-gray-800 hover:bg-gray-700 active:bg-gray-900"
                >
                    Get a link
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                        <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                    </svg>
                </Link>
            </div>
        </header>
    );
};

export default Header;
