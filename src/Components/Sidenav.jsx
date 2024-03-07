import React, { useState } from 'react';
import { IoMenu } from "react-icons/io5";
import { AiOutlineHome } from "react-icons/ai";
import { GrProjects } from "react-icons/gr";
import { AiOutlineProject } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

const Sidenav = () => {
  const [isOpen, setIsOpen] = useState(false); // Use a more descriptive name

  const toggleSidenav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="sidenav ">
      <IoMenu onClick={toggleSidenav} className="menu-icon absolute top-4 right-4 z-[99] md:hidden" />
      {isOpen && (
        <div className="sidenav-content fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20 md:hidden">
          <a
            href="#Home"
            className="sidenav-item w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineHome size={20} />
            <span className="pl-4">Home</span>
          </a>

          <a
            href="#work"
            className="sidenav-item w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <GrProjects size={20} />
            <span className="pl-4">Work</span>
          </a>

          <a
            href="#projects"
            className="sidenav-item w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineProject size={20} />
            <span className="pl-4">Projects</span>
          </a>

          <a
            href="#resume"
            className="sidenav-item w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <BsPerson size={20} />
            <span className="pl-4">Resume</span>
          </a>

          <a
            href="#contacts"
            className="sidenav-item w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineMail size={20} />
            <span className="pl-4">Contact</span>
          </a>
          {/* Add more sidenav items here */}
        </div>
      )
      }


      <div className='md:block hidden top-[25%] z-10 fixed'>
        <div className='flex flex-col '>
          <a href='#Home'  className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300 '>
            <AiOutlineHome size={20} />
          </a>

          <a href='#Work'  className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300 '>
            <GrProjects size={20} />
          </a>

          <a href='#projects'  className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300 '>
            <AiOutlineProject size={20} />
          </a>

          <a href='#resume'  className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300 '>
            <BsPerson size={20} />
          </a>

          <a href='#contacts'  className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300 '>
            <AiOutlineMail  size={20} />
          </a>

        </div>
       


      </div>
    </div>
  );
};

export default Sidenav;
