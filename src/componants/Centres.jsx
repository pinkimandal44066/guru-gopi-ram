import React from 'react'
import familyimg from '../../public/images/familyimg.png'
import img from '../../public/images/img.png'
import { CiAirportSign1 } from "react-icons/ci";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import { NavLink } from 'react-router-dom';


const Centres = () => {
  return (
    <>

<div className="flex flex-col items-center justify-center lg:mt-3 md:mt-3 sm:mt-3 mt-7 lg:flex-row">
  <img src={familyimg} alt='' className='w-full lg:w-auto mb-8 lg:mb-0' />
</div>

<div className="max-w-[260px] mt-8 lg:mt-12 mx-auto">
        <img src={img} alt="" />
      </div>

      <div className='max-w-screen-xl mx-auto mt-8 '>
      <div className=' lg:grid-cols-4 lg:grid md:grid-cols-4 sm:hidden hidden 
      mx-40  mb-8'>

   
     {/* LINE PART1 */}

      <div className='flex flex-col shadow-2xl w-52 h-48 rounded-md   p-4'>
     <h1 className='text-3xl  ml-16 mt-2'><CiAirportSign1 /></h1>
     <h1 className='text-xl text-blue-500 font-semibold  ml-6'>Orthopaedics </h1>
     <p className='w-48 text-xs    mt-2'>Offering world-class orthopedic</p>
     <p className='w-44 text-xs  ml-9 '>care, Guru Hospita...</p>


<NavLink to='/orthopaedics'>
<div><button className="  text-sm py-1 px-2   rounded-sm mt-3.5 ml-10 shadow">Read more</button></div>
</NavLink>

      </div>


            {/* PART2 */}

      <div className='flex flex-col shadow-2xl w-52 h-48 rounded-md  p-4'>
     <h1 className='text-3xl  ml-16 mt-2'><CiAirportSign1 /></h1>
     <h1 className='text-xl text-blue-500 font-semibold  ml-4'>Gastro Sciences</h1>
     <p className='w-44 text-xs  ml-1 mt-2'>Ultrasonography Hi-speed CT</p>
     <p className='w-44 text-xs  ml-9'>scan GI Endosco...</p>

     <NavLink to='/gastro'>
<div><button className="  text-sm py-1 px-2   rounded-sm mt-3.5 ml-10 shadow">Read more</button></div>
</NavLink>
      </div>
      

      {/* PART3 */}

    <div className='flex flex-col shadow-2xl w-52 h-48 rounded-md  p-4'>
     <h1 className='text-3xl  ml-16 mt-2'><CiAirportSign1 /></h1>
     <h1 className='text-xl text-blue-500 font-semibold  ml-5'>Neuro Sciences</h1>
     <p className='w-48 text-xs   mt-2'>The center of Neurosciences, at</p>
     <p className='w-44 text-xs  ml-8 '>Guru Hospitals has...</p>
     <NavLink to='/neuro'>
<div><button className="  text-sm py-1 px-2   rounded-sm mt-3.5 ml-10 shadow">Read more</button></div>
</NavLink>
      </div>


      {/* PART4 */}

      <div className='flex flex-col shadow-2xl w-52 h-48 rounded-md  p-4'>
     <h1 className='text-3xl  ml-16 mt-2'><CiAirportSign1 /></h1>
     <h1 className='text-xl text-blue-500 font-semibold  ml-9'>Cardiology</h1>
     <p className='w-48 text-xs   mt-2'>A cardiologist is a medical doctor</p>
     <p className='w-44 text-xs  ml-6 '>who studies and treats...</p>

     <NavLink to='/cardiology'>
<div><button className="  text-sm py-1 px-2   rounded-sm mt-3.5 ml-10 shadow">Read more</button></div>
</NavLink>
      </div>
   
    </div>


{/* part5 */}

 <div className=' lg:grid-cols-4 lg:grid md:grid-cols-4 sm:hidden hidden 
      mx-40 lg:mt-6 md:mt-6 mb-8'>
   
   <div className='flex flex-col shadow-2xl w-52 h-48 rounded-md  p-4'>
     <h1 className='text-3xl  ml-16 mt-2'><CiAirportSign1 /></h1>
     <h1 className='text-xl text-blue-500 font-semibold  ml-4'>General Surgery</h1>
     <p className='w-48 text-xs ml-2  mt-2'>Offering world-class General
</p>
     <p className='w-44 text-xs  ml-3 '>Surgery care, Guru Hospita...</p>
<div><button className="  text-sm py-1 px-2   rounded-sm mt-3.5 ml-11 shadow">Read more</button></div>
      </div>
    

    {/* part6 */}


      <div className='flex flex-col shadow-2xl w-52 h-48 rounded-md  p-4'>
     <h1 className='text-3xl  ml-16 mt-2'><CiAirportSign1 /></h1>
     <h1 className='text-xl text-blue-500 font-semibold  ml-2'>  General Medicine</h1>
     <p className='w-48 text-xs ml-1  mt-2'>Offering world-class General

</p>
     <p className='w-44 text-xs  ml-5 '>Medicine, Guru Hospita...</p>
<div><button className="  text-sm py-1 px-2   rounded-sm mt-3.5 ml-12 shadow">Read more</button></div>
      </div>
      
  {/* part7 */}

      <div className='flex flex-col shadow-2xl w-52 h-48 rounded-md  p-4'>
     <h1 className='text-3xl  ml-16 mt-2'><CiAirportSign1 /></h1>
     <h1 className='text-xl text-blue-500 font-semibold  ml-5'>  Obstetrics an...</h1>
     <p className='w-48 text-xs   mt-2'>The center of Neurosciences, at</p>
     <p className='w-44 text-xs  ml-10 '>Guru Hospitals has...</p>
<div><button className="  text-sm py-1 px-2   rounded-sm mt-3.5 ml-14 shadow">Read more</button></div>
      </div>
      
 {/* part8 */}

      <div className='flex flex-col shadow-2xl w-52 h-48 rounded-md  p-4'>
     <h1 className='text-3xl  ml-16 mt-2'><CiAirportSign1 /></h1>
     <h1 className='text-xl text-blue-500 font-semibold  ml-11'>    Pediatrics</h1>
     <p className='w-48 text-xs ml-5  mt-2'>We take great pride in of </p>
     <p className='w-44 text-xs  ml-14 '>Pediatrics...</p>
<div><button className="  text-sm py-1 px-2   rounded-sm mt-3.5 ml-14 shadow">Read more</button></div>
      </div>
        


        {/* part9 */}
      </div>

      <div className=' lg:grid-cols-4 lg:grid md:grid-cols-4 sm:hidden hidden 
      mx-40 lg:mt-6 md:mt-6  '>
   
   <div className='flex flex-col shadow-2xl w-52 h-48 rounded-md  p-4'>
     <h1 className='text-3xl  ml-16 mt-2'><CiAirportSign1 /></h1>
     <h1 className='text-xl text-blue-500 font-semibold  ml-12'>     Urology</h1>
     <p className='w-48 text-xs ml-1 mt-2'>Offering world-class Urology,</p>
     <p className='w-44 text-xs  ml-7 '>
 Guru Gopiram Hospita...</p>
<div><button className="  text-sm py-1 px-2   rounded-sm mt-3.5 ml-12 shadow">Read more</button></div>
      </div>


{/* part10 */}

      <div className='flex flex-col shadow-2xl w-52 h-48 rounded-md  p-4'>
     <h1 className='text-3xl  ml-16 mt-2'><CiAirportSign1 /></h1>
     <h1 className='text-xl text-blue-500 font-semibold w-40 ml-4'>     Neuro Medicine</h1>
     <p className='w-48 text-xs ml-3  mt-2'>Offering world-class Neuro
</p>
     <p className='w-44 text-xs  ml-5 '>
     Medicine, Guru Hospita...</p>
<div><button className="  text-sm py-1 px-2   rounded-sm mt-3.5 ml-12 shadow">Read more</button></div>
      </div>
   
  {/* part11 */}
      <div className='flex flex-col shadow-2xl w-52 h-48 rounded-md  p-4'>
     <h1 className='text-3xl  ml-16 mt-2'><CiAirportSign1 /></h1>
     <h1 className='text-xl text-blue-500 font-semibold w-40 ml-4'>        Oophorectomy</h1>
     <p className='w-48 text-xs  mt-2'>The center of Oophorectomy, at

</p>
     <p className='w-44 text-xs  ml-5 '>
     Guru Gopiram Hospitals...</p>
<div><button className="  text-sm py-1 px-2   rounded-sm mt-3.5 ml-12 shadow">Read more</button></div>
      </div>



{/* part12 */}

      <div className='flex flex-col shadow-2xl w-52 h-48 rounded-md  p-4'>
     <h1 className='text-3xl  ml-16 mt-2'><CiAirportSign1 /></h1>
     <h1 className='text-xl text-blue-500 font-semibold w-40 ml-16'> Skin</h1>
     <p className='w-48 text-xs ml-6  mt-2'>The skin department, at


</p>
     <p className='w-44 text-xs  ml-3 '>
     Guru Gopiram Hospitals has...</p>
<div><button className="  text-sm py-1 px-2   rounded-sm mt-3.5 ml-12 shadow">Read more</button></div>
      </div>


{/* part13 */}

      <div className='flex flex-col shadow-2xl w-52 h-48 rounded-md  p-4 mt-8 '>
     <h1 className='text-3xl  ml-16 mt-2'><CiAirportSign1 /></h1>
     <h1 className='text-xl text-blue-500 font-semibold w-40 ml-16'> ENT</h1>
     <p className='w-48 text-xs ml-8  mt-2'>The ENT department</p>
   
   <NavLink to='/ent'>
<div><button className="  text-sm py-1 px-2   rounded-sm mt-3.5 ml-12 shadow">Read more</button></div>
</NavLink>
      </div>



      </div>


     
      <br/>
      <br/>
      </div>








      {/* mobile screen */}













      <div className="flex -mt-20 lg:hidden  mx-6  items-center  justify-center   ">
        <Swiper
          slidesPerView={1}
          spaceBetween={80}
          freeMode={true}
          loop={true}
          pagination={true}
      modules={[EffectCoverflow, Pagination, Navigation]}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
          }}
        >
          <SwiperSlide >

          <div className='flex flex-col shadow-2xl w-60 h-48 rounded-md ml-10 p-4'>
     <h1 className='text-3xl  ml-20 mt-2'><CiAirportSign1 /></h1>
     <h1 className='text-xl text-blue-500 font-semibold  ml-10'>Orthopaedics </h1>
     <p className='w-44 text-xs  ml-4 mt-2'>Offering world-class orthopedic</p>
     <p className='w-44 text-xs  ml-12 '>care, Guru Hospita...</p>
     <NavLink to='/orthopaedics'>
<div><button className="  text-sm py-1 px-2   rounded-sm mt-3.5 ml-16 shadow">Read more</button></div>
</NavLink>
     </div>

 

          {/* <div className='flex flex-col shadow-2xl w-60 h-48 rounded-md ml-10 p-4'>
     <h1 className='text-3xl  ml-20 mt-2'><CiAirportSign1 /></h1>
     <h1 className='text-xl text-blue-500 font-semibold  ml-5'>Orthopaedics an...</h1>
     <p className='w-44 text-xs  ml-5 mt-2'>Offering world-class orthopedic
care, Guru Hospita...</p>
<div><button className="  text-sm py-1 px-2   rounded-sm mt-3.5 ml-14 shadow">Read more</button></div>
      </div> */}
          </SwiperSlide>


          <SwiperSlide>

          <div className='flex flex-col shadow-2xl w-60 h-48 rounded-md ml-10  p-4'>
     <h1 className='text-3xl  ml-20 mt-2'><CiAirportSign1 /></h1>
     <h1 className='text-xl text-blue-500 font-semibold  ml-8'>Gastro Sciences</h1>
     <p className='w-44 text-xs  ml-7 mt-2'>Ultrasonography Hi-speed CT</p>
     <p className='w-44 text-xs  ml-14'>scan GI Endosco...</p>
     
     <NavLink to='/gastro'>
<div><button className="  text-sm py-1 px-2   rounded-sm mt-3.5 ml-16 shadow">Read more</button></div>
</NavLink>
      </div>
               
          {/* <div className='flex flex-col shadow-2xl w-60 h-48 rounded-md ml-10  p-4'>
     <h1 className='text-3xl  ml-20 mt-2'><CiAirportSign1 /></h1>
     <h1 className='text-xl text-blue-500 font-semibold  ml-5'>Orthopaedics an...</h1>
     <p className='w-44 text-xs  ml-5 mt-2'>Offering world-class orthopedic
care, Guru Hospita...</p>
<div><button className="  text-sm py-1 px-2   rounded-sm mt-3.5 ml-14 shadow">Read more</button></div>
      </div> */}
          </SwiperSlide>

          <SwiperSlide>

          <div className='flex flex-col shadow-2xl w-60 h-48 rounded-md ml-10  p-4'>
     <h1 className='text-3xl  ml-20 mt-2'><CiAirportSign1 /></h1>
     <h1 className='text-xl text-blue-500 font-semibold  ml-8'>Neuro Sciences</h1>
     <p className='w-44 text-xs  ml-5 mt-2'>The center of Neurosciences, at</p>
     <p className='w-44 text-xs  ml-12 '>Guru Hospitals has...</p>
     <NavLink to='/neuro'>
<div><button className="  text-sm py-1 px-2   rounded-sm mt-3.5 ml-16 shadow">Read more</button></div>
</NavLink>
      </div>



          {/* <div className='flex flex-col shadow-2xl w-60 h-48 rounded-md ml-10  p-4'>
     <h1 className='text-3xl  ml-20 mt-2'><CiAirportSign1 /></h1>
     <h1 className='text-xl text-blue-500 font-semibold  ml-5'>Orthopaedics an...</h1>
     <p className='w-44 text-xs  ml-5 mt-2'>Offering world-class orthopedic
care, Guru Hospita...</p>
<div><button className="  text-sm py-1 px-2   rounded-sm mt-3.5 ml-14 shadow">Read more</button></div>
      </div> */}
          </SwiperSlide>


          <SwiperSlide>




          <div className='flex flex-col shadow-2xl w-60 h-48 rounded-md ml-10  p-4'>
     <h1 className='text-3xl  ml-20 mt-2'><CiAirportSign1 /></h1>
     <h1 className='text-xl text-blue-500 font-semibold  ml-12'>Cardiology</h1>
     <p className='w-44 text-xs  ml-4 mt-2'>A cardiologist is a medical doctor</p>
     <p className='w-44 text-xs  ml-10 '>who studies and treats...</p>
     
     <NavLink to='/cardiology'>
<div><button className="  text-sm py-1 px-2   rounded-sm mt-3.5 ml-16 shadow">Read more</button></div>
</NavLink>
      </div>


          {/* <div className='flex flex-col shadow-2xl w-60 h-48 rounded-md ml-10  p-4'>
     <h1 className='text-3xl  ml-20 mt-2'><CiAirportSign1 /></h1>
     <h1 className='text-xl text-blue-500 font-semibold  ml-5'>Orthopaedics an...</h1>
     <p className='w-44 text-xs  ml-5 mt-2'>Offering world-class orthopedic
care, Guru Hospita...</p>
<div><button className="  text-sm py-1 px-2   rounded-sm mt-3.5 ml-14 shadow">Read more</button></div>
      </div> */}
          </SwiperSlide>


          <SwiperSlide>




          <div className='flex flex-col shadow-2xl w-60 h-48 rounded-md ml-10  p-4'>
     <h1 className='text-3xl  ml-20 mt-2'><CiAirportSign1 /></h1>
     <h1 className='text-xl text-blue-500 font-semibold  ml-8'>General Surgery</h1>
     <p className='w-48 text-xs ml-8  mt-2'>Offering world-class General
</p>
     <p className='w-44 text-xs  ml-8 '>Surgery care, Guru Hospita...</p>
<div><button className="  text-sm py-1 px-2   rounded-sm mt-3.5 ml-16 shadow">Read more</button></div>
      </div>

          {/* <div className='flex flex-col shadow-2xl w-60 h-48 rounded-md ml-10  p-4'>
     <h1 className='text-3xl  ml-20 mt-2'><CiAirportSign1 /></h1>
     <h1 className='text-xl text-blue-500 font-semibold  ml-5'>Orthopaedics an...</h1>
     <p className='w-44 text-xs  ml-5 mt-2'>Offering world-class orthopedic
care, Guru Hospita...</p>
<div><button className="  text-sm py-1 px-2   rounded-sm mt-3.5 ml-14 shadow">Read more</button></div>
      </div> */}
          </SwiperSlide>


          <SwiperSlide>



               
      <div className='flex flex-col shadow-2xl w-60 h-48 rounded-md ml-10  p-4'>
     <h1 className='text-3xl  ml-20 mt-2'><CiAirportSign1 /></h1>
     <h1 className='text-xl text-blue-500 font-semibold  ml-6'>  General Medicine</h1>
     <p className='w-48 text-xs ml-8  mt-2'>Offering world-class General

</p>
     <p className='w-44 text-xs  ml-9 '>Medicine, Guru Hospita...</p>
<div><button className="  text-sm py-1 px-2   rounded-sm mt-3.5 ml-16 shadow">Read more</button></div>
      </div>

          {/* <div className='flex flex-col shadow-2xl w-60 h-48 rounded-md ml-10  p-4'>
     <h1 className='text-3xl  ml-20 mt-2'><CiAirportSign1 /></h1>
     <h1 className='text-xl text-blue-500 font-semibold  ml-5'>Orthopaedics an...</h1>
     <p className='w-44 text-xs  ml-5 mt-2'>Offering world-class orthopedic
care, Guru Hospita...</p>
<div><button className="  text-sm py-1 px-2   rounded-sm mt-3.5 ml-14 shadow">Read more</button></div>
      </div> */}
          </SwiperSlide>


          <SwiperSlide>


          <div className='flex flex-col shadow-2xl w-60 h-48 rounded-md ml-10  p-4'>
     <h1 className='text-3xl  ml-20 mt-2'><CiAirportSign1 /></h1>
     <h1 className='text-xl text-blue-500 font-semibold  ml-8'>  Obstetrics an...</h1>
     <p className='w-48 text-xs ml-4  mt-2'>The center of Neurosciences, at</p>
     <p className='w-44 text-xs  ml-12 '>Guru Hospitals has...</p>
<div><button className="  text-sm py-1 px-2   rounded-sm mt-3.5 ml-16 shadow">Read more</button></div>
      </div>


          {/* <div className='flex flex-col shadow-2xl w-60 h-48 rounded-md ml-10  p-4'>
     <h1 className='text-3xl  ml-20 mt-2'><CiAirportSign1 /></h1>
     <h1 className='text-xl text-blue-500 font-semibold  ml-5'>Orthopaedics an...</h1>
     <p className='w-44 text-xs  ml-5 mt-2'>Offering world-class orthopedic
care, Guru Hospita...</p>
<div><button className="  text-sm py-1 px-2   rounded-sm mt-3.5 ml-14 shadow">Read more</button></div>
      </div> */}
          </SwiperSlide>



          <SwiperSlide>


               
      <div className='flex flex-col shadow-2xl w-60 h-48 rounded-md ml-10  p-4'>
     <h1 className='text-3xl  ml-20 mt-2'><CiAirportSign1 /></h1>
     <h1 className='text-xl text-blue-500 font-semibold  ml-14'>    Pediatrics</h1>
     <p className='w-48 text-xs ml-10  mt-2'>We take great pride in of </p>
     <p className='w-44 text-xs  ml-16 '>Pediatrics...</p>
<div><button className="  text-sm py-1 px-2   rounded-sm mt-3.5 ml-16 shadow">Read more</button></div>
      </div>

          {/* <div className='flex flex-col shadow-2xl w-60 h-48 rounded-md ml-10  p-4'>
     <h1 className='text-3xl  ml-20 mt-2'><CiAirportSign1 /></h1>
     <h1 className='text-xl text-blue-500 font-semibold  ml-5'>Orthopaedics an...</h1>
     <p className='w-44 text-xs  ml-5 mt-2'>Offering world-class orthopedic
care, Guru Hospita...</p>
<div><button className="  text-sm py-1 px-2   rounded-sm mt-3.5 ml-14 shadow">Read more</button></div>
      </div> */}
          </SwiperSlide>



          <SwiperSlide>


          <div className='flex flex-col shadow-2xl w-60 h-48 rounded-md ml-10  p-4'>
     <h1 className='text-3xl  ml-20 mt-2'><CiAirportSign1 /></h1>
     <h1 className='text-xl text-blue-500 font-semibold  ml-16'>     Urology</h1>
     <p className='w-48 text-xs ml-6  mt-2'>Offering world-class Urology,</p>
     <p className='w-44 text-xs  ml-10 '>
 Guru Gopiram Hospita...</p>
<div><button className="  text-sm py-1 px-2   rounded-sm mt-3.5 ml-16 shadow">Read more</button></div>
      </div>


          {/* <div className='flex flex-col shadow-2xl w-60 h-48 rounded-md ml-10  p-4'>
     <h1 className='text-3xl  ml-20 mt-2'><CiAirportSign1 /></h1>
     <h1 className='text-xl text-blue-500 font-semibold  ml-5'>Orthopaedics an...</h1>
     <p className='w-44 text-xs  ml-5 mt-2'>Offering world-class orthopedic
care, Guru Hospita...</p>
<div><button className="  text-sm py-1 px-2   rounded-sm mt-3.5 ml-14 shadow">Read more</button></div>
      </div> */}
          </SwiperSlide>



          <SwiperSlide>



          <div className='flex flex-col shadow-2xl w-60 h-48 rounded-md ml-10  p-4'>
     <h1 className='text-3xl  ml-20 mt-2'><CiAirportSign1 /></h1>
     <h1 className='text-xl text-blue-500 font-semibold w-40 ml-8'>     Neuro Medicine</h1>
     <p className='w-48 text-xs ml-8  mt-2'>Offering world-class Neuro
</p>
     <p className='w-44 text-xs  ml-9 '>
     Medicine, Guru Hospita...</p>
<div><button className="  text-sm py-1 px-2   rounded-sm mt-3.5 ml-16 shadow">Read more</button></div>
      </div>
   
          {/* <div className='flex flex-col shadow-2xl w-60 h-48 rounded-md ml-10  p-4'>
     <h1 className='text-3xl  ml-20 mt-2'><CiAirportSign1 /></h1>
     <h1 className='text-xl text-blue-500 font-semibold  ml-5'>Orthopaedics an...</h1>
     <p className='w-44 text-xs  ml-5 mt-2'>Offering world-class orthopedic
care, Guru Hospita...</p>
<div><button className="  text-sm py-1 px-2   rounded-sm mt-3.5 ml-14 shadow">Read more</button></div>
      </div> */}
          </SwiperSlide>



          <SwiperSlide>


          <div className='flex flex-col shadow-2xl w-60 h-48 rounded-md ml-10  p-4'>
     <h1 className='text-3xl  ml-20 mt-2'><CiAirportSign1 /></h1>
     <h1 className='text-xl text-blue-500 font-semibold w-40 ml-9'>        Oophorectomy</h1>
     <p className='w-48 text-xs ml-4  mt-2'>The center of Oophorectomy, at

</p>
     <p className='w-44 text-xs  ml-9 '>
     Guru Gopiram Hospitals...</p>
<div><button className="  text-sm py-1 px-2   rounded-sm mt-3.5 ml-16 shadow">Read more</button></div>
      </div>

          {/* <div className='flex flex-col shadow-2xl w-60 h-48 rounded-md ml-10  p-4'>
     <h1 className='text-3xl  ml-20 mt-2'><CiAirportSign1 /></h1>
     <h1 className='text-xl text-blue-500 font-semibold  ml-5'>Orthopaedics an...</h1>
     <p className='w-44 text-xs  ml-5 mt-2'>Offering world-class orthopedic
care, Guru Hospita...</p>
<div><button className="  text-sm py-1 px-2   rounded-sm mt-3.5 ml-14 shadow">Read more</button></div>
      </div> */}
          </SwiperSlide>



          <SwiperSlide>

          <div className='flex flex-col shadow-2xl w-60 h-48 rounded-md ml-10  p-4'>
     <h1 className='text-3xl  ml-20 mt-2'><CiAirportSign1 /></h1>
     <h1 className='text-xl text-blue-500 font-semibold w-40 ml-20'> Skin</h1>
     <p className='w-48 text-xs ml-10  mt-2'>The skin department, at


</p>
     <p className='w-44 text-xs  ml-6 '>
     Guru Gopiram Hospitals has...</p>
<div><button className="  text-sm py-1 px-2   rounded-sm mt-3.5 ml-16 shadow">Read more</button></div>
      </div>

{/*                
          <div className='flex flex-col shadow-2xl w-60 h-48 rounded-md ml-10  p-4'>
     <h1 className='text-3xl  ml-20 mt-2'><CiAirportSign1 /></h1>
     <h1 className='text-xl text-blue-500 font-semibold  ml-5'>Orthopaedics an...</h1>
     <p className='w-44 text-xs  ml-5 mt-2'>Offering world-class orthopedic
care, Guru Hospita...</p>
<div><button className="  text-sm py-1 px-2   rounded-sm mt-3.5 ml-14 shadow">Read more</button></div>
      </div> */}
          </SwiperSlide>



          <SwiperSlide>


          <div className='flex flex-col shadow-2xl w-60 h-48 rounded-md ml-10  p-4'>
     <h1 className='text-3xl  ml-20 mt-2'><CiAirportSign1 /></h1>
     <h1 className='text-xl text-blue-500 font-semibold w-40 ml-20'> ENT</h1>
     <p className='w-48 text-xs ml-12  mt-2'>The ENT department</p>
   
     <NavLink to='/ent'>
<div><button className="  text-sm py-1 px-2   rounded-sm mt-3.5 ml-16 shadow">Read more</button></div>
     </NavLink>
      </div>

          {/* <div className='flex flex-col shadow-2xl w-60 h-48 rounded-md ml-10  p-4'>
     <h1 className='text-3xl  ml-20 mt-2'><CiAirportSign1 /></h1>
     <h1 className='text-xl text-blue-500 font-semibold  ml-5'>Orthopaedics an...</h1>
     <p className='w-44 text-xs  ml-5 mt-2'>Offering world-class orthopedic
care, Guru Hospita...</p>
<div><button className="  text-sm py-1 px-2   rounded-sm mt-3.5 ml-14 shadow">Read more</button></div>
      </div> */}
          </SwiperSlide>

        </Swiper>
      </div>
    </>
  )
}

export default Centres


