// import React from 'react'
// import photo6 from '../../../public/images/photo6.png'
// const HomeSeven = () => {
//   return (

// <div>
// <div className='mx-10'>
//     <div className='max-w-screen-xl mx-32 '>
//         <div className="flex flex-col md:flex-row justify-center p-8 mt-10">
//             <div className="lg:w-2/5 md:w-1/2  w-full md:mt-16 md:-ml-12 relative order-2 md:order-1 lg:-mt-1  ">
//                 <img src={photo6} alt="photo6" className="w-full h-full object-cover rounded-2xl" />
//             </div>

//             <div className="relative  mt-7 w-full md:w-1/2 h-auto md:h-72 p-4 border-4 ml-0 border-[#086AAE]
//              rounded-lg order-1 md:order-2">
//                 <h1 className='text-[#086AAE] font-semibold lg:mt-5
//                  lg:text-2xl mt-2 text-base lg:ml-4'>Message From Our Chairman</h1>
//                 <p className="text-gray-800 mt-3 lg:mx-3 lg:w-[480px] md:w-[280px] sm:w-full
//                  w-64 lg:text-sm text-xs">
//                     Guru Hospitals Ltd is the premier private healthcare provider of Eastern India, 
//                     with three super specialty hospitals at Dhakuria, Mukundapur, and Salt Lake, in Kolkata, 
//                     and another super specialty hospital at Bhubaneswar, Odisha. The Group takes care of around 4.5 
//                     lakh patients annually, conducting more than 15,000 successful surgeries, with a roster of more than 
//                     5,000 healthcare professionals.
//                 </p>
//                 <h1 className='ml-3 mt-2 hidden font-bold md:block lg:block'>Dr.KK Singh</h1>
//                 <h2 className='ml-3 hidden md:block lg:block'>Founder & Chairman</h2>

//                 <button className="text-blue-600  font-bold py-4 px-4 rounded-lg shadow-md bg-white lg:hidden 
//                 md:hidden mt-14">
//                     Read more
//                 </button>
//             </div>
//         </div>
//     </div>

   
// </div>
// <hr className="border-8 border-blue-500 mt-8" />
// </div>


//   )
// }

// export default HomeSeven



import React from 'react'

import Photo6 from '../../../public/images/photo6.png'
const  HomeSeven = () => {
  return (    
      <div className=''>
    <div className='max-w-screen-xl mx-auto'>
        <div className="flex flex-col md:flex-row justify-center p-8 lg:mt-10 md:lg-10 sm:mt-10 mt-16">
            

            <div className="lg:w-2/5 md:w-1/2 w-full lg:-ml-16 md:mt-16 md:-ml-12 relative order-1 md:order-2 lg:mt-12 ">
                <img src={Photo6} alt="Photo6" className="w-full h-full object-cover rounded-2xl -mt-11" />
            </div>

            <div className="relative mt-7 w-full md:w-1/2 h-72 p-4 border-4 ml-0 
             border-[#086AAE] rounded-lg order-2 md:order-1">
                <h1 className='text-[#086AAE] font-semibold lg:mt-3 lg:text-2xl text-base lg:ml-4'>Message From Our Chairman</h1>
                <p className="text-gray-800 mt-3 lg:mx-3 lg:w-[380px] md:w-[280px] sm:w-full w-64 lg:text-sm text-xs">Guru Hospitals Ltd is the premier private healthcare provider of Eastern India, with three super specialty hospitals at Dhakuria, Mukundapur, and Salt Lake, in Kolkata, and another super specialty hospital at Bhubaneswar, Odisha. The Group takes care of around 4.5 lakh patients annually, conducting more than 15,000 successful surgeries, with a roster of more than 5,000 healthcare professionals.  </p>
                <h1 className='ml-3 mt-1 hidden font-bold md:block lg:block'>Dr.KK Singh</h1>
              <h2 className='ml-3 hidden md:block lg:block'>Founder & Chairman</h2>
                <button className="text-blue-600 mt-8 font-bold py-4 px-4 rounded-lg 
                shadow-md bg-white lg:hidden md:hidden sm:hidden">
                    Read more
                </button>
            </div>
        </div>
        
    </div>
    {/* <hr className="border-8 border-blue-500 " /> */}
</div>
   
  )
}

export default HomeSeven







