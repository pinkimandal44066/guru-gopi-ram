import { useState, useEffect } from "react";
import { Tabs } from "antd";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { MdOutlineGirl } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import { IoCloseOutline } from "react-icons/io5";
import { FaEye } from "react-icons/fa";
import { LuBus } from "react-icons/lu";
import { IoLocationOutline } from "react-icons/io5";
import logo from "../../public/images/logo.png";
import { MdFavoriteBorder } from "react-icons/md";
import { FiShoppingCart } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { MdAddIcCall } from "react-icons/md";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import img24 from "../../public/images/img24.png";
import Searchbar from "./HomePage/Searchbar";
import SearchbarMobile from "./HomePage/SearchbarMobile";
import { useSelector } from "react-redux";
import { AiOutlineUser as AccountIcon } from "react-icons/ai";


const Navbar = () => {
  // user logging part.
  const user = JSON.parse(localStorage.getItem("users"));
  // console.log(user)

  // navigate

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("users");
    navigate("/login");
  };

  const { TabPane } = Tabs;
  const [isSideMenuOpen, setMenu] = useState(false);
  // page location
  const location = useLocation();
  useEffect(() => {
    setMenu(false); // Close the side menu when the location changes
  }, [location]);

  // mega manu for mobile screen
  const [isSubMenuOpen, setIsSubMenuOpen] = useState("");

  // mega manu start for lg screen
  const [isEyeglassesMenuOpen, setIsEyeglassesMenuOpen] = useState(false);
  const [isSunglassesMenuOpen, setIsSunglassesMenuOpen] = useState(false);
  const [isContactLensesMenuOpen, setIsContactLensesMenuOpen] = useState(false);
  const [isAccessoriesMenuOpen, setIsAccessoriesMenuOpen] = useState(false);
  const [isBrandMenuOpen, setIsBrandMenuOpen] = useState(false);

  const toggleEyeglassesMenu = () => {
    setIsEyeglassesMenuOpen(!isEyeglassesMenuOpen);
    // Close sunglasses menu when opening eyeglasses menu
    setIsSunglassesMenuOpen(false);
  };
  const toggleSunglassesMenu = () => {
    setIsSunglassesMenuOpen(!isSunglassesMenuOpen);
    // Close eyeglasses menu when opening sunglasses menu
    setIsEyeglassesMenuOpen(false);
  };
  const toggleContactLensesMenu = () => {
    setIsContactLensesMenuOpen(!isContactLensesMenuOpen);
  };
  const toggleAccessoriesMenu = () => {
    setIsAccessoriesMenuOpen(!isAccessoriesMenuOpen);
  };
  const toggleBrandMenu = () => {
    setIsBrandMenuOpen(!isBrandMenuOpen);
  };

  // for mobile screen
  const toggleSubMenu = (menu) => {
    setIsSubMenuOpen((prevState) => (prevState === menu ? "" : menu));
  };

  // cartitmes
  const cartItems = useSelector((state) => state.cart);

  return (
    <div style={{ fontFamily: "Inter, sans-serif" }} className="">
      <div className="fixed top-0 w-full z-[999]">
        {/* first */}
        <div className="bg-[#C074B3] p-3  w-full  lg:block hidden ">
          <div className="max-w-screen-xl mx-auto flex justify-between items-center   text-white text-base cursor-pointer">
            <div className="flex  text-sm ">
              <MdOutlineGirl className="text-3xl text-white" />
              <span className="mt-1">Need Help? </span>
              <span className="mt-1 ml-4">Call 1800-123-0123 </span>
            </div>

            {/* seachbar part */}
            <Searchbar />

            <div className="flex gap-6 text-sm">
              <div className="flex gap-1">
                <FaEye className="text-lg" />
                <h1>Eye Testing</h1>
                {/* <IoMdArrowDropdown className=" text-xl" /> */}
              </div>

              {/* singup */}
              {!user ? (
                <li>
                  <Link to={"/otppage"}>Signup</Link>
                </li>
              ) : (
                ""
              )}

              {/* login  */}

              {!user ? (
                <li>
                  <Link to={"/login"}>Login</Link>
                </li>
              ) : (
                ""
              )}

              {/* user */}
              {user?.role === "user" && (
                <li>
                  <Link to={"/userdashboard"}>{user?.name}</Link>
                </li>
              )}

              {/* admin */}
              {user?.role === "admin" && (
                <li>
                  <Link to={"/admindashboard"}>{user?.name}</Link>
                </li>
              )}

    

              {user && (
                <li className="cursor-pointer" onClick={logout}>
                  LogOut
                </li>
              )}

            

              <div className="flex gap-1">
                <LuBus className="text-lg" />
                <h1>Track Order</h1>
              </div>
              <div className="flex gap-1">
                <IoLocationOutline className="text-lg" />
                <h1>Find A Store</h1>
              </div>
             
            </div>
          </div>
        </div>

        {/* second nav  */}
        <div className="w-full bg-white p-5 lg:block  hidden">
          <div className="max-w-screen-xl mx-auto flex justify-between items-center text-base mt-3 cursor-pointer">
            <Link to="/">
              <img src={logo} alt="Logo" />
            </Link>
            <div className="flex gap-5  text-sm font-light  ">
              {/* mega manu for eyeglasses */}
              <div
                className="relative"
                onMouseEnter={toggleEyeglassesMenu}
                onMouseLeave={toggleEyeglassesMenu}
              >
                <NavLink
                  to="/eyeglassespage"
                  className={({ isActive }) =>
                    ` duration-200 ${
                      isActive ? "text-[#C074B3] font-bold" : "text-black"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#C074B3] hover:font-bold lg:p-0 hover:underline  transition-all duration-300  ease-in-out transform font-medium  hover:scale-105 flex  `
                  }
                >
                  EYEGLASSES
                  <svg
                    className={`w-2.5 h-2.5 ms-3 ${
                      isEyeglassesMenuOpen ? "rotate-180" : ""
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
                </NavLink>
                {isEyeglassesMenuOpen && (
                  <div
                    id="mega-menu-full-image-dropdown"
                    className="fixed left-0 right-0 w-full h-fit  bg-white z-[999] p-2  "
                  >
                    <div className="grid max-w-screen-2xl py-5 mx-16 text-black text-sm font-medium  grid-cols-5 px-6">
                      <ul
                        className="hidden mb-4 space-y-4  md:block"
                        aria-labelledby="mega-menu-full-image-button"
                      >
                        <h1 className="font-semibold text-base">GENDER</h1>
                        <li>
                          <a
                            href="#"
                            className="hover:underline hover:text-[#C074B3] dark:hover:text-[#C074B3]"
                          >
                            Men
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="hover:underline hover:text-[#C074B3] dark:hover:text-[#C074B3]"
                          >
                            Women
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="hover:underline hover:text-[#C074B3] dark:hover:text-[#C074B3]"
                          >
                            Kids
                          </a>
                        </li>
                        <h1 className="font-semibold text-base mt-5">
                          COLLECTION
                        </h1>
                        <li>
                          <a
                            href="#"
                            className="hover:underline hover:text-[#C074B3] dark:hover:text-[#C074B3]"
                          >
                            Signature
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="hover:underline hover:text-[#C074B3] dark:hover:text-[#C074B3]"
                          >
                            Retro
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="hover:underline hover:text-[#C074B3] dark:hover:text-[#C074B3]"
                          >
                            Crystal Burst
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="hover:underline hover:text-[#C074B3] dark:hover:text-[#C074B3]"
                          >
                            Ace-Basics
                          </a>
                        </li>
                      </ul>

                      <ul className="mb-4 space-y-4 md:mb-0">
                        <h1 className="font-semibold text-base">SHAPE</h1>
                        <li>
                          <a
                            href="#"
                            className="hover:underline hover:text-[#C074B3] dark:hover:text-[#C074B3]"
                          >
                            Rectangle
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="hover:underline hover:text-[#C074B3] dark:hover:text-[#C074B3]"
                          >
                            Round
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="hover:underline hover:text-[#C074B3] dark:hover:text-[#C074B3]"
                          >
                            Cat Eye
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="hover:underline hover:text-[#C074B3] dark:hover:text-[#C074B3]"
                          >
                            Pilot
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="hover:underline hover:text-[#C074B3] dark:hover:text-[#C074B3]"
                          >
                            Wayfarer
                          </a>
                        </li>
                        <h1 className="font-semibold text-base mt-5">STYLE</h1>
                        <li>
                          <a
                            href="#"
                            className="hover:underline hover:text-[#C074B3] dark:hover:text-[#C074B3]"
                          >
                            Rimmed
                          </a>
                        </li>{" "}
                        <li>
                          <a
                            href="#"
                            className="hover:underline hover:text-[#C074B3] dark:hover:text-[#C074B3]"
                          >
                            Semi-Rimmed
                          </a>
                        </li>{" "}
                        <li>
                          <a
                            href="#"
                            className="hover:underline hover:text-[#C074B3] dark:hover:text-[#C074B3]"
                          >
                            Rimless
                          </a>
                        </li>
                      </ul>

                      <ul className="mb-4 space-y-4 md:mb-0">
                        <h1 className="font-semibold text-base">TOP BRANDS</h1>
                        <li>
                          <a
                            href="#"
                            className="hover:underline hover:text-[#C074B3] dark:hover:text-[#C074B3]"
                          >
                            Zefr
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="hover:underline hover:text-[#C074B3] dark:hover:text-[#C074B3]"
                          >
                            Titan
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="hover:underline hover:text-[#C074B3] dark:hover:text-[#C074B3]"
                          >
                            Fasttrack
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="hover:underline hover:text-[#C074B3] dark:hover:text-[#C074B3]"
                          >
                            Vogue
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="hover:underline hover:text-[#C074B3] dark:hover:text-[#C074B3]"
                          >
                            Tommy Hilfiger
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="hover:underline hover:text-[#C074B3] dark:hover:text-[#C074B3]"
                          >
                            Diesel
                          </a>
                        </li>{" "}
                        <li>
                          <a
                            href="#"
                            className="hover:underline hover:text-[#C074B3] dark:hover:text-[#C074B3]"
                          >
                            Armani
                          </a>
                        </li>
                      </ul>

                      <ul className="mb-4 space-y-4 md:mb-0">
                        <h1 className="font-semibold text-base">
                          FEATURED BRANDS
                        </h1>
                        <li>
                          <a
                            href="#"
                            className="hover:underline hover:text-[#C074B3] dark:hover:text-[#C074B3]"
                          >
                            Rayban
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="hover:underline hover:text-[#C074B3] dark:hover:text-[#C074B3]"
                          >
                            Carrera
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="hover:underline hover:text-[#C074B3] dark:hover:text-[#C074B3]"
                          >
                            Bolon
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="hover:underline hover:text-[#C074B3] dark:hover:text-[#C074B3]"
                          >
                            Stepper
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="hover:underline hover:text-[#C074B3] dark:hover:text-[#C074B3]"
                          >
                            Oakley
                          </a>
                        </li>

                        <li>
                          <a
                            href="#"
                            className="hover:underline hover:text-[#C074B3] dark:hover:text-[#C074B3]"
                          >
                            Aristo
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="hover:underline hover:text-[#C074B3] dark:hover:text-[#C074B3]"
                          >
                            Armani
                          </a>
                        </li>
                      </ul>

                      <div>
                        <img className="w-[945px] h-[220px]" src={img24} />
                      </div>
                    </div>
                  </div>
                )}
              </div>
              {/* mega manu for sunglasses */}
              <div
                className="relative"
                onMouseEnter={toggleSunglassesMenu}
                onMouseLeave={toggleSunglassesMenu}
              >
                <NavLink
                  to="/sunglasses"
                  className={({ isActive }) =>
                    ` duration-200 ${
                      isActive ? "text-[#C074B3] font-bold" : "text-black"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#C074B3] hover:font-bold lg:p-0 hover:underline  transition-all duration-300  ease-in-out transform font-medium  hover:scale-105 flex`
                  }
                >
                  SUNGLASSES
                  <svg
                    className={`w-2.5 h-2.5 ms-3 ${
                      isSunglassesMenuOpen ? "rotate-180" : ""
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
                </NavLink>
                {isSunglassesMenuOpen && (
                  <div
                    id="mega-menu-full-image-dropdown"
                    className="fixed left-0 right-0 w-full h-fit  bg-white z-[999] p-2  "
                  >
                    <div className="grid max-w-screen-2xl py-5 mx-16 text-black text-sm font-medium  grid-cols-5 px-6">
                      <ul
                        className="hidden mb-4 space-y-4  md:block"
                        aria-labelledby="mega-menu-full-image-button"
                      >
                        <h1 className="font-semibold text-base">GENDER</h1>
                        <li>
                          <a
                            href="#"
                            className="hover:underline hover:text-[#C074B3] dark:hover:text-[#C074B3]"
                          >
                            Men
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="hover:underline hover:text-[#C074B3] dark:hover:text-[#C074B3]"
                          >
                            Women
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="hover:underline hover:text-[#C074B3] dark:hover:text-[#C074B3]"
                          >
                            Kids
                          </a>
                        </li>
                        <h1 className="font-semibold text-base mt-5">
                          COLLECTION
                        </h1>
                        <li>
                          <a
                            href="#"
                            className="hover:underline hover:text-[#C074B3] dark:hover:text-[#C074B3]"
                          >
                            Signature
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="hover:underline hover:text-[#C074B3] dark:hover:text-[#C074B3]"
                          >
                            Retro
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="hover:underline hover:text-[#C074B3] dark:hover:text-[#C074B3]"
                          >
                            Crystal Burst
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="hover:underline hover:text-[#C074B3] dark:hover:text-[#C074B3]"
                          >
                            Ace-Basics
                          </a>
                        </li>
                      </ul>

                      <ul className="mb-4 space-y-4 md:mb-0">
                        <h1 className="font-semibold text-base">SHAPE</h1>
                        <li>
                          <a
                            href="#"
                            className="hover:underline hover:text-[#C074B3] dark:hover:text-[#C074B3]"
                          >
                            Rectangle
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="hover:underline hover:text-[#C074B3] dark:hover:text-[#C074B3]"
                          >
                            Round
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="hover:underline hover:text-[#C074B3] dark:hover:text-[#C074B3]"
                          >
                            Cat Eye
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="hover:underline hover:text-[#C074B3] dark:hover:text-[#C074B3]"
                          >
                            Pilot
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="hover:underline hover:text-[#C074B3] dark:hover:text-[#C074B3]"
                          >
                            Wayfarer
                          </a>
                        </li>
                        <h1 className="font-semibold text-base mt-5">STYLE</h1>
                        <li>
                          <a
                            href="#"
                            className="hover:underline hover:text-[#C074B3] dark:hover:text-[#C074B3]"
                          >
                            Rimmed
                          </a>
                        </li>{" "}
                        <li>
                          <a
                            href="#"
                            className="hover:underline hover:text-[#C074B3] dark:hover:text-[#C074B3]"
                          >
                            Semi-Rimmed
                          </a>
                        </li>{" "}
                        <li>
                          <a
                            href="#"
                            className="hover:underline hover:text-[#C074B3] dark:hover:text-[#C074B3]"
                          >
                            Rimless
                          </a>
                        </li>
                      </ul>

                      <ul className="mb-4 space-y-4 md:mb-0">
                        <h1 className="font-semibold text-base">
                          FEATURED BRANDS
                        </h1>
                        <li>
                          <a
                            href="#"
                            className="hover:underline hover:text-[#C074B3] dark:hover:text-[#C074B3]"
                          >
                            Rayban
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="hover:underline hover:text-[#C074B3] dark:hover:text-[#C074B3]"
                          >
                            Carrera
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="hover:underline hover:text-[#C074B3] dark:hover:text-[#C074B3]"
                          >
                            Bolon
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="hover:underline hover:text-[#C074B3] dark:hover:text-[#C074B3]"
                          >
                            Stepper
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="hover:underline hover:text-[#C074B3] dark:hover:text-[#C074B3]"
                          >
                            Oakley
                          </a>
                        </li>
                        <h1 className="font-semibold text-base mt-5">USAGE</h1>
                        <li>
                          <a
                            href="#"
                            className="hover:underline hover:text-[#C074B3] dark:hover:text-[#C074B3]"
                          >
                            Regular
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="hover:underline hover:text-[#C074B3] dark:hover:text-[#C074B3]"
                          >
                            Power
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="hover:underline hover:text-[#C074B3] dark:hover:text-[#C074B3]"
                          >
                            Crystal Burst
                          </a>
                        </li>
                      </ul>

                      <ul className="mb-4 space-y-4 md:mb-0">
                        <h1 className="font-semibold text-base">TOP BRANDS</h1>
                        <li>
                          <a
                            href="#"
                            className="hover:underline hover:text-[#C074B3] dark:hover:text-[#C074B3]"
                          >
                            Zefr
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="hover:underline hover:text-[#C074B3] dark:hover:text-[#C074B3]"
                          >
                            Titan
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="hover:underline hover:text-[#C074B3] dark:hover:text-[#C074B3]"
                          >
                            Fasttrack
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="hover:underline hover:text-[#C074B3] dark:hover:text-[#C074B3]"
                          >
                            Vogue
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="hover:underline hover:text-[#C074B3] dark:hover:text-[#C074B3]"
                          >
                            Tommy Hilfiger
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="hover:underline hover:text-[#C074B3] dark:hover:text-[#C074B3]"
                          >
                            Diesel
                          </a>
                        </li>{" "}
                        <li>
                          <a
                            href="#"
                            className="hover:underline hover:text-[#C074B3] dark:hover:text-[#C074B3]"
                          >
                            Armani
                          </a>
                        </li>
                      </ul>

                      <div>
                        <img className="w-[945px] h-[220px]" src={img24} />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <NavLink
                to="/computerglassespage"
                className={({ isActive }) =>
                  ` duration-200 ${
                    isActive ? "text-[#C074B3] font-bold" : "text-black"
                  } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#C074B3] hover:font-bold lg:p-0 hover:underline  transition-all duration-300  ease-in-out transform font-medium  hover:scale-105 `
                }
              >
                COMPUTER GLASSES
              </NavLink>

              <NavLink
                to="/readglassespage"
                className={({ isActive }) =>
                  `duration-200 ${
                    isActive ? "text-[#C074B3] font-bold" : "text-black"
                  } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#C074B3] hover:font-bold lg:p-0 hover:underline  transition-all duration-300  ease-in-out transform font-medium  hover:scale-105`
                }
              >
                READ GLASSES
              </NavLink>

              {/* mega navbar for contact lenses */}
              <div
                className="relative"
                onMouseEnter={toggleContactLensesMenu}
                onMouseLeave={toggleContactLensesMenu}
              >
                <NavLink
                  to="/contactlensespage"
                  className={({ isActive }) =>
                    `duration-200 ${
                      isActive ? "text-[#C074B3] font-bold" : "text-black"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#C074B3] hover:font-bold lg:p-0 hover:underline  transition-all duration-300  ease-in-out transform font-medium  hover:scale-105 flex`
                  }
                >
                  CONTACT LENSES
                  <svg
                    className={`w-2.5 h-2.5 ms-3 ${
                      isContactLensesMenuOpen ? "rotate-180" : ""
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
                </NavLink>
                {isContactLensesMenuOpen && (
                  <div
                    id="mega-menu-full-image-dropdown"
                    className="fixed rounded-md  bg-white z-[999] p-2  "
                  >
                    <div className="flex flex-col max-w-screen-md py-3 mx-0 text-black text-sm font-medium px-6">
                      <ul
                        className="hidden mb-4 space-y-4  md:block"
                        aria-labelledby="mega-menu-full-image-button"
                      >
                        <li>
                          <NavLink
                            to="/contact_lenses?data=alcon"
                            className="hover:underline hover:text-[#C074B3] text-base dark:hover:text-[#C074B3]"
                          >
                            Alcon
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/contact_lenses?data=bausch_lomb"
                            className="hover:underline hover:text-[#C074B3] dark:hover:text-[#C074B3]"
                          >
                            BOUSCH & LOMB
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/contact_lenses?data=johnson_johnson"
                            className="hover:underline hover:text-[#C074B3] dark:hover:text-[#C074B3]"
                          >
                            JOHNSON & JOHNSON
                          </NavLink>
                        </li>
                        <li>
                              <NavLink 
                               to="/contact_lenses?data=johnson_johnson"
                                className="hover:underline hover:text-[#C074B3] dark:hover:text-[#C074B3]"
                              >
                              COOPERVISION
                              </NavLink>
                              </li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>

              {/* mega navbar for accessories */}
              <div
                className="relative"
                onMouseEnter={toggleAccessoriesMenu}
                onMouseLeave={toggleAccessoriesMenu}
              >
                <NavLink
                  to="/accessoriespage"
                  className={({ isActive }) =>
                    ` duration-200 ${
                      isActive ? "text-[#C074B3] font-bold" : "text-black"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#C074B3] hover:font-bold lg:p-0 hover:underline  transition-all duration-300  ease-in-out transform font-medium  hover:scale-105 flex`
                  }
                >
                  ACCESSORIES
                  <svg
                    className={`w-2.5 h-2.5 ms-3 ${
                      isAccessoriesMenuOpen ? "rotate-180" : ""
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
                </NavLink>

                {isAccessoriesMenuOpen && (
                  <div
                    id="mega-menu-full-image-dropdown"
                    className="fixed rounded-md  bg-white z-[999] p-2  "
                  >
                    <div className="flex flex-col max-w-screen-md py-6 mx-0 text-black text-sm font-medium px-12">
                      <ul
                        className="hidden mb-4 space-y-4  md:block"
                        aria-labelledby="mega-menu-full-image-button"
                      >
                        <li>
                          <a
                            href="#"
                            className="hover:underline hover:text-[#C074B3] dark:hover:text-[#C074B3]"
                          >
                            SWIMMING CLASSES
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="hover:underline hover:text-[#C074B3] dark:hover:text-[#C074B3]"
                          >
                            CONTACT LENS SOLUTION
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="hover:underline hover:text-[#C074B3] dark:hover:text-[#C074B3]"
                          >
                            CHARGER
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="hover:underline hover:text-[#C074B3] dark:hover:text-[#C074B3]"
                          >
                            SOLAR ECLIPSE GOGGLES
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="hover:underline hover:text-[#C074B3] dark:hover:text-[#C074B3]"
                          >
                            CONTACT LENS SOLUTION
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="hover:underline hover:text-[#C074B3] dark:hover:text-[#C074B3]"
                          >
                            WIPES
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="hover:underline hover:text-[#C074B3] dark:hover:text-[#C074B3]"
                          >
                            CLIP ON
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="hover:underline hover:text-[#C074B3] dark:hover:text-[#C074B3]"
                          >
                            FACE MASKS
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="hover:underline hover:text-[#C074B3] dark:hover:text-[#C074B3]"
                          >
                            PACKAGING CASE
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="hover:underline hover:text-[#C074B3] dark:hover:text-[#C074B3]"
                          >
                            CHAINS
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>

              {/* mega navbar for brand */}
              <div
                className="relative"
                onMouseEnter={toggleBrandMenu}
                onMouseLeave={toggleBrandMenu}
              >
                <NavLink
                  to="/brandpage"
                  className={({ isActive }) =>
                    ` duration-200 ${
                      isActive ? "text-[#C074B3] font-bold" : "text-black"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#C074B3] hover:font-bold lg:p-0 hover:underline  transition-all duration-300  ease-in-out transform font-medium  hover:scale-105 flex`
                  }
                >
                  BRAND
                  <svg
                    className={`w-2.5 h-2.5 ms-3 ${
                      isBrandMenuOpen ? "rotate-180" : ""
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
                </NavLink>

                {isBrandMenuOpen && (
                  <div
                    id="mega-menu-full-image-dropdown"
                    className="fixed rounded-md  bg-white z-[999] p-2  "
                  >
                    <div className="flex flex-col max-w-screen-md py-6 mx-0 text-black text-sm font-medium px-12">
                      <ul
                        className="hidden mb-4 space-y-4  md:block"
                        aria-labelledby="mega-menu-full-image-button"
                      >
                        <li>
                          <a
                            href="#"
                            className="hover:underline hover:text-[#C074B3] dark:hover:text-[#C074B3]"
                          >
                            ZEFR
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="hover:underline hover:text-[#C074B3] dark:hover:text-[#C074B3]"
                          >
                            FASTRACK
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="hover:underline hover:text-[#C074B3] dark:hover:text-[#C074B3]"
                          >
                            VOGUE EYEWEAR
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="hover:underline hover:text-[#C074B3] dark:hover:text-[#C074B3]"
                          >
                            RAY BAN
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="hover:underline hover:text-[#C074B3] dark:hover:text-[#C074B3]"
                          >
                            MAUI JIM
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="hover:underline hover:text-[#C074B3] dark:hover:text-[#C074B3]"
                          >
                            TED-BAKER
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="hover:underline hover:text-[#C074B3] dark:hover:text-[#C074B3]"
                          >
                            ZEAL OPTICS
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="flex gap-6">
              <MdFavoriteBorder className=" text-2xl" />
              <NavLink
                to="/cartpage"
                className="flex items-center text-[#C074B3]"
              >
                <FiShoppingCart className="text-2xl text-black" />
                <span className="font-semibold">{cartItems.length}</span>
              </NavLink>

             
            </div>
          </div>
        </div>
      </div>

      {/* mobile part */}
      <div className="shadow-md p-4 z-[999] fixed top-0 bg-white w-full   lg:hidden  ">
        <div className="mt-1 flex justify-between  ">
          <section className="flex items-center gap-1">
            <FiMenu
              onClick={() => setMenu(true)}
              className="text-2xl cursor-pointer text-[#C074B3] rounded-full bg-white shadow-xl"
            />
            <Link to="/">
              <img className="w-28 " src={logo} alt="Logo" />
            </Link>
          </section>
          <div className="flex gap-2">
            {/* <IoSearchSharp className="text-2xl" /> */}
            <SearchbarMobile />
            <MdFavoriteBorder className=" text-xl " />
            <NavLink to="/cartpage" className="flex items-center text-red-600">
              <FiShoppingCart className="text-xl text-black" />
              <span className="font-semibold">{cartItems.length}</span>
            </NavLink>
            <div className="flex items-center gap-2">
  {/* User or Admin Name */}
  {user && (
    <>
      <Link to={user.role === "user" ? "/userdashboard" : "/admindashboard"}>
        <AccountIcon className="font-semibold text-lg" />
        {/* <span className="text-xs">{user.name}</span> */}
      </Link>
    </>
  )}
</div>

          </div>
        </div>
      </div>

      {/* Sidebar mobile menu */}
      {isSideMenuOpen && (
        <div className="fixed top-0 h-screen shadow-lg w-screen lg:hidden bg-white backdrop-blur-sm z-[9999]">
          <div className="shadow-lg p-5">
            <div className="flex justify-between items-center -mx-2">
              <div className="flex gap-3">
                <IoCloseOutline
                  onClick={() => setMenu(false)}
                  className="mt-0  text-3xl  cursor-pointer text-[#C074B3] rounded-full bg-white shadow-xl"
                />

                <Link to="/">
                  <img className="w-24 mt-2" src={logo} />
                </Link>
              </div>

              <div className="flex gap-2">
              {/* <IoSearchSharp className="text-xl" /> */}
              <SearchbarMobile />
                <MdFavoriteBorder className=" text-xl " />
                <NavLink
                  to="/cartpage"
                  className="flex items-center text-red-600"
                >
                  <FiShoppingCart className="text-xl text-black" />
                  <span className="font-semibold">{cartItems.length}</span>
                </NavLink>
               
                <div className="flex items-center gap-2">
  {/* User or Admin Name */}
  {user && (
    <>
      <Link to={user.role === "user" ? "/userdashboard" : "/admindashboard"}>
        <AccountIcon className="font-semibold text-lg" />
        {/* <span className="text-xs">{user.name}</span> */}
      </Link>
    </>
  )}
</div>
              </div>
 
            </div>
          </div>

          <div className="flex mt-2  mx-4 sm:mx-20 md:mx-28 ">
            <Tabs defaultActiveKey="1" className="">
              <TabPane tab={<span className="text-lg">Account</span>} key="1">
                <div className="w-full md:w-[720px] sm:w-[580px] h-fit shadow-lg bg-white mt-6 md:mt-16 sm:mt-12 border-4 border-white">
                  <h1 className="text-center text-lg mt-4 font-bold">
                    Hey There!
                  </h1>
                  <p className="text-xs md:text-lg sm:text-base text-center mt-3">
                    Sign into track your orders, view details and shop styles
                    just for you
                  </p>
                  <hr className="border border-[#C074B3] mt-2" />



<div className="flex justify-center my-4">
  {!user ? (
    <>
      <button className="text-white bg-[#C074B3] rounded py-2 px-6 md:px-10 md:py-3 md:text-base text-sm mr-5">
        <li>
          <Link to={"/otppage"}>Signup</Link>
        </li>
      </button>
      <button className="text-white bg-[#C074B3] rounded py-2 px-6 md:px-10 md:py-3 md:text-base text-sm">
        <li>
          <Link to={"/login"}>Login</Link>
        </li>
      </button>
    </>
  ) : (
    <button className="text-white bg-[#C074B3] rounded py-2 px-6 md:px-10 md:py-3 md:text-base text-sm" onClick={logout}>
      <li className="cursor-pointer">Logout</li>
    </button>
  )}
</div>



            


    




                </div>
                <div className="flex justify-between mt-10 gap-2">
                  <div className="flex bg-white mt-6 border-4 border-white py-2 md:py-3 md:px-14 sm:py-2 sm:px-12  shadow-lg">
                    <div className="w-6 h-6 md:w-10 md:h-10 sm:w-8 sm:h-8 rounded-full bg-[#C074B3] flex items-center justify-center">
                      <FaWhatsapp className="text-xl md:text-3xl sm:text-2xl text-white" />
                    </div>
                    <button className="text-sm md:text-lg sm:text-base font-medium ml-1 ">
                      Buy via WhatsApp
                    </button>
                  </div>
                  <div className="flex bg-white mt-6 border-4 border-white py-2  md:py-3 md:px-14 sm:py-2 sm:px-12  shadow-lg">
                    <div className="w-6 h-6 md:w-10 md:h-10 sm:w-8 sm:h-8 rounded-full bg-[#C074B3] flex items-center justify-center">
                      <MdAddIcCall className="text-xl md:text-3xl sm:text-2xl text-white" />
                    </div>
                    <button className="font-medium md:text-lg sm:text-base text-sm ml-1">
                      Buy via Phone Call
                    </button>
                  </div>
                </div>
                {/* chat icon*/}
                <div className="flex justify-end">
                  <div className="flex justify-center  bg-[#C074B3] text-white rounded-full w-11 h-11 md:w-16 md:h-16 sm:w-16 sm:h-16 mt-11 ">
                    <IoChatbubbleEllipsesOutline className="text-3xl md:text-5xl sm:text-5xl mt-1.5" />
                  </div>
                </div>
              </TabPane>

              <TabPane tab={<span className="text-lg">Menu</span>} key="2">
                <section className=" flex flex-col bg-white w-full h-fit md:w-[720px] sm:w-[580px]  border-4 border-white p-2 rounded-md shadow-lg  flex-grow text-lg font-normal">
                  {/* mega navbar for mobile eyeglasses part */}
                  <div
                    className="relative"
                    onMouseEnter={toggleEyeglassesMenu}
                    onMouseLeave={toggleEyeglassesMenu}
                  >
                    <div className="flex" onClick={toggleEyeglassesMenu}>
                     
                      <h1 className="">EYEGLASSES</h1>
                      <svg
                        className={`w-2.5 h-2.5 ms-3 ${
                          isEyeglassesMenuOpen ? "rotate-180" : ""
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

                    {isEyeglassesMenuOpen && (
                      <div
                        id="mega-menu-full-image-dropdown"
                        className="fixed left-1 right-1 h-fit bg-gray-100 md:mx-28 sm:mx-20 shadow-md z-[999] p-2 font-normal"
                      >
                        <div className="grid max-w-screen-md py-5 mx-2 text-black text-base  grid-cols-1 px-6">
                          {/* gender part */}
                          <ul
                            className="mb-4 space-y-4 md:block"
                            aria-labelledby="mega-menu-full-image-button"
                          >
                            <li>
                              <h1
                                className=" text-base font-medium cursor-pointer flex"
                                onClick={() => toggleSubMenu("gender")}
                              >
                                GENDER
                                <svg
                                  className={`w-2.5 h-2.5 ml-1 ${
                                    isSubMenuOpen === "gender"
                                      ? "rotate-180"
                                      : ""
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
                              </h1>
                              <div
                                className={`submenu ${
                                  isSubMenuOpen === "gender"
                                    ? "block"
                                    : "hidden"
                                }`}
                              >
                                <ul>
                                  <li>
                                    <NavLink
                                      to="/eyeglassespage"
                                      className="hover:underline hover:text-[#C074B3] dark:hover:text-[#C074B3]"
                                    >
                                      Men
                                    </NavLink>
                                  </li>
                                  <li>
                                    <a
                                      href="#"
                                      className="hover:underline hover:text-[#C074B3] dark:hover:text-[#C074B3]"
                                    >
                                      Women
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="#"
                                      className="hover:underline hover:text-[#C074B3] dark:hover:text-[#C074B3]"
                                    >
                                      Kids
                                    </a>
                                  </li>
                                  <h1 className="my-2 font-medium">
                                    COLLECTION
                                  </h1>
                                  <li>
                                    <a
                                      href="#"
                                      className="hover:underline hover:text-[#C074B3] dark:hover:text-[#C074B3]"
                                    >
                                      Signature
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="#"
                                      className="hover:underline hover:text-[#C074B3] dark:hover:text-[#C074B3]"
                                    >
                                      Retro
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="#"
                                      className="hover:underline hover:text-[#C074B3] dark:hover:text-[#C074B3]"
                                    >
                                      Crystal Burst
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="#"
                                      className="hover:underline hover:text-[#C074B3] dark:hover:text-[#C074B3]"
                                    >
                                      Ace-Basics
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </li>
                          </ul>

                          {/* shape part */}

                          <ul className="mb-4 space-y-4 md:mb-0">
                            <li>
                              <h1
                                className="font-semibold text-base cursor-pointer flex"
                                onClick={() => toggleSubMenu("shape")}
                              >
                                SHAPE
                                <svg
                                  className={`w-2.5 h-2.5 ml-1 transform transition-transform duration-200 ${
                                    isSubMenuOpen === "shape"
                                      ? "rotate-180"
                                      : ""
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
                              </h1>
                              <div
                                className={`submenu ${
                                  isSubMenuOpen === "shape" ? "block" : "hidden"
                                }`}
                              >
                                <ul>
                                  <li>
                                    <a
                                      href="#"
                                      className="hover:underline hover:text-[#C074B3] dark:hover:text-[#C074B3]"
                                    >
                                      Rectangle
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="#"
                                      className="hover:underline hover:text-[#C074B3] dark:hover:text-[#C074B3]"
                                    >
                                      Round
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="#"
                                      className="hover:underline hover:text-[#C074B3] dark:hover:text-[#C074B3]"
                                    >
                                      Cat Eye
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="#"
                                      className="hover:underline hover:text-[#C074B3] dark:hover:text-[#C074B3]"
                                    >
                                      Pilot
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="#"
                                      className="hover:underline hover:text-[#C074B3] dark:hover:text-[#C074B3]"
                                    >
                                      Wayfarer
                                    </a>
                                  </li>
                                  <h1 className="my-2 font-medium">STYLE</h1>
                                  <li>
                                    <a
                                      href="#"
                                      className="hover:underline hover:text-[#C074B3] dark:hover:text-[#C074B3]"
                                    >
                                      Rimmed
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="#"
                                      className="hover:underline hover:text-[#C074B3] dark:hover:text-[#C074B3]"
                                    >
                                      Semi-Rimmed
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="#"
                                      className="hover:underline hover:text-[#C074B3] dark:hover:text-[#C074B3]"
                                    >
                                      Rimless
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </li>
                          </ul>

                          {/* top brands */}
                          <ul className="mb-4 space-y-4 md:mb-0">
                            <li>
                              <h1
                                className="font-semibold text-base cursor-pointer flex"
                                onClick={() => toggleSubMenu("topbrands")}
                              >
                                TOP BRANDS
                                <svg
                                  className={`w-2.5 h-2.5 ml-1 transform transition-transform duration-200 ${
                                    isSubMenuOpen === "topbrands"
                                      ? "rotate-180"
                                      : ""
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
                              </h1>
                              <div
                                className={`submenu ${
                                  isSubMenuOpen === "topbrands"
                                    ? "block"
                                    : "hidden"
                                }`}
                              >
                                <ul>
                                  <li>
                                    <a
                                      href="#"
                                      className="hover:underline hover:text-[#C074B3] dark:hover:text-[#C074B3]"
                                    >
                                      Zefr
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="#"
                                      className="hover:underline hover:text-[#C074B3] dark:hover:text-[#C074B3]"
                                    >
                                      Titan
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="#"
                                      className="hover:underline hover:text-[#C074B3] dark:hover:text-[#C074B3]"
                                    >
                                      Fasttrack
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="#"
                                      className="hover:underline hover:text-[#C074B3] dark:hover:text-[#C074B3]"
                                    >
                                      Vogue
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="#"
                                      className="hover:underline hover:text-[#C074B3] dark:hover:text-[#C074B3]"
                                    >
                                      Tommy Hilfiger
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="#"
                                      className="hover:underline hover:text-[#C074B3] dark:hover:text-[#C074B3]"
                                    >
                                      Diesel
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="#"
                                      className="hover:underline hover:text-[#C074B3] dark:hover:text-[#C074B3]"
                                    >
                                      Armani
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </li>
                          </ul>
                          {/* FEATURED BRANDS */}
                          <ul className="mb-4 space-y-4 md:mb-0">
                            <li>
                              <h1
                                className="font-semibold text-base cursor-pointer flex"
                                onClick={() => toggleSubMenu("featuredbrands")}
                              >
                                FEATURED BRANDS
                                <svg
                                  className={`w-2.5 h-2.5 ml-1 transform transition-transform duration-200 ${
                                    isSubMenuOpen === "featuredbrands"
                                      ? "rotate-180"
                                      : ""
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
                              </h1>
                              <div
                                className={`submenu ${
                                  isSubMenuOpen === "featuredbrands"
                                    ? "block"
                                    : "hidden"
                                }`}
                              >
                                <ul>
                                  <li>
                                    <a
                                      href="#"
                                      className="hover:underline hover:text-[#C074B3] dark:hover:text-[#C074B3]"
                                    >
                                      Rayban
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="#"
                                      className="hover:underline hover:text-[#C074B3] dark:hover:text-[#C074B3]"
                                    >
                                      Carrera
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="#"
                                      className="hover:underline hover:text-[#C074B3] dark:hover:text-[#C074B3]"
                                    >
                                      Bolon
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="#"
                                      className="hover:underline hover:text-[#C074B3] dark:hover:text-[#C074B3]"
                                    >
                                      Stepper
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="#"
                                      className="hover:underline hover:text-[#C074B3] dark:hover:text-[#C074B3]"
                                    >
                                      Oakley
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="#"
                                      className="hover:underline hover:text-[#C074B3] dark:hover:text-[#C074B3]"
                                    >
                                      Aristo
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="#"
                                      className="hover:underline hover:text-[#C074B3] dark:hover:text-[#C074B3]"
                                    >
                                      Armani
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </li>
                          </ul>
                          {/* style */}
                          <div className="mb-4 space-y-4 md:mb-0">
                            <div>
                              <h1
                                className="font-semibold text-base cursor-pointer flex"
                                onClick={() => toggleSubMenu("style")}
                              >
                                STYLE
                                <svg
                                  className={`w-2.5 h-2.5 ml-1 transform transition-transform duration-200 ${
                                    isSubMenuOpen === "style"
                                      ? "rotate-180"
                                      : ""
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
                              </h1>
                              <div
                                className={`submenu ${
                                  isSubMenuOpen === "style" ? "block" : "hidden"
                                }`}
                              >
                                <div>
                                  <img
                                    className="w-auto h-auto rounded mt-3"
                                    src={img24}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* sunglasses part */}
                  <div
                    className="relative mt-3"
                    onMouseEnter={toggleSunglassesMenu}
                    onMouseLeave={toggleSunglassesMenu}
                  >
                    <div className="flex" onClick={toggleSunglassesMenu}>
                      {/* <NavLink
                        to="/sunglasses"
                        className={({ isActive }) =>
                          ` ${
                            isActive ? "text-[#C074B3]" : "text-black"
                          }text-black  transition-all duration-300 ease-in-out transform  hover:scale-105 hover:underline hover:text-[#C074B3] flex`
                        }
                      >
                        SUNGLASSES
                        <svg
                          className={`w-2.5 h-2.5 ms-3 ${
                            isSunglassesMenuOpen ? "rotate-180" : ""
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
                      </NavLink> */}
                      <h1>SUNGLASSES</h1>
                      <svg
                        className={`w-2.5 h-2.5 ms-3 ${
                          isSunglassesMenuOpen ? "rotate-180" : ""
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

                    {isSunglassesMenuOpen && (
                      <div
                        id="mega-menu-full-image-dropdown"
                        className="fixed left-1 right-1 h-fit md:mx-28 sm:mx-20  bg-gray-100 shadow-md z-[999] p-2 font-normal"
                      >
                        <div className="grid max-w-screen-md py-5 mx-2 text-black text-sm font-medium grid-cols-1 px-6">
                          {/* gender */}
                          <ul
                            className="mb-4 space-y-4 md:block"
                            aria-labelledby="mega-menu-full-image-button"
                          >
                            <li>
                              <h1
                                className="font-semibold text-base cursor-pointer flex"
                                onClick={() => toggleSubMenu("gender")}
                              >
                                GENDER
                                <svg
                                  className={`w-2.5 h-2.5 ml-1 ${
                                    isSubMenuOpen === "gender"
                                      ? "rotate-180"
                                      : ""
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
                              </h1>
                              <div
                                className={`submenu ${
                                  isSubMenuOpen === "gender"
                                    ? "block"
                                    : "hidden"
                                }`}
                              >
                                <ul>
                                  <li>
                                    <a
                                      href="#"
                                      className="hover:underline hover:text-[#C074B3] dark:hover:text-[#C074B3]"
                                    >
                                      Men
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="#"
                                      className="hover:underline hover:text-[#C074B3] dark:hover:text-[#C074B3]"
                                    >
                                      Women
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="#"
                                      className="hover:underline hover:text-[#C074B3] dark:hover:text-[#C074B3]"
                                    >
                                      Kids
                                    </a>
                                  </li>
                                  <h1 className="my-2 font-medium">
                                    COLLECTION
                                  </h1>
                                  <li>
                                    <a
                                      href="#"
                                      className="hover:underline hover:text-[#C074B3] dark:hover:text-[#C074B3]"
                                    >
                                      Signature
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="#"
                                      className="hover:underline hover:text-[#C074B3] dark:hover:text-[#C074B3]"
                                    >
                                      Retro
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="#"
                                      className="hover:underline hover:text-[#C074B3] dark:hover:text-[#C074B3]"
                                    >
                                      Crystal Burst
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="#"
                                      className="hover:underline hover:text-[#C074B3] dark:hover:text-[#C074B3]"
                                    >
                                      Ace-Basics
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </li>
                          </ul>
                          {/* shape */}
                          <ul className="mb-4 space-y-4 md:mb-0">
                            <li>
                              <h1
                                className="font-semibold text-base cursor-pointer flex"
                                onClick={() => toggleSubMenu("shape")}
                              >
                                SHAPE
                                <svg
                                  className={`w-2.5 h-2.5 ml-1 transform transition-transform duration-200 ${
                                    isSubMenuOpen === "shape"
                                      ? "rotate-180"
                                      : ""
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
                              </h1>
                              <div
                                className={`submenu ${
                                  isSubMenuOpen === "shape" ? "block" : "hidden"
                                }`}
                              >
                                <ul>
                                  <li>
                                    <a
                                      href="#"
                                      className="hover:underline hover:text-[#C074B3] dark:hover:text-[#C074B3]"
                                    >
                                      Rectangle
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="#"
                                      className="hover:underline hover:text-[#C074B3] dark:hover:text-[#C074B3]"
                                    >
                                      Round
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="#"
                                      className="hover:underline hover:text-[#C074B3] dark:hover:text-[#C074B3]"
                                    >
                                      Cat Eye
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="#"
                                      className="hover:underline hover:text-[#C074B3] dark:hover:text-[#C074B3]"
                                    >
                                      Pilot
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="#"
                                      className="hover:underline hover:text-[#C074B3] dark:hover:text-[#C074B3]"
                                    >
                                      Wayfarer
                                    </a>
                                  </li>
                                  <h1 className="my-2 font-bold">STYLE</h1>
                                  <li>
                                    <a
                                      href="#"
                                      className="hover:underline hover:text-[#C074B3] dark:hover:text-[#C074B3]"
                                    >
                                      Rimmed
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="#"
                                      className="hover:underline hover:text-[#C074B3] dark:hover:text-[#C074B3]"
                                    >
                                      Semi-Rimmed
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="#"
                                      className="hover:underline hover:text-[#C074B3] dark:hover:text-[#C074B3]"
                                    >
                                      Rimless
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </li>
                          </ul>
                          {/* top brands */}
                          <ul className="mb-4 space-y-4 md:mb-0">
                            <li>
                              <h1
                                className="font-semibold text-base cursor-pointer flex"
                                onClick={() => toggleSubMenu("topbrands")}
                              >
                                TOP BRANDS
                                <svg
                                  className={`w-2.5 h-2.5 ml-1 transform transition-transform duration-200 ${
                                    isSubMenuOpen === "topbrands"
                                      ? "rotate-180"
                                      : ""
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
                              </h1>
                              <div
                                className={`submenu ${
                                  isSubMenuOpen === "topbrands"
                                    ? "block"
                                    : "hidden"
                                }`}
                              >
                                <ul>
                                  <li>
                                    <a
                                      href="#"
                                      className="hover:underline hover:text-[#C074B3] dark:hover:text-[#C074B3]"
                                    >
                                      Zefr
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="#"
                                      className="hover:underline hover:text-[#C074B3] dark:hover:text-[#C074B3]"
                                    >
                                      Titan
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="#"
                                      className="hover:underline hover:text-[#C074B3] dark:hover:text-[#C074B3]"
                                    >
                                      Fasttrack
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="#"
                                      className="hover:underline hover:text-[#C074B3] dark:hover:text-[#C074B3]"
                                    >
                                      Vogue
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="#"
                                      className="hover:underline hover:text-[#C074B3] dark:hover:text-[#C074B3]"
                                    >
                                      Tommy Hilfiger
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="#"
                                      className="hover:underline hover:text-[#C074B3] dark:hover:text-[#C074B3]"
                                    >
                                      Diesel
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="#"
                                      className="hover:underline hover:text-[#C074B3] dark:hover:text-[#C074B3]"
                                    >
                                      Armani
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </li>
                          </ul>
                          {/* FEATURED BRANDS */}
                          <ul className="mb-4 space-y-4 md:mb-0">
                            <li>
                              <h1
                                className="font-semibold text-base cursor-pointer flex"
                                onClick={() => toggleSubMenu("featuredbrands")}
                              >
                                FEATURED BRANDS
                                <svg
                                  className={`w-2.5 h-2.5 ml-1 transform transition-transform duration-200 ${
                                    isSubMenuOpen === "featuredbrands"
                                      ? "rotate-180"
                                      : ""
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
                              </h1>
                              <div
                                className={`submenu ${
                                  isSubMenuOpen === "featuredbrands"
                                    ? "block"
                                    : "hidden"
                                }`}
                              >
                                <ul>
                                  <li>
                                    <a
                                      href="#"
                                      className="hover:underline hover:text-[#C074B3] dark:hover:text-[#C074B3]"
                                    >
                                      Rayban
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="#"
                                      className="hover:underline hover:text-[#C074B3] dark:hover:text-[#C074B3]"
                                    >
                                      Carrera
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="#"
                                      className="hover:underline hover:text-[#C074B3] dark:hover:text-[#C074B3]"
                                    >
                                      Bolon
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="#"
                                      className="hover:underline hover:text-[#C074B3] dark:hover:text-[#C074B3]"
                                    >
                                      Stepper
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="#"
                                      className="hover:underline hover:text-[#C074B3] dark:hover:text-[#C074B3]"
                                    >
                                      Oakley
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="#"
                                      className="hover:underline hover:text-[#C074B3] dark:hover:text-[#C074B3]"
                                    >
                                      Aristo
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="#"
                                      className="hover:underline hover:text-[#C074B3] dark:hover:text-[#C074B3]"
                                    >
                                      Armani
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </li>
                          </ul>
                          {/* style */}
                          <div className="mb-4 space-y-4 md:mb-0">
                            <div>
                              <h1
                                className="font-semibold text-base cursor-pointer flex"
                                onClick={() => toggleSubMenu("style")}
                              >
                                STYLE
                                <svg
                                  className={`w-2.5 h-2.5 ml-1 transform transition-transform duration-200 ${
                                    isSubMenuOpen === "style"
                                      ? "rotate-180"
                                      : ""
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
                              </h1>
                              <div
                                className={`submenu ${
                                  isSubMenuOpen === "style" ? "block" : "hidden"
                                }`}
                              >
                                <div>
                                  <img
                                    className="w-auto h-auto rounded-md mt-3"
                                    src={img24}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  <NavLink
                    to="/computerglassespage"
                    className={({ isActive }) =>
                      ` ${
                        isActive ? "text-[#C074B3] font-bold" : "text-black"
                      }text-black  transition-all duration-300  ease-in-out transform  hover:scale-105 hover:underline hover:text-[#C074B3] mt-3 `
                    }
                  >
                    COMPUTER GLASSES
                  </NavLink>
                  <NavLink
                    to="/readglassespage"
                    className={({ isActive }) =>
                      ` ${
                        isActive ? "text-[#C074B3] font-bold" : "text-black"
                      }text-black  transition-all duration-300 ease-in-out transform hover:scale-105 hover:underline hover:text-[#C074B3] mt-3 `
                    }
                  >
                    READ GLASSES
                  </NavLink>
                  {/* conatct lenses */}
                  <div
                    className="relative mt-3"
                    onMouseEnter={toggleContactLensesMenu}
                    onMouseLeave={toggleContactLensesMenu}
                  >
                    <div className="flex" onClick={toggleContactLensesMenu}>
                      <h1>CONTACT LENSES</h1>
                      <svg
                        className={`w-2.5 h-2.5 ms-3 ${
                          isContactLensesMenuOpen ? "rotate-180" : ""
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
                    {isContactLensesMenuOpen && (
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
                              <NavLink
                                  to="/contact_lenses?data=alcon"
                                className="hover:underline hover:text-[#C074B3] dark:hover:text-[#C074B3]"
                              >
                                Alcon
                              </NavLink>
                            </li>
                            <li>
                              <NavLink
                                to="/contact_lenses?data=bausch_lomb"
                                className="hover:underline hover:text-[#C074B3] dark:hover:text-[#C074B3]"
                              >
                                BOUSCH & LOMB
                              </NavLink>
                            </li>
                            <li>
                              <NavLink 
                               to="/contact_lenses?data=johnson_johnson"
                                className="hover:underline hover:text-[#C074B3] dark:hover:text-[#C074B3]"
                              >
                                JOHNSON & JOHNSON
                              </NavLink>
                            </li>
                            <li>
                              <NavLink 
                               to="/contact_lenses?data=johnson_johnson"
                                className="hover:underline hover:text-[#C074B3] dark:hover:text-[#C074B3]"
                              >
                              COOPERVISION
                              </NavLink>
                              </li>
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* accessories */}
                  <div
                    className="relative mt-3"
                    onMouseEnter={toggleAccessoriesMenu}
                    onMouseLeave={toggleAccessoriesMenu}
                  >
                    {/* <NavLink
                      to="/accessoriespage"
                      className={({ isActive }) =>
                        ` duration-200 ${
                          isActive ? "text-[#C074B3] " : "text-black"
                        } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#C074B3] hover:font-bold lg:p-0 hover:underline  transition-all duration-300  ease-in-out transform  hover:scale-105 flex`
                      }
                    >
                      ACCESSORIES
                      <svg
                        className={`w-2.5 h-2.5 ms-3 ${
                          isAccessoriesMenuOpen ? "rotate-180" : ""
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
                    </NavLink> */}
                    <div className="flex" onClick={toggleAccessoriesMenu}>
                      <h1>ACCESSORIES</h1>
                      <svg
                        className={`w-2.5 h-2.5 ms-3 ${
                          isAccessoriesMenuOpen ? "rotate-180" : ""
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

                    {isAccessoriesMenuOpen && (
                      <div
                        id="mega-menu-full-image-dropdown"
                        className="fixed left-1 right-1 h-fit bg-gray-100 md:mx-28 sm:mx-20  shadow-md z-[999] p-2 font-normal "
                      >
                        <div className="flex flex-col max-w-screen-md py-6 mx-0 text-black text-sm font-medium px-4">
                          <ul
                            className="mb-4 space-y-4"
                            aria-labelledby="mega-menu-full-image-button"
                          >
                            <li>
                              <a
                                href="#"
                                className="hover:underline hover:text-[#C074B3] dark:hover:text-[#C074B3]"
                              >
                                SWIMMING CLASSES
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="hover:underline hover:text-[#C074B3] dark:hover:text-[#C074B3]"
                              >
                                CONTACT LENS SOLUTION
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="hover:underline hover:text-[#C074B3] dark:hover:text-[#C074B3]"
                              >
                                CHARGER
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="hover:underline hover:text-[#C074B3] dark:hover:text-[#C074B3]"
                              >
                                SOLAR ECLIPSE GOGGLES
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="hover:underline hover:text-[#C074B3] dark:hover:text-[#C074B3]"
                              >
                                CONTACT LENS SOLUTION
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="hover:underline hover:text-[#C074B3] dark:hover:text-[#C074B3]"
                              >
                                WIPES
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="hover:underline hover:text-[#C074B3] dark:hover:text-[#C074B3]"
                              >
                                CLIP ON
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="hover:underline hover:text-[#C074B3] dark:hover:text-[#C074B3]"
                              >
                                FACE MASKS
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="hover:underline hover:text-[#C074B3] dark:hover:text-[#C074B3]"
                              >
                                PACKAGING CASE
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="hover:underline hover:text-[#C074B3] dark:hover:text-[#C074B3]"
                              >
                                CHAINS
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* brand part */}
                  <div
                    className="relative mt-3"
                    onMouseEnter={toggleBrandMenu}
                    onMouseLeave={toggleBrandMenu}
                  >
                    <div className="flex" onClick={toggleBrandMenu}>
                      <h1>BRAND</h1>
                      <svg
                        className={`w-2.5 h-2.5 ms-3 ${
                          isBrandMenuOpen ? "rotate-180" : ""
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

                    {isBrandMenuOpen && (
                      <div
                        id="mega-menu-full-image-dropdown"
                        className="fixed left-1 right-1 h-fit bg-gray-100 md:mx-28 sm:mx-20  shadow-md z-[999] p-2 font-normal "
                      >
                        <div className="flex flex-col max-w-screen-md py-6 mx-0 text-black text-sm font-medium px-4">
                          <ul
                            className=" mb-4 space-y-4"
                            aria-labelledby="mega-menu-full-image-button"
                          >
                            <li>
                              <a
                                href="#"
                                className="hover:underline hover:text-[#C074B3] dark:hover:text-[#C074B3]"
                              >
                                ZEFR
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="hover:underline hover:text-[#C074B3] dark:hover:text-[#C074B3]"
                              >
                                FASTRACK
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="hover:underline hover:text-[#C074B3] dark:hover:text-[#C074B3]"
                              >
                                VOGUE EYEWEAR
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="hover:underline hover:text-[#C074B3] dark:hover:text-[#C074B3]"
                              >
                                RAY BAN
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="hover:underline hover:text-[#C074B3] dark:hover:text-[#C074B3]"
                              >
                                MAUI JIM
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="hover:underline hover:text-[#C074B3] dark:hover:text-[#C074B3]"
                              >
                                TED-BAKER
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="hover:underline hover:text-[#C074B3] dark:hover:text-[#C074B3]"
                              >
                                ZEAL OPTICS
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>
                </section>

                <div>
                  <div className="flex mt-6 w-full h-fit shadow-lg border-4 border-white p-2">
                    <div className="w-8 h-8 rounded-full bg-[#C074B3] flex items-center justify-center">
                      <IoLocationOutline className="text-2xl text-white" />
                    </div>
                    <span className="ml-2 font-medium text-base md:text-xl sm:text-lg">
                      Store Locator
                    </span>
                  </div>
                  <div className="flex mt-3 w-full h-fit shadow-lg border-4 border-white p-2">
                    <div className="w-8 h-8 rounded-full bg-[#C074B3] flex items-center justify-center">
                      <FaEye className="text-xl text-white" />
                    </div>
                    <span className="ml-2 font-medium text-base md:text-xl sm:text-lg">
                      Eye Test
                    </span>
                  </div>
                  <div className="flex mt-3 w-full h-fit shadow-lg border-4 border-white p-2">
                    <div className="w-8 h-8 rounded-full bg-[#C074B3] flex items-center justify-center">
                      <LuBus className="text-xl text-white" />
                    </div>
                    <span className="ml-2 font-medium text-base md:text-xl sm:text-lg">
                      Track Order
                    </span>
                  </div>
                </div>

                <div className="flex justify-between gap-2">
                  <div className="flex bg-white mt-6 border-4 border-white py-2 md:py-3 md:px-14 sm:py-2 sm:px-12  shadow-lg">
                    <div className="w-6 h-6 md:w-10 md:h-10 sm:w-8 sm:h-8 rounded-full bg-[#C074B3] flex items-center justify-center">
                      <FaWhatsapp className="text-xl md:text-3xl sm:text-2xl text-white" />
                    </div>
                    <button className="text-sm md:text-lg sm:text-base font-medium ml-1 ">
                      Buy via WhatsApp
                    </button>
                  </div>
                  <div className="flex bg-white mt-6 border-4 border-white py-2  md:py-3 md:px-14 sm:py-2 sm:px-12  shadow-lg">
                    <div className="w-6 h-6 md:w-10 md:h-10 sm:w-8 sm:h-8 rounded-full bg-[#C074B3] flex items-center justify-center">
                      <MdAddIcCall className="text-xl md:text-3xl sm:text-2xl text-white" />
                    </div>
                    <button className="font-medium md:text-lg sm:text-base text-sm ml-1 ">
                      Buy via Phone Call
                    </button>
                  </div>
                </div>
              </TabPane>
            </Tabs>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;