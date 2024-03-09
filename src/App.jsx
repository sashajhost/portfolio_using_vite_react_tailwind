import { useState } from 'react';
import Sidenav from './Components/Sidenav';
import Main from './Components/Main';
import Work from './Components/Work';
import Projects from './Components/Projects';
import Contact from './Components/Contact';


function App() {


  return (
    <div>
      <Sidenav/>
      <Main/>
      <Work/>
      <Projects/>
      <Contact/>
    </div>
    
  )
}

export default App
