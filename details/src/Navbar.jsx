import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-white font-semibold">Logo</div>
        <ul className="flex space-x-8">
          <li><a href="/" className="text-white hover:text-gray-300">Home</a></li>
          <li><a href="/ip" className="text-white hover:text-gray-300">IP</a></li>
          <li><a href="/mac" className="text-white hover:text-gray-300">MAC</a></li>
          <li><a href="/details" className="text-white hover:text-gray-300">Details</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
