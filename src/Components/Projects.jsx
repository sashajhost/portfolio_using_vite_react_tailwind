import React from 'react';
import ProjectsItem from './ProjectsItem';
import property1 from '../assets/property1.png';
import property2 from '../assets/property2.png';
import property3 from '../assets/property3.png';
import property4 from '../assets/property4.jpg';

const Projects = () => {
  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16 '>
        <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>
        <p className='py-8 text-center '>
            I possess a well-rounded background in IT, marketing, and visual effects. Leveraging my skills, 
            I created 3D animations for educational purposes in 2020 to support AI students with their physics studies. 
            In 2021, I further contributed to the field by publishing the "phy6days" Android application, which provides 
            video lessons and guides specifically tailored for AI learners.  My experience extends to web development,
             having completed projects for international clients through Fiverr. Currently, I hold the position of CTO 
             at Thrima, a company I founded, leading a team of five talented co-workers.
        </p>
        <div className='grid gap-12 sm:grid-cols-2 '>
            <ProjectsItem img={property1} title='animations' cat='blender' link="https://www.youtube.com/@thrimana3000/featured"/>
            <ProjectsItem img={property2} title='react js' cat='web developing' link="https://github.com/sasheeddev/react_tailwind_app" />
            <ProjectsItem img={property3} title='adroid' cat='app developing' link="https://play.google.com/store/apps/details?id=io.ionic.prog612534ff61fda147fec2393f&hl=en&gl=US" />
            <ProjectsItem img={property4} title='telegram' cat='Bard AI' link="https://www.youtube.com/watch?v=nNxWTJch3Kg" />
        </div>

      
    </div>
  )
}

export default Projects
