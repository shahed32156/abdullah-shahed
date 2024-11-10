import React from 'react';



const Skills = () => (
  
  <>
  
    <header className='bg-gray-100 py-14 pt-10 relative'>


    <div className='flex flex-col justify-center gap-3'>
      <h2 className=" text-black text-center font-serif text-4xl font-bold"> My <span className="text-red-500 text-4xl font-serif font-bold">Skills</span></h2>
      <p className='text-center mx-3'>I am a Full-stack developer with expertise in web development</p>
    </div>

    <section className='mt-10 flex flex-col md:flex-row justify-between gap-5 max-w-7xl mx-auto items-center px-3'>


       <div className='flex flex-col gap-2'>

            <h3 className='text-lg font-bold'>My Skills</h3>
            <p className='text-[17px] text-justify w-full md:w-[350px] lg:w-[550px]'>I started my journey in web development with a passion for creating intuitive and scalable applications. With proficiency in the Full-stack (React, Next and PHP), I have built projects such as a full-stack Food ordering website, Google Classroom Website, E-commerce Website, and many frontend development and landing page projects. My projects demonstrate my ability to integrate powerful backend solutions with sleek, user-friendly fontend designs.</p>
    

       </div>


      {/* Skills card start */}


         <div className='border border-red-200 py-10 px-6 w-full lg:w-[550px] xl:w-[600px] rounded-lg shadow-lg shadow-red-300'>

            <p className='text-red-500 font-bold text-xl text-center'>Skills & Expertise</p>
          
            <div className='flex items-center justify-center flex-wrap gap-4 mt-5'>

              <div className='relative skills-anim flex items-center gap-1 px-2 py-1 shadow-lg shadow-red-300 border-2 border-red-300 rounded-[4px]'>
                <img className='h-[30px] w-[30px]' src="./Images/html.png" alt="" />
                <div>
                  <p className='font-medium'>HTML</p>
                </div>
                <div className='skills-anim-part rounded bg-white py-4 px-5 absolute -top-20 -left-4 border border-red-300'>
                    <p className='font-medium'>90%</p>
                    <div className='h-[10px] w-[100px] bg-gray-300 rounded-full'>
                      <div className='h-[10px] w-[90px] bg-red-500 rounded-full'></div>
                    </div>
                </div>
              </div>
              <div className='relative skills-anim flex items-center gap-1 px-2 py-1 shadow-lg shadow-red-300 border-2 border-red-300 rounded-[4px]'>
                <img className='h-[30px] w-[30px]' src="./Images/css.png" alt="" />
                <div>
                  <p className='font-medium'>CSS</p>
                </div>
                <div className='skills-anim-part rounded bg-white py-4 px-5 absolute -top-20 -left-4 border border-red-300'>
                    <p className='font-medium'>80%</p>
                    <div className='h-[10px] w-[100px] bg-gray-300 rounded-full'>
                      <div className='h-[10px] w-[80px] bg-red-500 rounded-full'></div>
                    </div>
                </div>
              </div>
              <div className='relative skills-anim flex items-center gap-2 px-2 py-1 shadow-lg shadow-red-300 border-2 border-red-300 rounded-[4px]'>
                <img className='h-[30px] w-[30px]' src="./Images/js.png" alt="" />
                <div>
                  <p className='font-medium'>JavaScript</p>
                </div>
                <div className='skills-anim-part rounded bg-white py-4 px-5 absolute -top-20 -left-4 border border-red-300'>
                    <p className='font-medium'>65%</p>
                    <div className='h-[10px] w-[100px] bg-gray-300 rounded-full'>
                      <div className='h-[10px] w-[65px] bg-red-500 rounded-full'></div>
                    </div>
                </div>
              </div>
              <div className='relative skills-anim flex items-center gap-2 px-2 py-1 shadow-lg shadow-red-300 border-2 border-red-300 rounded-[4px]'>
                <img className='h-[30px] w-[30px]' src="./Images/react.png" alt="" />
                <div>
                  <p className='font-medium'>React</p>
                </div>
                <div className='skills-anim-part rounded bg-white py-4 px-5 absolute -top-20 -left-4 border border-red-300'>
                    <p className='font-medium'>55%</p>
                    <div className='h-[10px] w-[100px] bg-gray-300 rounded-full'>
                      <div className='h-[10px] w-[55px] bg-red-500 rounded-full'></div>
                    </div>
                </div>
              </div>

              <div className='relative skills-anim flex items-center gap-1 px-2 py-1 shadow-lg shadow-red-300 border-2 border-red-300 rounded-[4px]'>
                <img className='h-[30px] w-[35px]' src="./Images/bootstrap.svg" alt="" />
                <div>
                  <p className='font-medium'>Bootstrap</p>
                </div>
                <div className='skills-anim-part rounded bg-white py-4 px-5 absolute -top-20 -left-4 border border-red-300'>
                    <p className='font-medium'>70%</p>
                    <div className='h-[10px] w-[100px] bg-gray-300 rounded-full'>
                      <div className='h-[10px] w-[70px] bg-red-500 rounded-full'></div>
                    </div>
                </div>
              </div>
              <div className='relative skills-anim flex items-center gap-1 px-2 py-1 shadow-lg shadow-red-300 border-2 border-red-300 rounded-[4px]'>
                <img className='h-[30px] w-[40px]' src="./Images/tailwind.png" alt="" />
                <div>
                  <p className='font-medium'>Tailwind</p>
                </div>
                <div className='skills-anim-part rounded bg-white py-4 px-5 absolute -top-20 -left-4 border border-red-300'>
                    <p className='font-medium'>83%</p>
                    <div className='h-[10px] w-[100px] bg-gray-300 rounded-full'>
                      <div className='h-[10px] w-[83px] bg-red-500 rounded-full'></div>
                    </div>
                </div>
              </div>
              <div className='relative skills-anim flex items-center gap-2 px-2 py-1 shadow-lg shadow-red-300 border-2 border-red-300 rounded-[4px]'>
                <img className='h-[30px] w-[30px]' src="./Images/next.png" alt="" />
                <div>
                  <p className='font-medium'>Next</p>
                </div>
                <div className='skills-anim-part rounded bg-white py-4 px-5 absolute -top-20 -left-4 border border-red-300'>
                    <p className='font-medium'>30%</p>
                    <div className='h-[10px] w-[100px] bg-gray-300 rounded-full'>
                      <div className='h-[10px] w-[30px] bg-red-500 rounded-full'></div>
                    </div>
                </div>
              </div>
              <div className='relative skills-anim flex items-center gap-2 px-2 py-1 shadow-lg shadow-red-300 border-2 border-red-300 rounded-[4px]'>
                <img className='h-[30px] w-[30px]' src="./Images/php.png" alt="" />
                <div>
                  <p className='font-medium'>PHP</p>
                </div>
                <div className='skills-anim-part rounded bg-white py-4 px-5 absolute -top-20 -left-4 border border-red-300'>
                    <p className='font-medium'>68%</p>
                    <div className='h-[10px] w-[100px] bg-gray-300 rounded-full'>
                      <div className='h-[10px] w-[68px] bg-red-500 rounded-full'></div>
                    </div>
                </div>
              </div>
              <div className='relative skills-anim flex items-center gap-2 px-2 py-1 shadow-lg shadow-red-300 border-2 border-red-300 rounded-[4px]'>
                <img className='h-[30px] w-[30px]' src="./Images/mysql.png" alt="" />
                <div>
                  <p className='font-medium'>MySQL</p>
                </div>
                <div className='skills-anim-part rounded bg-white py-4 px-5 absolute -top-20 -left-4 border border-red-300'>
                    <p className='font-medium'>70%</p>
                    <div className='h-[10px] w-[100px] bg-gray-300 rounded-full'>
                      <div className='h-[10px] w-[70px] bg-red-500 rounded-full'></div>
                    </div>
                </div>
              </div>
              <div className='relative skills-anim flex items-center gap-1 px-2 py-1 shadow-lg shadow-red-300 border-2 border-red-300 rounded-[4px]'>
                <img className='h-[30px] w-[30px]' src="./Images/c.png" alt="" />
                <div>
                  <p className='font-medium'>C</p>
                </div>
                <div className='skills-anim-part rounded bg-white py-4 px-5 absolute -top-20 -left-4 border border-red-300'>
                    <p className='font-medium'>55%</p>
                    <div className='h-[10px] w-[100px] bg-gray-300 rounded-full'>
                      <div className='h-[10px] w-[55px] bg-red-500 rounded-full'></div>
                    </div>
                </div>
              </div>
              <div className='relative skills-anim flex items-center gap-1 px-2 py-1 shadow-lg shadow-red-300 border-2 border-red-300 rounded-[4px]'>
                <img className='h-[30px] w-[35px]' src="./Images/java.png" alt="" />
                <div>
                  <p className='font-medium'>Java</p>
                </div>
                <div className='skills-anim-part rounded bg-white py-4 px-5 absolute -top-20 -left-4 border border-red-300'>
                    <p className='font-medium'>45%</p>
                    <div className='h-[10px] w-[100px] bg-gray-300 rounded-full'>
                      <div className='h-[10px] w-[45px] bg-red-500 rounded-full'></div>
                    </div>
                </div>
              </div>
              
            </div>

            

         </div>


      {/* Skills card end */}


    </section>




    </header>
  
  </>
);

export default Skills;
