
import React, { useState } from 'react';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import img54 from '../../../public/images/img54.png';

const AccordionItem = ({ title, imageSrc, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4 border shadow-2xl rounded-md border-[#086AAE]">
      <button
        className="w-full p-2 text-[#086AAE] text-left rounded-md focus:outline-none focus:shadow-outline-blue transition duration-300 ease-in-out flex"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-semibold ml-2">{title}</span>
        <span className={`ml-auto transform ${isOpen ? 'rotate-180' : 'rotate-0'} transition duration-300 ease-in-out`}><MdOutlineKeyboardArrowDown size={32} style={{ color: '#086AAE' }} /></span>
      </button>
      <div className={`mt-2 overflow-hidden transition-max-height duration-300 ease-in-out ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
        <div className='flex justify-center'>
          {/* <img src={imageSrc} alt="Accordion Image" className="w-48 mt-4" /> */}
        </div>
        <p className="text-[#086AAE] text-left mx-4">{content}</p>
      </div>
    </div>
  );
};

const Patientcare = () => {
  return (
    <div>
      <img className='lg:-mt-16 w-full' src={img54} alt='' />
      <div className="mx-4 sm:mx-8 md:mx-16 lg:mx-28 xl:mx-36 2xl:mx-48 lg:-mt-16">
        <AccordionItem
          title="Pre Admission"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Fugit, suscipit rerum. Mollitia quibusdam nisi unde consectetur illum numquam, 
           quam sint placeat. Aspernatur aliquid neque exercitationem adipisci alias deserunt atque aliquam."
        />
        <AccordionItem
          title="Room Types and Facilities"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Fugit, suscipit rerum. Mollitia quibusdam nisi unde consectetur illum numquam, 
           quam sint placeat. Aspernatur aliquid neque exercitationem adipisci alias deserunt atque aliquam."
        />
        <AccordionItem
          title="At Admission"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Fugit, suscipit rerum. Mollitia quibusdam nisi unde consectetur illum numquam, 
          quam sint placeat. Aspernatur aliquid neque exercitationem adipisci alias deserunt atque aliquam."
        />
        <AccordionItem
          title="During Your Stay"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Fugit, suscipit rerum. Mollitia quibusdam nisi unde consectetur illum numquam, 
          quam sint placeat. Aspernatur aliquid neque exercitationem adipisci alias deserunt atque aliquam."
        />
        <AccordionItem
          title="Visitors Policy"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Fugit, suscipit rerum. Mollitia quibusdam nisi unde consectetur illum numquam, 
          quam sint placeat. Aspernatur aliquid neque exercitationem adipisci alias deserunt atque aliquam."
        />
        <AccordionItem
          title="Discharge"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Fugit, suscipit rerum. Mollitia quibusdam nisi unde consectetur illum numquam, 
          quam sint placeat. Aspernatur aliquid neque exercitationem adipisci alias deserunt atque aliquam."
        />
        <AccordionItem
          title="General Policies & Procedures"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Fugit, suscipit rerum. Mollitia quibusdam nisi unde consectetur illum numquam, 
          quam sint placeat. Aspernatur aliquid neque exercitationem adipisci alias deserunt atque aliquam."
        />
      </div>
    </div>
  );
};

export default Patientcare;





