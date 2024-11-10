
import React from "react";

import Lottie from "lottie-react";
import Animation from "./Animation.json";

const Education = () => {
  const educationData = [
    {
      year: "2020 - 2024",
      degree: "BSC - Green University of Bangladesh",
      description: "I completed my BSc in Computer Science and Engineering from Green University of Bangladesh in 2024, achieving a CGPA of 3.70.",
    },
    {
      year: "2017 - 2019",
      degree: "HSC - Vashantek Govt. College",
      description: "I completed my HSC in Science Group from Vashantek Government College in 2019, achieving a GPA of 4.78.",
    },
    {
      year: "2015 - 2017",
      degree: "SSC - Secondary School Cirtificate",
      description: "I completed my SSC in Science Group from Uttar Kafrul High School in 2017, achieving a GPA of 5.00.",
    },
  ];

  return (
    <>
    
    <header className="relative pt-20 bg-white">


    <div class="flex flex-col justify-center gap-3 relative">

<h1 class="text-4xl text-center text-black font-serif font-bold">My <span className='text-red-500'>Journey</span></h1>
<p className="text-center mx-3">Here are my brief educational journeys</p>
</div>

<div className="relative flex flex-col md:flex-row gap-3 items-center justify-between max-w-7xl mx-auto px-3">
<div className=" text-black mt-10">
<h2 className="text-xl font-bold mb-6">Educational Qualifications</h2>
<div className="space-y-6">
{educationData.map((item, index) => (
<div key={index} className="flex items-start space-x-4">

<div className="edu relative">
<div className="border border-red-500 rounded-md p-4 w-full md:w-[400px] lg:w-[500px] xl:w-[650px] 2xl:w-[650px] relative z-10">

  <p className="text-sm font-extrabold">{item.year}</p>
  <h3 className="text-lg font-semibold">{item.degree}</h3>
  <p className="text-sm mt-2">{item.description}</p>
 
</div>

</div>

</div>





))}


</div>
</div>

{/* <div>
<img className="p-6 sm:p-3 md:p-0" src="./Images/graduation.png" alt="" />
</div>  */}

<Lottie className='h-[450px]' animationData={Animation} loop={true} />

</div>  


    </header>
    </>
  );
};

export default Education;
