import React from 'react';
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { contactImg1 } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg1}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Joel Parent</h3>
        <p className="text-lg font-normal text-gray-400">
          Full stack developer and student
        </p>
        <p className="text-base text-gray-400 tracking-wide">
          Please feel free to contact me for any projects that I may
          be able to help with.
        </p>
        
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">parentjoel7@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me on</h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <a href='https://www.linkedin.com/in/joel-parent-kouchibouguac/'>
              <button><FaLinkedinIn /></button>
            
            </a>
          </span>
          <span className="bannerIcon">
            <a href='https://github.com/joeltheparent'>
            <button><FaGithub /></button>
            </a>
          </span>
         
          
        </div>
      </div>
    </div>
  );
}

export default ContactLeft