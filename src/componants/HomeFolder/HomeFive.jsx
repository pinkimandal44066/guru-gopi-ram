import React from 'react'
import Hospital from '../../../public/images/Hospital.png'
const HomeFive = () => {
  return (    
      <div className=''>
    <div className='max-w-screen-xl mx-auto'>
        <div className="flex flex-col md:flex-row justify-center p-8 mt-10">
            <div className="relative mt-7 w-full md:w-1/2 h-72 p-4 border-4 ml-0  border-[#086AAE] rounded-lg order-2 md:order-1">
                <h1 className='text-[#086AAE] font-semibold lg:mt-5 lg:text-2xl text-base lg:ml-4'>About Guru Gopiram</h1>
                <p className="text-gray-800 mt-3 lg:mx-3 lg:w-[380px] md:w-[280px] sm:w-full w-64 lg:text-sm text-xs">Guru Hospitals Ltd is the premier private healthcare provider of Eastern India, with three super specialty hospitals at Dhakuria, Mukundapur, and Salt Lake, in Kolkata, and another super specialty hospital at Bhubaneswar, Odisha. The Group takes care of around 4.5 lakh patients annually, conducting more than 15,000 successful surgeries, with a roster of more than 5,000 healthcare professionals.  </p>

                <button className="text-blue-600 mt-8 font-bold py-4 px-4 rounded-lg shadow-md bg-white">
                    Read more
                </button>
            </div>

            <div className="lg:w-2/5 md:w-1/2 w-full lg:-ml-16 md:mt-16 md:-ml-12 relative order-1 md:order-2 lg:mt-12 ">
                <img src={Hospital} alt="Hospital Image" className="w-full h-full object-cover rounded-2xl -mt-12" />
            </div>
        </div>
    </div>
</div>
   
  )
}

export default HomeFive
