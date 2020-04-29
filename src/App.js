import React from 'react';
import './App.css';
import Title from './portfolio/Title';
import Career from './portfolio/Career';
import Introduction from './portfolio/Introduction';
import Experience from './portfolio/Experience';
import Project from './portfolio/Project'
import Award from './portfolio/Award'

function App() {
  return (
    <div>
      <div>
        <Title />
      </div>
      <div className='portfolio'>
        <Introduction />
        <Career />
        <Experience />
        <Award />
        <Project />
      </div>
    </div>
  );
}

export default App;
