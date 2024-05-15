// import React from 'react'
import img47 from "../../../public/images/img47.png";
const Healthinformation = () => {
  return (
    <>
      <div className="mt-5">
        <img src={img47} alt=""   />

        <div
          className="lg:flex-row flex md:flex-row flex-col  
    max-w-screen-xl lg:mx-auto md:mx-auto mx-20  lg:top-[60%] lg:absolute 
     md:absolute md:top-[25%]  md:items-center md:left-[10%]
     lg:left-[10%] lg:gap-[450px] lg:items-center "
        >
          <div
            className=" lg:text-2xl text-xl font-bold shadow-2xl  bg-white rounded-md lg:p-4 lg:py-2
         p-2 py-1
        lg:-mt-0  md:-mt-0 -mt-16 sm:mx-36 sm:-mt-24 lg:mx-0 md:mx-0 "
          >
            <h1 className="  "> Health Information</h1>
          </div>
        </div>
      </div>

























      <div className="max-w-screen-xl lg:mt-12 lg:mx-auto mx-7 lg:mx-52 md:mx-52 sm:mx-12 md:mt-12 mt-10">
        <h1 className="lg:text-2xl text-xl font-semibold">Treatments</h1>
      </div>

      {/* < className="max-w-screen-xl mx-auto mt-8 "> */}
      <div className="max-w-screen-xl lg:mx-auto">
      <div
          className=" lg:grid-cols-3 lg:grid md:grid-cols-2 md:grid sm:grid-cols-2 sm:grid grid-cols-1
      
      lg:mx-44   md:mx-24 md:gap-10  sm:mx-10 sm:gap-10 mt-6 mx-6 mb-8"
        >
              {/* sm:hidden hidden  */}
          {/* LINE PART1 */}

          <div className="flex flex-col shadow-md lg:w-72 md:w-96 w-80 h-48 rounded-md   p-4">
            <h1 className="text-xl text-blue-500 font-semibold lg:mt-10 md:mt-4 lg:mx-3 md:mx-7">
              Abdominal Hysterectomy
            </h1>
            <p className="lg:w-60 text-xs  md:mx-2  lg:mx-4 mt-2">
              An Abdominal Hysterectomy is a surgical removal of uterus by
              making an incision...
            </p>
          </div>












          {/* PART2 */}

          <div className="flex flex-col shadow-md lg:w-72 md:w-96 w-80 h-48 rounded-md   p-4">
            <h1 className="text-xl text-blue-500 font-semibold lg:mt-10 md:mt-4 lg:mx-3 md:mx-7">
              Abdominal Hysterectomy
            </h1>
            <p className="lg:w-60 text-xs  md:mx-2  lg:mx-4 mt-2">
              An Abdominal Hysterectomy is a surgical removal of uterus by
              making an incision...
            </p>
          </div>

          {/* PART3 */}

          <div className="flex flex-col shadow-md lg:w-72 md:w-96 w-80 h-48 rounded-md   p-4">
            <h1 className="text-xl text-blue-500 font-semibold lg:mt-10 md:mt-4 lg:mx-3 md:mx-7">
              Abdominal Hysterectomy
            </h1>
            <p className="lg:w-60 text-xs  md:mx-2  lg:mx-4 mt-2">
              An Abdominal Hysterectomy is a surgical removal of uterus by
              making an incision...
            </p>
          </div>
      
       {/* bd me delete krna hai */}
       <div className="flex flex-col shadow-md lg:w-72 md:w-96 w-80 h-48 rounded-md   p-4">
            <h1 className="text-xl text-blue-500 font-semibold lg:mt-10 md:mt-4 lg:mx-3 md:mx-7">
              Abdominal Hysterectomy
            </h1>
            <p className="lg:w-60 text-xs  md:mx-2  lg:mx-4 mt-2">
              An Abdominal Hysterectomy is a surgical removal of uterus by
              making an incision...
            </p>
          </div>
        
        
        <br />
        <br />
      </div>

      </div>
      {/* mobile screen */}
    </>
  );
};

export default Healthinformation;
