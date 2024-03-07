import React from 'react';
import mountain2 from '../assets/mountain2.jpg';
import { TypeAnimation } from 'react-type-animation';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Main = () => {
  return (
    <div id='main'>
        <img className='w-full h-screen object-cover ' src={mountain2} alt='' />
        <div className='w-full h-screen absolute top-0 left-0 bg-white/25 '>
        <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center '>
            <h1 className='sm:text-5xl text-4xl font-bold text-gray-800 '>I'm sasheed panapitiya</h1>
            <h2 className='flex sm:text-3xl text-2xl pt-4 text-gray-800 '>
                I'm a   
            <TypeAnimation
              sequence={[
               // Same substring at the start will only be typed out once, initially
                 ' web developer',
                  1000, // wait 1s before replacing "Mice" with "Hamsters"
                 'coder',
                  1000,
                  'tech enthusiast',
                   1000,
                   'fast laerner',
                    1000
                    ]}
                     wrapper="span"
                    speed={50}
                    style={{ fontSize: '1em', display: 'inline-block', paddingLeft:'5px' }}
                    repeat={Infinity}
                    />
            </h2>
            <div className='flex justify-between pt-6 max-w-[200px] w-full '>
             <FaFacebook  size={20} className='cursor-pointer'/>
             <FaInstagram size={20} className='cursor-pointer' />
             <FaTwitter size={20} className='cursor-pointer' />
             <FaLinkedinIn size={20} className='cursor-pointer' />

            </div>
        </div>

        </div>
      
    </div>
  )
}

export default Main
