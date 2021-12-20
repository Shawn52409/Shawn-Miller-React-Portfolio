import React from 'react';

// Import global styles
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';

// Import components
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

// Import list of projects
import projects from './projects';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Header />
      <About />
      <Projects projects={projects} />
      <Contact />
    </div>
  );
}

export default App;
