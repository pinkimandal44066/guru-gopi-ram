import React from 'react'
import newnew from '../../../public/images/newnew.png'
import photo1 from '../../../public/images/photo1.png'

const HomeFour = () => {
  return (
    <div className='bg-[#e4f1fb] w-full h-fit    '>
        <div className='max-w-screen-xl mx-auto flex flex-col lg:flex-row md:flex-row justify-between gap-20 items-center p-10 mt-10'>
            <div>
                <h1>Patient Stories</h1>
                <img className='w-80' src={newnew} />
                <h1>Sunita Tickoo</h1>
                <p>Today,I will be sharing my journey of battling cervical cancer.</p>
                <button className='border-2 border-gray-100 shadow-2xl bg-white rounded-md p-2.5 text-[#086AAE]'>Read More</button>
            </div>
            <div className='flex flex-col lg:flex-row md:flex-row   justify-center items-start'>
                <div className='flex flex-col'>
                <div className='flex items-center'>
    <h1 className='text-[#086AAE] lg:text-3xl text-base font-bold lg:w-40 w-60'>LIVE TO GIVE HOPE</h1>
    <img className='lg:w-80 w-52 -mt-10' src={photo1} />
</div>

<p className='w-80 text-sm text-gray-600'>Live to Give Hope (LGH) is a charitable fund, set-up to
provide quality medical facilities to the needy people from
the lower socio economic strata of the society, who
cannot afford it, in line with our vision of providing quality
healthcare for all.
It was inspired by the benevolent work done by K.K Singh
& Dibakar and her experience with running a premier
medical institute which is l'Not for Profit."#DummyText</p>
<div>

<button className='border-2 mt-5 border-gray-100 shadow-2xl bg-white rounded-md p-2 text-[#086AAE]'>Know More</button>
</div>
                </div>
              

            </div>

        </div>
    
    </div>
  )
}

export default HomeFour
