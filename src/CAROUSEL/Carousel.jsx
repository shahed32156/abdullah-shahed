import React from 'react'
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Typewriter from 'react-typewriter-effect';
import Particle from '../Particle';




const Carousel = () => {

  
  return (
    <>
     
    <div className='relative'>

    
   
    <section className='mt-20 pb-0 md:pb-36 flex flex-col md:flex-row items-center justify-between gap-5 max-w-7xl mx-auto px-3'>
   
     
     <div className='flex flex-col gap-6 items-center md:items-start text-center lg:text-left relative'>
       <div className='flex items-center gap-2'>
         <h1 className='text-4xl font-extrabold'>Hi There!</h1>
         <img className='hand h-[40px] w-[40px]' src="./Images/hi.png" alt="" />
       </div>

       <div>
       <h1 className='text-4xl font-extrabold'>I am <span className='text-red-500'>Abdullah Shahed</span></h1>
       </div>
       
       <Typewriter
         textStyle={{
           color: "#ef4444",
           fontWeight: "bold",
           fontSize: "24px",
         }}
         startDelay={20}
         cursorColor="#ef4444"
         multiText={[
           "Frontend Developer",
           "Backend Developer",
           "Web Designer",
         ]}
         multiTextDelay={1500}
         typeSpeed={60}
         multiTextLoop={true} // Enables seamless looping without resetting
       />

       <p className='w-full md:w-[350px] lg:w-[550px]'>
                I am eager to
          associate with an organization that provides a challenging work environment. My long-term career goal is to
          prove my excellence at every step. I am highly efficient and passionate about learning new concepts, ideas, and
          techniques, striving to reach new heights in my career with proven expertise.
      </p>
       
       <div className='flex items-center gap-3'>
        
         <a href="https://www.facebook.com/profile.php?id=100094014247740&mibextid=ZbWKwL" target='_blank'><FaFacebookF className='hover:bg-red-500 text-red-500 border-[2px] h-[40px] w-[40px] rounded-full border-red-500 duration-500 p-[9px] hover:text-white' /></a>  
           
         <a href="https://linkedin.com/in/abdullahshahed24/" target='_blank'><FaLinkedinIn className='hover:bg-red-500 text-red-500 border-[2px] h-[40px] w-[40px] rounded-full border-red-500 duration-500 p-[9px] hover:text-white' /></a>
         <a href="mailto:shahed32156@gmail.com" target='_blank'><MdEmail className='hover:bg-red-500 text-red-500 border-[2px] h-[40px] w-[40px] rounded-full border-red-500 duration-500 p-[9px] hover:text-white' /></a>
         <a href="https://wa.me/8801741987566?text=Hello%20there!%20I%20would%20like%20to%20contact%20you." target="_blank" rel="noopener noreferrer"><FaWhatsapp className='hover:bg-red-500 text-red-500 border-[2px] h-[40px] w-[40px] rounded-full border-red-500 duration-500 p-[9px] hover:text-white' /></a>
         <a href="https://github.com/shahed32156" target='_blank'><FaGithub className='hover:bg-red-500 text-red-500 border-[2px] h-[40px] w-[40px] rounded-full border-red-500 duration-500 p-[9px] hover:text-white' /></a>
         
       </div>

       <div className='flex items-center gap-4'>
         <div className='relative c-btn'>
           <a href="mailto:shahed32156@gmail.com" target='_blank' className='text-red-500 border-[2px] border-red-500 duration-700 h-[45px] w-[125px] relative z-10 rounded-md text-[16px] hover:text-white font-medium flex items-center justify-center'>Hire Me</a>
           <p className='bg-red-500 rounded-md duration-700 h-[45px] w-0 absolute left-0 top-0 c-btn-part'></p>
         </div>
         <div className='relative c-btn'>
           <a href="./Images/Abdullah Shahed (Resume).pdf" download="Abdullah Shahed (CV)" target="_blank" className='text-red-500  border-[2px] border-red-500 duration-700 h-[45px] w-[125px] relative z-10 rounded-md text-[16px] hover:text-white font-medium flex justify-center items-center'>Download CV</a>
           <p className='bg-red-500 rounded-md duration-700 h-[45px] w-0 absolute left-0 top-0 c-btn-part'></p>
         </div>
       </div>
     </div> 

     <div className='border-[6px] border-red-500 rounded-full p-4 relative'>
       <img className='h-[250px] w-[250px] lg:h-[350px] lg:w-[350px] xl:h-[400px] xl:w-[400px] rounded-full' src="./Images/Shahed.jpg" alt="Profile of Abdullah Shahed" />
     </div>
     <Particle />
   </section>


  
    </div>

      
    </>
  )
}

export default Carousel;
