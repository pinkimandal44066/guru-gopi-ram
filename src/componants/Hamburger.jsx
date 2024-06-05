import React from 'react'
import { useState } from 'react';
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import logo from '../../public/images/logo.png'
import { FaSearch } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { IoMdArrowDropright } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
 import img01 from "../../public/images/img.png"
 import img02 from "../../public/images/img02.png"
 import img03 from "../../public/images/img03.png"
 import img04 from "../../public/images/img04.png"
 import { MdOutlineCall } from "react-icons/md";
const Hamburger = () => {
    const [isSideMenuOpen, setMenu] = useState(false);
  const [showServices, setShowServices] = useState(false);
  return (
    <div>
           {isSideMenuOpen && (
        <div className="fixed top-0  shadow-lg w-screen -mt-10
        lg:hidden md:hidden sm:hidden bg-white z-[9999]">
          <div className="shadow-lg p-5">
            <div className="flex justify-between items-center -mx-2">
              <div className="flex gap-3">
              
              </div>
            </div>

          
          </div>
      
          <div className="bg-[#086AAE] ">
            <nav
              style={{ fontFamily: "Inter, sans-serif" }}
              className="max-w-screen-xl lg:mx-auto mx-2 p-3 flex cursor-pointer 
              justify-between items-center text-white"
            >
           
              <div className="flex lg:gap-4 gap-3 text-xs lg:text-base">
                <FaFacebook className="" />
                <FaInstagram className="" />
                <FaYoutube className="text-white" />
                <FaLinkedin className="text-white" />
              </div>

      
              <div className=" flex lg:gap-4  gap-3 lg:text-sm text-[9px]">
                <h1 className="text-white hover:text-gray-300">
                  Privacy Policy
                </h1>
                <h1 className="text-white hover:text-gray-300">Disclaimer</h1>
                <h1 className="text-white hover:text-gray-300">Contact</h1>
              </div>
            </nav>
          </div>

      
          <div className="max-w-screen-xl lg:mx-auto mx-2">
            <div className="flex justify-between items-center py-2">
      
              <NavLink to="/" className="flex items-center">
                <img
                  src={logo}
                  alt=""
                  className=" w-14 sm:w-20  md:w-20  lg:w-28 "
                />
              </NavLink>

              <div className="flex items-center text-[10px] lg:text-base ">
                <button className="border border-[#086AAE] bg-white text-[#086AAE] lg:px-4 lg:py-2 p-1.5 rounded-md hover:bg-[#086AAE] hover:text-white transition duration-300 ">
                  Emergency
                </button>
                <button className="ml-4 bg-[#086AAE] text-white lg:px-4 lg:py-2 p-2 rounded-md hover:bg-[#086AAE] transition duration-300">
                  Call Guru Gopiram Helpline
                </button>
              </div>
            </div>
          </div>




   
          <div className="p-4 z-[999] top-20 -mt-5  lg:hidden md:hidden sm:hidden  ">
            <div className="mt-1 flex justify-between  ">
              <section className="flex items-center gap-11">
            

                <FiMenu
                  onClick={() => setMenu(false)}
                  className="text-3xl  cursor-pointer text-[#086AAE] rounded-md  border-2 border-[#086AAE]"
                />

                <div className="relative focus:outline-none rounded-md ">
                  <input
                    type="search"
                    placeholder="Search...."
                    className="placeholder:text-gray-300  mt-1 w-64 h-10 sm:h-10 sm:w-64  border-2 border-[#086AAE] focus:outline-none rounded-md pl-3"
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center mr-2">
                    <FaSearch className="text-white bg-[#086AAE] text-xl rounded-full px-1 py-1" />
                  </div>
                </div>
              </section>
            </div>
          </div>

          <div>
            <div className="flex  p-6  cursor-pointer  mx-0 sm:mx-20 md:mx-28 justify-between items-center ">
              <NavLink to="/">
                <div>
                  <h4
                    className="flex  text-xl hover:text-[#086AAE] duration-200"
                    onClick={() => setShowServices(!showServices)}
                  >
                    Patient
                  </h4>
                </div>
              </NavLink>

              <div>
                <IoMdArrowDropright className="text-2xl hover:text-[#086AAE] duration-200" />
              </div>
            </div>

            <div className="flex  p-6  cursor-pointer  mx-0 sm:mx-20 md:mx-28 justify-between items-center ">
              <NavLink to="/patient">
                <div>
                  <h4
                    className="flex  text-xl hover:text-[#086AAE] duration-200"
                    onClick={() => setShowServices(!showServices)}
                  >
                    Centres of Excellence
                  </h4>
                </div>
              </NavLink>

              <div>
                <IoMdArrowDropright className="text-2xl hover:text-[#086AAE] duration-200" />
              </div>
            </div>

            <div className="flex  p-6  cursor-pointer  mx-0 sm:mx-20 md:mx-28 justify-between items-center ">
              <NavLink to="/">
                <div>
                  <h4
                    className="flex  text-xl hover:text-[#086AAE] duration-200"
                    onClick={() => setShowServices(!showServices)}
                  >
                    Health Information
                  </h4>
                </div>
              </NavLink>

              <div>
                <IoMdArrowDropright className="text-2xl hover:text-[#086AAE] duration-200" />
              </div>
            </div>

            <div className="flex  p-6  cursor-pointer  mx-0 sm:mx-20 md:mx-28 justify-between items-center ">
              <NavLink to="/">
                <div>
                  <h4
                    className="flex  text-xl hover:text-[#086AAE] duration-200"
                    onClick={() => setShowServices(!showServices)}
                  >
                    Career
                  </h4>
                </div>
              </NavLink>

              <div>
                <IoMdArrowDropright className="text-2xl hover:text-[#086AAE] duration-200" />
              </div>
            </div>

            <div className="flex  p-6  cursor-pointer  mx-0 sm:mx-20 md:mx-28 justify-between items-center ">
              <NavLink to="/">
                <div>
                  <h4
                    className="flex  text-xl hover:text-[#086AAE] duration-200"
                    onClick={() => setShowServices(!showServices)}
                  >
                    Contact us
                  </h4>
                </div>
              </NavLink>

              <div>
                <IoMdArrowDropright className="text-2xl hover:text-[#086AAE] duration-200" />
              </div>
            </div>

            <div className="flex  p-6  cursor-pointer  mx-0 sm:mx-20 md:mx-28 justify-between items-center ">
              <NavLink to="/">
                <div>
                  <h4
                    className="flex  text-xl hover:text-[#086AAE] duration-200"
                    onClick={() => setShowServices(!showServices)}
                  >
                    About Us
                  </h4>
                </div>
              </NavLink>

              <div>
                <IoMdArrowDropright className="text-2xl hover:text-[#086AAE] duration-200" />
              </div>
            </div>

            <div className="flex  p-6  cursor-pointer  mx-0 sm:mx-20 md:mx-28 justify-between items-center ">
              <NavLink to="/">
                <div>
                  <h4
                    className="flex  text-xl hover:text-[#086AAE] duration-200"
                    onClick={() => setShowServices(!showServices)}
                  >
                    Blog
                  </h4>
                </div>
              </NavLink>

              <div>
                <IoMdArrowDropright className="text-2xl hover:text-[#086AAE] duration-200" />
              </div>

              
            </div>

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

            
          </div>





      



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




      )}
    </div>
  )
}

export default Hamburger
