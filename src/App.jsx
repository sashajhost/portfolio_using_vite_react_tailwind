import { useState } from 'react';
import Sidenav from './Components/Sidenav';
import Main from './Components/Main';
import Work from './Components/Work';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import About from './Components/About';


function App() {


  return (
    <div>
      <Sidenav/>
      <Main/>
      <Work/>
      <Projects/>
      <About/>
      <Contact/>
    </div>
    
  )
}

export default App
