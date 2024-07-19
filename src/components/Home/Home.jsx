import React, { useState, useEffect } from 'react';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptop, faPeopleCarry, faHandshake, faChartPie, faHeart, faTrophy, faMusic } from '@fortawesome/free-solid-svg-icons';

import banner1 from './Banner/banner1.jpg';
import banner2 from './Banner/banner2.jpg';
import banner3 from './Banner/banner3.jpg';

import php from './Technology/php.png';
import java from './Technology/java.png';
import android from './Technology/android.png';
import dotNet from './Technology/dotnet.png';
import salesforce from './Technology/salesforce.png';

import aboutus from './aboutus-whoweare.jpg'

const Home = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex === 2 ? 0 : prevIndex + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home">
      <div className="slideshow-container">
        <div className={`mySlides fade ${slideIndex === 0 ? 'active' : ''}`}>
          <img src={banner1} alt="Banner 1" />
          <div className="banner-text">
            <h2>Software Development</h2>
            <p>Robust and Reliable Solutions</p>
            <button className="learn-more">Learn More</button>
          </div>
        </div>

        <div className={`mySlides fade ${slideIndex === 1 ? 'active' : ''}`}>
          <img src={banner2} alt="Banner 2" />
          <div className="banner-text">
            <h2>HR Solutions</h2>
            <p>Experienced solutions to resolve the people issues in your business</p>
            <button className="learn-more">Learn More</button>
          </div>
        </div>

        <div className={`mySlides fade ${slideIndex === 2 ? 'active' : ''}`}>
          <img src={banner3} alt="Banner 3" />
          <div className="banner-text">
            <h2>Outsourcing</h2>
            <p>Growth + Efficiency + Profitability</p>
            <button className="learn-more">Learn More</button>
          </div>
        </div>
      </div>

      <div className="card-section">
        <h2 className="services-heading">OUR SERVICES</h2>
        <div className="card">
          <FontAwesomeIcon icon={faLaptop} className="card-icon" />
          <h3>Software Development</h3>
          <p>Whether you’re looking to develop a new app for your business or improve your existing software environment, we offer the bespoke software development services you require.</p>
        </div>

        <div className="card">
          <FontAwesomeIcon icon={faPeopleCarry} className="card-icon" />
          <h3>HR Solutions</h3>
          <p>We help your organisation succeed through your people by providing cost-effective, bespoke people solutions aligned to your organisation's values, culture, and strategy.</p>
        </div>

        <div className="card">
          <FontAwesomeIcon icon={faHandshake} className="card-icon" />
          <h3>Outsourcing</h3>
          <p>The main reason businesses look to outsource work is the significant cost-saving, but there are other advantages. We can provide a number of outsourced Business Services.</p>
        </div>
      </div>

      <div className="who-we-are-section">
        <div className="who-we-are-section-content">
          <div className="who-we-are-section-text">
            <h3>ABOUT US</h3>
            <h2>WHO WE ARE</h2>
            <p>
              We are passionate about making life easier for everyone, whether you are an SME, recruitment agency, large multi-national, contractor or something else entirely. VISIGHT will simply undertake the tasks that are costly, time consuming and inconvenient for you.
            </p>
            <p>
              In the increasingly complex world of Contracting and Business Solutions we are here to make things that bit easier giving you time to focus on what really matters!
            </p>
            <p>
              In order to deliver the best possible service, we work alongside our clients as and when they need us to, in person, dealing with those people issues that you face. In this way, we really get to know and understand your business and can provide a practical, business driven approach based on what is best for you.
            </p>
            <p>
              We can help to ensure that your people documentation and policies are clear, compliant and designed to help your business grow through effective management of your people.
            </p>
          </div>
          <div className="who-we-are-section-images">
            <img src={aboutus} alt="aboutus" />
          </div>
        </div>
      </div>




      <div className="stats-section">
        <div className="stat-card">
          <FontAwesomeIcon icon={faChartPie} className="stat-icon" />
          <h3>32</h3>
          <p>PROJECTS COMPLETED</p>
        </div>

        <div className="stat-card">
          <FontAwesomeIcon icon={faHeart} className="stat-icon" />
          <h3>23</h3>
          <p>HAPPY CLIENTS</p>
        </div>

        <div className="stat-card">
          <FontAwesomeIcon icon={faTrophy} className="stat-icon" />
          <h3>9+</h3>
          <p>YEARS OF EXPERIENCE</p>
        </div>

        <div className="stat-card">
          <FontAwesomeIcon icon={faMusic} className="stat-icon" />
          <h3>61</h3>
          <p>CONSULTANTS</p>
        </div>
      </div>

      <div className="why-we-are-section">
        <h2>WHY WE ARE?</h2>
        <p>
          Leading an organisation successfully is not easy. With us, you get a strategic partner that delivers tailored solutions to unlock the talent of your people and maximise performance, helping your organisation to be a “great place to work” that delivers for your customers. We are here for everybody: from Individuals and SMEs through to Multinationals and across every sector.
        </p>
        <p>
          We’ll schedule regular meetings to discuss your affairs and you’ll never have to chase us for the information you need. We have developed an enviable reputation and we are incredibly proud of our success. We are customer-centric in our approach and we genuinely have our clients’ best interests at heart.
        </p>
      </div>

      
      <div className="technology-section">
        <img src={php} alt="PHP" />
        <img src={java} alt="Java" />
        <img src={android} alt="Android" />
        <img src={dotNet} alt=".NET" />
        <img src={salesforce} alt="Salesforce" />
      </div>
    </div>
  );
};

export default Home;
