
import React from 'react';
import { MdOutlineCall } from 'react-icons/md';

const Button = () => {
  return (
    
   <div>
     <div className='lg:flex md:flex sm:flex flex-col top-[70%] right-0 fixed z-[999] hidden
    lg:flex-col md:flex-col  sm:flex-col'>
    <div>
    <button className="border text-blue-500 border-blue-500 px-8 py-2.5 flex items-center w-48 text-sm 
     font-semibold mb-2">
      <MdOutlineCall className="mr-1 text-xl" />
       Call Us Now
     </button>
    </div>
    <div>
    <button className="border bg-blue-500 text-white border-blue-500 px-8 py-2.5 flex items-center 
     w-48 text-sm mb-2 ">
         Book Appointment
      </button>
    </div>
  
    </div>



     {/* Mobile screen */}

    <div className='flex lg:hidden md:hidden sm:hidden  bottom-0 fixed z-[999]
    '>
    <div>
    <button className="border bg-blue-500 text-white border-white px-8 py-2.5 flex items-center 
     w-48 text-sm mb-2 ">
      <MdOutlineCall className="mr-1 text-xl" />
       Call Us Now
     </button>
    </div>
    <div>
    <button className="border bg-blue-500 text-white border-blue-500 px-8 py-2.5 flex items-center 
     w-48 text-sm mb-2 ">
         Book Appointment
      </button>
    </div>
  
    </div>
   </div>
  );
};

export default Button;













