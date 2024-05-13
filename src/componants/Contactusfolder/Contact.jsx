// import React from 'react'
import img51 from '../../../public/images/img51.png'
import { MdPhoneInTalk } from "react-icons/md";
import { FaFacebookF, FaInstagram,   } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";
import { CiShare2 } from "react-icons/ci";
import { NavLink } from 'react-router-dom';

const Contact = () => {
  return (
    <>
<div className='mt-4 relative  '>
  <img className='w-full' src={img51} alt='' />
  <h1 className='absolute top-0 left-1/2 transform -translate-x-1/2 mt-10
  text-white text-3xl'>Contact Us</h1>
  <p className='absolute top-0 left-1/2 transform -translate-x-1/2 mt-20
  text-black lg:w-[35%] w-64 lg:text-sm text-xs '>We would love to hear from you! Please fill in the required details and our team will get in touch with you.
</p>
</div>



<div className='max-w-screen-xl lg:mx-48   mx-8 2xl:mx-auto'>
<div className='mt-8 lg:flex md:flex lg:flex-row md:flex-row  flex-col  justify-center gap-10  
absolute lg:top-80   transform'>
<div className='shadow-2xl  rounded-2xl lg:w-fit lg:h-96 md:h-fit py-20  px-6  w-fit bg-[#FFFFFF]'>
    <h1 className=' text-xl mx-8 -mt-10  '>Contact Details</h1>
    <div className='flex mt-4 mx-6'>
    <MdPhoneInTalk className='text-2xl text-white border 
    rounded-full bg-[#086AAE] border-blue-900 mt-3' />
        <h1 className='mx-4'>Phone Number</h1>
    </div>
    <h1 className='mx-16 -mt-3'>+91 111 222 4689</h1>


    <div className='flex mx-6'>
    <CiShare2  className='text-2xl text-white border 
    rounded-full bg-[#086AAE] border-[#086AAE] mt-10 '/>
        <h1 className='mt-6 mx-4 '>Follow us</h1>
    </div>
    <div className='flex mx-[57px] gap-4 -mt-2 text-[#086AAE]'>
    <FaFacebookF />
    <FaInstagram />
    <FiYoutube />
    <FaLinkedin />
    </div>
</div>
    <div className='shadow-2xl rounded-2xl 
     lg:text-xl  bg-white py-3 mt-10 px-6 md:px-28 lg:px-0  mb-20 lg:mb-0 lg:mt-0 md:mt-0 '>
     <div className='mt-5 flex gap-5  items-center justify-center '>
     <div>
     
        <button className='bg-[#086AAE] text-white text-xs py-2 px-4 rounded-2xl'>Enquiry</button>
        
      </div>
      <div>
      <button className='text-[#086AAE] bg-white border border-blue-500 text-xs py-2 px-4
       rounded-2xl'>Feedback</button>
     
      </div>
      

      <div>
  <button className='text-[#086AAE] bg-white border border-blue-500 text-xs py-2 px-4 rounded-2xl'>Other</button>
</div>

     </div>

  



<div className='lg:flex lg:flex-row flex-col lg:gap-20 lg:mx-10 mt-10 '>
  <div className=''>
  <h1 className='text-sm '>First Name </h1>
  <input type='' placeholder='Enter Your first name' className='border-b-2 border-gray-700 text-sm w-52' />
  </div>



  <div className=''>
  <h1 className='text-sm'>Last Name </h1>
  <input type='' placeholder='Enter Your last name' className='border-b-2 border-gray-700 text-sm w-52' />
  </div>
</div>




<div className='lg:flex lg:flex-row flex-col lg:gap-20 lg:mx-10 mt-10'>
  <div>
  <h1 className='text-sm'>Mobile No. </h1>
  <input type='' placeholder='Enter Your Mobile No. ' className='border-b-2 border-gray-700 text-sm w-52' />
  </div>



  <div>
  <h1 className='text-sm'>E-mail</h1>
  <input type='' placeholder='Enter your E-mail' className='border-b-2 border-gray-700 text-sm w-52' />
  </div>
</div>



<h1 className='text-sm lg:mx-10 mt-4'>Your Message</h1>
 <div className="lg:mx-10  border rounded-md ">
  
  {/* <h1 className="text-sm mx-2">Enter your message here</h1> */}
  <input type="text" placeholder="Enter your message here" className=" py-2 text-sm outline-none w-full " />   
</div>




  <div className='mt-4 text-center' >
  <button className='bg-[#086AAE] text-white text-xs py-2 px-7 rounded-2xl'>Submit</button>
  </div>
      

    </div>
</div>
</div>

    </>
  )
}

export default Contact
