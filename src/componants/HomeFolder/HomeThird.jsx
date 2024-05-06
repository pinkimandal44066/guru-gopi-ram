
import React from 'react';
import img from '../../../public/images/img.png'
import img01 from '../../../public/images/img01.png';
import img02 from '../../../public/images/img02.png';
import img03 from '../../../public/images/img03.png';
import img04 from '../../../public/images/img04.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

const HomeThird = () => {
  return (
    <>
 <div className='mt-16 flex flex-col items-center justify-center text-center'>

   <div className="max-w-[300px]">
     <img src={img} alt='' />
</div>
      {/* Large screens (lg) */}
      <div className='  lg:flex md:flex hidden mx-32 justify-center overflow-hidden gap-0 mt-6 '>
   
      <div className='flex '>
        <img src={img01} alt='' className='w-64 h-auto' />
        <img src={img04} alt='' className='w-64 h-auto' />
        <img src={img03} alt='' className='w-64 h-auto' />
        <img src={img02} alt='' className='w-64 h-auto' />
      </div> 
      </div>

      <button className='text-[#086AAE]  border-2 border-gray-100 shadow-2xl bg-white
font-semibold py-2  px-8 mt-8 rounded-lg      '>
       View All
</button>



      {/* Mobile screens */}
      <div className='flex lg:hidden  mx-4 items-center font-Poppins justify-center rounded-full'>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          freeMode={true}
          loop={true}
          pagination={true}
          modules={[EffectCoverflow, Pagination, Navigation]}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
        >
          {/* Each SwiperSlide contains an image */}
          <SwiperSlide>
            <img src={img01} alt='Image 01' className='w-64 h-auto' />
       
          </SwiperSlide>
          <SwiperSlide>
            <img src={img04} alt='Image 04' className='w-64 h-auto' />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img03} alt='Image 03' className='w-64 h-auto' />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img02} alt='Image 02' className='w-64 h-auto' />
          </SwiperSlide>
        </Swiper>


        
      </div>
      </div>
    </>
  );
}

export default HomeThird;
