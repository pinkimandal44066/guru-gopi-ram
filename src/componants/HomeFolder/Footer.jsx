// import React from 'react';
// import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";
// import logo from '../../../public/images/logo.png'
// const Footer = () => {
//   return (
    
//     <footer className="py-8 bg-gray-100">
//       <div className="container mx-auto">
//         <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          
// <div className="text-center ml-auto">
//   <img src={logo} alt='' className='ml-20 lg:ml-0' />
//   <h2 className="text-lg font-semibold mr-16 mb-4 mt-4">Connect With Us</h2>
//   <div className="flex justify-center mr-8 gap-6">
//     <FaFacebookF className="text-3xl text-blue-700" /> 
//     <FaInstagram className="text-3xl text-blue-700" />
//     <FaYoutube className="text-3xl text-blue-700" />
//     <FaLinkedin className="text-3xl text-blue-700" />
//   </div>
//   <h1 className='mt-4 font-semibold'>Subscribe To Our Newsletter</h1>
//   <input type="tel" className="bg-white border border-black mt-2 px-4 ml-2" placeholder="Enter your email ID"/>
//   <h1 className='mt-3 font-semibold mr-40'>Phone</h1>
//   <h1 className='text-blue-600 font-semibold mr-20 text-xl'>+91 12340 5689</h1>
// </div>

// <div className="text-center ml-auto">
//   <h2 className="text-lg font-semibold mb-4 mr-10">Patient Guide</h2>
//   <div className="text-left  mr-auto max-w-xs">
//     <ul>
//       <li>Find a Doctor</li>
//       <li>Our Network</li>
//       <li>Book an Appointment</li>
//       <li>Make an Enquiry</li>
//       <li>Feedback</li>
//       <li>Health Check Package</li>
//     </ul>
//   </div>
// </div>

//           <div className="text-center ml-auto">
//             <h2 className="text-lg font-semibold mb-4">List of Impalements</h2>
//             <div className="text-left  mr-auto max-w-xs">
//             <h1>Corporate</h1>
//             <h1>TPA</h1>
//             <h1>gOVERNMENT Scheme</h1>
//             <h1 className='font-semibold mt-3'>News & Media</h1>
//             <h1 className='mt-3'>News</h1>
//             <h1>Events</h1>
//             <h1>Interviews</h1>
//             <h1>Watch Our Videos</h1>
//             <h1>Media Contacts</h1>
//             </div>
//           </div>
//           <div className="text-center ml-auto">
//             <h2 className="text-lg font-semibold mb-4 mr-12">Company</h2>
//             <div className="text-left  mr-auto max-w-xs">
//             <h1>About Us</h1>
//             <h1>Leadership</h1>
//             <h1>Statuary Complies</h1>
//             <h1>News & Media</h1>
//             <h1>Careers</h1>
//             <h1>CSR</h1>
//             <h1>Contact Us</h1>
//             </div>
//           </div>
//           <div className="text-center ml-auto">
//             <h2 className="text-lg font-semibold mb-4">Centres Of Excellence</h2>
//             <div className="text-left  mr-auto max-w-xs">
//             <h1>Find a Doctor</h1>
//             <h1> Our Network </h1> 
//             <h1>Book an Appointment</h1> 
//             <h1>Make an Enquiry</h1>
//             <h1>Feedback</h1>
//             <h1>Health Check Package</h1>
//             </div>
//           </div>
//         </div>
//       </div>
//       <hr className="border-8 border-blue-500 mt-8" />
//     </footer>
//   );
// }

// export default Footer;





import React from 'react';
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";
import logo from '../../../public/images/logo.png';

const Footer = () => {
  return (
    <footer className="py-8 bg-gray-100">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5">
          <div className="text-center ml-auto">
            <img src={logo} alt='' className='ml-20 lg:ml-0' />
            <h2 className="text-lg font-semibold mr-16 mb-4 mt-4">Connect With Us</h2>
            <div className="flex justify-center mr-8 gap-6">
              <FaFacebookF className="text-3xl text-blue-700" /> 
              <FaInstagram className="text-3xl text-blue-700" />
              <FaYoutube className="text-3xl text-blue-700" />
              <FaLinkedin className="text-3xl text-blue-700" />
            </div>
            <h1 className='mt-4 font-semibold'>Subscribe To Our Newsletter</h1>
            <input type="tel" className="bg-white border border-black mt-2 px-4 ml-2" placeholder="Enter your email ID"/>
            <h1 className='mt-3 font-semibold mr-40'>Phone</h1>
            <h1 className='text-blue-600 font-semibold mr-20 text-xl'>+91 12340 5689</h1>
          </div>

          <div className="text-center ml-auto">
            <h2 className="text-lg font-semibold mb-4 mr-10">Patient Guide</h2>
            <div className="text-left mr-auto max-w-xs">
              <ul>
                <li>Find a Doctor</li>
                <li>Our Network</li>
                <li>Book an Appointment</li>
                <li>Make an Enquiry</li>
                <li>Feedback</li>
                <li>Health Check Package</li>
              </ul>
            </div>
          </div>

          <div className="text-center ml-auto">
            <h2 className="text-lg font-semibold mb-4">List of Impalements</h2>
            <div className="text-left mr-auto max-w-xs">
              <h1>Corporate</h1>
              <h1>TPA</h1>
              <h1>gOVERNMENT Scheme</h1>
              <h1 className='font-semibold mt-3'>News & Media</h1>
              <h1 className='mt-3'>News</h1>
              <h1>Events</h1>
              <h1>Interviews</h1>
              <h1>Watch Our Videos</h1>
              <h1>Media Contacts</h1>
            </div>
          </div>

          <div className="text-center ml-auto">
            <h2 className="text-lg font-semibold mb-4 mr-12">Company</h2>
            <div className="text-left mr-auto max-w-xs">
              <h1>About Us</h1>
              <h1>Leadership</h1>
              <h1>Statuary Complies</h1>
              <h1>News & Media</h1>
              <h1>Careers</h1>
              <h1>CSR</h1>
              <h1>Contact Us</h1>
            </div>
          </div>

          <div className="text-center ml-auto">
            <h2 className="text-lg font-semibold mb-4">Centres Of Excellence</h2>
            <div className="text-left mr-auto max-w-xs">
              <h1>Find a Doctor</h1>
              <h1> Our Network </h1> 
              <h1>Book an Appointment</h1> 
              <h1>Make an Enquiry</h1>
              <h1>Feedback</h1>
              <h1>Health Check Package</h1>
            </div>
          </div>
        </div>
      </div>
      <hr className="border-8 border-blue-500 mt-8" />
    </footer>
  );
}

export default Footer;
