"use client "
import React from 'react';

const MyOffer = () => {
  return (
    <div>
      
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
       
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name of client:</label>
          <div className="bg-gray-200 p-3 rounded-md">
            <p className="text-base text-gray-800">John Doe</p>
          </div>
        </div>

        
        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message of client:</label>
          <div className="bg-gray-200 p-3 rounded-md">
            <p className="text-base text-gray-800">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="text" className="block text-sm font-medium text-gray-700 mb-1">talent :</label>
          <div className="bg-gray-200 p-3 rounded-md">
            <p className="text-base text-gray-800"> name of talent </p>
          </div>
        </div>

      
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 w-full">
          Accept
        </button>
      </div>
    </div>
    </div>

  );
}

export default MyOffer;

