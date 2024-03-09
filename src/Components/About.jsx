import React from 'react';
import profile from '../assets/profile.png';
import elogo from '../assets/elogo.png';
import tlogo from '../assets/tlogo.png';
import rlogo from '../assets/rlogo.png';
import alogo from '../assets/alogo.png';
import slogo from '../assets/slogo.png';
import tslogo from '../assets/tslogo.png';


const About = () => {
  return (
    <div id='About' className='max-w-[1040px] m-auto md:pl-20 pt-16 pb-0 h-screen'>
        <h1 className='text-4xl font-bold text-center text-[#001b5e]'>About Me</h1>
        
        <div className='flex items-center justify-center pt-14'>
            <img className='w-[200px]' src={profile} alt="" />
        </div>

        
        <div className='pt-12'>
          <p className='flex flex-col text-xl text-center'>
           I'm a passionate web developer with over 4 years of experience crafting engaging and user-friendly web applications.
            I leverage a diverse skillset including 
           <p className='font-bold '>
            React.js, Next.js, Tailwind CSS, Express.js, MongoDB, Vue.js, Svelte, and Astro
           </p>
             to bring your vision to life. Additionally, my proficiency in various programming languages such as 
           <p className='font-bold'>Java, JavaScript, Python,
          TypeScript, and HTML
            </p> 
          allows me to tackle complex projects effectively.
          </p>
        </div>

        <div className='flex justify-between pt-20 '>
            <img className='h-[80px]' src={elogo} alt="" />
            <img className='h-[80px]' src={tlogo} alt="" />
            <img className='h-[80px]' src={rlogo} alt="" />
            <img className='h-[80px]' src={alogo} alt="" /> 
            <img className='h-[80px]' src={tslogo} alt="" />
            <img className='h-[80px]' src={slogo} alt="" />
            
        </div>

       
      
    </div>
  )
}

export default About
