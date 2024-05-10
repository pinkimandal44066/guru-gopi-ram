import React from 'react'
import familyimg from '../../../public/images/familyimg.png'
import { MdOutlineLocalHospital } from "react-icons/md";
import { AiFillCodepenCircle } from "react-icons/ai";
import { TbHealthRecognition } from "react-icons/tb";
import { TbBrandBooking } from "react-icons/tb";
import { BiSolidHomeHeart } from "react-icons/bi";
import { LuTestTube } from "react-icons/lu";
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';


const Second = () => {
  return (
    <div>
           <div className="flex flex-col items-center justify-center lg:mt-3 md:mt-3 sm:mt-3 mt-7 lg:flex-row">
  <img src={familyimg} alt='' className='w-full lg:w-auto mb-8 lg:mb-0' />
</div>



{/* first part pinki */}
<div className="lg:grid lg:grid-cols-6 hidden bg-white  shadow-xl mx-32 -mt-14  h-24 overflow-hidden 
 rounded-l-2xl rounded-r-2xl ">
  
      <div className="col-span-1 bg-white flex flex-col justify-center items-center border-r border-blue-500">
        <MdOutlineLocalHospital className="text-blue-500 text-xl " />

        <span className="text-blue-500 text-sm mx-4 font-bold text-center ">Book Appointment</span>
      </div>
      <div className="col-span-1 bg-white flex flex-col justify-center items-center border-r border-blue-500">
        <AiFillCodepenCircle className="text-blue-500 text-xl" />
        <span className="text-blue-500 text-sm mx-4 font-bold text-center ">Second Opinion</span>
      </div>
      <div className="col-span-1 bg-white flex flex-col justify-center items-center border-r border-blue-500">
        <TbHealthRecognition className="text-blue-500 text-xl" />
        <span className="text-blue-500 text-sm mx-4 font-bold text-center ">Get Health Checkup</span>
      </div>
      <div className="col-span-1 bg-white flex flex-col justify-center items-center border-r border-blue-500">
        <TbBrandBooking className="text-blue-500 text-xl" />
        <span className="text-blue-500 text-sm mx-4 font-bold text-center "> Book Virtual Consultation</span>
      </div>
      <div className="col-span-1 bg-white flex flex-col justify-center items-center border-r border-blue-500">
        <BiSolidHomeHeart className="text-blue-500 text-xl" />
        <span className="text-blue-500 text-sm mx-4 font-bold text-center ">Feedback</span>
      </div>
      <div className="col-span-1 bg-white flex flex-col justify-center items-center">
        <LuTestTube className="text-blue-500 text-xl" />
        <span className="text-blue-500 text-sm mx-4 font-bold text-center ">  Book a Test</span>
      </div>
    </div>

{/* swiper part */}
<div className="flex lg:hidden mx-4  items-center font-Poppins justify-center rounded-full  ">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          freeMode={true}
   
          className="custom-swiper" 
      
          loop={true}
          breakpoints={{
            320: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          
          }}
        >
   
             <SwiperSlide>
  <div className="col-span-1 shadow-xl border p-3 border-gray-100 flex flex-col justify-center items-center rounded-xl">
    <MdOutlineLocalHospital className="text-blue-500 text-xl" />
    <span className="text-blue-500 text-sm h-10 font-bold text-center whitespace-nowrap">
      Book Appointment
    </span>
  </div>
</SwiperSlide>
<SwiperSlide>
  <div className="col-span-1 shadow-xl border p-3 border-gray-100 flex flex-col justify-center items-center rounded-xl">
    <AiFillCodepenCircle className="text-blue-500 text-xl" />
    <span className="text-blue-500 text-sm mx-4 h-10 rounded-xl font-bold text-center">Second Opinion</span>
  </div>
</SwiperSlide>

<SwiperSlide>
  <div className="col-span-1 shadow-xl border p-3 border-gray-100 flex flex-col justify-center items-center rounded-xl">
    <TbHealthRecognition className="text-blue-500 text-xl" />
    <span className="text-blue-500 text-sm mx-4 h-10 rounded-xl font-bold text-center">Get Health Checkup</span>
  </div>
</SwiperSlide>

<SwiperSlide>
  <div className="col-span-1 shadow-xl border p-3 border-gray-100 flex flex-col justify-center items-center rounded-xl">
    <TbBrandBooking className="text-blue-500 text-xl" />
    <span className="text-blue-500 text-sm mx-4 h-10 rounded-xl font-bold text-center">Book Virtual Consultation</span>
  </div>
</SwiperSlide>

<SwiperSlide>
  <div className="col-span-1 shadow-xl border p-3 border-gray-100 flex flex-col justify-center items-center rounded-xl">
    <LuTestTube className="text-blue-500 text-xl" />
    <span className="text-blue-500 text-sm mx-4 h-10 rounded-xl font-bold text-center">Feedback</span>
  </div>
</SwiperSlide>

<SwiperSlide>
  <div className="col-span-1 shadow-xl border p-3 border-gray-100 flex flex-col justify-center items-center rounded-xl">
    <AiFillCodepenCircle className="text-blue-500 text-xl" />
    <span className="text-blue-500 text-sm mx-4 h-10 rounded-xl font-bold text-center">Book a Test</span>
  </div>
</SwiperSlide>
          
        </Swiper>
      </div>



    </div>
  )
}

export default Second























































