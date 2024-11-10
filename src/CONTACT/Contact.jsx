import React, { useState, useRef } from 'react'

import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import emailjs from '@emailjs/browser'
import Swal from'sweetalert2';
import Lottie from "lottie-react";
import Animation from "./Animation.json";

const Contact = () => {

    
const form = useRef();

const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [msg, setMsg] = useState("");


const handleName = (e) => {

    const value = e.target.value;
    const regex = /^[a-zA-Z\s]*$/;

    if (regex.test(value)) {
      setName(value);
    } else {
      Swal.fire({
        title: "Error",
        text: "Invalid name",
        icon: "error"
      });
    }

    console.log(value);

}

const handleEmail = (e) => {

    setEmail(e.target.value);

}

const handleMsg = (e) => {

    setMsg(e.target.value);

}

const handleSubmit = (e) => {
    e.preventDefault();
    
    if (name.length <= 3) {
        Swal.fire({
            title: "Error",
            text: "Name must be more than 3 characters",
            icon: "error"
        });
        return;
    }

    Swal.fire({
        title: "Success",
        text: "Successfully sent",
        icon: "success"
    });

    emailjs.sendForm('service_rtixv6y', 'template_qa4ablj', form.current, {
        publicKey: 'wG2TB6JzfeU6u3ZPq',
    })
    .then(
        () => {
            console.log('SUCCESS!');
        },
        (error) => {
            console.log('FAILED...', error.text);
        }
    );
}

const handleReset = () => {
    setName("");
    setEmail("");
    setMsg(""); 
}

  return (
    
      <>
      
     <header className='py-16 bg-white relative'>


     <div className='flex flex-col justify-center gap-3'>
            <h2 className="text-center text-4xl font-bold text-red-500 font-serif"> Contact <span className='text-black'>Me</span></h2>
            <p className='text-center'>Feel free to contact with me!</p>
      </div>

      <div className='flex flex-col gap-3 md:flex-row items-center justify-between max-w-7xl mx-auto mt-10 px-3'>

          <div className='flex flex-col gap-3'> 
            <p className='text-2xl font-semibold text-center md:text-start'>Get in touch</p>
            <p className=' text-center md:text-start'>I'm always open to new opportunities and collaborations. Feel free to reach out!</p>
            
            <div className='flex justify-center md:justify-start items-center gap-3'>
        
            <a href="https://www.facebook.com/profile.php?id=100094014247740&mibextid=ZbWKwL" target='_blank'><FaFacebookF className='hover:bg-red-500 text-red-500 border-[2px] h-[40px] w-[40px] rounded-full border-red-500 duration-500 p-[9px] hover:text-white' /></a>  
           
         <a href="https://linkedin.com/in/abdullahshahed24/" target='_blank'><FaLinkedinIn className='hover:bg-red-500 text-red-500 border-[2px] h-[40px] w-[40px] rounded-full border-red-500 duration-500 p-[9px] hover:text-white' /></a>
         <a href="mailto:shahed32156@gmail.com" target='_blank'><MdEmail className='hover:bg-red-500 text-red-500 border-[2px] h-[40px] w-[40px] rounded-full border-red-500 duration-500 p-[9px] hover:text-white' /></a>
         <a href="https://wa.me/8801741987566?text=Hello%20there!%20I%20would%20like%20to%20contact%20you." target="_blank" rel="noopener noreferrer"><FaWhatsapp className='hover:bg-red-500 text-red-500 border-[2px] h-[40px] w-[40px] rounded-full border-red-500 duration-500 p-[9px] hover:text-white' /></a>
         <a href="https://github.com/shahed32156" target='_blank'><FaGithub className='hover:bg-red-500 text-red-500 border-[2px] h-[40px] w-[40px] rounded-full border-red-500 duration-500 p-[9px] hover:text-white' /></a>
           </div>
           <Lottie className='h-[450px]' animationData={Animation} loop={true} />
          </div>

            <form ref={form} onSubmit={handleSubmit} action="" className='text-black bg-white shadow-[0_0.124em_1.000em_#ef4444] rounded-lg py-5 flex flex-col gap-4  w-full lg:w-[550px] xl:w-[600px]'>

                  <div>
                    <h3 className='text-center font-semibold text-2xl'>Feel up this form</h3>
                  </div>
                  <div className='flex flex-col gap-2 mx-3 sm:mx-5 lg:mx-10 xl:mx-14 justify-center'>

                        <div className=''>
                            <label className='font-semibold' htmlFor="">Name <span className='text-[red]'>*</span></label>
                        </div>
                        
                        <div>

                            <input className='h-[45px] w-full text-black pl-2
                            focus:outline-none bg-white duration-500 border-[2px] rounded' placeholder='Enter your name' required 
                            type="text" name="name" id="" onChange={handleName} value={name} />
                        
                        </div>

                  </div>

                  <div className='flex flex-col gap-2 mx-3 sm:mx-5 lg:mx-10 xl:mx-14 justify-center'>

                        <div className=''>
                            <label className='font-semibold' htmlFor="">Email <span className='text-[red]'>*</span></label>
                        </div>
                        
                        <div>

                            <input className='h-[45px] w-full text-black pl-2 
                            focus:outline-none  bg-white duration-500 border-[2px] rounded' placeholder='Enter your email' required
                            type="email" name="email" id="" onChange={handleEmail} value={email} />
                        
                        </div>

                  </div>

                  <div className='flex flex-col gap-2 mx-3 sm:mx-5 lg:mx-10 xl:mx-14 justify-center'>

                        <div className=''>
                            <label className='font-semibold' htmlFor="">Message <span className='text-[red]'>*</span></label>
                        </div>
                        
                        <div>

                             
                            <textarea className='h-[130px] w-full text-black pl-2 
                            focus:outline-none bg-white duration-500 border-[2px] pt-2 rounded' placeholder='Type your message' required
                            type="text" name="message" id="" onChange={handleMsg} value={msg}> </textarea>
                        
                        </div>

                  </div>

                  <div className='flex gap-4 justify-center items-center mt-3'>

                  <div className='relative c-btn'>
                        <button className='text-red-500 border-[2px] border-red-500 duration-700 h-[45px] w-[125px] relative z-10 rounded-md text-[16px] hover:text-white font-medium'>Send</button>
                        <p className='bg-red-500 rounded-md duration-700 h-[45px] w-0 absolute left-0 top-0 c-btn-part'></p>
                  </div>

                  <div className='relative c-btn'>
                        <p className='text-red-500 border-[2px] border-red-500 duration-700 h-[45px] w-[125px] relative z-10 rounded-md text-[16px] hover:text-white font-medium cursor-pointer flex items-center justify-center' onClick={handleReset}>Reset</p>
                        <p className='bg-red-500 rounded-md duration-700 h-[45px] w-0 absolute left-0 top-0 c-btn-part'></p>
                  </div>
                        

                  </div>

            </form>

      </div>


     </header>
      
      </>

  )
}

export default Contact
