import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import img1 from '../../../public/images/img1.png'
import img2 from '../../../public/images/img2.png'
import img3 from '../../../public/images/img3.png'
import photo2 from '../../../public/images/photo2.png'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import '../Swipercssfile/HomeTopCss.css'

// import required modules 
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

const Homesix= () => {
  return (
   <div className=' bg-[#ebf3f8] mt-2 p-8 '>
<h1 className='flex items-center justify-center text-3xl  '>Hospital Tour</h1>



<div className='mt-10  '>
  

  <div style={{ fontFamily: "Inter, sans-serif" }} className=" items-center font-Poppins justify-center 
  lg:block sm:block md:block hidden
  ">
    <Swiper
      effect={'coverflow'}
      grabCursor={true}
      spaceBetween={60}
      centeredSlides={true}
      slidesPerView={2} // Display 3 slides per view on large screens
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 0,
        modifier: 1,
        slideShadows: false, // Set to false to remove shadows
      }}
      loop={true}
      pagination={true}
      modules={[EffectCoverflow, Pagination, Navigation]}
      className="about-swiper"
      
      breakpoints={{
        1800: { spaceBetween: 140 },
        1600: { spaceBetween: 120 },
        1400: { spaceBetween: 100 },
        1200: { spaceBetween: 80 },
        1020: { spaceBetween: 10 },
        992: { spaceBetween: 60 },
        768: { spaceBetween: 40 },
        576: { spaceBetween: 40 },
        575: { spaceBetween: 40 },
        320: { spaceBetween: 0 },
        0: { spaceBetween: 10 },
      }}

    
    >
      <SwiperSlide><img src={img1} alt="img1"  /></SwiperSlide>
      <SwiperSlide><img src={img2} alt="img2" /></SwiperSlide>
      <SwiperSlide><img src={img3} alt="img3" /></SwiperSlide>
      <SwiperSlide><img src={img1} alt="photo4" /></SwiperSlide>
      <SwiperSlide><img src={img2} alt="photo5" /></SwiperSlide>
      <SwiperSlide><img src={img3} alt="photo4" /></SwiperSlide>
      <SwiperSlide><img src={img1} alt="photo3" /></SwiperSlide>
      <SwiperSlide><img src={img2} alt="photo4" /></SwiperSlide>
    </Swiper>
  </div>





{/* mobile screen */}



<div className="flex mt-8 lg:hidden md:hidden sm:hidden   items-center  justify-center   ">
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
            <img src={img1} className=" h-96 w-96" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img3} className=" h-96 w-96" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img1} className=" h-96 w-96" />
          </SwiperSlide>

          <SwiperSlide>
            <img src={img2} className="h-96 w-96 " />
          </SwiperSlide>
        </Swiper>
      </div>











</div>


  
    




    </div>
  );
}

export default Homesix;




















