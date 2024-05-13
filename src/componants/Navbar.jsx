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
              to="/"
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
              Centres Of Excellence
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
              Health Information
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
              Career
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
              <NavLink to='/contact'> Contact Us </NavLink>
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
      {isSideMenuOpen && (
        <div className="fixed top-0 h-screen shadow-lg w-screen lg:hidden md:hidden sm:hidden bg-white backdrop-blur-sm z-[9999]">
          <div className="shadow-lg p-5">
            <div className="flex justify-between items-center -mx-2">
              <div className="flex gap-3">
                <IoCloseOutline
                  onClick={() => setMenu(false)}
                  className="text-3xl  cursor-pointer text-[#086AAE] rounded-md  border-2 border-[#086AAE]"
                />
              </div>
            </div>

            {/* PatientMenuOpen */}
            {/* <div className="flex mt-2  mx-4 sm:mx-20 md:mx-28 ">
              <div className="flex justify-between gap-2">
                <section className=" flex flex-col bg-white w-full h-fit md:w-[720px] sm:w-[580px]  border-4 border-white p-2 rounded-md shadow-lg  flex-grow text-lg font-normal">
                  <div
                    className="relative mt-3"
                    onMouseEnter={togglePatientMenu}
                    onMouseLeave={togglePatientMenu}
                  >
                    <div className="flex" onClick={togglePatientMenu}>
                      <h1>Patient</h1>
                      <svg
                        className={`w-2.5 h-2.5 ms-3 ${
                          isPatientMenuOpen ? "rotate-180" : ""
                        } mt-1.5`}
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 6"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m1 1 4 4 4-4"
                        />
                      </svg>
                    </div>
                    {isPatientMenuOpen && (
                      <div
                        id="mega-menu-full-image-dropdown"
                        className="fixed left-1 right-1 h-fit bg-gray-100 md:mx-28 sm:mx-20  shadow-md z-[999] p-2 font-normal "
                      >
                        <div className="flex flex-col max-w-screen-md py-3 mx-0 text-black text-sm font-medium px-6">
                          <ul
                            className=" mb-4 space-y-4"
                            aria-labelledby="mega-menu-full-image-button"
                          >
                            <li>
                              <h1 className="hover:underline hover:text-[#C074B3] dark:hover:text-[#C074B3]">
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
                        </div>
                      </div>
                    )}
                  </div>
                </section>
              </div>
            </div> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
