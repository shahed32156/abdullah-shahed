import React, { useState } from 'react';

const Projects = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const projects = [
    { id: 1, title: 'Travel Agency', image: './Images/p1.png', github: "https://github.com/shahed32156/travel-website", LivePreviewText: "Live Preview", LivePreviewLink: "https://travel-website-amber.vercel.app/", target: "_blank" },
    { id: 2, title: 'Online Phone Shop', image: './Images/p2.png', github: "https://github.com/shahed32156/phone-shop", LivePreviewText: "Live Preview", LivePreviewLink: "https://phone-shop-all.vercel.app/", target: "_blank" },
    { id: 3, title: 'Flight Booking Website', image: './Images/p3.png', github: "https://github.com/shahed32156/flight-booking-website", LivePreviewText: "Live Preview", LivePreviewLink: "https://flight-booking-website-three.vercel.app/", target: "_blank" },
    { id: 4, title: 'E-commerce Website', image: './Images/p4.png', github: "https://github.com/shahed32156/ecommerce-website", LivePreviewText: "N/A" },
    { id: 5, title: 'Google Classroom', image: './Images/p5.png', github: "https://github.com/shahed32156/google_classroom_website", LivePreviewText: "N/A" },
    { id: 6, title: 'Food Delivery Website', image: './Images/p6.png', github: "https://github.com/shahed32156/PROMIXCO-Task-2-Home-page-", LivePreviewText: "Live Preview", LivePreviewLink: "https://promixco-task-2-home-page.vercel.app/", target: "_blank" },
    { id: 7, title: 'Burger Web', image: './Images/p7.png', github: "https://github.com/shahed32156/Burger-web", LivePreviewText: "Live Preview", LivePreviewLink: "https://burger-web-tau.vercel.app/", target: "_blank" },
    { id: 8, title: 'Nike Shoes Store', image: './Images/p8.png', github: "https://github.com/shahed32156/nike-shoes-store", LivePreviewText: "Live Preview", LivePreviewLink: "https://nike-shoes-store-one.vercel.app/", target: "_blank" },
    { id: 9, title: 'Music Website', image: './Images/p9.png', github: "https://github.com/shahed32156/Music-website", LivePreviewText: "Live Preview", LivePreviewLink: "https://music-website-seven-taupe.vercel.app/", target: "_blank" }
  ];

  const totalPages = Math.ceil(projects.length / itemsPerPage);

  const handleClick = (page) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const selectedProjects = projects.slice(startIndex, startIndex + itemsPerPage);

  return (
    <>
      <div className="holder py-14 bg-gray-700 text-white relative">
        <div className="container">
          <div className='flex flex-col justify-center gap-3'>
            <h2 className="text-white text-center font-serif text-4xl font-bold">My <span className="text-red-500">Projects</span></h2>
            <p className='text-center mx-3'>Here are some of my project's Github Links and Live Previews</p>
          </div>

          <div className="pagination mt-10 flex justify-center gap-4">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index + 1}
                onClick={() => handleClick(index + 1)}
                className={`py-2 px-4 border-2 border-red-500 font-bold rounded-full ${currentPage === index + 1 ? 'bg-white text-black border-white' : 'text-white'}`}
              >
                {index + 1}
              </button>
            ))}
          </div>

          <div className="scroll-list grid grid-cols-1 mt-10 gap-10 sm:grid-cols-2 md:grid-cols-3">
            {selectedProjects.map((project) => (
              <div
                key={project.id}
                style={{ backgroundImage: `url(${project.image})` }}
                className="scroll-item bg-cover bg-center relative flex flex-col justify-end h-60 rounded-lg overflow-hidden"
              >
                <div className="icons bg-black bg-opacity-70 p-4 flex items-center justify-between gap-6">
                  <h1 className='text-[16px] font-extrabold'>{project.title}</h1>
                  <div className='flex flex-col items-center gap-3'>
                    {/* Live Preview Button */}
                    <a
                      className={`h-[35px] w-[120px] rounded flex justify-center items-center ${project.LivePreviewText === 'N/A' ? 'bg-gray-500 cursor-not-allowed opacity-50' : 'bg-red-500 duration-500 hover:bg-red-600'}`}
                      href={project.LivePreviewText !== 'N/A' ? project.LivePreviewLink : undefined}
                      target={project.LivePreviewText !== 'N/A' ? project.target : '_self'}
                      rel="noopener noreferrer"
                      onClick={(e) => project.LivePreviewText === 'N/A' && e.preventDefault()}
                    >
                      {project.LivePreviewText}
                    </a>
                    {/* Github Button */}
                    <a
                      className='h-[35px] w-[120px] rounded flex justify-center items-center bg-[#1e2a79] duration-500 hover:bg-[#1a235e]'
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa-brands fa-github text-white text-xl"></i>
                      <span className='ml-[6px]'>Github Link</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
