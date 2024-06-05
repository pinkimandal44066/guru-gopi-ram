import React from 'react'
import { useState } from 'react'

import img62 from '../../public/images/img62.png'
import img63 from '../../public/images/img63.png'
import img64 from '../../public/images/img64.png'
import img71 from '../../public/images/img71.png'
import img72 from '../../public/images/img72.png'
import img73 from '../../public/images/img73.png'


// import img41 from "../../../public/images/img41.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Navigation } from "swiper/modules";
const Career = () => {








  // const [date, setDate] = useState(null);

  // const form = useRef();
  // const [formSubmitted, setFormSubmitted] = useState(false);
  // const [formData, setFormData] = useState({
  //   name: "",
  //   email_id: "",
  //   mobile_number: "",
  //   option: "",
  // });

  // const [selectedOption, setSelectedOption] = useState("");
  // const handleOptionChange = (e) => {
  //   setSelectedOption(e.target.value);
  // };

  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => {
    setIsOpen(false);
    // setFormSubmitted(false);
  };

  // const handleChange = (name, value) => {
  //   setFormData((prevData) => ({ ...prevData, [name]: value }));
  // };

  // const [result, setResult] = useState("");

  // const onSubmit = async (event) => {
  //   event.preventDefault();
  //   setResult("Sending....");
  //   const formData = new FormData(event.target);

  //   formData.append("access_key", "0d42edc6-65b0-4b59-8960-8f883bc43380");

  //   const response = await fetch("https://api.web3forms.com/submit", {
  //     method: "POST",
  //     body: formData,
  //   });

    // const data = await response.json();

  //   if (data.success) {
  //     setResult("Form Submitted Successfully");
  //     event.target.reset();
  //   } else {
  //     console.log("Error", data);
  //     setResult(data.message);
  //   }
  // };
  // const [message, setMessage] = useState("");

  // const handleMessageChange = (e) => {
  //   setMessage(e.target.value);
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   alert(`Message submitted: ${message}`);
  //   setMessage("");
  // };

  return (
    <>
         <img className='lg:-mt-10 w-full' src={img62} alt='' />
         {/* <img className=' w-full' src={img63} alt='' /> */}







         <div style={{ fontFamily: "Century Gothic" }} className="text-black">
      {/* Modal toggle */}
      <button
        onClick={openModal}
       
      >
         <img className=' w-full ' src={img63} alt='' />
      </button>

      {/* Main modal */}
      {isOpen && (
        <div className="fixed  inset-0  overflow-x-hidden flex justify-center items-center">
          <div className="relative p-4 w-full max-w-md max-h-full">
            {/* Modal content */}
            <form >
              <div className=" bg-white rounded-2xl">
         


                <div className="flex mx-4 p-4 md:p-5 border-b rounded-t dark:border-red-600 bg-white  ">
                
                  <div>
  <h1 className='text-sm font-semibold'>Name*</h1>
  <input type='' placeholder='Enter Your Name ' className='border-b
   border-black text-sm w-80 mt-1 text-black' />


<h1 className='text-sm font-semibold mt-5'>Mobile Number*</h1>
  <input type='' placeholder='Enter Your Number ' className='border-b
   border-black text-sm w-80 mt-1 text-black' />
   


   <h1 className='text-sm font-semibold mt-5'>Email*</h1>
  <input type='' placeholder='Enter Your Email ' className='border-b
   border-black text-sm w-80 mt-1 text-black' />
   

   




<h1 className='text-sm font-semibold mt-5'>Email*</h1>
<div className='relative  w-80 mt-1'>
  <input type='file' className='absolute h-8 p-1 cursor-pointer  ' />
  <div className='border rounded-md border-black text-sm w-80 mt-1 h-10 text-black
   bg-white hover:text-white 
   hover:bg-[#086AAE] 

' >
    
  </div>


  <div className='text-center items-center mt-5 bg-[#086AAE] rounded-md w-full text-white p-2 text-sm '>
<button className=' '>Submit</button></div>
  
</div>


  </div>


  
                  <button
                    onClick={closeModal}
                    // type="button"
                    className="text-black hover:bg-gray-200    rounded-xl
                     hover:text-gray-900  text-sm w-8 h-8 ms-auto inline-flex justify-center items-center
                      dark:hover:bg-gray-600 dark:hover:text-white "
                  >
                    <svg
                      className="w-3 h-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 14"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                      />
                    </svg>



                    
                  </button>

                  


                  
                </div>


                            
          
          





                

              
              </div>
            </form>
          </div>
        </div>
      )}
    </div>



























































































         <div className=" max-w-screen-xl mx-auto lg:mt-16 ">
        <div className="hidden justify-center items-center lg:flex md:flex lg:flex-row md:flex-row lg:gap-4 gap-10">
          <div className="flex flex-col h-[333px] lg:w-60 md:w-64   md:mt-16 shadow-2xl rounded-2xl border ">
            <img src={img71} alt="" className="    md:w-80 w-60 -mt-4 " />
            <h1 className='lg:w-72 font-semibold  p-3  mt-0.5 mx-20 '>Doctors</h1>
            <p className="lg:w-56 mx-3.5 text-xs -mt-2 ">
            With unparalleled knowledge and experience
within their specific domains, our doctors drive
comprehensive treatment with compassion for
all patients.
            </p>
          </div>

           <div className="flex flex-col h-[333px] lg:w-60 md:w-64   md:mt-16 shadow-2xl rounded-2xl border ">
            <img src={img72} alt="" className="     md:w-80   w-60 -mt-4 " />
            <h1 className='lg:w-72 font-semibold  p-3  mt-0.5 mx-20 '>Nurses</h1>
            <p className="lg:w-56 mx-3.5 text-xs -mt-2 ">
           Our nurses are the backbone of our healthcare
system. They ensure patients get the specialized
care for holistic recovery.
            </p>
          </div>

          <div className="flex flex-col h-[333px] lg:w-60 md:w-64  md:mt-16  shadow-2xl rounded-2xl border ">
            <img src={img73} alt="" className="    md:w-80    w-60 -mt-4 " />
            <h1 className='lg:w-72 font-semibold  p-3  mt-0.5 mx-10 '>Administrative Staff</h1>
            <p className="lg:w-56 mx-3.5 text-xs -mt-2 ">
            Working diligently behind the scenes, our
administrative staff play a crucial role in ensuring
smooth daily operations by managing.
            </p>
          </div>
        </div>
      </div>



      <div className="flex mt-4 lg:hidden md:hidden  mx-6  items-center  justify-center   ">
        <Swiper
          slidesPerView={1}
          spaceBetween={80}
          freeMode={true}
          loop={true}
          // navigation={true}
          modules={[EffectCoverflow, Navigation]}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
          }}
        >
          <SwiperSlide>
          <div className="flex flex-col h-[396px]     rounded-2xl border">
            <img src={img71} alt="" className="   sm:w-96  w-80 -mt-4  " />
            <h1 className='lg:w-72 font-semibold text-xl p-3  mt-0.5 lg:mx-20 mx-28'>Doctors</h1>
            <p className="lg:w-56 mx-3.5 text-xs -mt-2 ">
            With unparalleled knowledge and experience
within their specific domains, our doctors drive
comprehensive treatment with compassion for
all patients.
            </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col h-[396px]     rounded-2xl border">
            <img src={img72} alt="" className="   sm:w-96   w-80 -mt-4  " />
            <h1 className='lg:w-72 font-semibold text-xl p-3  mt-0.5 lg:mx-20 mx-28'>Nurses</h1>
            <p className="lg:w-56 mx-3.5 text-xs -mt-2 ">
            Our nurses are the backbone of our healthcare
system. They ensure patients get the specialized
care for holistic recovery.
            </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="flex flex-col h-[396px]     rounded-2xl border">
            <img src={img73} alt="" className="   sm:w-96   w-80 -mt-4  " />
            <h1 className='lg:w-72 font-semibold text-xl p-3  mt-0.5 lg:mx-20 mx-12'>Administrative Staff</h1>
            <p className="lg:w-56 mx-3.5 text-xs -mt-2 ">
            Working diligently behind the scenes, our
administrative staff play a crucial role in ensuring
smooth daily operations by managing.
            </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>


      <img className=' w-full ' src={img64} alt='' />
    </>
  )
}

export default Career
