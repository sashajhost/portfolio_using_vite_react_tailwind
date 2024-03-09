import React from 'react';
import WorkItem from './WorkItem';

const data = [  
    {
        year : 2020 ,
        title : '3D Animator ' ,
        duration : ' 3 years ',
        details :
        'I make 3d animation videos on Al physics practicals in 2020. Make 3D moduls , rigging objects , video editing , dubbing are done by my own. I uploaded them to my ape physics panthiya  yautube channel',

    },

    {
        year : 2021 ,
        title : 'App Developer ' ,
        duration : ' 2 years ',
        details :
        'I built android app named physicsdays give vide lessons on physics practicals for help AL students',

    },

    {
        year : 2023 ,
        title : 'Freelancer Web Developer ' ,
        duration : ' 6 months ',
        details :
        'I started work at fiverr as freelancer web developer on september in 2023. I use react js , node js , express js , mogoDB , tailwind , netxtjs , svetle , Astro for full stack web developing.',

    },

    {
        year : 2024 ,
        title : 'CTO at Thrimana ' ,
        duration : ' 1 month ',
        details :
        'I started a company with 5 co-emplyees for develop web applications , web developing , develop AI powered bots and SEO',

    },
] 

const Work = () => {
  return (
    <div id='Work' className='max-w-[1040px] m-auto md:pl-20 p-16 py-12 sm:h-screen flex flex-col object-center ps-11 mt-10 lg:pt-2 lg:h-screen  '>
        <h1 className='text-4xl font-bold text-center text-[#001b5e] py-10'>Work</h1>
        <div className='sm:pt-6'>
        {data.map((item , idx)=>(
            <WorkItem 
            key={idx}
            year={item.year} 
            title={item.title}
            duration={item.duration}
            details={item.details} 
            />
        
        ))}
        </div>
        
      
    </div>
  )
}

export default Work
