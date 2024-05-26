// // import React from "react";
// import { NavLink } from "react-router-dom";
// import img55 from "../../../public/images/img55.png";
// const Bookappointment = () => {
//   return (
//     <>
//       <div className="max-w-screen-xl lg:mx-auto mx-5  ">
//         <div
//           className=" lg:grid-cols-3 lg:grid md:grid-cols-2 md:grid sm:grid-cols-2 sm:grid grid-cols-1
      
//       lg:mx-44   md:mx-24 md:gap-10  sm:mx-10 sm:gap-10 mt-10  mx-0  mb-14"
//         >
//           <div className="flex flex-col shadow-md lg:w-72 md:w-96 w-80 lg:h-[193px]  h-[310px] lg:rounded-xl 
//           rounded-md p-4 ">

//             <div className="flex items-center ">
//               <img
//                 className="lg:w-16 lg:h-16 lg:mr-4 lg:-mt-16 -mt-20"
//                 src={img55}
//                 alt=""
//               />
//               <div className="-mt-2 lg:-mt-0 md:-mt-0 sm:-mt-0 ">
//                 <h1 className="text-lg font-bold mx-4 lg:mx-0 lg:mt-0 mt-4 ">
//                   Dr. K K Singh
//                 </h1>
//                 <p className="lg:text-xs lg:mt-0 mt-3 mx-4 lg:mx-0">
//                   CHAIRMAN CARDIAC SCIENCE I Guru Gopiram Hospital
//                 </p>
//                 <h1 className="text-xs shadow-2xl bg-[#D9D9D9] lg:rounded-sm mt-2 w-44 lg:p-4  lg:py-1
//                 p-3 py-3  rounded-md 
//                  lg:mx-0">
//                   Diabetology/Endocrinology
//                 </h1>

                
//                 <div
//                   className="flex items-center justify-center font-bold text-sm lg:gap-16
//                 gap-8  lg:mr-4 lg:mt-3 mt-3  "
//                 >
//                   <div>
//                     <h1 className="lg:text-sm text-xl " > 40 years</h1>
//                   </div>
//                   <div>
//                     <h1 className="lg:text-sm text-xl md:mr-20 sm:mr-0 lg:mr-0 mr-0   " >₹2500</h1>
//                   </div>
//                 </div>
//               </div>


//             </div>


//            {/* Button  */}


//             <div
//               className="flex lg:mt-3 mt-3 lg:border  rounded-b-2xl sm:-mt-0.5
//              border-[#086AAE] lg:w-[287px]  w-[320px] lg:-ml-4  md:w-[383px] md:mt-5 
//             -ml-4 
          
//            "
//             >
//               <div className="">
//                 <button
//                   className="border-[#086AAE] text-[#086AAE] 
//                  lg:px-4 lg:py-2 lg:w-36 text-xs  mt-2 lg:mt-1 
//                  lg:block  hidden
//                 "
//                 >
//                   View Full Profile
//                 </button>
//               </div>
//               <div>
//                <NavLink to='/appointment'>
//                <button
//                   className="text-white   lg:-ml-0.5 lg:px-2 lg:py- w-36 text-xs px-3 py-3
//                  md:px-4 md:py-3 md:ml-24  bg-[#086AAE]    rounded-br-xl 
                 
//                   ml-8
//                  lg:block  hidden"
//                 >
//                   Book Appointment
//                 </button>
//                </NavLink>
//               </div>
//             </div>



//                       {/* Mobile Button */}

//             <div
//               className="flex  border  rounded-b-xl   
//              border-[#086AAE]  w-[320px] md:w-[384px] lg:-ml-4   md:mt-0 sm:mt-3
//             -ml-4 h-17
//             lg:hidden  block mt-2.5
//            "
//             >
//               <div className="">
//                 <button
//                   className="border-[#086AAE] text-[#086AAE] 
//                   text-xs w-32  h-16  md:text-base md:mx-5
//                 lg:hidden   block
//                 "
//                 >
//                   View Full Profile
//                 </button>
//               </div>
//               <div>
//                <NavLink to='/appointment'>
//                <button
//                   className="text-white bg-[#086AAE]   lg:-ml-0.5 lg:px-2 lg:py-0 w-40 text-xs px-3 py-6
//                  md:px-4 md:py-7  md:ml-6  md:w-48  md:text-base  rounded-br-xl 
//                   ml-8
//                  lg:hidden   block"
//                 >
//                   Book Appointment
//                 </button>
//                </NavLink>
//               </div>
//             </div>

//           </div>


//           <div className="flex flex-col shadow-md lg:w-72 md:w-96 w-80 lg:h-[193px]  h-[310px] lg:rounded-xl 
//           rounded-md p-4 mt-10 lg:mt-0 md:mt-0 sm:mt-0">

//             <div className="flex items-center ">
//               <img
//                 className="lg:w-16 lg:h-16 lg:mr-4 lg:-mt-16 -mt-20"
//                 src={img55}
//                 alt=""
//               />
//               <div className="-mt-2 lg:-mt-0 md:-mt-0 sm:-mt-0 ">
//                 <h1 className="text-lg font-bold mx-4 lg:mx-0 lg:mt-0 mt-4 ">
//                   Dr. K K Singh
//                 </h1>
//                 <p className="lg:text-xs lg:mt-0 mt-3 mx-4 lg:mx-0">
//                   CHAIRMAN CARDIAC SCIENCE I Guru Gopiram Hospital
//                 </p>
//                 <h1 className="text-xs shadow-2xl bg-[#D9D9D9] lg:rounded-sm mt-2 w-44 lg:p-4  lg:py-1
//                 p-3 py-3  rounded-md 
//                  lg:mx-0">
//                   Diabetology/Endocrinology
//                 </h1>

                
//                 <div
//                   className="flex items-center justify-center font-bold text-sm lg:gap-16 
//                 gap-8  lg:mr-4 lg:mt-3 mt-3  "
//                 >
//                   <div>
//                     <h1 className="lg:text-sm text-xl " > 40 years</h1>
//                   </div>
//                   <div>
//                     <h1 className="lg:text-sm text-xl md:mr-20 sm:mr-0 lg:mr-0 mr-0  " >₹2500</h1>
//                   </div>
//                 </div>
//               </div>

              
//             </div>


//            {/* Button  */}


//             <div
//               className="flex lg:mt-3 mt-3 lg:border  rounded-b-2xl sm:-mt-0.5
//              border-[#086AAE] lg:w-[287px]  w-[320px] lg:-ml-4  md:w-[383px] md:mt-5 
//             -ml-4 
          
//            "
//             >
//               <div className="">
//                 <button
//                   className="border-[#086AAE] text-[#086AAE] 
//                  lg:px-4 lg:py-2 lg:w-36 text-xs  mt-2 lg:mt-1 
//                  lg:block  hidden
//                 "
//                 >
//                   View Full Profile
//                 </button>
//               </div>
//               <div>
//                <NavLink to='/appointment'>
//                <button
//                   className="text-white   lg:-ml-0.5 lg:px-2 lg:py- w-36 text-xs px-3 py-3
//                  md:px-4 md:py-3 md:ml-24  bg-[#086AAE]    rounded-br-xl 
                 
//                   ml-8
//                  lg:block  hidden"
//                 >
//                   Book Appointment
//                 </button>
//                </NavLink>
//               </div>
//             </div>



//                       {/* Mobile Button */}

//             <div
//               className="flex  border  rounded-b-xl   
//              border-[#086AAE]  w-[320px] md:w-[384px] lg:-ml-4   md:mt-0 sm:mt-3
//             -ml-4 h-17
//             lg:hidden  block mt-2.5
//            "
//             >
//               <div className="">
//                 <button
//                   className="border-[#086AAE] text-[#086AAE] 
//                   text-xs w-32  h-16  md:text-base md:mx-5
//                 lg:hidden   block
//                 "
//                 >
//                   View Full Profile
//                 </button>
//               </div>
//               <div>
//                <NavLink to='/appointment'>
//                <button
//                   className="text-white bg-[#086AAE]   lg:-ml-0.5 lg:px-2 lg:py-0 w-40 text-xs px-3 py-6
//                  md:px-4 md:py-7  md:ml-6  md:w-48  md:text-base  rounded-br-xl 
//                   ml-8
//                  lg:hidden   block"
//                 >
//                   Book Appointment
//                 </button>
//                </NavLink>
//               </div>
//             </div>
// </div>






// <div className="flex flex-col shadow-md lg:w-72 md:w-96 w-80 lg:h-[193px]  h-[310px] lg:rounded-xl 
//           rounded-md p-4 mt-10 lg:mt-0 md:mt-0 sm:mt-0">

//             <div className="flex items-center ">
//               <img
//                 className="lg:w-16 lg:h-16 lg:mr-4 lg:-mt-16 -mt-20"
//                 src={img55}
//                 alt=""
//               />
//               <div className="-mt-2 lg:-mt-0 md:-mt-0 sm:-mt-0 ">
//                 <h1 className="text-lg font-bold mx-4 lg:mx-0 lg:mt-0 mt-4 ">
//                   Dr. K K Singh
//                 </h1>
//                 <p className="lg:text-xs lg:mt-0 mt-3 mx-4 lg:mx-0">
//                   CHAIRMAN CARDIAC SCIENCE I Guru Gopiram Hospital
//                 </p>
//                 <h1 className="text-xs shadow-2xl bg-[#D9D9D9] lg:rounded-sm mt-2 w-44 lg:p-4  lg:py-1
//                 p-3 py-3  rounded-md 
//                  lg:mx-0">
//                   Diabetology/Endocrinology
//                 </h1>

                
//                 <div
//                   className="flex items-center justify-center font-bold text-sm lg:gap-16 
//                 gap-8  lg:mr-4 lg:mt-3 mt-3  "
//                 >
//                   <div>
//                     <h1 className="lg:text-sm text-xl " > 40 years</h1>
//                   </div>
//                   <div>
//                     <h1 className="lg:text-sm text-xl md:mr-20 sm:mr-0 lg:mr-0 mr-0  " >₹2500</h1>
//                   </div>
//                 </div>
//               </div>

              
//             </div>


//            {/* Button  */}


//             <div
//               className="flex lg:mt-3 mt-3 lg:border  rounded-b-2xl sm:-mt-0.5
//              border-[#086AAE] lg:w-[287px]  w-[320px] lg:-ml-4  md:w-[383px] md:mt-5 
//             -ml-4 
          
//            "
//             >
//               <div className="">
//                 <button
//                   className="border-[#086AAE] text-[#086AAE] 
//                  lg:px-4 lg:py-2 lg:w-36 text-xs  mt-2 lg:mt-1 
//                  lg:block  hidden
//                 "
//                 >
//                   View Full Profile
//                 </button>
//               </div>
//               <div>
//                <NavLink to='/appointment'>
//                <button
//                   className="text-white   lg:-ml-0.5 lg:px-2 lg:py- w-36 text-xs px-3 py-3
//                  md:px-4 md:py-3 md:ml-24  bg-[#086AAE]    rounded-br-xl 
                 
//                   ml-8
//                  lg:block  hidden"
//                 >
//                   Book Appointment
//                 </button>
//                </NavLink>
//               </div>
//             </div>



//                       {/* Mobile Button */}

//             <div
//               className="flex  border  rounded-b-xl   
//              border-[#086AAE]  w-[320px] md:w-[384px] lg:-ml-4   md:mt-0 sm:mt-3
//             -ml-4 h-17
//             lg:hidden  block mt-2.5
//            "
//             >
//               <div className="">
//                 <button
//                   className="border-[#086AAE] text-[#086AAE] 
//                   text-xs w-32  h-16  md:text-base md:mx-5
//                 lg:hidden   block
//                 "
//                 >
//                   View Full Profile
//                 </button>
//               </div>
//               <div>
//                <NavLink to='/appointment'>
//                <button
//                   className="text-white bg-[#086AAE]   lg:-ml-0.5 lg:px-2 lg:py-0 w-40 text-xs px-3 py-6
//                  md:px-4 md:py-7  md:ml-6  md:w-48  md:text-base  rounded-br-xl 
//                   ml-8
//                  lg:hidden   block"
//                 >
//                   Book Appointment
//                 </button>
//                </NavLink>
//               </div>
//             </div>
// </div>





// <div className="flex flex-col shadow-md lg:w-72 md:w-96 w-80 lg:h-[193px]  h-[310px] lg:rounded-xl 
//           rounded-md p-4 mt-10 lg:mt-0 md:mt-0 sm:mt-0">

//             <div className="flex items-center ">
//               <img
//                 className="lg:w-16 lg:h-16 lg:mr-4 lg:-mt-16 -mt-20"
//                 src={img55}
//                 alt=""
//               />
//               <div className="-mt-2 lg:-mt-0 md:-mt-0 sm:-mt-0 ">
//                 <h1 className="text-lg font-bold mx-4 lg:mx-0 lg:mt-0 mt-4 ">
//                   Dr. K K Singh
//                 </h1>
//                 <p className="lg:text-xs lg:mt-0 mt-3 mx-4 lg:mx-0">
//                   CHAIRMAN CARDIAC SCIENCE I Guru Gopiram Hospital
//                 </p>
//                 <h1 className="text-xs shadow-2xl bg-[#D9D9D9] lg:rounded-sm mt-2 w-44 lg:p-4  lg:py-1
//                 p-3 py-3  rounded-md 
//                  lg:mx-0">
//                   Diabetology/Endocrinology
//                 </h1>

                
//                 <div
//                   className="flex items-center justify-center font-bold text-sm lg:gap-16 
//                 gap-8  lg:mr-4 lg:mt-3 mt-3  "
//                 >
//                   <div>
//                     <h1 className="lg:text-sm text-xl " > 40 years</h1>
//                   </div>
//                   <div>
//                     <h1 className="lg:text-sm text-xl md:mr-20 sm:mr-0 lg:mr-0 mr-0  " >₹2500</h1>
//                   </div>
//                 </div>
//               </div>

              
//             </div>


//            {/* Button  */}


//             <div
//               className="flex lg:mt-3 mt-3 lg:border  rounded-b-2xl sm:-mt-0.5
//              border-[#086AAE] lg:w-[287px]  w-[320px] lg:-ml-4  md:w-[383px] md:mt-5 
//             -ml-4 
          
//            "
//             >
//               <div className="">
//                 <button
//                   className="border-[#086AAE] text-[#086AAE] 
//                  lg:px-4 lg:py-2 lg:w-36 text-xs  mt-2 lg:mt-1 
//                  lg:block  hidden
//                 "
//                 >
//                   View Full Profile
//                 </button>
//               </div>
//               <div>
//                <NavLink to='/appointment'>
//                <button
//                   className="text-white   lg:-ml-0.5 lg:px-2 lg:py- w-36 text-xs px-3 py-3
//                  md:px-4 md:py-3 md:ml-24  bg-[#086AAE]    rounded-br-xl 
                 
//                   ml-8
//                  lg:block  hidden"
//                 >
//                   Book Appointment
//                 </button>
//                </NavLink>
//               </div>
//             </div>



//                       {/* Mobile Button */}

//             <div
//               className="flex  border  rounded-b-xl   
//              border-[#086AAE]  w-[320px] md:w-[384px] lg:-ml-4   md:mt-0 sm:mt-3
//             -ml-4 h-17
//             lg:hidden  block mt-2.5
//            "
//             >
//               <div className="">
//                 <button
//                   className="border-[#086AAE] text-[#086AAE] 
//                   text-xs w-32  h-16  md:text-base md:mx-5
//                 lg:hidden   block
//                 "
//                 >
//                   View Full Profile
//                 </button>
//               </div>
//               <div>
//                <NavLink to='/appointment'>
//                <button
//                   className="text-white bg-[#086AAE]   lg:-ml-0.5 lg:px-2 lg:py-0 w-40 text-xs px-3 py-6
//                  md:px-4 md:py-7  md:ml-6  md:w-48  md:text-base  rounded-br-xl 
//                   ml-8
//                  lg:hidden   block"
//                 >
//                   Book Appointment
//                 </button>
//                </NavLink>
//               </div>
//             </div>
// </div>

















// <div className="flex flex-col shadow-md lg:w-72 md:w-96 w-80 lg:h-[193px]  h-[310px] lg:rounded-xl 
//           rounded-md p-4 mt-10 lg:mt-0 md:mt-0 sm:mt-0">

//             <div className="flex items-center ">
//               <img
//                 className="lg:w-16 lg:h-16 lg:mr-4 lg:-mt-16 -mt-20"
//                 src={img55}
//                 alt=""
//               />
//               <div className="-mt-2 lg:-mt-0 md:-mt-0 sm:-mt-0 ">
//                 <h1 className="text-lg font-bold mx-4 lg:mx-0 lg:mt-0 mt-4 ">
//                   Dr. K K Singh
//                 </h1>
//                 <p className="lg:text-xs lg:mt-0 mt-3 mx-4 lg:mx-0">
//                   CHAIRMAN CARDIAC SCIENCE I Guru Gopiram Hospital
//                 </p>
//                 <h1 className="text-xs shadow-2xl bg-[#D9D9D9] lg:rounded-sm mt-2 w-44 lg:p-4  lg:py-1
//                 p-3 py-3  rounded-md 
//                  lg:mx-0">
//                   Diabetology/Endocrinology
//                 </h1>

                
//                 <div
//                   className="flex items-center justify-center font-bold text-sm lg:gap-16 
//                 gap-8  lg:mr-4 lg:mt-3 mt-3  "
//                 >
//                   <div>
//                     <h1 className="lg:text-sm text-xl " > 40 years</h1>
//                   </div>
//                   <div>
//                     <h1 className="lg:text-sm text-xl md:mr-20 sm:mr-0 lg:mr-0 mr-0  " >₹2500</h1>
//                   </div>
//                 </div>
//               </div>

              
//             </div>


//            {/* Button  */}


//             <div
//               className="flex lg:mt-3 mt-3 lg:border  rounded-b-2xl sm:-mt-0.5
//              border-[#086AAE] lg:w-[287px]  w-[320px] lg:-ml-4  md:w-[383px] md:mt-5 
//             -ml-4 
          
//            "
//             >
//               <div className="">
//                 <button
//                   className="border-[#086AAE] text-[#086AAE] 
//                  lg:px-4 lg:py-2 lg:w-36 text-xs  mt-2 lg:mt-1 
//                  lg:block  hidden
//                 "
//                 >
//                   View Full Profile
//                 </button>
//               </div>
//               <div>
//                <NavLink to='/appointment'>
//                <button
//                   className="text-white   lg:-ml-0.5 lg:px-2 lg:py- w-36 text-xs px-3 py-3
//                  md:px-4 md:py-3 md:ml-24  bg-[#086AAE]    rounded-br-xl 
                 
//                   ml-8
//                  lg:block  hidden"
//                 >
//                   Book Appointment
//                 </button>
//                </NavLink>
//               </div>
//             </div>



//                       {/* Mobile Button */}

//             <div
//               className="flex  border  rounded-b-xl   
//              border-[#086AAE]  w-[320px] md:w-[384px] lg:-ml-4   md:mt-0 sm:mt-3
//             -ml-4 h-17
//             lg:hidden  block mt-2.5
//            "
//             >
//               <div className="">
//                 <button
//                   className="border-[#086AAE] text-[#086AAE] 
//                   text-xs w-32  h-16  md:text-base md:mx-5
//                 lg:hidden   block
//                 "
//                 >
//                   View Full Profile
//                 </button>
//               </div>
//               <div>
//                <NavLink to='/appointment'>
//                <button
//                   className="text-white bg-[#086AAE]   lg:-ml-0.5 lg:px-2 lg:py-0 w-40 text-xs px-3 py-6
//                  md:px-4 md:py-7  md:ml-6  md:w-48  md:text-base  rounded-br-xl 
//                   ml-8
//                  lg:hidden   block"
//                 >
//                   Book Appointment
//                 </button>
//                </NavLink>
//               </div>
//             </div>
// </div>
























// <div className="flex flex-col shadow-md lg:w-72 md:w-96 w-80 lg:h-[193px]  h-[310px] lg:rounded-xl 
//           rounded-md p-4 mt-10 lg:mt-0 md:mt-0 sm:mt-0">

//             <div className="flex items-center ">
//               <img
//                 className="lg:w-16 lg:h-16 lg:mr-4 lg:-mt-16 -mt-20"
//                 src={img55}
//                 alt=""
//               />
//               <div className="-mt-2 lg:-mt-0 md:-mt-0 sm:-mt-0 ">
//                 <h1 className="text-lg font-bold mx-4 lg:mx-0 lg:mt-0 mt-4 ">
//                   Dr. K K Singh
//                 </h1>
//                 <p className="lg:text-xs lg:mt-0 mt-3 mx-4 lg:mx-0">
//                   CHAIRMAN CARDIAC SCIENCE I Guru Gopiram Hospital
//                 </p>
//                 <h1 className="text-xs shadow-2xl bg-[#D9D9D9] lg:rounded-sm mt-2 w-44 lg:p-4  lg:py-1
//                 p-3 py-3  rounded-md 
//                  lg:mx-0">
//                   Diabetology/Endocrinology
//                 </h1>

                
//                 <div
//                   className="flex items-center justify-center font-bold text-sm lg:gap-16 
//                 gap-8  lg:mr-4 lg:mt-3 mt-3  "
//                 >
//                   <div>
//                     <h1 className="lg:text-sm text-xl " > 40 years</h1>
//                   </div>
//                   <div>
//                     <h1 className="lg:text-sm text-xl md:mr-20 sm:mr-0 lg:mr-0 mr-0  " >₹2500</h1>
//                   </div>
//                 </div>
//               </div>

              
//             </div>


//            {/* Button  */}


//             <div
//               className="flex lg:mt-3 mt-3 lg:border  rounded-b-2xl sm:-mt-0.5
//              border-[#086AAE] lg:w-[287px]  w-[320px] lg:-ml-4  md:w-[383px] md:mt-5 
//             -ml-4 
          
//            "
//             >
//               <div className="">
//                 <button
//                   className="border-[#086AAE] text-[#086AAE] 
//                  lg:px-4 lg:py-2 lg:w-36 text-xs  mt-2 lg:mt-1 
//                  lg:block  hidden
//                 "
//                 >
//                   View Full Profile
//                 </button>
//               </div>
//               <div>
//                <NavLink to='/appointment'>
//                <button
//                   className="text-white   lg:-ml-0.5 lg:px-2 lg:py- w-36 text-xs px-3 py-3
//                  md:px-4 md:py-3 md:ml-24  bg-[#086AAE]    rounded-br-xl 
                 
//                   ml-8
//                  lg:block  hidden"
//                 >
//                   Book Appointment
//                 </button>
//                </NavLink>
//               </div>
//             </div>



//                       {/* Mobile Button */}

//             <div
//               className="flex  border  rounded-b-xl   
//              border-[#086AAE]  w-[320px] md:w-[384px] lg:-ml-4   md:mt-0 sm:mt-3
//             -ml-4 h-17
//             lg:hidden  block mt-2.5
//            "
//             >
//               <div className="">
//                 <button
//                   className="border-[#086AAE] text-[#086AAE] 
//                   text-xs w-32  h-16  md:text-base md:mx-5
//                 lg:hidden   block
//                 "
//                 >
//                   View Full Profile
//                 </button>
//               </div>
//               <div>
//                <NavLink to='/appointment'>
//                <button
//                   className="text-white bg-[#086AAE]   lg:-ml-0.5 lg:px-2 lg:py-0 w-40 text-xs px-3 py-6
//                  md:px-4 md:py-7  md:ml-6  md:w-48  md:text-base  rounded-br-xl 
//                   ml-8
//                  lg:hidden   block"
//                 >
//                   Book Appointment
//                 </button>
//                </NavLink>
//               </div>
//             </div>
// </div>




























// <div className="flex flex-col shadow-md lg:w-72 md:w-96 w-80 lg:h-[193px]  h-[310px] lg:rounded-xl 
//           rounded-md p-4 mt-10 lg:mt-0 md:mt-0 sm:mt-0">

//             <div className="flex items-center ">
//               <img
//                 className="lg:w-16 lg:h-16 lg:mr-4 lg:-mt-16 -mt-20"
//                 src={img55}
//                 alt=""
//               />
//               <div className="-mt-2 lg:-mt-0 md:-mt-0 sm:-mt-0 ">
//                 <h1 className="text-lg font-bold mx-4 lg:mx-0 lg:mt-0 mt-4 ">
//                   Dr. K K Singh
//                 </h1>
//                 <p className="lg:text-xs lg:mt-0 mt-3 mx-4 lg:mx-0">
//                   CHAIRMAN CARDIAC SCIENCE I Guru Gopiram Hospital
//                 </p>
//                 <h1 className="text-xs shadow-2xl bg-[#D9D9D9] lg:rounded-sm mt-2 w-44 lg:p-4  lg:py-1
//                 p-3 py-3  rounded-md 
//                  lg:mx-0">
//                   Diabetology/Endocrinology
//                 </h1>

                
//                 <div
//                   className="flex items-center justify-center font-bold text-sm lg:gap-16 
//                 gap-8  lg:mr-4 lg:mt-3 mt-3  "
//                 >
//                   <div>
//                     <h1 className="lg:text-sm text-xl " > 40 years</h1>
//                   </div>
//                   <div>
//                     <h1 className="lg:text-sm text-xl md:mr-20 sm:mr-0 lg:mr-0 mr-0  " >₹2500</h1>
//                   </div>
//                 </div>
//               </div>

              
//             </div>


//            {/* Button  */}


//             <div
//               className="flex lg:mt-3 mt-3 lg:border  rounded-b-2xl sm:-mt-0.5
//              border-[#086AAE] lg:w-[287px]  w-[320px] lg:-ml-4  md:w-[383px] md:mt-5 
//             -ml-4 
          
//            "
//             >
//               <div className="">
//                 <button
//                   className="border-[#086AAE] text-[#086AAE] 
//                  lg:px-4 lg:py-2 lg:w-36 text-xs  mt-2 lg:mt-1 
//                  lg:block  hidden
//                 "
//                 >
//                   View Full Profile
//                 </button>
//               </div>
//               <div>
//                <NavLink to='/appointment'>
//                <button
//                   className="text-white   lg:-ml-0.5 lg:px-2 lg:py- w-36 text-xs px-3 py-3
//                  md:px-4 md:py-3 md:ml-24  bg-[#086AAE]    rounded-br-xl 
                 
//                   ml-8
//                  lg:block  hidden"
//                 >
//                   Book Appointment
//                 </button>
//                </NavLink>
//               </div>
//             </div>



//                       {/* Mobile Button */}

//             <div
//               className="flex  border  rounded-b-xl   
//              border-[#086AAE]  w-[320px] md:w-[384px] lg:-ml-4   md:mt-0 sm:mt-3
//             -ml-4 h-17
//             lg:hidden  block mt-2.5
//            "
//             >
//               <div className="">
//                 <button
//                   className="border-[#086AAE] text-[#086AAE] 
//                   text-xs w-32  h-16  md:text-base md:mx-5
//                 lg:hidden   block
//                 "
//                 >
//                   View Full Profile
//                 </button>
//               </div>
//               <div>
//                <NavLink to='/appointment'>
//                <button
//                   className="text-white bg-[#086AAE]   lg:-ml-0.5 lg:px-2 lg:py-0 w-40 text-xs px-3 py-6
//                  md:px-4 md:py-7  md:ml-6  md:w-48  md:text-base  rounded-br-xl 
//                   ml-8
//                  lg:hidden   block"
//                 >
//                   Book Appointment
//                 </button>
//                </NavLink>
//               </div>
//             </div>
// </div>





// <div className="flex flex-col shadow-md lg:w-72 md:w-96 w-80 lg:h-[193px]  h-[310px] lg:rounded-xl 
//           rounded-md p-4 mt-10 lg:mt-0 md:mt-0 sm:mt-0">

//             <div className="flex items-center ">
//               <img
//                 className="lg:w-16 lg:h-16 lg:mr-4 lg:-mt-16 -mt-20"
//                 src={img55}
//                 alt=""
//               />
//               <div className="-mt-2 lg:-mt-0 md:-mt-0 sm:-mt-0 ">
//                 <h1 className="text-lg font-bold mx-4 lg:mx-0 lg:mt-0 mt-4 ">
//                   Dr. K K Singh
//                 </h1>
//                 <p className="lg:text-xs lg:mt-0 mt-3 mx-4 lg:mx-0">
//                   CHAIRMAN CARDIAC SCIENCE I Guru Gopiram Hospital
//                 </p>
//                 <h1 className="text-xs shadow-2xl bg-[#D9D9D9] lg:rounded-sm mt-2 w-44 lg:p-4  lg:py-1
//                 p-3 py-3  rounded-md 
//                  lg:mx-0">
//                   Diabetology/Endocrinology
//                 </h1>

                
//                 <div
//                   className="flex items-center justify-center font-bold text-sm lg:gap-16 
//                 gap-8  lg:mr-4 lg:mt-3 mt-3  "
//                 >
//                   <div>
//                     <h1 className="lg:text-sm text-xl " > 40 years</h1>
//                   </div>
//                   <div>
//                     <h1 className="lg:text-sm text-xl md:mr-20 sm:mr-0 lg:mr-0 mr-0  " >₹2500</h1>
//                   </div>
//                 </div>
//               </div>

              
//             </div>


//            {/* Button  */}


//             <div
//               className="flex lg:mt-3 mt-3 lg:border  rounded-b-2xl sm:-mt-0.5
//              border-[#086AAE] lg:w-[287px]  w-[320px] lg:-ml-4  md:w-[383px] md:mt-5 
//             -ml-4 
          
//            "
//             >
//               <div className="">
//                 <button
//                   className="border-[#086AAE] text-[#086AAE] 
//                  lg:px-4 lg:py-2 lg:w-36 text-xs  mt-2 lg:mt-1 
//                  lg:block  hidden
//                 "
//                 >
//                   View Full Profile
//                 </button>
//               </div>
//               <div>
//                <NavLink to='/appointment'>
//                <button
//                   className="text-white   lg:-ml-0.5 lg:px-2 lg:py- w-36 text-xs px-3 py-3
//                  md:px-4 md:py-3 md:ml-24  bg-[#086AAE]    rounded-br-xl 
                 
//                   ml-8
//                  lg:block  hidden"
//                 >
//                   Book Appointment
//                 </button>
//                </NavLink>
//               </div>
//             </div>



//                       {/* Mobile Button */}

//             <div
//               className="flex  border  rounded-b-xl   
//              border-[#086AAE]  w-[320px] md:w-[384px] lg:-ml-4   md:mt-0 sm:mt-3
//             -ml-4 h-17
//             lg:hidden  block mt-2.5
//            "
//             >
//               <div className="">
//                 <button
//                   className="border-[#086AAE] text-[#086AAE] 
//                   text-xs w-32  h-16  md:text-base md:mx-5
//                 lg:hidden   block
//                 "
//                 >
//                   View Full Profile
//                 </button>
//               </div>
//               <div>
//                <NavLink to='/appointment'>
//                <button
//                   className="text-white bg-[#086AAE]   lg:-ml-0.5 lg:px-2 lg:py-0 w-40 text-xs px-3 py-6
//                  md:px-4 md:py-7  md:ml-6  md:w-48  md:text-base  rounded-br-xl 
//                   ml-8
//                  lg:hidden   block"
//                 >
//                   Book Appointment
//                 </button>
//                </NavLink>
//               </div>
//             </div>
// </div>







// <div className="flex flex-col shadow-md lg:w-72 md:w-96 w-80 lg:h-[193px]  h-[310px] lg:rounded-xl 
//           rounded-md p-4 mt-10 lg:mt-0 md:mt-0 sm:mt-0">

//             <div className="flex items-center ">
//               <img
//                 className="lg:w-16 lg:h-16 lg:mr-4 lg:-mt-16 -mt-20"
//                 src={img55}
//                 alt=""
//               />
//               <div className="-mt-2 lg:-mt-0 md:-mt-0 sm:-mt-0 ">
//                 <h1 className="text-lg font-bold mx-4 lg:mx-0 lg:mt-0 mt-4 ">
//                   Dr. K K Singh
//                 </h1>
//                 <p className="lg:text-xs lg:mt-0 mt-3 mx-4 lg:mx-0">
//                   CHAIRMAN CARDIAC SCIENCE I Guru Gopiram Hospital
//                 </p>
//                 <h1 className="text-xs shadow-2xl bg-[#D9D9D9] lg:rounded-sm mt-2 w-44 lg:p-4  lg:py-1
//                 p-3 py-3  rounded-md 
//                  lg:mx-0">
//                   Diabetology/Endocrinology
//                 </h1>

                
//                 <div
//                   className="flex items-center justify-center font-bold text-sm lg:gap-16 
//                 gap-8  lg:mr-4 lg:mt-3 mt-3  "
//                 >
//                   <div>
//                     <h1 className="lg:text-sm text-xl " > 40 years</h1>
//                   </div>
//                   <div>
//                     <h1 className="lg:text-sm text-xl md:mr-20 sm:mr-0 lg:mr-0 mr-0  " >₹2500</h1>
//                   </div>
//                 </div>
//               </div>

              
//             </div>


//            {/* Button  */}


//             <div
//               className="flex lg:mt-3 mt-3 lg:border  rounded-b-2xl sm:-mt-0.5
//              border-[#086AAE] lg:w-[287px]  w-[320px] lg:-ml-4  md:w-[383px] md:mt-5 
//             -ml-4 
          
//            "
//             >
//               <div className="">
//                 <button
//                   className="border-[#086AAE] text-[#086AAE] 
//                  lg:px-4 lg:py-2 lg:w-36 text-xs  mt-2 lg:mt-1 
//                  lg:block  hidden
//                 "
//                 >
//                   View Full Profile
//                 </button>
//               </div>
//               <div>
//                <NavLink to='/appointment'>
//                <button
//                   className="text-white   lg:-ml-0.5 lg:px-2 lg:py- w-36 text-xs px-3 py-3
//                  md:px-4 md:py-3 md:ml-24  bg-[#086AAE]    rounded-br-xl 
                 
//                   ml-8
//                  lg:block  hidden"
//                 >
//                   Book Appointment
//                 </button>
//                </NavLink>
//               </div>
//             </div>



//                       {/* Mobile Button */}

//             <div
//               className="flex  border  rounded-b-xl   
//              border-[#086AAE]  w-[320px] md:w-[384px] lg:-ml-4   md:mt-0 sm:mt-3
//             -ml-4 h-17
//             lg:hidden  block mt-2.5
//            "
//             >
//               <div className="">
//                 <button
//                   className="border-[#086AAE] text-[#086AAE] 
//                   text-xs w-32  h-16  md:text-base md:mx-5
//                 lg:hidden   block
//                 "
//                 >
//                   View Full Profile
//                 </button>
//               </div>
//               <div>
//                <NavLink to='/appointment'>
//                <button
//                   className="text-white bg-[#086AAE]   lg:-ml-0.5 lg:px-2 lg:py-0 w-40 text-xs px-3 py-6
//                  md:px-4 md:py-7  md:ml-6  md:w-48  md:text-base  rounded-br-xl 
//                   ml-8
//                  lg:hidden   block"
//                 >
//                   Book Appointment
//                 </button>
//                </NavLink>
//               </div>
//             </div>
// </div>



















// <div className="flex flex-col shadow-md lg:w-72 md:w-96 w-80 lg:h-[193px]  h-[310px] lg:rounded-xl 
//           rounded-md p-4 mt-10 lg:mt-0 md:mt-0 sm:mt-0">

//             <div className="flex items-center ">
//               <img
//                 className="lg:w-16 lg:h-16 lg:mr-4 lg:-mt-16 -mt-20"
//                 src={img55}
//                 alt=""
//               />
//               <div className="-mt-2 lg:-mt-0 md:-mt-0 sm:-mt-0 ">
//                 <h1 className="text-lg font-bold mx-4 lg:mx-0 lg:mt-0 mt-4 ">
//                   Dr. K K Singh
//                 </h1>
//                 <p className="lg:text-xs lg:mt-0 mt-3 mx-4 lg:mx-0">
//                   CHAIRMAN CARDIAC SCIENCE I Guru Gopiram Hospital
//                 </p>
//                 <h1 className="text-xs shadow-2xl bg-[#D9D9D9] lg:rounded-sm mt-2 w-44 lg:p-4  lg:py-1
//                 p-3 py-3  rounded-md 
//                  lg:mx-0">
//                   Diabetology/Endocrinology
//                 </h1>

                
//                 <div
//                   className="flex items-center justify-center font-bold text-sm lg:gap-16 
//                 gap-8  lg:mr-4 lg:mt-3 mt-3  "
//                 >
//                   <div>
//                     <h1 className="lg:text-sm text-xl " > 40 years</h1>
//                   </div>
//                   <div>
//                     <h1 className="lg:text-sm text-xl md:mr-20 sm:mr-0 lg:mr-0 mr-0  " >₹2500</h1>
//                   </div>
//                 </div>
//               </div>

              
//             </div>


//            {/* Button  */}


//             <div
//               className="flex lg:mt-3 mt-3 lg:border  rounded-b-2xl sm:-mt-0.5
//              border-[#086AAE] lg:w-[287px]  w-[320px] lg:-ml-4  md:w-[383px] md:mt-5 
//             -ml-4 
          
//            "
//             >
//               <div className="">
//                 <button
//                   className="border-[#086AAE] text-[#086AAE] 
//                  lg:px-4 lg:py-2 lg:w-36 text-xs  mt-2 lg:mt-1 
//                  lg:block  hidden
//                 "
//                 >
//                   View Full Profile
//                 </button>
//               </div>
//               <div>
//                <NavLink to='/appointment'>
//                <button
//                   className="text-white   lg:-ml-0.5 lg:px-2 lg:py- w-36 text-xs px-3 py-3
//                  md:px-4 md:py-3 md:ml-24  bg-[#086AAE]    rounded-br-xl 
                 
//                   ml-8
//                  lg:block  hidden"
//                 >
//                   Book Appointment
//                 </button>
//                </NavLink>
//               </div>
//             </div>



//                       {/* Mobile Button */}

//             <div
//               className="flex  border  rounded-b-xl   
//              border-[#086AAE]  w-[320px] md:w-[384px] lg:-ml-4   md:mt-0 sm:mt-3
//             -ml-4 h-17
//             lg:hidden  block mt-2.5
//            "
//             >
//               <div className="">
//                 <button
//                   className="border-[#086AAE] text-[#086AAE] 
//                   text-xs w-32  h-16  md:text-base md:mx-5
//                 lg:hidden   block
//                 "
//                 >
//                   View Full Profile
//                 </button>
//               </div>
//               <div>
//                <NavLink to='/appointment'>
//                <button
//                   className="text-white bg-[#086AAE]   lg:-ml-0.5 lg:px-2 lg:py-0 w-40 text-xs px-3 py-6
//                  md:px-4 md:py-7  md:ml-6  md:w-48  md:text-base  rounded-br-xl 
//                   ml-8
//                  lg:hidden   block"
//                 >
//                   Book Appointment
//                 </button>
//                </NavLink>
//               </div>
//             </div>
// </div>


















// <div className="flex flex-col shadow-md lg:w-72 md:w-96 w-80 lg:h-[193px]  h-[310px] lg:rounded-xl 
//           rounded-md p-4 mt-10 lg:mt-0 md:mt-0 sm:mt-0">

//             <div className="flex items-center ">
//               <img
//                 className="lg:w-16 lg:h-16 lg:mr-4 lg:-mt-16 -mt-20"
//                 src={img55}
//                 alt=""
//               />
//               <div className="-mt-2 lg:-mt-0 md:-mt-0 sm:-mt-0 ">
//                 <h1 className="text-lg font-bold mx-4 lg:mx-0 lg:mt-0 mt-4 ">
//                   Dr. K K Singh
//                 </h1>
//                 <p className="lg:text-xs lg:mt-0 mt-3 mx-4 lg:mx-0">
//                   CHAIRMAN CARDIAC SCIENCE I Guru Gopiram Hospital
//                 </p>
//                 <h1 className="text-xs shadow-2xl bg-[#D9D9D9] lg:rounded-sm mt-2 w-44 lg:p-4  lg:py-1
//                 p-3 py-3  rounded-md 
//                  lg:mx-0">
//                   Diabetology/Endocrinology
//                 </h1>

                
//                 <div
//                   className="flex items-center justify-center font-bold text-sm lg:gap-16 
//                 gap-8  lg:mr-4 lg:mt-3 mt-3  "
//                 >
//                   <div>
//                     <h1 className="lg:text-sm text-xl " > 40 years</h1>
//                   </div>
//                   <div>
//                     <h1 className="lg:text-sm text-xl md:mr-20 sm:mr-0 lg:mr-0 mr-0  " >₹2500</h1>
//                   </div>
//                 </div>
//               </div>

              
//             </div>


//            {/* Button  */}


//             <div
//               className="flex lg:mt-3 mt-3 lg:border  rounded-b-2xl sm:-mt-0.5
//              border-[#086AAE] lg:w-[287px]  w-[320px] lg:-ml-4  md:w-[383px] md:mt-5 
//             -ml-4 
          
//            "
//             >
//               <div className="">
//                 <button
//                   className="border-[#086AAE] text-[#086AAE] 
//                  lg:px-4 lg:py-2 lg:w-36 text-xs  mt-2 lg:mt-1 
//                  lg:block  hidden
//                 "
//                 >
//                   View Full Profile
//                 </button>
//               </div>
//               <div>
//                <NavLink to='/appointment'>
//                <button
//                   className="text-white   lg:-ml-0.5 lg:px-2 lg:py- w-36 text-xs px-3 py-3
//                  md:px-4 md:py-3 md:ml-24  bg-[#086AAE]    rounded-br-xl 
                 
//                   ml-8
//                  lg:block  hidden"
//                 >
//                   Book Appointment
//                 </button>
//                </NavLink>
//               </div>
//             </div>



//                       {/* Mobile Button */}

//             <div
//               className="flex  border  rounded-b-xl   
//              border-[#086AAE]  w-[320px] md:w-[384px] lg:-ml-4   md:mt-0 sm:mt-3
//             -ml-4 h-17
//             lg:hidden  block mt-2.5
//            "
//             >
//               <div className="">
//                 <button
//                   className="border-[#086AAE] text-[#086AAE] 
//                   text-xs w-32  h-16  md:text-base md:mx-5
//                 lg:hidden   block
//                 "
//                 >
//                   View Full Profile
//                 </button>
//               </div>
//               <div>
//                <NavLink to='/appointment'>
//                <button
//                   className="text-white bg-[#086AAE]   lg:-ml-0.5 lg:px-2 lg:py-0 w-40 text-xs px-3 py-6
//                  md:px-4 md:py-7  md:ml-6  md:w-48  md:text-base  rounded-br-xl 
//                   ml-8
//                  lg:hidden   block"
//                 >
//                   Book Appointment
//                 </button>
//                </NavLink>
//               </div>
//             </div>
// </div>






















// <div className="flex flex-col shadow-md lg:w-72 md:w-96 w-80 lg:h-[193px]  h-[310px] lg:rounded-xl 
//           rounded-md p-4 mt-10 lg:mt-0 md:mt-0 sm:mt-0">

//             <div className="flex items-center ">
//               <img
//                 className="lg:w-16 lg:h-16 lg:mr-4 lg:-mt-16 -mt-20"
//                 src={img55}
//                 alt=""
//               />
//               <div className="-mt-2 lg:-mt-0 md:-mt-0 sm:-mt-0 ">
//                 <h1 className="text-lg font-bold mx-4 lg:mx-0 lg:mt-0 mt-4 ">
//                   Dr. K K Singh
//                 </h1>
//                 <p className="lg:text-xs lg:mt-0 mt-3 mx-4 lg:mx-0">
//                   CHAIRMAN CARDIAC SCIENCE I Guru Gopiram Hospital
//                 </p>
//                 <h1 className="text-xs shadow-2xl bg-[#D9D9D9] lg:rounded-sm mt-2 w-44 lg:p-4  lg:py-1
//                 p-3 py-3  rounded-md 
//                  lg:mx-0">
//                   Diabetology/Endocrinology
//                 </h1>

                
//                 <div
//                   className="flex items-center justify-center font-bold text-sm lg:gap-16 
//                 gap-8  lg:mr-4 lg:mt-3 mt-3  "
//                 >
//                   <div>
//                     <h1 className="lg:text-sm text-xl " > 40 years</h1>
//                   </div>
//                   <div>
//                     <h1 className="lg:text-sm text-xl md:mr-20 sm:mr-0 lg:mr-0 mr-0  " >₹2500</h1>
//                   </div>
//                 </div>
//               </div>

              
//             </div>


//            {/* Button  */}


//             <div
//               className="flex lg:mt-3 mt-3 lg:border  rounded-b-2xl sm:-mt-0.5
//              border-[#086AAE] lg:w-[287px]  w-[320px] lg:-ml-4  md:w-[383px] md:mt-5 
//             -ml-4 
          
//            "
//             >
//               <div className="">
//                 <button
//                   className="border-[#086AAE] text-[#086AAE] 
//                  lg:px-4 lg:py-2 lg:w-36 text-xs  mt-2 lg:mt-1 
//                  lg:block  hidden
//                 "
//                 >
//                   View Full Profile
//                 </button>
//               </div>
//               <div>
//                <NavLink to='/appointment'>
//                <button
//                   className="text-white   lg:-ml-0.5 lg:px-2 lg:py- w-36 text-xs px-3 py-3
//                  md:px-4 md:py-3 md:ml-24  bg-[#086AAE]    rounded-br-xl 
                 
//                   ml-8
//                  lg:block  hidden"
//                 >
//                   Book Appointment
//                 </button>
//                </NavLink>
//               </div>
//             </div>



//                       {/* Mobile Button */}

//             <div
//               className="flex  border  rounded-b-xl   
//              border-[#086AAE]  w-[320px] md:w-[384px] lg:-ml-4   md:mt-0 sm:mt-3
//             -ml-4 h-17
//             lg:hidden  block mt-2.5
//            "
//             >
//               <div className="">
//                 <button
//                   className="border-[#086AAE] text-[#086AAE] 
//                   text-xs w-32  h-16  md:text-base md:mx-5
//                 lg:hidden   block
//                 "
//                 >
//                   View Full Profile
//                 </button>
//               </div>
//               <div>
//                <NavLink to='/appointment'>
//                <button
//                   className="text-white bg-[#086AAE]   lg:-ml-0.5 lg:px-2 lg:py-0 w-40 text-xs px-3 py-6
//                  md:px-4 md:py-7  md:ml-6  md:w-48  md:text-base  rounded-br-xl 
//                   ml-8
//                  lg:hidden   block"
//                 >
//                   Book Appointment
//                 </button>
//                </NavLink>
//               </div>
//             </div>
// </div>























// <div className="flex flex-col shadow-md lg:w-72 md:w-96 w-80 lg:h-[193px]  h-[310px] lg:rounded-xl 
//           rounded-md p-4 mt-10 lg:mt-0 md:mt-0 sm:mt-0">

//             <div className="flex items-center ">
//               <img
//                 className="lg:w-16 lg:h-16 lg:mr-4 lg:-mt-16 -mt-20"
//                 src={img55}
//                 alt=""
//               />
//               <div className="-mt-2 lg:-mt-0 md:-mt-0 sm:-mt-0 ">
//                 <h1 className="text-lg font-bold mx-4 lg:mx-0 lg:mt-0 mt-4 ">
//                   Dr. K K Singh
//                 </h1>
//                 <p className="lg:text-xs lg:mt-0 mt-3 mx-4 lg:mx-0">
//                   CHAIRMAN CARDIAC SCIENCE I Guru Gopiram Hospital
//                 </p>
//                 <h1 className="text-xs shadow-2xl bg-[#D9D9D9] lg:rounded-sm mt-2 w-44 lg:p-4  lg:py-1
//                 p-3 py-3  rounded-md 
//                  lg:mx-0">
//                   Diabetology/Endocrinology
//                 </h1>

                
//                 <div
//                   className="flex items-center justify-center font-bold text-sm lg:gap-16 
//                 gap-8  lg:mr-4 lg:mt-3 mt-3  "
//                 >
//                   <div>
//                     <h1 className="lg:text-sm text-xl " > 40 years</h1>
//                   </div>
//                   <div>
//                     <h1 className="lg:text-sm text-xl md:mr-20 sm:mr-0 lg:mr-0 mr-0  " >₹2500</h1>
//                   </div>
//                 </div>
//               </div>

              
//             </div>


//            {/* Button  */}


//             <div
//               className="flex lg:mt-3 mt-3 lg:border  rounded-b-2xl sm:-mt-0.5
//              border-[#086AAE] lg:w-[287px]  w-[320px] lg:-ml-4  md:w-[383px] md:mt-5 
//             -ml-4 
          
//            "
//             >
//               <div className="">
//                 <button
//                   className="border-[#086AAE] text-[#086AAE] 
//                  lg:px-4 lg:py-2 lg:w-36 text-xs  mt-2 lg:mt-1 
//                  lg:block  hidden
//                 "
//                 >
//                   View Full Profile
//                 </button>
//               </div>
//               <div>
//                <NavLink to='/appointment'>
//                <button
//                   className="text-white   lg:-ml-0.5 lg:px-2 lg:py- w-36 text-xs px-3 py-3
//                  md:px-4 md:py-3 md:ml-24  bg-[#086AAE]    rounded-br-xl 
                 
//                   ml-8
//                  lg:block  hidden"
//                 >
//                   Book Appointment
//                 </button>
//                </NavLink>
//               </div>
//             </div>



//                       {/* Mobile Button */}

//             <div
//               className="flex  border  rounded-b-xl   
//              border-[#086AAE]  w-[320px] md:w-[384px] lg:-ml-4   md:mt-0 sm:mt-3
//             -ml-4 h-17
//             lg:hidden  block mt-2.5
//            "
//             >
//               <div className="">
//                 <button
//                   className="border-[#086AAE] text-[#086AAE] 
//                   text-xs w-32  h-16  md:text-base md:mx-5
//                 lg:hidden   block
//                 "
//                 >
//                   View Full Profile
//                 </button>
//               </div>
//               <div>
//                <NavLink to='/appointment'>
//                <button
//                   className="text-white bg-[#086AAE]   lg:-ml-0.5 lg:px-2 lg:py-0 w-40 text-xs px-3 py-6
//                  md:px-4 md:py-7  md:ml-6  md:w-48  md:text-base  rounded-br-xl 
//                   ml-8
//                  lg:hidden   block"
//                 >
//                   Book Appointment
//                 </button>
//                </NavLink>
//               </div>
//             </div>
// </div>

























// <div className="flex flex-col shadow-md lg:w-72 md:w-96 w-80 lg:h-[193px]  h-[310px] lg:rounded-xl 
//           rounded-md p-4 mt-10 lg:mt-0 md:mt-0 sm:mt-0">

//             <div className="flex items-center ">
//               <img
//                 className="lg:w-16 lg:h-16 lg:mr-4 lg:-mt-16 -mt-20"
//                 src={img55}
//                 alt=""
//               />
//               <div className="-mt-2 lg:-mt-0 md:-mt-0 sm:-mt-0 ">
//                 <h1 className="text-lg font-bold mx-4 lg:mx-0 lg:mt-0 mt-4 ">
//                   Dr. K K Singh
//                 </h1>
//                 <p className="lg:text-xs lg:mt-0 mt-3 mx-4 lg:mx-0">
//                   CHAIRMAN CARDIAC SCIENCE I Guru Gopiram Hospital
//                 </p>
//                 <h1 className="text-xs shadow-2xl bg-[#D9D9D9] lg:rounded-sm mt-2 w-44 lg:p-4  lg:py-1
//                 p-3 py-3  rounded-md 
//                  lg:mx-0">
//                   Diabetology/Endocrinology
//                 </h1>

                
//                 <div
//                   className="flex items-center justify-center font-bold text-sm lg:gap-16 
//                 gap-8  lg:mr-4 lg:mt-3 mt-3  "
//                 >
//                   <div>
//                     <h1 className="lg:text-sm text-xl " > 40 years</h1>
//                   </div>
//                   <div>
//                     <h1 className="lg:text-sm text-xl md:mr-20 sm:mr-0 lg:mr-0 mr-0  " >₹2500</h1>
//                   </div>
//                 </div>
//               </div>

              
//             </div>


//            {/* Button  */}


//             <div
//               className="flex lg:mt-3 mt-3 lg:border  rounded-b-2xl sm:-mt-0.5
//              border-[#086AAE] lg:w-[287px]  w-[320px] lg:-ml-4  md:w-[383px] md:mt-5 
//             -ml-4 
          
//            "
//             >
//               <div className="">
//                 <button
//                   className="border-[#086AAE] text-[#086AAE] 
//                  lg:px-4 lg:py-2 lg:w-36 text-xs  mt-2 lg:mt-1 
//                  lg:block  hidden
//                 "
//                 >
//                   View Full Profile
//                 </button>
//               </div>
//               <div>
//                <NavLink to='/appointment'>
//                <button
//                   className="text-white   lg:-ml-0.5 lg:px-2 lg:py- w-36 text-xs px-3 py-3
//                  md:px-4 md:py-3 md:ml-24  bg-[#086AAE]    rounded-br-xl 
                 
//                   ml-8
//                  lg:block  hidden"
//                 >
//                   Book Appointment
//                 </button>
//                </NavLink>
//               </div>
//             </div>



//                       {/* Mobile Button */}

//             <div
//               className="flex  border  rounded-b-xl   
//              border-[#086AAE]  w-[320px] md:w-[384px] lg:-ml-4   md:mt-0 sm:mt-3
//             -ml-4 h-17
//             lg:hidden  block mt-2.5
//            "
//             >
//               <div className="">
//                 <button
//                   className="border-[#086AAE] text-[#086AAE] 
//                   text-xs w-32  h-16  md:text-base md:mx-5
//                 lg:hidden   block
//                 "
//                 >
//                   View Full Profile
//                 </button>
//               </div>
//               <div>
//                <NavLink to='/appointment'>
//                <button
//                   className="text-white bg-[#086AAE]   lg:-ml-0.5 lg:px-2 lg:py-0 w-40 text-xs px-3 py-6
//                  md:px-4 md:py-7  md:ml-6  md:w-48  md:text-base  rounded-br-xl 
//                   ml-8
//                  lg:hidden   block"
//                 >
//                   Book Appointment
//                 </button>
//                </NavLink>
//               </div>
//             </div>
// </div>



























// <div className="flex flex-col shadow-md lg:w-72 md:w-96 w-80 lg:h-[193px]  h-[310px] lg:rounded-xl 
//           rounded-md p-4 mt-10 lg:mt-0 md:mt-0 sm:mt-0">

//             <div className="flex items-center ">
//               <img
//                 className="lg:w-16 lg:h-16 lg:mr-4 lg:-mt-16 -mt-20"
//                 src={img55}
//                 alt=""
//               />
//               <div className="-mt-2 lg:-mt-0 md:-mt-0 sm:-mt-0 ">
//                 <h1 className="text-lg font-bold mx-4 lg:mx-0 lg:mt-0 mt-4 ">
//                   Dr. K K Singh
//                 </h1>
//                 <p className="lg:text-xs lg:mt-0 mt-3 mx-4 lg:mx-0">
//                   CHAIRMAN CARDIAC SCIENCE I Guru Gopiram Hospital
//                 </p>
//                 <h1 className="text-xs shadow-2xl bg-[#D9D9D9] lg:rounded-sm mt-2 w-44 lg:p-4  lg:py-1
//                 p-3 py-3  rounded-md 
//                  lg:mx-0">
//                   Diabetology/Endocrinology
//                 </h1>

                
//                 <div
//                   className="flex items-center justify-center font-bold text-sm lg:gap-16 
//                 gap-8  lg:mr-4 lg:mt-3 mt-3  "
//                 >
//                   <div>
//                     <h1 className="lg:text-sm text-xl " > 40 years</h1>
//                   </div>
//                   <div>
//                     <h1 className="lg:text-sm text-xl md:mr-20 sm:mr-0 lg:mr-0 mr-0  " >₹2500</h1>
//                   </div>
//                 </div>
//               </div>

              
//             </div>


//            {/* Button  */}


//             <div
//               className="flex lg:mt-3 mt-3 lg:border  rounded-b-2xl sm:-mt-0.5
//              border-[#086AAE] lg:w-[287px]  w-[320px] lg:-ml-4  md:w-[383px] md:mt-5 
//             -ml-4 
          
//            "
//             >
//               <div className="">
//                 <button
//                   className="border-[#086AAE] text-[#086AAE] 
//                  lg:px-4 lg:py-2 lg:w-36 text-xs  mt-2 lg:mt-1 
//                  lg:block  hidden
//                 "
//                 >
//                   View Full Profile
//                 </button>
//               </div>
//               <div>
//                <NavLink to='/appointment'>
//                <button
//                   className="text-white   lg:-ml-0.5 lg:px-2 lg:py- w-36 text-xs px-3 py-3
//                  md:px-4 md:py-3 md:ml-24  bg-[#086AAE]    rounded-br-xl 
                 
//                   ml-8
//                  lg:block  hidden"
//                 >
//                   Book Appointment
//                 </button>
//                </NavLink>
//               </div>
//             </div>



//                       {/* Mobile Button */}

//             <div
//               className="flex  border  rounded-b-xl   
//              border-[#086AAE]  w-[320px] md:w-[384px] lg:-ml-4   md:mt-0 sm:mt-3
//             -ml-4 h-17
//             lg:hidden  block mt-2.5
//            "
//             >
//               <div className="">
//                 <button
//                   className="border-[#086AAE] text-[#086AAE] 
//                   text-xs w-32  h-16  md:text-base md:mx-5
//                 lg:hidden   block
//                 "
//                 >
//                   View Full Profile
//                 </button>
//               </div>
//               <div>
//                <NavLink to='/appointment'>
//                <button
//                   className="text-white bg-[#086AAE]   lg:-ml-0.5 lg:px-2 lg:py-0 w-40 text-xs px-3 py-6
//                  md:px-4 md:py-7  md:ml-6  md:w-48  md:text-base  rounded-br-xl 
//                   ml-8
//                  lg:hidden   block"
//                 >
//                   Book Appointment
//                 </button>
//                </NavLink>
//               </div>
//             </div>
// </div>


















// <div className="flex flex-col shadow-md lg:w-72 md:w-96 w-80 lg:h-[193px]  h-[310px] lg:rounded-xl 
//           rounded-md p-4 mt-10 lg:mt-0 md:mt-0 sm:mt-0">

//             <div className="flex items-center ">
//               <img
//                 className="lg:w-16 lg:h-16 lg:mr-4 lg:-mt-16 -mt-20"
//                 src={img55}
//                 alt=""
//               />
//               <div className="-mt-2 lg:-mt-0 md:-mt-0 sm:-mt-0 ">
//                 <h1 className="text-lg font-bold mx-4 lg:mx-0 lg:mt-0 mt-4 ">
//                   Dr. K K Singh
//                 </h1>
//                 <p className="lg:text-xs lg:mt-0 mt-3 mx-4 lg:mx-0">
//                   CHAIRMAN CARDIAC SCIENCE I Guru Gopiram Hospital
//                 </p>
//                 <h1 className="text-xs shadow-2xl bg-[#D9D9D9] lg:rounded-sm mt-2 w-44 lg:p-4  lg:py-1
//                 p-3 py-3  rounded-md 
//                  lg:mx-0">
//                   Diabetology/Endocrinology
//                 </h1>

                
//                 <div
//                   className="flex items-center justify-center font-bold text-sm lg:gap-16 
//                 gap-8  lg:mr-4 lg:mt-3 mt-3  "
//                 >
//                   <div>
//                     <h1 className="lg:text-sm text-xl " > 40 years</h1>
//                   </div>
//                   <div>
//                     <h1 className="lg:text-sm text-xl md:mr-20 sm:mr-0 lg:mr-0 mr-0  " >₹2500</h1>
//                   </div>
//                 </div>
//               </div>

              
//             </div>


//            {/* Button  */}


//             <div
//               className="flex lg:mt-3 mt-3 lg:border  rounded-b-2xl sm:-mt-0.5
//              border-[#086AAE] lg:w-[287px]  w-[320px] lg:-ml-4  md:w-[383px] md:mt-5 
//             -ml-4 
          
//            "
//             >
//               <div className="">
//                 <button
//                   className="border-[#086AAE] text-[#086AAE] 
//                  lg:px-4 lg:py-2 lg:w-36 text-xs  mt-2 lg:mt-1 
//                  lg:block  hidden
//                 "
//                 >
//                   View Full Profile
//                 </button>
//               </div>
//               <div>
//                <NavLink to='/appointment'>
//                <button
//                   className="text-white   lg:-ml-0.5 lg:px-2 lg:py- w-36 text-xs px-3 py-3
//                  md:px-4 md:py-3 md:ml-24  bg-[#086AAE]    rounded-br-xl 
                 
//                   ml-8
//                  lg:block  hidden"
//                 >
//                   Book Appointment
//                 </button>
//                </NavLink>
//               </div>
//             </div>



//                       {/* Mobile Button */}

//             <div
//               className="flex  border  rounded-b-xl   
//              border-[#086AAE]  w-[320px] md:w-[384px] lg:-ml-4   md:mt-0 sm:mt-3
//             -ml-4 h-17
//             lg:hidden  block mt-2.5
//            "
//             >
//               <div className="">
//                 <button
//                   className="border-[#086AAE] text-[#086AAE] 
//                   text-xs w-32  h-16  md:text-base md:mx-5
//                 lg:hidden   block
//                 "
//                 >
//                   View Full Profile
//                 </button>
//               </div>
//               <div>
//                <NavLink to='/appointment'>
//                <button
//                   className="text-white bg-[#086AAE]   lg:-ml-0.5 lg:px-2 lg:py-0 w-40 text-xs px-3 py-6
//                  md:px-4 md:py-7  md:ml-6  md:w-48  md:text-base  rounded-br-xl 
//                   ml-8
//                  lg:hidden   block"
//                 >
//                   Book Appointment
//                 </button>
//                </NavLink>
//               </div>
//             </div>
// </div>

























// <div className="flex flex-col shadow-md lg:w-72 md:w-96 w-80 lg:h-[193px]  h-[310px] lg:rounded-xl 
//           rounded-md p-4 mt-10 lg:mt-0 md:mt-0 sm:mt-0">

//             <div className="flex items-center ">
//               <img
//                 className="lg:w-16 lg:h-16 lg:mr-4 lg:-mt-16 -mt-20"
//                 src={img55}
//                 alt=""
//               />
//               <div className="-mt-2 lg:-mt-0 md:-mt-0 sm:-mt-0 ">
//                 <h1 className="text-lg font-bold mx-4 lg:mx-0 lg:mt-0 mt-4 ">
//                   Dr. K K Singh
//                 </h1>
//                 <p className="lg:text-xs lg:mt-0 mt-3 mx-4 lg:mx-0">
//                   CHAIRMAN CARDIAC SCIENCE I Guru Gopiram Hospital
//                 </p>
//                 <h1 className="text-xs shadow-2xl bg-[#D9D9D9] lg:rounded-sm mt-2 w-44 lg:p-4  lg:py-1
//                 p-3 py-3  rounded-md 
//                  lg:mx-0">
//                   Diabetology/Endocrinology
//                 </h1>

                
//                 <div
//                   className="flex items-center justify-center font-bold text-sm lg:gap-16 
//                 gap-8  lg:mr-4 lg:mt-3 mt-3  "
//                 >
//                   <div>
//                     <h1 className="lg:text-sm text-xl " > 40 years</h1>
//                   </div>
//                   <div>
//                     <h1 className="lg:text-sm text-xl md:mr-20 sm:mr-0 lg:mr-0 mr-0  " >₹2500</h1>
//                   </div>
//                 </div>
//               </div>

              
//             </div>


//            {/* Button  */}


//             <div
//               className="flex lg:mt-3 mt-3 lg:border  rounded-b-2xl sm:-mt-0.5
//              border-[#086AAE] lg:w-[287px]  w-[320px] lg:-ml-4  md:w-[383px] md:mt-5 
//             -ml-4 
          
//            "
//             >
//               <div className="">
//                 <button
//                   className="border-[#086AAE] text-[#086AAE] 
//                  lg:px-4 lg:py-2 lg:w-36 text-xs  mt-2 lg:mt-1 
//                  lg:block  hidden
//                 "
//                 >
//                   View Full Profile
//                 </button>
//               </div>
//               <div>
//                <NavLink to='/appointment'>
//                <button
//                   className="text-white   lg:-ml-0.5 lg:px-2 lg:py- w-36 text-xs px-3 py-3
//                  md:px-4 md:py-3 md:ml-24  bg-[#086AAE]    rounded-br-xl 
                 
//                   ml-8
//                  lg:block  hidden"
//                 >
//                   Book Appointment
//                 </button>
//                </NavLink>
//               </div>
//             </div>



//                       {/* Mobile Button */}

//             <div
//               className="flex  border  rounded-b-xl   
//              border-[#086AAE]  w-[320px] md:w-[384px] lg:-ml-4   md:mt-0 sm:mt-3
//             -ml-4 h-17
//             lg:hidden  block mt-2.5
//            "
//             >
//               <div className="">
//                 <button
//                   className="border-[#086AAE] text-[#086AAE] 
//                   text-xs w-32  h-16  md:text-base md:mx-5
//                 lg:hidden   block
//                 "
//                 >
//                   View Full Profile
//                 </button>
//               </div>
//               <div>
//                <NavLink to='/appointment'>
//                <button
//                   className="text-white bg-[#086AAE]   lg:-ml-0.5 lg:px-2 lg:py-0 w-40 text-xs px-3 py-6
//                  md:px-4 md:py-7  md:ml-6  md:w-48  md:text-base  rounded-br-xl 
//                   ml-8
//                  lg:hidden   block"
//                 >
//                   Book Appointment
//                 </button>
//                </NavLink>
//               </div>
//             </div>
// </div>






















// <div className="flex flex-col shadow-md lg:w-72 md:w-96 w-80 lg:h-[193px]  h-[310px] lg:rounded-xl 
//           rounded-md p-4 mt-10 lg:mt-0 md:mt-0 sm:mt-0">

//             <div className="flex items-center ">
//               <img
//                 className="lg:w-16 lg:h-16 lg:mr-4 lg:-mt-16 -mt-20"
//                 src={img55}
//                 alt=""
//               />
//               <div className="-mt-2 lg:-mt-0 md:-mt-0 sm:-mt-0 ">
//                 <h1 className="text-lg font-bold mx-4 lg:mx-0 lg:mt-0 mt-4 ">
//                   Dr. K K Singh
//                 </h1>
//                 <p className="lg:text-xs lg:mt-0 mt-3 mx-4 lg:mx-0">
//                   CHAIRMAN CARDIAC SCIENCE I Guru Gopiram Hospital
//                 </p>
//                 <h1 className="text-xs shadow-2xl bg-[#D9D9D9] lg:rounded-sm mt-2 w-44 lg:p-4  lg:py-1
//                 p-3 py-3  rounded-md 
//                  lg:mx-0">
//                   Diabetology/Endocrinology
//                 </h1>

                
//                 <div
//                   className="flex items-center justify-center font-bold text-sm lg:gap-16 
//                 gap-8  lg:mr-4 lg:mt-3 mt-3  "
//                 >
//                   <div>
//                     <h1 className="lg:text-sm text-xl " > 40 years</h1>
//                   </div>
//                   <div>
//                     <h1 className="lg:text-sm text-xl md:mr-20 sm:mr-0 lg:mr-0 mr-0  " >₹2500</h1>
//                   </div>
//                 </div>
//               </div>

              
//             </div>


//            {/* Button  */}


//             <div
//               className="flex lg:mt-3 mt-3 lg:border  rounded-b-2xl sm:-mt-0.5
//              border-[#086AAE] lg:w-[287px]  w-[320px] lg:-ml-4  md:w-[383px] md:mt-5 
//             -ml-4 
          
//            "
//             >
//               <div className="">
//                 <button
//                   className="border-[#086AAE] text-[#086AAE] 
//                  lg:px-4 lg:py-2 lg:w-36 text-xs  mt-2 lg:mt-1 
//                  lg:block  hidden
//                 "
//                 >
//                   View Full Profile
//                 </button>
//               </div>
//               <div>
//                <NavLink to='/appointment'>
//                <button
//                   className="text-white   lg:-ml-0.5 lg:px-2 lg:py- w-36 text-xs px-3 py-3
//                  md:px-4 md:py-3 md:ml-24  bg-[#086AAE]    rounded-br-xl 
                 
//                   ml-8
//                  lg:block  hidden"
//                 >
//                   Book Appointment
//                 </button>
//                </NavLink>
//               </div>
//             </div>



//                       {/* Mobile Button */}

//             <div
//               className="flex  border  rounded-b-xl   
//              border-[#086AAE]  w-[320px] md:w-[384px] lg:-ml-4   md:mt-0 sm:mt-3
//             -ml-4 h-17
//             lg:hidden  block mt-2.5
//            "
//             >
//               <div className="">
//                 <button
//                   className="border-[#086AAE] text-[#086AAE] 
//                   text-xs w-32  h-16  md:text-base md:mx-5
//                 lg:hidden   block
//                 "
//                 >
//                   View Full Profile
//                 </button>
//               </div>
//               <div>
//                <NavLink to='/appointment'>
//                <button
//                   className="text-white bg-[#086AAE]   lg:-ml-0.5 lg:px-2 lg:py-0 w-40 text-xs px-3 py-6
//                  md:px-4 md:py-7  md:ml-6  md:w-48  md:text-base  rounded-br-xl 
//                   ml-8
//                  lg:hidden   block"
//                 >
//                   Book Appointment
//                 </button>
//                </NavLink>
//               </div>
//             </div>
// </div>







          


          
//         </div>
//       </div>
//     </>
//   );
// };

// export default Bookappointment;


// import React from "react";
import { NavLink } from "react-router-dom";
import img55 from "../../../public/images/img55.png";

const Bookappointment = () => {
  return (
    <div className="max-w-screen-xl lg:mx-auto mx-5  ">
            <div
              className=" lg:grid-cols-3 lg:grid md:grid-cols-2 md:grid sm:grid-cols-2 sm:grid grid-cols-1
          
          lg:mx-44   md:mx-24 md:gap-10  sm:mx-10 sm:gap-10 mt-10  mx-0  mb-14"
            >
              <div className="flex flex-col shadow-md lg:w-72 md:w-96 w-80 lg:h-[193px]  h-[310px] lg:rounded-xl 
              rounded-md p-4 ">
    
                <div className="flex items-center ">
                  <img
                    className="lg:w-16 lg:h-16 lg:mr-4 lg:-mt-16 -mt-20"
                    src={img55}
                    alt=""
                  />
                  <div className="-mt-2 lg:-mt-0 md:-mt-0 sm:-mt-0 ">
                    <h1 className="text-lg font-bold mx-4 lg:mx-0 lg:mt-0 mt-4 ">
                      Dr. K K Singh
                    </h1>
                    <p className="lg:text-xs lg:mt-0 mt-3 mx-4 lg:mx-0">
                      CHAIRMAN CARDIAC SCIENCE I Guru Gopiram Hospital
                    </p>
                    <h1 className="text-xs shadow-2xl bg-[#D9D9D9] lg:rounded-sm mt-2 w-44 lg:p-4  lg:py-1
                    p-3 py-3  rounded-md 
                     lg:mx-0">
                      Diabetology/Endocrinology
                    </h1>
    
                    
                    <div
                      className="flex items-center justify-center font-bold text-sm lg:gap-16
                    gap-8  lg:mr-4 lg:mt-3 mt-3  "
                    >
                      <div>
                        <h1 className="lg:text-sm text-xl " > 40 years</h1>
                      </div>
                      <div>
                        <h1 className="lg:text-sm text-xl md:mr-20 sm:mr-0 lg:mr-0 mr-0   " >₹2500</h1>
                      </div>
                    </div>
                  </div>
    
    
                </div>
    
    
               {/* Button  */}
    
    
                <div
                  className="flex lg:mt-3 mt-3 lg:border  rounded-b-2xl sm:-mt-0.5
                 border-[#086AAE] lg:w-[287px]  w-[320px] lg:-ml-4  md:w-[383px] md:mt-0 
                -ml-4 
              
               "
                >
                  <div className="">
                    <button
                      className="border-[#086AAE] text-[#086AAE] 
                     lg:px-4 lg:py-2 lg:w-36 text-xs  mt-2 lg:mt-1 
                     lg:block  hidden
                    "
                    >
                      View Full Profile
                    </button>
                  </div>
                  <div>
                   <NavLink to='/appointment'>
                   <button
                      className="text-white   lg:-ml-0.5 lg:px-2 lg:py- w-36 text-xs px-3 py-3
                     md:px-4 md:py-3 md:ml-24  bg-[#086AAE]    rounded-br-xl 
                     
                      ml-8
                     lg:block  hidden"
                    >
                      Book Appointment
                    </button>
                   </NavLink>
                  </div>
                </div>
    
    
    
                          {/* Mobile Button */}
    
                <div
                  className="flex  border  rounded-b-xl   
                 border-[#086AAE]  w-[320px] md:w-[384px] lg:-ml-4   md:mt-0 sm:mt-3
                -ml-4 h-17
                lg:hidden  block mt-2.5
               "
                >
                  <div className="">
                    <button
                      className="border-[#086AAE] text-[#086AAE] 
                      text-xs w-32  h-16  md:text-base md:mx-5
                    lg:hidden   block
                    "
                    >
                      View Full Profile
                    </button>
                  </div>
                  <div>
                   <NavLink to='/appointment'>
                   <button
                      className="text-white bg-[#086AAE]   lg:-ml-0.5 lg:px-2 lg:py-0 w-40 text-xs px-3 py-6
                     md:px-4 md:py-7  md:ml-6  md:w-48  md:text-base  rounded-br-xl 
                      ml-8
                     lg:hidden   block"
                    >
                      Book Appointment
                    </button>
                   </NavLink>
                  </div>
                </div>
    
              </div>














              <div className="flex flex-col shadow-md lg:w-72 md:w-96 w-80 lg:h-[193px]  h-[310px] lg:rounded-xl 
              rounded-md p-4 ">
    
                <div className="flex items-center ">
                  <img
                    className="lg:w-16 lg:h-16 lg:mr-4 lg:-mt-16 -mt-20"
                    src={img55}
                    alt=""
                  />
                  <div className="-mt-2 lg:-mt-0 md:-mt-0 sm:-mt-0 ">
                    <h1 className="text-lg font-bold mx-4 lg:mx-0 lg:mt-0 mt-4 ">
                      Dr. K K Singh
                    </h1>
                    <p className="lg:text-xs lg:mt-0 mt-3 mx-4 lg:mx-0">
                      CHAIRMAN CARDIAC SCIENCE I Guru Gopiram Hospital
                    </p>
                    <h1 className="text-xs shadow-2xl bg-[#D9D9D9] lg:rounded-sm mt-2 w-44 lg:p-4  lg:py-1
                    p-3 py-3  rounded-md 
                     lg:mx-0">
                      Diabetology/Endocrinology
                    </h1>
    
                    
                    <div
                      className="flex items-center justify-center font-bold text-sm lg:gap-16
                    gap-8  lg:mr-4 lg:mt-3 mt-3  "
                    >
                      <div>
                        <h1 className="lg:text-sm text-xl " > 40 years</h1>
                      </div>
                      <div>
                        <h1 className="lg:text-sm text-xl md:mr-20 sm:mr-0 lg:mr-0 mr-0   " >₹2500</h1>
                      </div>
                    </div>
                  </div>
    
    
                </div>
    
    
               {/* Button  */}
    
    
                <div
                  className="flex lg:mt-3 mt-3 lg:border  rounded-b-2xl sm:-mt-0.5
                 border-[#086AAE] lg:w-[287px]  w-[320px] lg:-ml-4  md:w-[383px] md:mt-0 
                -ml-4 
              
               "
                >
                  <div className="">
                    <button
                      className="border-[#086AAE] text-[#086AAE] 
                     lg:px-4 lg:py-2 lg:w-36 text-xs  mt-2 lg:mt-1 
                     lg:block  hidden
                    "
                    >
                      View Full Profile
                    </button>
                  </div>
                  <div>
                   <NavLink to='/appointment'>
                   <button
                      className="text-white   lg:-ml-0.5 lg:px-2 lg:py- w-36 text-xs px-3 py-3
                     md:px-4 md:py-3 md:ml-24  bg-[#086AAE]    rounded-br-xl 
                     
                      ml-8
                     lg:block  hidden"
                    >
                      Book Appointment
                    </button>
                   </NavLink>
                  </div>
                </div>
    
    
    
                          {/* Mobile Button */}
    
                <div
                  className="flex  border  rounded-b-xl   
                 border-[#086AAE]  w-[320px] md:w-[384px] lg:-ml-4   md:mt-0 sm:mt-3
                -ml-4 h-17
                lg:hidden  block mt-2.5
               "
                >
                  <div className="">
                    <button
                      className="border-[#086AAE] text-[#086AAE] 
                      text-xs w-32  h-16  md:text-base md:mx-5
                    lg:hidden   block
                    "
                    >
                      View Full Profile
                    </button>
                  </div>
                  <div>
                   <NavLink to='/appointment'>
                   <button
                      className="text-white bg-[#086AAE]   lg:-ml-0.5 lg:px-2 lg:py-0 w-40 text-xs px-3 py-6
                     md:px-4 md:py-7  md:ml-6  md:w-48  md:text-base  rounded-br-xl 
                      ml-8
                     lg:hidden   block"
                    >
                      Book Appointment
                    </button>
                   </NavLink>
                  </div>
                </div>
    
              </div>





















              <div className="flex flex-col shadow-md lg:w-72 md:w-96 w-80 lg:h-[193px]  h-[310px] lg:rounded-xl 
              rounded-md p-4 ">
    
                <div className="flex items-center ">
                  <img
                    className="lg:w-16 lg:h-16 lg:mr-4 lg:-mt-16 -mt-20"
                    src={img55}
                    alt=""
                  />
                  <div className="-mt-2 lg:-mt-0 md:-mt-0 sm:-mt-0 ">
                    <h1 className="text-lg font-bold mx-4 lg:mx-0 lg:mt-0 mt-4 ">
                      Dr. K K Singh
                    </h1>
                    <p className="lg:text-xs lg:mt-0 mt-3 mx-4 lg:mx-0">
                      CHAIRMAN CARDIAC SCIENCE I Guru Gopiram Hospital
                    </p>
                    <h1 className="text-xs shadow-2xl bg-[#D9D9D9] lg:rounded-sm mt-2 w-44 lg:p-4  lg:py-1
                    p-3 py-3  rounded-md 
                     lg:mx-0">
                      Diabetology/Endocrinology
                    </h1>
    
                    
                    <div
                      className="flex items-center justify-center font-bold text-sm lg:gap-16
                    gap-8  lg:mr-4 lg:mt-3 mt-3  "
                    >
                      <div>
                        <h1 className="lg:text-sm text-xl " > 40 years</h1>
                      </div>
                      <div>
                        <h1 className="lg:text-sm text-xl md:mr-20 sm:mr-0 lg:mr-0 mr-0   " >₹2500</h1>
                      </div>
                    </div>
                  </div>
    
    
                </div>
    
    
               {/* Button  */}
    
    
                <div
                  className="flex lg:mt-3 mt-3 lg:border  rounded-b-2xl sm:-mt-0.5
                 border-[#086AAE] lg:w-[287px]  w-[320px] lg:-ml-4  md:w-[383px] md:mt-0
                -ml-4 
              
               "
                >
                  <div className="">
                    <button
                      className="border-[#086AAE] text-[#086AAE] 
                     lg:px-4 lg:py-2 lg:w-36 text-xs  mt-2 lg:mt-1 
                     lg:block  hidden
                    "
                    >
                      View Full Profile
                    </button>
                  </div>
                  <div>
                   <NavLink to='/appointment'>
                   <button
                      className="text-white   lg:-ml-0.5 lg:px-2 lg:py- w-36 text-xs px-3 py-3
                     md:px-4 md:py-3 md:ml-24  bg-[#086AAE]    rounded-br-xl 
                     
                      ml-8
                     lg:block  hidden"
                    >
                      Book Appointment
                    </button>
                   </NavLink>
                  </div>
                </div>
    
    
    
                          {/* Mobile Button */}
    
                <div
                  className="flex  border  rounded-b-xl   
                 border-[#086AAE]  w-[320px] md:w-[384px] lg:-ml-4   md:mt-0 sm:mt-3
                -ml-4 h-17
                lg:hidden  block mt-2.5
               "
                >
                  <div className="">
                    <button
                      className="border-[#086AAE] text-[#086AAE] 
                      text-xs w-32  h-16  md:text-base md:mx-5
                    lg:hidden   block
                    "
                    >
                      View Full Profile
                    </button>
                  </div>
                  <div>
                   <NavLink to='/appointment'>
                   <button
                      className="text-white bg-[#086AAE]   lg:-ml-0.5 lg:px-2 lg:py-0 w-40 text-xs px-3 py-6
                     md:px-4 md:py-7  md:ml-6  md:w-48  md:text-base  rounded-br-xl 
                      ml-8
                     lg:hidden   block"
                    >
                      Book Appointment
                    </button>
                   </NavLink>
                  </div>
                </div>
    
              </div>
              </div>
              </div>
    
  );
};

export default Bookappointment;
