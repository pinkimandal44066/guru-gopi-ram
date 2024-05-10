import React from "react";
import img from "../../../public/images/img.png";
import img01 from "../../../public/images/img01.png";
import img02 from "../../../public/images/img02.png";
import img03 from "../../../public/images/img03.png";
import img04 from "../../../public/images/img04.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import { MdOutlineCall } from "react-icons/md";
import { NavLink } from "react-router-dom";

const HomeThird = () => {
  
  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="max-w-[300px] mt-8 lg:mt-14 mx-auto">
        <img src={img} alt="" />
      </div>


      {/* Large screens (lg) */}
      <div className="  lg:flex md:flex sm:flex hidden  justify-center  gap-0 mt-6 ">
        <div className="flex ">
          <img src={img01} alt="" className="lg:w-64 md:w-40 w-32 " />
          <img src={img04} alt="" className="lg:w-64 md:w-40 w-32  " />
          <img src={img03} alt="" className="lg:w-64  md:w-40 w-32 " />
          <img src={img02} alt="" className="lg:w-64 md:w-40 w-32 "  />
        </div>
      </div>
    
    

<NavLink to='/centres'>
<button className='text-[#086AAE] lg:flex md:flex sm:flex hidden border-2 
border-gray-100 shadow-2xl bg-white 
font-semibold py-2.5 px-9 mt-8 rounded-lg mx-auto '>
  
    View All
</button>
</NavLink>

      <div className="flex mt-10 lg:hidden md:hidden sm:hidden mx-6  items-center  justify-center   ">
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
          <SwiperSlide>
            <img src={img01} className="w-80 " />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img02} className="w-80 " />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img03} className="w-80 " />
          </SwiperSlide>

          <SwiperSlide>
            <img src={img04} className="w-80 rounded-2xl " />
          </SwiperSlide>
        </Swiper>
      </div>
{/* 
      <button className='text-[#086AAE] flex lg:hidden md:hidden sm:hidden border-2 
  border-gray-100 shadow-2xl bg-white 
  font-semibold py-2.5 px-9 mt-4 rounded-lg mx-auto block
    '>
      View All
    </button> */}


<NavLink to='/centres'>
<button className='text-[#086AAE] flex lg:hidden md:hidden sm:hidden border-2 
  border-gray-100 shadow-2xl bg-white 
  font-semibold py-2.5 px-9 mt-4 rounded-lg mx-auto 
    '>
      View All
    </button>
</NavLink>
    </div>
  );
};

export default HomeThird;