import React from 'react';

import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { HiLocationMarker, HiPhone, HiMail } from 'react-icons/hi';
import { FaGreaterThan } from 'react-icons/fa';
import { FaLessThan } from 'react-icons/fa';
const Footer = () => {
  return (
    <footer className="bg-gray-700 text-white pt-12 pb-8 relative">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Side Logo and Social */}
        <div>
        <div className="flex items-center gap-2">
                        <FaLessThan className='text-red-500 font-extrabold'/>
                        <span className='text-2xl text-red-500 font-extrabold'>A.</span> 
                        <span className='text-2xl  font-extrabold'>Shahed</span>
                        <FaGreaterThan className=' font-extrabold text-yellow-300' />
        </div>
          <p className="mb-4 mt-2">
          I assure you of providing the best web service possible. So don't hesitate to contact me.
          </p>
          <div className='flex items-center gap-3'>
        
         <a href="https://www.facebook.com/profile.php?id=100094014247740&mibextid=ZbWKwL" target='_blank'><FaFacebookF className='hover:bg-red-500 text-red-500 border-[2px] h-[40px] w-[40px] rounded-full border-red-500 duration-500 p-[9px] hover:text-white' /></a>  
           
         <a href="https://linkedin.com/in/abdullahshahed24/" target='_blank'><FaLinkedinIn className='hover:bg-red-500 text-red-500 border-[2px] h-[40px] w-[40px] rounded-full border-red-500 duration-500 p-[9px] hover:text-white' /></a>
         <a href="mailto:shahed32156@gmail.com" target='_blank'><MdEmail className='hover:bg-red-500 text-red-500 border-[2px] h-[40px] w-[40px] rounded-full border-red-500 duration-500 p-[9px] hover:text-white' /></a>
         <a href="https://wa.me/8801741987566?text=Hello%20there!%20I%20would%20like%20to%20contact%20you." target="_blank" rel="noopener noreferrer"><FaWhatsapp className='hover:bg-red-500 text-red-500 border-[2px] h-[40px] w-[40px] rounded-full border-red-500 duration-500 p-[9px] hover:text-white' /></a>
        
         
       </div>
        </div>

        {/* Sections */}
        <div className='mx-0 md:mx-auto'>
          <h3 className="text-lg font-bold mb-4">Sections</h3>
          <ul className="space-y-2">
          <li><a href='#' className="duration-500 hover:text-red-500">Home</a></li>
          <li><a href='#about' className="duration-500 hover:text-red-500">About</a></li>
            <li><a href='#education' className="duration-500 hover:text-red-500">Education</a></li>
            <li><a href='#experience' className="duration-500 hover:text-red-500">Experience</a></li>
            <li><a href='#skills' className="duration-500 hover:text-red-500">Skills</a></li>
            <li><a href='#projects' className="duration-500 hover:text-red-500">Projects</a></li>
            <li><a href='#contact' className="duration-500 hover:text-red-500">Contact</a></li>
          </ul>
        </div>

        

        {/* Contact */}
        <div className='mx-0 md:mx-auto'>
          <h3 className="text-lg font-bold mb-4">Contact details</h3>
          <ul className="space-y-4">
            
            <li>
              <div className="flex items-center space-x-2">
                <HiLocationMarker className="text-[22px]" />
                <span>North Kafrul, Dhaka, Bangladesh-Asia/Dhaka</span>
              </div>
            </li>
            <li>
              <div className="flex items-center space-x-2">
                <HiPhone className="text-xl" />
                <span>+8801741987566</span>
              </div>
            </li>
            <li>
              <div className="flex items-center space-x-2">
                <HiMail className="text-xl" />
                <span>diffusionfive@gmail.com</span>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center border-t border-gray-300 mt-8 pt-4 text-sm text-gray-300">
        
        <div className='flex flex-col md:flex-row justify-center md:justify-evenly items-center'>
            <div>
                <p className="">©Copyright 2024. All Rights Reserved by Abdullah Shahed</p>
            </div>
            
            
          </div>
        </div>
    </footer>
  );
};

export default Footer;
