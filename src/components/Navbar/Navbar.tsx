import React from 'react';
import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="bg-gray-900 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/" className="text-white text-xl font-bold">My App
                </Link>
                <ul className="flex space-x-4">
                    <li>
                        <Link href="/" className="text-white hover:text-gray-300 transition duration-300">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/about" className="text-white hover:text-gray-300 transition duration-300">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link href="/services" className="text-white hover:text-gray-300 transition duration-300">
                            Services
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact" className="text-white hover:text-gray-300 transition duration-300">
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
