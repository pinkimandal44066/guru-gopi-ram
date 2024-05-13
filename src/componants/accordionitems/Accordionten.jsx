
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

const Accordionten= () => {
  return (
    <div className="mx-5  mt-8">
      <AccordionItem
        title="Nasal Polyps "
        content="Nasal Polyps are soft, tender, and non-cancerous growth inside 
        the
        nasal cavity. These hang from the nose lining (usually both 
        nostrils)
        like tear drops resulting in a running nose, loss of smell, 
        decreased
        taste, etc. The polyps may vary in size and can be 
        yellowish or pink in
        appearance. Large polyps can cause 
        breathing difficulties and affect
        the patients smelling power. 
        They block sinus and cause infections.
        The disorder seems to 
        affect more than 10 million people per year in
        India alone. 
        Nasal polyps are common in men as compared to women
        and can arise at any stage. People suffering from asthma, sinus, 
        and
        allergies are more likely to develop the disorder."
        imageSrc={img33} 
       
      />
      <AccordionItem
        title="Allergic Rhinitis"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        imageSrc={img33} 

      />
      <AccordionItem
        title="Deviated Nasal Septum"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        imageSrc={img32} 
      />
    

    <AccordionItem
        title="Epistaxis"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        imageSrc={img32} 
      />

    </div>
    
  );
};

export default Accordionten;



