
import React from 'react';
import { MdOutlineCall } from 'react-icons/md';

const Button = () => {
  return (
    <div className="lg:hidden md:hidden sm:hidden fixed  fixed-bottom top-10 bottom-0 right-0 z-50 flex flex-row items-end w-full">
      <button className="border text-blue-500 border-blue-500 px-8 py-2.5 flex items-center w-48 text-sm 
      font-semibold mb-2">
        <MdOutlineCall className="mr-1 text-xl" />
        Call Us Now
      </button>
      <button className="border bg-blue-500 text-white border-blue-500 px-8 py-2.5 flex items-center 
      w-48 text-sm mb-2 ">
        Book Appointment
      </button>
    </div>
  );
};

export default Button;

