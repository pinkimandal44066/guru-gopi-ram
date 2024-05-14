// import React from "react";
import logo from "../../../public/images/logo.png";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";
const Footer = () => {
  return (
    <div>
      <hr className="border-8 border-blue-500 " />
      <div className="max-w-screen-xl  lg:mx-auto mx-5 ">
        <div
          className="flex justify-between   items-center lg:flex-row md:flex-row sm:flex-col 
    flex-col "
        >
          <div className="flex flex-col lg:mt-8 lg:-ml-0 md:-ml-0 sm:-ml-0 -ml-20">
            <img src={logo} alt="" />
            <h2 className="font-semibold">Connect With Us</h2>

            <div className="flex  lg:text-2xl gap-5 mt-4 text-[#086AAE] ">
              <FaFacebookF />
              <FaInstagram />
              <FaYoutube />
              <FaLinkedin />
            </div>

            <h1 className="mt-4 font-semibold">Subscribe To Our Newsletter</h1>
            <input
              type="tel"
              placeholder="Enter your email ID"
              style={{
                border: "1px solid black",
                paddingRight: "30px",
                marginTop: "10px",
              }}
            />

            <h1 className="mt-4 font-semibold lg:block md:block hidden">
              Phone:
            </h1>
            <h1 className="mt-2 text-2xl text-blue-500 font-semibold lg:block md:block hidden">
              +91 12340 5689
            </h1>
          </div>

          <div className="flex lg:gap-20 justify-between items-center ">
            <div className="ml-4 lg:ml-0 md:ml-0 sm:ml-0">
              <h2 className="font-semibold lg:-mt-20 md:mt-0 sm:-mt-10 -mt-10 mb-2">
                Patient Guide
              </h2>

              <ul className="font-sans ">
                <li className="mb-1">Find a Doctor</li>
                <li className="mb-1">Our Network</li>
                <li className="w-44 mb-1">Book an Appointment</li>
                <li className="mb-1">Make an Enquiry</li>
                <li className="mb-1">Feedback</li>
                <li className="mb-1">Health Check Package</li>
              </ul>
            </div>
            <div className="w-44  lg:mt-0 md:mt-0 mt-10 sm:mt-10">
              <h2 className="font-semibold ">List of Impalements</h2>

              <h1 className="mb-1">Corporate</h1>
              <h1 className="mb-1">TPA</h1>
              <h1 className="mb-1 ">Government Scheme</h1>
              <h1 className="font-semibold mt-3">News & Media</h1>
              <h1 className="mt-3">News</h1>
              <h1 className="mb-1 ">Events</h1>
              <h1 className="mb-1 ">Interviews</h1>
              <h1 className="mb-1 ">Watch Our Videos</h1>
              <h1 className="mb-1 ">Media Contacts</h1>
            </div>
          </div>

          <div className="flex lg:gap-1 justify-between items-center lg:-mt-10">
            <div className="flex-col w-44 lg:-mt-4 lg:-ml-20 md:mt-1 sm:-mt-28 -mt-24 ml-4 ">
              <h2 className="text-sm font-semibold mb-3 mr-12">Company</h2>

              <h1 className="mb-1 ">About Us</h1>
              <h1 className="mb-1 ">Leadership</h1>
              <h1 className="mb-1 ">Statuary Complies</h1>
              <h1 className="mb-1 ">News & Media</h1>
              <h1 className="mb-1 ">Careers</h1>
              <h1 className="mb-1 ">CSR</h1>
              <h1 className="mb-1 ">Contact Us</h1>
            </div>
            <div className=" flex-col  w-44 lg:-mt-10 ">
              <h2 className="text-sm font-semibold mb-4 -ml-1 ">
                Centres Of Excellence
              </h2>
              <h1 className="mb-1 ">Find a Doctor</h1>
              <h1 className="mb-1 "> Our Network </h1>
              <h1 className="mb-1 ">Book an Appointment</h1>
              <h1 className="mb-1 ">Make an Enquiry</h1>
              <h1 className="mb-1 ">Feedback</h1>
              <h1 className="mb-1 ">Health Check Package</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-blue-600 text-center text-white">Powered By Hashtago</div>
    </div>
  );
};

export default Footer;







