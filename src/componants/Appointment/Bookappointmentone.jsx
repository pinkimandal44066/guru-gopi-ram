import React from 'react'
import img55 from '../../../public/images/img55.png';
import img61 from '../../../public/images/img61.png'


import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";


import { EffectCoverflow,  Navigation } from "swiper/modules";






import { Swiper, SwiperSlide } from "swiper/react";

const Bookappointmentone = () => {
  return (
    <>
       <div className='max-w-screen-xl lg:mx-auto '>
        <div className="lg:flex md:flex sm:flex justify-between lg:mx-48 md:mx-10 ">
           <div className="flex items-center mx-5"> 
             <img
               className=" lg:w-28   w-20 lg:mr-4 lg:mt-10 "
               src={img55}
               alt=""
           />
           
           <div className=" lg:mt-10 md:mt-10 sm:-mt-0   ">
               <h1 className="text-lg font-bold mx-6 lg:mx-0 ">
                 Dr. K K Singh
               </h1>
               <p className="text-sm lg:w-60 mx-6 lg:mx-0 ">
               
                 CHAIRMAN CARDIAC SCIENCE I Guru Gopiram Hospital
               </p>
               

             
               <h1 className="text-xs shadow-2xl bg-[#D9D9D9] lg:rounded-sm  rounded-md mt-2  lg:w-72
                 lg:p-2  w-52  lg:py-1 mx-6  lg:mx-0 p-7 py-2">
                 Diabetology/Endocrinology | Diabetology/Endocrinology | Endocrinology
               </h1>
             </div>

           
           </div>


                      
 <div className='mt-10 md:mt-20 md:mx-0 rounded-md border border-gray-400 h-14 w-48 bg-[#D9D9D9] text-sm
 lg:block md:block sm:block hidden'>
   <h1 className="font-bold mx-[67px]  mt-1">40 years</h1>
   <hr className="border-gray-400" />
           <h1 className="font-bold mx-[70px] mt-1">₹2500</h1>
                </div>






                <div className="mt-7 lg:mx-0 md:mx-0 sm:mx-0 flex justify-center gap-10
  border-t border-b border-gray-400 h-12  w-full  bg-text-sm lg:hidden md:hidden sm:hidden  ">
   <h1 className="font-bold text-xl mt-2">40 years</h1>
   <hr className="border border-gray-400 h-full mx-2" />
   <h1 className="font-bold text-xl mt-2">₹2500</h1>
 </div>


















           </div>     



           
<div className='max-w-screen-xl lg:mx-auto '>

  <div className='lg:flex md:flex sm: justify-between lg:mx-20  mt-10 mx-4  '>
  <div className='lg:w-[50%]  '>
  <div className='shadow-2xl rounded-xl '>
  <h1 className='text-2xl  border rounded-t-md border-[#086AAE] h-10   '>
    <span className='mx-5'>About Us</span>
  </h1>
    <p className='mt-4 mx-5'>Demo Text Prof. (Dr.) KK Singh is Chairmant Guru Gopiram Hospital for Diabetes and Allied Sciences.
Director, National Diabetes Obesity and Cholesterol Foundation (NDOC). President, Diabetes
Foundation (India). Former Professor (Medicine), AIIMS, New Delhi. Major Achievements: -
More than 350 Published Research papers (Analyzed by Stanford University to be among to 2% Scientist in Diabetes from India ranked Clobally). • Editor-ln-Chief: Diabetes & Metabolic Syndrome: Clinical Research & Reviews. (Elsevier)t Clinical Keys (Elsevier) • Associate Editor: Journal of Diabetes (USA), European Journal of Clinical Nutrition . Member Editorial Advisory
Board of British Medical Journal • Member of BMJS Regional Advisory Board for South Asia •
Author of Book: Diabetes with Delights and Diabetes ke saath kushaal jeevan (Bloomsbury)
Dr Anoop Misra has been awarded highest award for medicine in India Dr BC Roy award
(2006), prestigious National Honor, Padma Shree (2007) and Outstanding investigator Award
from World India Diabetes Foundation (2013).</p>
  </div>

<div className='lg:mt-10 mt-16 shadow-2xl  rounded-xl'>
<h1 className='text-2xl  border rounded-t-md border-[#086AAE] lg:h-10 h-12   '>
    <span className='mx-5  '>Education  </span>
  </h1>

  <p className='mt-4 mx-5 lg:h-8 h-10 mb-10'>MBBS, MD</p>
</div>
  </div>

  





<div className="max-w-screen-xl lg:mx-auto lg:w-[40%]  md:w-[40%] sm:w-[50%]  sm:mx-48 
gap-0 md:mx-2  bg-white rounded-md shadow-md mb-10 h-96 ">
  <h1 className='text-xl border rounded-t-md border-[#086AAE] h-10'>
    <span className='mx-2'>Schedule Appointment</span>
  </h1>











  <Swiper
    slidesPerView={1}
    spaceBetween={0} 
    freeMode={true}
    
    className="custom-swiper"
    loop={true}
    navigation={true} 
    
    modules={[EffectCoverflow, Navigation]}
    breakpoints={{
      320: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      640: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
    }}
  >



    <SwiperSlide className=' mx-1'>
    <div>
      <h2 className="mt-4 font-semibold mb-4 flex justify-center">May 2024</h2>
      </div>
    </SwiperSlide>

    <SwiperSlide>
    <div>
      <h2 className="mt-4 font-semibold mb-4 flex justify-center">Jun 2024</h2>
      </div>
    </SwiperSlide>

    <SwiperSlide>
      <div>
      <h2 className="mt-4 font-semibold mb-4 flex justify-center">July 2024</h2>
      </div>
    </SwiperSlide>

    <SwiperSlide>
    <div>
      <h2 className="mt-4 font-semibold mb-4 flex justify-center">Aug 2024</h2>
      </div>
    </SwiperSlide>

    <SwiperSlide>
    <div>
      <h2 className="mt-4 font-semibold mb-4 flex justify-center">Sep 2024</h2>
      </div>
    </SwiperSlide>

    <SwiperSlide>
    <div>
      <h2 className="mt-4 font-semibold mb-4 flex justify-center">Oct 2024</h2>
      </div>
    </SwiperSlide>

    <SwiperSlide>
    <div>
      <h2 className="mt-4 font-semibold mb-4 flex justify-center">Nov 2024</h2>
      </div>
    </SwiperSlide>

    <SwiperSlide>
    <div>
      <h2 className="mt-4 font-semibold mb-4 flex justify-center">Dec 2024</h2>
      </div>
    </SwiperSlide>


    <SwiperSlide>
    <div>
      <h2 className="mt-4 font-semibold mb-4 flex justify-center">Jan 2024</h2>
      </div>
    </SwiperSlide>
<SwiperSlide>
    <div>
      <h2 className="mt-4 font-semibold mb-4 flex justify-center">Feb 2024</h2>
      </div>
    </SwiperSlide>
<SwiperSlide>
    <div>
      <h2 className="mt-4 font-semibold mb-4 flex justify-center">Mar 2024</h2>
      </div>
    </SwiperSlide>
<SwiperSlide>
    <div>
      <h2 className="mt-4 font-semibold mb-4 flex justify-center">April 2024</h2>
      </div>
    </SwiperSlide>
  </Swiper>





  <Swiper
    slidesPerView={4}
    spaceBetween={0} 
    freeMode={true}
    
    className="custom-swiper"
    loop={true}
    navigation={true} 
    
    modules={[EffectCoverflow, Navigation]}
    breakpoints={{
      320: {
        slidesPerView: 4,
        spaceBetween: 0,
      },
      640: {
        slidesPerView: 4,
        spaceBetween: 0,
      },
    }}
  >
    <SwiperSlide className=' mx-1'>
      <div className="lg:mx-2 mx-1 my-2 border border-[#086AAE] lg:h-12 lg:w-20 rounded-md text-[#086AAE] hover:text-white hover:bg-[#086AAE] hover:border-[#086AAE]">
        <h3 className="font-semibold mx-6 text-xs mt-2">Wed</h3>
        <ul>
          <li className="cursor-pointer text-xs lg:mx-3 mx-2.5">May 2024</li>
        </ul>
      </div>
    </SwiperSlide>

    <SwiperSlide>
      <div className="lg:mx-2 mx-1 my-2 border border-[#086AAE] lg:h-12 lg:w-20 rounded-md text-[#086AAE] hover:text-white hover:bg-[#086AAE] hover:border-[#086AAE]">
        <h3 className="font-semibold mx-6 text-xs mt-2">Thu</h3>
        <ul>
          <li className="cursor-pointer text-xs lg:mx-3 mx-2.5">May 2024</li>
        </ul>
      </div>
    </SwiperSlide>

    <SwiperSlide>
      <div className="lg:mx-2 mx-1 my-2 border border-[#086AAE] lg:h-12 lg:w-20 rounded-md text-[#086AAE] hover:text-white hover:bg-[#086AAE] hover:border-[#086AAE]">
        <h3 className="font-semibold mx-6 text-xs mt-2">Fri</h3>
        <ul>
          <li className="cursor-pointer text-xs lg:mx-3 mx-2.5">May 2024</li>
        </ul>
      </div>
    </SwiperSlide>

    <SwiperSlide>
      <div className="lg:mx-2 mx-1 my-2 border border-[#086AAE] lg:h-12 lg:w-20 rounded-md text-[#086AAE] hover:text-white hover:bg-[#086AAE] hover:border-[#086AAE]">
        <h3 className="font-semibold mx-6 text-xs mt-2">Sat</h3>
        <ul>
          <li className="cursor-pointer text-xs lg:mx-3 mx-2.5">May 2024</li>
        </ul>
      </div>
    </SwiperSlide>

    <SwiperSlide>
      <div className="lg:mx-2 mx-1 my-2 border border-[#086AAE] lg:h-12 lg:w-20 rounded-md text-[#086AAE] hover:text-white hover:bg-[#086AAE] hover:border-[#086AAE]">
        <h3 className="font-semibold mx-6 text-xs mt-2">Sun</h3>
        <ul>
          <li className="cursor-pointer text-xs lg:mx-3 mx-2.5">May 2024</li>
        </ul>
      </div>
    </SwiperSlide>

    <SwiperSlide>
      <div className="lg:mx-2 mx-1 my-2 border border-[#086AAE] lg:h-12 lg:w-20 rounded-md text-[#086AAE] hover:text-white hover:bg-[#086AAE] hover:border-[#086AAE]">
        <h3 className="font-semibold mx-6 text-xs mt-2">Mon</h3>
        <ul>
          <li className="cursor-pointer text-xs lg:mx-3 mx-2.5">May 2024</li>
        </ul>
      </div>
    </SwiperSlide>

    <SwiperSlide>
      <div className="lg:mx-2 mx-1 my-2 border border-[#086AAE] lg:h-12 lg:w-20 rounded-md text-[#086AAE] hover:text-white hover:bg-[#086AAE] hover:border-[#086AAE]">
        <h3 className="font-semibold mx-6 text-xs mt-2">Tue</h3>
        <ul>
          <li className="cursor-pointer text-xs lg:mx-3 mx-2.5">May 2024</li>
        </ul>
      </div>
    </SwiperSlide>
  </Swiper>

  <img src={img61} alt='' className='h-5 mx-2 mt-2' />
  
<div className='flex mx-2'>
<div className="lg:mx-2 mx-1 my-2 border border-[#086AAE] lg:h-7 mt-4  cursor-pointer
      lg:w-16 w-20 rounded-md text-[#086AAE] hover:text-white hover:bg-[#086AAE] hover:border-[#086AAE]">
        <h3 className="font-semibold lg:mx-1 mx-1 mt-3 text-xs lg:mt-1">10:30 AM</h3>
      </div>
      <div className="lg:mx-2 w-20 mx-1 my-2 border border-[#086AAE] lg:h-7 mt-4  cursor-pointer
      lg:w-16 rounded-md text-[#086AAE] hover:text-white hover:bg-[#086AAE] hover:border-[#086AAE]">
        <h3 className="font-semibold lg:mx-1 mx-1 mt-3 text-xs lg:mt-1">10:45 AM</h3>
      </div>
      <div className="lg:mx-2 mx-1 my-2 border border-[#086AAE] lg:h-7 mt-4  cursor-pointer
      lg:w-16 w-20 rounded-md text-[#086AAE] hover:text-white hover:bg-[#086AAE] hover:border-[#086AAE]">
        <h3 className="font-semibold lg:mx-1 mx-1 mt-3 text-xs lg:mt-1">11:00 AM</h3>
      </div>

      <div className="lg:mx-2 mx-1 my-2 border border-[#086AAE] lg:h-7 mt-4  cursor-pointer
      lg:w-16 w-20 h-10 rounded-md text-[#086AAE] hover:text-white hover:bg-[#086AAE] hover:border-[#086AAE]">
        <h3 className="font-semibold lg:mx-1 mx-1 mt-3 text-xs lg:mt-1">11:15 AM</h3>
      </div>

      <div className="lg:mx-2 mx-1 my-2 border border-[#086AAE] lg:h-7 mt-4 lg:block md:block hidden  cursor-pointer
      lg:w-16 w- rounded-md text-[#086AAE] hover:text-white hover:bg-[#086AAE] hover:border-[#086AAE]">
        <h3 className="font-semibold lg:mx-1 mx-1 mt-3 text-xs lg:mt-1">11:30 AM</h3>
      </div>


    
</div>


<div className='flex mx-2'>

<div className="lg:mx-2 mx-1 my-2 border border-[#086AAE] lg:h-7 mt-4 lg:hidden md:hidden block  cursor-pointer
      lg:w-16 w-20   rounded-md text-[#086AAE] hover:text-white hover:bg-[#086AAE] hover:border-[#086AAE]">
        <h3 className="font-semibold lg:mx-1 mx-1 mt-3 text-xs lg:mt-1">11:30 AM</h3>
      </div>
<div className="lg:mx-2 mx-1 my-2 border border-[#086AAE] lg:h-7 mt-4 h-10  cursor-pointer
      lg:w-16 w-20 rounded-md text-[#086AAE] hover:text-white hover:bg-[#086AAE] hover:border-[#086AAE]">
        <h3 className="font-semibold lg:mx-1 mx-3 mt-3 text-xs lg:mt-1">11:45 AM</h3>
      </div>


      <div className="lg:mx-2 mx-1 my-2 border border-[#086AAE] lg:h-7 mt-4 h-10 cursor-pointer
      lg:w-16 w-20 rounded-md text-[#086AAE] hover:text-white hover:bg-[#086AAE] hover:border-[#086AAE]">
        <h3 className="font-semibold lg:mx-1 mx-3 mt-3 text-xs lg:mt-1">12:00 PM</h3>
      </div>

</div>

<div className='text-center items-center mt-5 bg-[#086AAE] rounded-sm text-white p-2 text-sm mx-5'>
<button className=' '>Book Appointment</button></div>

</div>

  </div>
</div>               
           </div>
    </>
  )
}

export default Bookappointmentone
