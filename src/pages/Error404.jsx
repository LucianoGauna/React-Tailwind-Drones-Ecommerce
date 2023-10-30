import React from 'react';
import { Link } from 'react-router-dom';

const Error404 = () => {
  return (
    <div className="w-full text-center top-0 left-0 pt-24 px-20 max-sm:px-8 xl:px-48 2xl:px-72 mb-16 h-full 2xl:mb-28 flex flex-col" style={{ fontFamily: 'Gabarito' }}>
      <h1
        className="text-9xl lg:text-[12rem] font-extrabold"
      >
        404
      </h1>
      <span className="text-3xl" >
        Not Found
      </span>
      <span className="mt-5">
        We're sorry, the page you requested could not be found
      </span>
      <div className='mt-20'>
        <Link to={"/"}>
          <button className="w-50% bg-blue-500 px-4 py-2 text-white hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-3000 active:bg-blue-800">
            Go Back To Homepage
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Error404;
