import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Navbar from './NavBar'; // Assuming Navbar is in the same directory
import AboutSection from './AboutSection';
import Footer from './Footer';

const HomePage = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Add authentication logic here
    navigate('/invoice-form'); // Navigate to InvoiceForm
  };

  return (
    <div className="homepage-background">
      <div>
        <Navbar onLogin={handleLogin}/>
        <AboutSection/>
        <Footer/>
      </div>
    </div>
  );
};

export default HomePage;
