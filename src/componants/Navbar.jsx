import { useState } from "react";
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import logo from "../../public/images/logo.png";
import "../index.css";
import { IoMdArrowDropdown } from "react-icons/io";
import { FiMenu } from "react-icons/fi";
import { IoCloseOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
// import { useLocation } from "react-router-dom";
import { IoMdArrowDropright } from "react-icons/io";
import { MdOutlineCall } from "react-icons/md";

import img01 from '../../public/images/img01.png'
import img02 from '../../public/images/img02.png'
import img03 from '../../public/images/img03.png'
import img04 from '../../public/images/img04.png'


import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import Hamburger from "./Hamburger";

const Navbar = () => {
  const [isPatientMenuOpen, setIsPatientMenuOpen] = useState(false);
  const togglePatientMenu = () => {
    setIsPatientMenuOpen(!isPatientMenuOpen);
  };

  const [isCentresMenuOpen, setIsCentresMenuOpen] = useState(false);
  const toggleCentresMenu = () => {
    setIsCentresMenuOpen(!isCentresMenuOpen);
  };

  const [isHealthMenuOpen, setIsHealthMenuOpen] = useState(false);
  const toggleHealthMenu = () => {
    setIsHealthMenuOpen(!isHealthMenuOpen);
  };

  const [isCareerMenuOpen, setIsCareerMenuOpen] = useState(false);
  const toggleCareerMenu = () => {
    setIsCareerMenuOpen(!isCareerMenuOpen);
  };

  const [isContactMenuOpen, setIsContactMenuOpen] = useState(false);
  const toggleContactMenu = () => {
    setIsContactMenuOpen(!isContactMenuOpen);
  };

  const [isAboutMenuOpen, setIsAboutMenuOpen] = useState(false);
  const toggleAboutMenu = () => {
    setIsAboutMenuOpen(!isAboutMenuOpen);
  };

  const [isBlogMenuOpen, setIsBlogMenuOpen] = useState(false);
  const toggleBlogMenu = () => {
    setIsBlogMenuOpen(!isBlogMenuOpen);
  };

  const [isSideMenuOpen, setMenu] = useState(false);
  // page location
  // const location = useLocation();
  // useEffect(() => {
  //   setMenu(false); // Close the side menu when the location changes
  // }, [location]);

  const [showServices, setShowServices] = useState(false);
  return (
    <div>
      {/* first part  */}
      <div className="bg-[#086AAE]">
        <nav
          style={{ fontFamily: "Inter, sans-serif" }}
          className="max-w-screen-xl lg:mx-auto mx-2 p-3 flex cursor-pointer justify-between items-center text-white"
        >
          {/* Left Side: Social Media Icons */}
          <div className="flex lg:gap-4 gap-3 text-xs lg:text-base">
            <FaFacebook className="" />
            <FaInstagram className="" />
            <FaYoutube className="text-white" />
            <FaLinkedin className="text-white" />
          </div>

          {/* Right Side: Links */}
          <div className=" flex lg:gap-4 gap-3 lg:text-sm text-[9px]">
            <h1 className="text-white hover:text-gray-300">Privacy Policy</h1>
            <h1 className="text-white hover:text-gray-300">Disclaimer</h1>
            <h1 className="text-white hover:text-gray-300">Contact</h1>
          </div>
        </nav>
      </div>

      {/* second part  */}
      <div className="max-w-screen-xl lg:mx-auto mx-2">
        <div className="flex justify-between items-center py-2">
          {/* Hospital Logo (on the left) */}
          <NavLink to="/" className="flex items-center">
            <img
              src={logo}
              alt=""
              className=" w-14 sm:w-20  md:w-20  lg:w-28 "
            />
          </NavLink>

          {/* Search Bar (in the middle) */}

          <div className="relative focus:outline-none rounded-md lg:block md:block sm:block hidden">
            <input
              type="search"
              placeholder="Search...."
              className="placeholder:text-gray-300  mt-1 lg:w-[450px] md:w-[350px] sm:w-[240px] sm:h-10  lg:h-10 md:h-10 border-2 border-[#086AAE] focus:outline-none rounded-md pl-3"
            />
            <div className="absolute inset-y-0 right-0 flex items-center mr-2">
              <FaSearch className="text-white bg-[#086AAE] text-3xl rounded-full px-2 mt-1 py-2" />
            </div>
          </div>

          {/* Emergency Button */}
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

      {/* third part */}
      <div className="lg:flex md:flex sm:flex hidden justify-center lg:gap-10 md:gap-6 sm:gap-6 mt-3 lg:text-xl md:text-sm sm:text-xs items-center max-w-screen-2xl mx-auto ">
        <div
          className="relative"
          onMouseEnter={togglePatientMenu}
          onMouseLeave={togglePatientMenu}
        >
          <div className="flex cursor-pointer">
            <NavLink
              to="/patientone"
              className={({ isActive }) =>
                `duration-200 ${
                  isActive ? "text-[#086AAE] " : "text-black"
                } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#086AAE] hover:font-bold lg:p-0 hover:underline transition-all duration-300 ease-in-out transform font-medium hover:scale-105`
              }
            >
              Patient
            </NavLink>
            {/* <NavLink 
    to={"/about"}
    className={({ isActive }) =>
      `duration-200 ${
        isActive ? "text-[#C074B3] font-bold" : "text-black"
      } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#C074B3] hover:font-bold lg:p-0 hover:underline transition-all duration-300 ease-in-out transform font-medium hover:scale-105`
    }
  >
    Patient
  </NavLink> */}
            {/* 
   <div> Patient</div> */}

            <IoMdArrowDropdown className="mt-1.5" />
          </div>

          {isPatientMenuOpen && (
            <div
              id="mega-menu-full-image-dropdown"
              // className="fixed rounded-md  bg-blue-100 z-[999] p-2  "
            >
              {/* <div className="flex flex-col max-w-screen-md py-3 mx-0 text-black text-sm font-medium px-6">
                <ul
                  className="hidden mb-4 space-y-4  md:block"
                  aria-labelledby="mega-menu-full-image-button"
                >
                  <li>
                    <h1 className="hover:underline hover:text-[#C074B3] text-base dark:hover:text-[#C074B3]">
                      Alcon
                    </h1>
                  </li>
                  <li>
                    <h1 className="hover:underline hover:text-[#C074B3] dark:hover:text-[#C074B3]">
                      BOUSCH & LOMB
                    </h1>
                  </li>
                  <li>
                    <h1 className="hover:underline hover:text-[#C074B3] dark:hover:text-[#C074B3]">
                      JOHNSON & JOHNSON
                    </h1>
                  </li>
                  <li>
                    <h1 className="hover:underline hover:text-[#C074B3] dark:hover:text-[#C074B3]">
                      COOPERVISION
                    </h1>
                  </li>
                </ul>
              </div> */}
            </div>
          )}
        </div>

        <div
          className="relative"
          onMouseEnter={toggleCentresMenu}
          onMouseLeave={toggleCentresMenu}
        >
          <div className="flex cursor-pointer">
            <nav1
              className={({ isActive }) =>
                `duration-200 ${
                  isActive ? "text-[#C074B3] font-bold" : "text-black"
                } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#C074B3] hover:font-bold lg:p-0 hover:underline  transition-all duration-300  ease-in-out transform font-medium  hover:scale-105  `
              }
            >
              <NavLink to="/patient">Centres Of Excellence</NavLink>
            </nav1>
            <IoMdArrowDropdown className="mt-1.5" />
          </div>
          {isCentresMenuOpen && (
            <div
              id="mega-menu-full-image-dropdown"
              // className="fixed rounded-md  bg-blue-100 z-[999] p-2  "
            >
              {/* <div className="flex flex-col max-w-screen-md py-3 mx-0 text-black text-sm font-medium px-6">
                <ul
                  className="hidden mb-4 space-y-4  md:block"
                  aria-labelledby="mega-menu-full-image-button"
                >
                  <li>
                    <h1 className="hover:underline hover:text-[#C074B3] text-base dark:hover:text-[#C074B3]">
                      Alcon
                    </h1>
                  </li>
                  <li>
                    <h1 className="hover:underline hover:text-[#C074B3] dark:hover:text-[#C074B3]">
                      BOUSCH & LOMB
                    </h1>
                  </li>
                  <li>
                    <h1 className="hover:underline hover:text-[#C074B3] dark:hover:text-[#C074B3]">
                      JOHNSON & JOHNSON
                    </h1>
                  </li>
                  <li>
                    <h1 className="hover:underline hover:text-[#C074B3] dark:hover:text-[#C074B3]">
                      COOPERVISION
                    </h1>
                  </li>
                </ul>
              </div> */}
            </div>
          )}
        </div>

        <div
          className="relative"
          onMouseEnter={toggleHealthMenu}
          onMouseLeave={toggleHealthMenu}
        >
          <div className="flex cursor-pointer">
            <nav
              className={({ isActive }) =>
                `duration-200 ${
                  isActive ? "text-[#C074B3] font-bold" : "text-black"
                } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#C074B3] hover:font-bold lg:p-0 hover:underline  transition-all duration-300  ease-in-out transform font-medium  hover:scale-105  `
              }
            >
              <NavLink to="/health">Health Information</NavLink>
            </nav>
            <IoMdArrowDropdown className="mt-1.5" />
          </div>
          {isHealthMenuOpen && (
            <div
              id="mega-menu-full-image-dropdown"
              // className="fixed rounded-md  bg-blue-100 z-[999] p-2  "
            >
              {/* <div className="flex flex-col max-w-screen-md py-3 mx-0 text-black text-sm font-medium px-6">
                <ul
                  className="hidden mb-4 space-y-4  md:block"
                  aria-labelledby="mega-menu-full-image-button"
                >
                  <li>
                    <h1 className="hover:underline hover:text-[#C074B3] text-base dark:hover:text-[#C074B3]">
                      Alcon
                    </h1>
                  </li>
                  <li>
                    <h1 className="hover:underline hover:text-[#C074B3] dark:hover:text-[#C074B3]">
                      BOUSCH & LOMB
                    </h1>
                  </li>
                  <li>
                    <h1 className="hover:underline hover:text-[#C074B3] dark:hover:text-[#C074B3]">
                      JOHNSON & JOHNSON
                    </h1>
                  </li>
                  <li>
                    <h1 className="hover:underline hover:text-[#C074B3] dark:hover:text-[#C074B3]">
                      COOPERVISION
                    </h1>
                  </li>
                </ul>
              </div> */}
            </div>
          )}
        </div>

        <div
          className="relative"
          onMouseEnter={toggleCareerMenu}
          onMouseLeave={toggleCareerMenu}
        >
          <div className="flex cursor-pointer">
            <h1
              className={({ isActive }) =>
                `duration-200 ${
                  isActive ? "text-[#C074B3] font-bold" : "text-black"
                } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#C074B3] hover:font-bold lg:p-0 hover:underline  transition-all duration-300  ease-in-out transform font-medium  hover:scale-105  `
              }
            >
           <NavLink to='/career'>   Career</NavLink>
            </h1>
            <IoMdArrowDropdown className="mt-1.5" />
          </div>
          {isCareerMenuOpen && (
            <div
              id="mega-menu-full-image-dropdown"
              // className="fixed rounded-md  bg-blue-100 z-[999] p-2  "
            >
              {/* <div className="flex flex-col max-w-screen-md py-3 mx-0 text-black text-sm font-medium px-6">
                <ul
                  className="hidden mb-4 space-y-4  md:block"
                  aria-labelledby="mega-menu-full-image-button"
                >
                  <li>
                    <h1 className="hover:underline hover:text-[#C074B3] text-base dark:hover:text-[#C074B3]">
                      Alcon
                    </h1>
                  </li>
                  <li>
                    <h1 className="hover:underline hover:text-[#C074B3] dark:hover:text-[#C074B3]">
                      BOUSCH & LOMB
                    </h1>
                  </li>
                  <li>
                    <h1 className="hover:underline hover:text-[#C074B3] dark:hover:text-[#C074B3]">
                      JOHNSON & JOHNSON
                    </h1>
                  </li>
                  <li>
                    <h1 className="hover:underline hover:text-[#C074B3] dark:hover:text-[#C074B3]">
                      COOPERVISION
                    </h1>
                  </li>
                </ul>
              </div> */}
            </div>
          )}
        </div>

        <div
          className="relative"
          onMouseEnter={toggleContactMenu}
          onMouseLeave={toggleContactMenu}
        >
          <div className="flex cursor-pointer">
            <h1
              className={({ isActive }) =>
                `duration-200 ${
                  isActive ? "text-[#C074B3] font-bold" : "text-black"
                } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#C074B3] hover:font-bold lg:p-0 hover:underline  transition-all duration-300  ease-in-out transform font-medium  hover:scale-105  `
              }
            >
              <NavLink to="/contact"> Contact Us </NavLink>
            </h1>
            <IoMdArrowDropdown className="mt-1.5" />
          </div>
          {isContactMenuOpen && (
            <div
              id="mega-menu-full-image-dropdown"
              // className="fixed rounded-md  bg-blue-100 z-[999] p-2  "
            >
              {/* <div className="flex flex-col max-w-screen-md py-3 mx-0 text-black text-sm font-medium px-6">
                <ul
                  className="hidden mb-4 space-y-4  md:block"
                  aria-labelledby="mega-menu-full-image-button"
                >
                  <li>
                    <h1 className="hover:underline hover:text-[#C074B3] text-base dark:hover:text-[#C074B3]">
                      Alcon
                    </h1>
                  </li>
                  <li>
                    <h1 className="hover:underline hover:text-[#C074B3] dark:hover:text-[#C074B3]">
                      BOUSCH & LOMB
                    </h1>
                  </li>
                  <li>
                    <h1 className="hover:underline hover:text-[#C074B3] dark:hover:text-[#C074B3]">
                      JOHNSON & JOHNSON
                    </h1>
                  </li>
                  <li>
                    <h1 className="hover:underline hover:text-[#C074B3] dark:hover:text-[#C074B3]">
                      COOPERVISION
                    </h1>
                  </li>
                </ul>
              </div> */}
            </div>
          )}
        </div>

        <div
          className="relative"
          onMouseEnter={toggleAboutMenu}
          onMouseLeave={toggleAboutMenu}
        >
          <div className="flex cursor-pointer">
            <h1
              className={({ isActive }) =>
                `duration-200 ${
                  isActive ? "text-[#C074B3] font-bold" : "text-black"
                } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#C074B3] hover:font-bold lg:p-0 hover:underline  transition-all duration-300  ease-in-out transform font-medium  hover:scale-105  `
              }
            >
              <NavLink to="/about">About Us</NavLink>
            </h1>
            <IoMdArrowDropdown className="mt-1.5" />
          </div>
          {isAboutMenuOpen && (
            <div
              id="mega-menu-full-image-dropdown"
              // className="fixed rounded-md  bg-blue-100 z-[999] p-2  "
            >
              {/* <div className="flex flex-col max-w-screen-md py-3 mx-0 text-black text-sm font-medium px-6">
                <ul
                  className="hidden mb-4 space-y-4  md:block"
                  aria-labelledby="mega-menu-full-image-button"
                >
                  <li>
                    <h1 className="hover:underline hover:text-[#C074B3] text-base dark:hover:text-[#C074B3]">
                      Alcon
                    </h1>
                  </li>
                  <li>
                    <h1 className="hover:underline hover:text-[#C074B3] dark:hover:text-[#C074B3]">
                      BOUSCH & LOMB
                    </h1>
                  </li>
                  <li>
                    <h1 className="hover:underline hover:text-[#C074B3] dark:hover:text-[#C074B3]">
                      JOHNSON & JOHNSON
                    </h1>
                  </li>
                  <li>
                    <h1 className="hover:underline hover:text-[#C074B3] dark:hover:text-[#C074B3]">
                      COOPERVISION
                    </h1>
                  </li>
                </ul>
              </div> */}
            </div>
          )}
        </div>

        <div
          className="relative"
          onMouseEnter={toggleBlogMenu}
          onMouseLeave={toggleBlogMenu}
        >
          <div className="flex cursor-pointer">
            <h1
              className={({ isActive }) =>
                `duration-200 ${
                  isActive ? "text-[#C074B3] font-bold" : "text-black"
                } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#C074B3] hover:font-bold lg:p-0 hover:underline  transition-all duration-300  ease-in-out transform font-medium  hover:scale-105  `
              }
            >
              Blog
            </h1>
            <IoMdArrowDropdown className="mt-1.5" />
          </div>
          {isBlogMenuOpen && (
            <div
              id="mega-menu-full-image-dropdown"
              // className="fixed rounded-md  bg-blue-100 z-[999] p-2  "
            >
              {/* <div className="flex flex-col max-w-screen-md py-3 mx-0 text-black text-sm font-medium px-6">
                <ul
                  className="hidden mb-4 space-y-4  md:block"
                  aria-labelledby="mega-menu-full-image-button"
                >
                  <li>
                    <h1 className="hover:underline hover:text-[#C074B3] text-base dark:hover:text-[#C074B3]">
                      Alcon
                    </h1>
                  </li>
                  <li>
                    <h1 className="hover:underline hover:text-[#C074B3] dark:hover:text-[#C074B3]">
                      BOUSCH & LOMB
                    </h1>
                  </li>
                  <li>
                    <h1 className="hover:underline hover:text-[#C074B3] dark:hover:text-[#C074B3]">
                      JOHNSON & JOHNSON
                    </h1>
                  </li>
                  <li>
                    <h1 className="hover:underline hover:text-[#C074B3] dark:hover:text-[#C074B3]">
                      COOPERVISION
                    </h1>
                  </li>
                </ul>
              </div> */}
            </div>
          )}
        </div>
      </div>

      {/* mobile part */}
      <div className="p-4 z-[999] top-20 -mt-5  lg:hidden md:hidden sm:hidden  ">
        <div className="mt-1 flex justify-between  ">
          <section className="flex items-center gap-11">
            <FiMenu
              onClick={() => setMenu(true)}
              className="text-3xl mt-2.5 cursor-pointer text-[#086AAE] rounded-md  border-2 border-[#086AAE] "
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

      {/* Sidebar mobile menu */}

      {/* hamburger  04.06.2024*/}

      {isSideMenuOpen && (
        <div className="fixed top-0  shadow-lg w-screen -mt-10 h-fit
        lg:hidden md:hidden sm:hidden  bg-white z-[9999]">
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
              <NavLink to="/patient">
                <div>
                  <h4
                    className="flex  text-xl hover:text-[#086AAE] duration-200"
                  
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

            {/* <div className="flex  p-6  cursor-pointer  mx-0 sm:mx-20 md:mx-28 justify-between items-center ">
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
            </div> */}


<div
          className="relative"
          onMouseEnter={toggleContactMenu}
          onMouseLeave={toggleContactMenu}
        >
          <div className="flex cursor-pointer text-xl p-6 justify-between items-center">
            <h1
              className={({ isActive }) =>
                `duration-200 ${
                  isActive ? "text-[#C074B3] font-bold" : "text-black"
                } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#C074B3] hover:font-bold lg:p-0 hover:underline  transition-all duration-300  ease-in-out transform font-medium  hover:scale-105  `
              }
            >
              <NavLink to="/contact"> Contact Us </NavLink>
            </h1>
            <IoMdArrowDropright className="text-2xl " />

          </div>
          {isContactMenuOpen && (
            <div
              id="mega-menu-full-image-dropdown"
              
            >
             
            </div>
          )}
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





      <Hamburger />
    </div>
  );
};

export default Navbar;
