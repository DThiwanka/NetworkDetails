import React from 'react';
import { Link } from "react-router-dom";
import Navbar from '../Navbar';

function Homepage() {
  return (
    
    <div className="flex justify-center items-center h-screen">
      <div className="text-center text-2xl sm:text-5xl shadow-sm ">
        <h1>Check Your Details here:</h1>
        <div className='flex flex-col sm:flex-row gap-10 sm:gap-20 mt-10 sm:mt-10 text-xl'>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow-lg">
            <Link to={'./ip'}> Check IP</Link>
          </button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow-lg">
            <Link to={'./mac'}> Check Mac</Link>
            </button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow-lg">
          <Link to={'./details'}> Check Details</Link>
          </button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow-lg">
          <Link to={'./device'}> Device </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
