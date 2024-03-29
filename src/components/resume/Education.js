import { motion } from 'framer-motion';
import React from 'react';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        {/* <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          
        </div> */}
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Application Developer"
            subTitle="Trios College-(2023-Present)"
            result="CANADA"
            des="Full stack development, front end and back end, as well as web application development."
          />
          <ResumeCard
            title="Digital marketing"
            subTitle="Eastern College (2023)"
            result="CANADA"
            des="Began training in digital marketing before transfering to Trios College for software development"
          />
          <ResumeCard
            title="Primary Care Paramedic"
            subTitle="Atlantic Paramedic Academy (2008-2009)"
            result="CANADA"
            des="Primary Care Paramedic Diploma with the ability to register with PANB (License)"
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        {/* <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          
        </div> */}
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Basic Firefighting"
            subTitle="Holland College (2007)"
            result="CANADA"
            des="Diploma with international firefighting designation and credentials"
          />
          <ResumeCard
            title="Professional Truck Driver"
            subTitle="GW Driver Training (2007)"
            result="CANADA"
            des="Certificate course with commercial driver's permit upon graduation."
          />
          <ResumeCard
            title="High School Education"
            subTitle="Mgr Marcel Francois Richard High School(2002-2006)"
            result="CANADA"
            des="High School Diploma"
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Education