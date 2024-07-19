import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CustomNavbar from './components/CustomNavbar/CustomNavbar';
import Home from './components/Home/Home';
import AboutUs from './components/AboutUs/AboutUs';
import Footer from './components/Footer/Footer';
import Services from './components/Services/Services';
import ContactUs from './components/ContactUs/ContactUs';
function App() {
  return (
    <Router>
      <div className="App">
        <CustomNavbar />
        <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} /> 
        <Route path="/services" element={<Services />} /> 
        <Route path="/contactUs" element={<ContactUs />} /> 
        
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
