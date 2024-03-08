import { useState } from 'react';
import Sidenav from './Components/Sidenav';
import Main from './Components/Main';
import Work from './Components/Work';
import Projects from './Components/Projects';


function App() {


  return (
    <div>
      <Sidenav/>
      <Main/>
      <Work/>
      <Projects/>

    </div>
    
  )
}

export default App
