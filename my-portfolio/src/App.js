import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

// Import global styles
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Import components
import Home from './components/Home';
import NavBar from './components/NavBar';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';

// Import list of projects
// import projects from './components/projects';

function App() {
  return (
    <Router>
    <NavBar />
        <Route component={Home} path='/' exact />
        <Route component={About} path='/about' />
        <Route component={Portfolio} path='/portfolio' />
        <Route component={Contact} path='/contact' />
        <Route component={Resume} path='/resume' />
    </Router>
  );
}

export default App;
