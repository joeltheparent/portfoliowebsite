import React from 'react';
import { FaBootstrap, FaGithub, FaJava, FaLinkedinIn, FaPython, FaReact } from "react-icons/fa";
import { SiCsharp } from "react-icons/si";
const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me on
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
             <a href='https://www.linkedin.com/in/joel-parent-kouchibouguac/'><button><FaLinkedinIn /></button></a> 
            </span>
            <span className="bannerIcon">
              <a href='https://github.com/joeltheparent'><button><FaGithub /></button></a>
            </span>
            
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Most skilled in
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaReact/>
            </span>
            <span className="bannerIcon">
              <SiCsharp />
            </span>
            <span className="bannerIcon">
              <FaBootstrap />
            </span>
            <span className="bannerIcon">
              <FaJava />
            </span>
            <span className="bannerIcon">
              <FaPython />
            </span>
          </div>
        </div>
      </div>
  )
}

export default Media