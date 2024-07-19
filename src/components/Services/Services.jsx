import React from 'react';
import './Services.css';
import serviceImg from './ServiceImg.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFistRaised, faGem, faBusinessTime } from '@fortawesome/free-solid-svg-icons';


const Services = () => {
  return (
    <div className="services">
      <div className="services-content">
        <div className="description">
          <h3>VISIGHT TECHNOLOGIES</h3>
          <h2>OUR SERVICES</h2>
          <p>Software Development</p>
          <p>We build custom software solutions that enable businesses to unlock innovation and leverage digital transformation. We work from concept to code, and development to deployment making sure cost, time & quality of software development is optimized.</p>
          <p>Staffing & HR Solutions</p>
          <p>There are plenty of reasons why you should consider taking advantage of staffing solutions. For one, you can leverage the experience and expertise of professionals to help you find the right employees for your organization. Vacancies are filled faster, this, in turn, translates to increased productivity. Additionally, the cost spent on finding the ideal candidates can also be reduced.</p>
          <p>Outsourcing</p>
          <p>Our objective is to bring high levels of service, quality, process and leadership, while implementing state-of-the-art technologies thereby “Creating Successful Knowledge Enterprises”. Our Outsourcing services are customized to complement our customer’s business strategy and IT spend.</p>
        </div>
        <div className="image-container">
          <img src={serviceImg} alt="About Us" />
        </div>
      </div>

      <div className="card-section">
        <div className="card">
          <FontAwesomeIcon icon={faFistRaised} className="card-icon" />
          <h3>PROFESSIONAL EXPERIENCE</h3>
          <p>Our considerable IT background allows us to develop our own processes, ensuring smooth workflow, high productivity, and impressive results.</p>
        </div>
        <div className="card">
          <FontAwesomeIcon icon={faGem} className="card-icon" />
          <h3>HR MANAGEMENT COVERED</h3>
          <p>With years of HR experience, our recruiters ensure you won’t face any difficulties finding a perfect candidate for your project.</p>
        </div>
        <div className="card">
          <FontAwesomeIcon icon={faBusinessTime} className="card-icon" />
          <h3>REDUCE EXPENDITURES</h3>
          <p>We created a business model covering taxes and HR management, allowing you to meet financial needs while also cutting down expenses.</p>
        </div>
      </div>

      <div className="help-section">
        <h2>How can we help your team?</h2>
        <button className="get-in-touch-button">GET IN TOUCH</button>
      </div>
    </div>
  );
};

export default Services;
