import React from 'react'
import newnew from '../../../public/images/newnew.png'
import handpic from '../../../public/images/handpic.png'

const HomeFour = () => {
  return (
    <div className='bg-[#e4f1fb] w-full h-fit    '>
        <div className='max-w-screen-xl mx-auto flex flex-col lg:flex-row md:flex-row 
        justify-between gap-20 items-center p-10 mt-16 '>
            <div className='w-80'>
                <h1 className='font-semibold text-2xl  mx-2'>Patient Stories</h1>
                <img className='w-80 mt-4 ' src={newnew} />
                <h1 className='font-semibold mt-4'>Sunita Tickoo</h1>
                <p >Today,I will be sharing my journey of battling cervical cancer.</p>
               
  <button className='text-[#086AAE]  border-2 border-gray-100 shadow-2xl bg-white
  font-semibold py-2 px-8 mt-2 rounded-lg 
    '>
      Read More
    </button>
            </div>
            <div className='flex flex-col lg:flex-row md:flex-row  
             justify-center items-start'>
                <div className='flex flex-col'>
                <div className='flex items-center w-80 mr-2'>
                <h1 className='text-[#086AAE] lg:text-4xl lg:-mt-36 -mt-28 text-lg
                 lg:w-40 w-60 font-bold whitespace-nowrap md:-mt-52  md:text-3xl'>LIVE TO
                <br /> GIVE HOPE</h1>
    <img className='lg:w-80 w-96 md:w-52 -mt-36  ' src={handpic} />
</div>
<p className='w-72 lg:w-96 text-xs lg:text-sm text-gray-600 -mt-20 lg:-mt-16'>
  Live to Give Hope (LGH) is a charitable fund, set-up to provide quality medical facilities to the needy people from the lower socio-economic strata of the society, who cannot afford it, in line with our vision of providing quality healthcare for all. It was inspired by the benevolent work done by K.K Singh & Dibakar and her experience with running a premier medical institute which is 'Not for Profit'.
</p>

<div>
<button className='text-[#086AAE]   border-2 border-gray-100 shadow-2xl bg-white
  font-semibold py-2 px-8 mt-4 rounded-lg 
    '>
      Know More
    </button>
</div>
</div>
</div>
</div>
    </div>





  )
}

export default HomeFour
