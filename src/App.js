import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import {Routes, BrowserRouter as Router, Route } from 'react-router-dom';
import Services from './components/pages/Services';
// import Products from './components/pages/Products';
import ContactUs from './components/pages/ContactUs';
import SignUp from './components/pages/SignUp';
// import Marketing from './components/pages/Marketing';
import Consulting from './components/pages/Consulting';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/services' element={<Services />} />
        {/* <Route path='/products' component={Products} /> */}
        <Route path='/contact-us' element={<ContactUs />} />
        <Route path='/sign-up' element={<SignUp />} />
        {/* <Route path='/marketing' component={Marketing} /> */}
        <Route path='/consulting' element={<Consulting />} />
        </Routes>
    </Router>
  );
}

export default App;