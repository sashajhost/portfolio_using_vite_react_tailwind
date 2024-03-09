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
        <img className='object-cover w-full h-screen ' src={mountain2} alt='' />
        <div className='absolute top-0 left-0 w-full h-screen bg-white/25 '>
        <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center '>
            <h1 className='text-4xl font-bold text-center text-gray-800 sm:text-5xl'>I'm sasheed panapitiya</h1>
            <h2 className='flex pt-4 text-xl text-gray-800 sm:text-3xl '>
                I'm a   
            <TypeAnimation
              sequence={[
               // Same substring at the start will only be typed out once, initially
                 ' full stack web developer',
                  1000, // wait 1s before replacing "Mice" with "Hamsters"
                 'coder',
                  1000,
                  'tech enthusiast',
                   1000,
                   'fast learner',
                    1000
                    ]}
                     wrapper="span"
                    speed={50}
                    style={{ fontSize: '1em', display: 'inline-block', paddingLeft:'5px' }}
                    repeat={Infinity}
                    />
            </h2>
            <div className='flex justify-between pt-6 max-w-[200px] w-full '>
              <a p-2 href='https://www.facebook.com/sasheed.mandushanka/'><FaFacebook  size={20} className='cursor-pointer'/></a>
              <a p-2 href='https://www.instagram.com/sasheedmandushanka/'><FaInstagram size={20} className='cursor-pointer' /></a>
              <a p-2 href='https://twitter.com/MandushankaP'><FaTwitter size={20} className='cursor-pointer' /></a>
              <a p-2 href='https://www.linkedin.com/in/sasheed-panapitiya-994a06245/'><FaLinkedinIn size={20} className='cursor-pointer' /></a>

            </div>
        </div>

        </div>
      
    </div>
  )
}

export default Main
