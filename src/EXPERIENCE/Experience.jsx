import React from 'react'

import Lottie from "lottie-react";
import Animation from "./Animation.json";

const Experience = () => {
  return (
    <>
    
    <header className='relative bg-white md:pt-20'>


    <div className='flex flex-col justify-center gap-3'>
      <h2 className=" text-black text-center font-serif text-4xl font-bold"> Professional <span className="text-red-500 text-4xl font-serif font-bold">Experience</span></h2>
      <p className='text-center mx-3'>I have Completed my 3 months internship at NextTech Limited Bangladesh</p>
    </div>

    <div className=' text-black px-3 max-w-7xl mx-auto flex flex-col gap-3 md:flex-row justify-between items-center'>

            <div className='flex gap-5 flex-col'>

                    <div className='mt-5'>
                    
                        <img className='h-[50px] w-[60px]' src="./Images/nexttech.jpg" alt="" />

                    </div>
                    

                    <div className='flex flex-col gap-2'>

                        <p className='text-[20px] font-bold text-justify md:w-[400px] lg:w-[480px] xl:w-[700px]'> Jr. Web Developer</p>
                        <p className='text-[17px] text-justify md:w-[400px] lg:w-[480px] xl:w-[700px] font-medium'> NextTech Limited Bangladesh</p>
                        <p className='text-[17px] text-justify md:w-[400px] lg:w-[480px] xl:w-[700px]'>Nov 2023 - Jan 2024</p>
                        
                        <div className='flex items-center gap-2 text-white text-[14px] font-semibold mt-2'>
                     
                        <p className='bg-[#049dc8] py-1 px-4 rounded'>React.js</p>
                        <p className='bg-[tomato] py-1 px-4 rounded'>Tailwind</p>
                        <p className='bg-[#ba0985] py-1 px-4 rounded'>PHP</p>

                        </div>

                    </div>

                    <div className='text-[17px] text-justify md:w-[400px] lg:w-[480px] xl:w-[700px]'>

                      <p>I work as a web developer, specializing in creating responsive websites that provide exceptional user experiences. I utilize React.js, Tailwind CSS, and PHP to develop functional and visually appealing web applications. My focus is on ensuring that the websites I build meet the specific needs and expectations of my clients.</p>
                    
                    </div>

                    


            </div>

{/* <div>

   <img className='w-full md:h-[250px] md:w-[350px] lg:h-[260px] lg:w-[360px] xl:h-[320px] xl:w-[420px]' src="./Images/experience.png" alt="" />

</div> */}

<Lottie className='p-6 md:p-0 md:h-[450px] md:w-[450px]' animationData={Animation} loop={true} />

</div>



    </header>
    
    </>
  )
}

export default Experience
