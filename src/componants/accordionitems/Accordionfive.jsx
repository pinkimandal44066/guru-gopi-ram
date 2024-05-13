
import React, { useState } from 'react';
import img1 from '../../../public/images/img1.png'
import img32 from '../../../public/images/img32.png';
import img33 from '../../../public/images/img33.png';
import { IoIosArrowUp } from "react-icons/io";

const AccordionItem = ({ title, imageSrc, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4 lg:hidden md:hidden block">
      <button
        className="w-full bg-white p-4 text-left rounded-md border-b border-gray-700 focus:outline-none focus:shadow-outline-blue transition duration-300 ease-in-out flex"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-semibold">{title}</span>
        <span className={`ml-auto transform ${isOpen ? 'rotate-180' : 'rotate-0'} transition duration-300 ease-in-out`}><IoIosArrowUp /></span>
      </button>
      <div className={`mt-2  rounded-md overflow-hidden transition-max-height duration-300 ease-in-out ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
        <div className='flex justify-center'>
        <img src={imageSrc} alt="Accordion Image" className="w-48 mt-4" />
        </div>
        <p className="text-gray-700">{content}</p>
      </div>
    </div>
  );
};

const Accordionfive = () => {
  return (
    <div className="mx-5  mt-8">
      <AccordionItem
        title="Spine Disorders "
        content="The spine is a very delicate and important part of the central
        nervous
        system of the body. The spine can have numerous 
        issues like lumbar
        canal stenosis, whiplash, degenerative 
        disc disease, intradural spinal
        tumour, extradural spinal 
        tumour, spinal injury due to falls or trauma,
        and infections 
        like TB in the spine."
        imageSrc={img32} 
       
      />
      <AccordionItem
        title="Deep Brain Stimulation"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        imageSrc={img33} 

      />
      <AccordionItem
        title="Interventional neuroradiology"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        imageSrc={img32} 
      />
    

    <AccordionItem
        title="Stroke Rehabilitation"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        imageSrc={img32} 
      />

    </div>
    
  );
};

export default Accordionfive;



