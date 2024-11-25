import React from 'react';
import './AboutSection.css';
import image from './Invoice2.png';
import image2 from './WhyChooseUs.png';

const AboutSection = () => {
  return (
    <div className="about-section">
      <div className="description">
        <h2>Revolutionize Your Billing</h2>
        <p>
          Welcome to our Invoice Generator – your ultimate tool for seamless and professional billing. Create invoices with customized prices, quantities, taxes, discounts, and more, all with ease. Whether you’re managing business transactions or personal finances, our platform ensures efficiency and accuracy. Generate invoices tailored to your needs, download them in a click, or share instantly with clients. Simplify billing, save time, and stay organized – because invoicing should be as straightforward as your business deserves.
        </p>
      </div>
      <div className="logo">
        <img src={image} alt="Invoice Generator Logo" />
      </div>
      <div className="description">
        <h2>"Why Choose Our Invoice Generator?"</h2>
        <p>
          Our Invoice Generator is designed with your convenience in mind, offering an intuitive interface and powerful features. Whether you're a freelancer, small business owner, or large enterprise, this tool adapts to your needs. No more manual calculations or formatting – it’s all automated! With user-friendly customization options, you have full control over every detail of your invoice. It’s fast, secure, and accessible anywhere. Say goodbye to complicated invoicing and hello to simplicity, accuracy, and professionalism.
        </p>
      </div>
      <div className="logo">
        <img src={image2} alt="Invoice Generator Logo" />
      </div>
    </div>
  );
};

export default AboutSection;
