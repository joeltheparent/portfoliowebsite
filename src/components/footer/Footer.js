import React from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { joelLogo6 } from "../../assets/index";

const Footer = () => {
  return (
    <div className="w-full py-20 h-auto border-b-[1px] border-b-black grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-4 gap-8">
      <div className="w-full h-full flex flex-col gap-8">
        <img className="w-65" src={joelLogo6} alt="logo" />
        <div className="flex gap-4">
          <span className="bannerIcon">
            <a href='https://www.linkedin.com/in/joel-parent-kouchibouguac/'><button><FaLinkedin /></button></a>
          </span>
          <span className="bannerIcon">
            <a href='https://github.com/joeltheparent'><button><FaGithub /></button></a>
            
          </span>
          
        </div>
      </div>
      
    </div>
  );
}

export default Footer