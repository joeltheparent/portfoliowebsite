import { motion } from "framer-motion";
import React from "react";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="flex flex-col gap-4">
          
          <h2 className="text-4xl font-bold">Student Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Application Developer Student"
            subTitle="Trios College - (2023 - Present)"
            result="CANADA"
            des="Part of the Applicationd developer program at Trios college, learning full stack development, and web application development."
          />
          <ResumeCard
            title="Math and MS Excel Tutor"
            subTitle="Eastern College - (April 2023- July 2023)"
            result="CANADA"
            des="I helped a student which was struggling with Math and MS Excel while transitioning between the digital marketing and Developer programs."
          />
          <ResumeCard
            title="Digital Marketing Student"
            subTitle="Eastern College (Jan 2023 - Apr 2023)"
            result="CANADA"
            des="I began the digital marketing program at Eastern College before deciding to move on to software development."
          />
         
        </div>
      </div>
      <div>
        <div className="flex flex-col gap-4">
          
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Paramedic Supervisor"
            subTitle="Ambulance New Brunswick (2014 - 2023)"
            result="CANADA"
            des="Became supervisor, responsible for scheduling and inventory for East District of Ambulance New Bruswick."
          />
          <ResumeCard
            title="Primary Care Paramedic"
            subTitle="Ambulance New Brunswick (2009 - 2023)"
            result="CANADA"
            des="Primary Care Paramedic working at multiple bases accross eastern New Brunswick."
          />
         <ResumeCard
            title="Industrial Firefighter"
            subTitle="Scott Safety (2008 - 2009)"
            result="CANADA"
            des="Responsible for safety meetings, and fire protection at Oil lease sites during dangerous operations."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
