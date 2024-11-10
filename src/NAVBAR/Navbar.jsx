import React, { useEffect, useState } from 'react';
import { FaBars, FaLessThan, FaTimes } from 'react-icons/fa';
import { FaGreaterThan } from 'react-icons/fa';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isFixed, setIsFixed] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsFixed(true);
            } else {
                setIsFixed(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`w-full z-50 top-0 left-0 duration-500 ${isFixed ? 'fixed bg-white shadow-lg duration-500' : ''}`}>
            <div className="mx-auto max-w-7xl px-3">
                <div className="flex items-center justify-between py-5 mx-3 md:mx-0">
                    <div className="flex items-center justify-center gap-2">

                        <FaLessThan className='text-red-500 font-extrabold'/>
                        <span className='text-2xl text-red-500 font-extrabold'>A.</span> 
                        <span className='text-2xl  font-extrabold'>Shahed</span>
                        <FaGreaterThan className=' font-extrabold text-yellow-300' />
                                 
                    </div>
                    <div className="act-links hidden lg:flex items-center justify-center gap-8">
                        <a href='#' className="text-[16px] font-medium relative hover:text-red-500 duration-500 before:content-[''] before:absolute before:left-0 before:-bottom-1 before:h-[3px] before:w-full before:bg-red-500 before:scale-x-0 before:origin-left before:transition-transform before:duration-500 hover:before:scale-x-100">Home</a>
                        <a href='#about' className="text-[16px] font-medium relative hover:text-red-500 duration-500 before:content-[''] before:absolute before:left-0 before:-bottom-1 before:h-[3px] before:w-full before:bg-red-500 before:scale-x-0 before:origin-left before:transition-transform before:duration-500 hover:before:scale-x-100">About</a>
                        <a href='#education' className="text-[16px] font-medium relative hover:text-red-500 duration-500 before:content-[''] before:absolute before:left-0 before:-bottom-1 before:h-[3px] before:w-full before:bg-red-500 before:scale-x-0 before:origin-left before:transition-transform before:duration-500 hover:before:scale-x-100">Education</a>
                        <a href='#experience' className="text-[16px] font-medium relative hover:text-red-500 duration-500 before:content-[''] before:absolute before:left-0 before:-bottom-1 before:h-[3px] before:w-full before:bg-red-500 before:scale-x-0 before:origin-left before:transition-transform before:duration-500 hover:before:scale-x-100">Experience</a>
                        <a href='#skills' className="text-[16px] font-medium relative hover:text-red-500 duration-500 before:content-[''] before:absolute before:left-0 before:-bottom-1 before:h-[3px] before:w-full before:bg-red-500 before:scale-x-0 before:origin-left before:transition-transform before:duration-500 hover:before:scale-x-100">Skills</a>
                        <a href='#projects' className="text-[16px] font-medium relative hover:text-red-500 duration-500 before:content-[''] before:absolute before:left-0 before:-bottom-1 before:h-[3px] before:w-full before:bg-red-500 before:scale-x-0 before:origin-left before:transition-transform before:duration-500 hover:before:scale-x-100">Projects</a>
                        <a href='#contact' className="text-[16px] font-medium relative hover:text-red-500 duration-500 before:content-[''] before:absolute before:left-0 before:-bottom-1 before:h-[3px] before:w-full before:bg-red-500 before:scale-x-0 before:origin-left before:transition-transform before:duration-500 hover:before:scale-x-100">Contact</a>

                        
                    </div>
                    <div className="lg:hidden">
                        <button onClick={toggleMenu} className="text-red-500 focus:outline-none">
                            {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
                        </button>
                    </div>
                </div>
            </div>
            {/* Mobile Menu */}
            <div className={`lg:hidden fixed top-0 left-0 w-2/3 h-full bg-white transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out z-50`}>
                <div className="act-links flex flex-col space-y-4 p-4">
                <div className="flex items-center gap-2 border-b-2 pb-1 border-black">

                        <FaLessThan className='text-red-500 font-extrabold'/>
                        <span className='text-2xl text-red-500 font-extrabold'>A. </span> 
                        <span className='text-2xl  font-extrabold'>Shahed</span>
                        <FaGreaterThan className=' font-extrabold text-yellow-300' />
         
                </div> 
                        <a href='#' className="text-[16px] font-medium relative hover:text-red-500 duration-500 before:content-[''] before:absolute before:left-0 before:-bottom-1 before:h-[3px] before:w-full before:bg-red-500 before:scale-x-0 before:origin-left before:transition-transform before:duration-500 hover:before:scale-x-100" onClick={closeMenu}>Home</a>
                        <a href='#about' className="text-[16px] font-medium relative hover:text-red-500 duration-500 before:content-[''] before:absolute before:left-0 before:-bottom-1 before:h-[3px] before:w-full before:bg-red-500 before:scale-x-0 before:origin-left before:transition-transform before:duration-500 hover:before:scale-x-100" onClick={closeMenu}>About</a>
                        <a href='#education' className="text-[16px] font-medium relative hover:text-red-500 duration-500 before:content-[''] before:absolute before:left-0 before:-bottom-1 before:h-[3px] before:w-full before:bg-red-500 before:scale-x-0 before:origin-left before:transition-transform before:duration-500 hover:before:scale-x-100" onClick={closeMenu}>Education</a>
                        <a href='#experience' className="text-[16px] font-medium relative hover:text-red-500 duration-500 before:content-[''] before:absolute before:left-0 before:-bottom-1 before:h-[3px] before:w-full before:bg-red-500 before:scale-x-0 before:origin-left before:transition-transform before:duration-500 hover:before:scale-x-100" onClick={closeMenu}>Experience</a>
                        <a href='#skills' className="text-[16px] font-medium relative hover:text-red-500 duration-500 before:content-[''] before:absolute before:left-0 before:-bottom-1 before:h-[3px] before:w-full before:bg-red-500 before:scale-x-0 before:origin-left before:transition-transform before:duration-500 hover:before:scale-x-100" onClick={closeMenu}>Skills</a>
                        <a href='#projects' className="text-[16px] font-medium relative hover:text-red-500 duration-500 before:content-[''] before:absolute before:left-0 before:-bottom-1 before:h-[3px] before:w-full before:bg-red-500 before:scale-x-0 before:origin-left before:transition-transform before:duration-500 hover:before:scale-x-100" onClick={closeMenu}>Projects</a>
                        <a href='#contact' className="text-[16px] font-medium relative hover:text-red-500 duration-500 before:content-[''] before:absolute before:left-0 before:-bottom-1 before:h-[3px] before:w-full before:bg-red-500 before:scale-x-0 before:origin-left before:transition-transform before:duration-500 hover:before:scale-x-100" onClick={closeMenu}>Contact</a>
                       
                </div>
            </div>
            {/* Overlay */}
            {isOpen && <div className="fixed inset-0 bg-black opacity-50 z-10" onClick={closeMenu}></div>}
        </nav>
    );
};

export default Navbar;
