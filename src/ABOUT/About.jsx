import React, { useState } from 'react'

const About = () => {

  const [toggle, setToggle] = useState(false);

  return (
    <>
    
    <header className='bg-gray-100 mt-10 py-10 relative'>


    <div>

        <h1 className="text-4xl text-center text-black font-serif font-bold">About <span className='text-red-500'>Myself</span></h1>

    </div>

<div className='mt-10 border-[2px] border-red-500 rounded-full w-[150px] mx-auto'>


<img className='rounded-full h-[150px] w-[150px] mx-auto p-1' src="./Images/Shahed.jpg" alt="" />


</div>

<div className='mt-6 max-w-7xl mx-auto px-3'>

<div className='flex flex-col gap-4 mx-4 md:mx-0'>

    <p className='text-black text-[17px] text-justify'>

My name is Abdullah Shahed from Bangladesh. I have completed my graduation at Green university of Bangladesh with BSc in CSE. I am passionate Web Developer with experience in building modern and responsive websites. I specialize in Front-end development as well as Back-end development. I have also Web Designer (UI/UX Designer). I have developed 20+ projects. I am a punctual, dedicated on my work, Obey rule, Enthusiastic , Career minded and open minded, capable of solving comprehensive problems, talkative and having good communication skills.
{

toggle && <span> To be associated with an organization which provides challenging work environmental and proving my excellence at every step is my long term career goal. Highly efficient and passionate for learning new concept, ideas, techniques. To reach the heights in my career with proven expertise.</span>

}  

</p>

<div className='c-btn relative w-[125px]'>
<button onClick={() => setToggle(!toggle)} className="text-red-500 border-[2px] relative z-10 border-red-500 duration-700 h-[45px] w-[125px] rounded-md text-[16px] hover:text-white font-medium">
{
  toggle ? "Read Less" : "Read More"
}

</button>
<p className='bg-red-500 rounded-md duration-700 h-[45px] w-0 absolute left-0 top-0 c-btn-part'></p>
</div>


</div>

</div> 


    </header>

    </>
  )
}

export default About
