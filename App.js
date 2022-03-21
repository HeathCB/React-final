import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavComponent from './Components/NavBar';
import BlogPage from './Components/BlogPage';
import Portfolio from './Components/Portfolio';
import About from './Components/About';
import Home from './Components/Home';

function App() {
  return (
    <Router>
    <NavComponent />
      <Routes>
        <Route path="/" element={<Home />}  />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/blogPage" element={<BlogPage />} />
      </Routes>
  </Router>   
  )
}

export default App