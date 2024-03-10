// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CustomNavbar from './components/CustomNavbar';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Studies from './components/Studies';
import Projects from './components/Projects';

const App = () => {
  return (
    <Router>
      <div className='app-container'>
        <CustomNavbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<AboutMe />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/studies' element={<Studies />} />
          <Route path='/projects' element={<Projects />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

