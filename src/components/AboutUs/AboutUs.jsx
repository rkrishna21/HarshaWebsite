import React, { useState, useEffect } from 'react';
import './AboutUs.css';
import banner from './aboutus-banner.jpg'
const AboutUs = () => {
  const reviews = [
    {
      text: "We use VISIGHT for all my projects currently. Team is well qualified and have incredible level of professionalism. I'd recommend them to anyone looking to expand in house capabilities with their very capable staff.",
      author: "Yashwanth Mishra",
      company: "GlobalTech Partners"
    },
    {
      text: "The search for a development partner can be a daunting task. You are not just looking for the right skill set and experience, you need a team you can trust. when I found VISIGHT, since the early days of DeltaMatricks the VISIGHT team have been with us all the way. It's great to have had them with us for the journey. We'll be sticking with them for many years to come.",
      author: "Sailesh Mahadevan",
      company: "DeltaMatricks"
    },
    {
      text: "The team assigned to the project have shown true dedication, often working above and beyond their remit. I can confidently say that I would happily work with you again in the future as VISIGHT is a strong player in the market.",
      author: "Rekha Bopanna",
      company: "AppnetSoft"
    }
  ];

  const [currentReview, setCurrentReview] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((prevReview) => (prevReview === reviews.length - 1 ? 0 : prevReview + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [reviews.length]);

  return (
    <div className="about-us">
      <div className="about-us-content">
        <div className="description">
          <h3>VISIGHT TECHNOLOGIES</h3>
          <h2>ABOUT US</h2>
          <p>
            From past 9 years, we have been delivering services worldwide. Our business domain knowledge, proven methodologies, and technology expertise of skilled software professionals yield high quality solutions that add value to businesses. Our cost-effective, professional and proactive software development service delivery makes us one of the most sought after software development companies in India.
          </p>
          <h3>Our Vision & Mission</h3>
          <p>
            Our goal is to help our customer to find the best technological solution from a wide range of technologies. Individual approach to each project based on specified technical research of the functional requests and customer’s preferences.
          </p>
          <h3>Process</h3>
          <p>
            Our working process constructed in such convenient way to make the best correlation with customer’s official representative and our developers team. We prefer using the Agile development taking into account project requirements and customer’s preferences.
          </p>
        </div>
        <div className="image-container">
          <img src={banner} alt="About Us" />
        </div>
      </div>

      <div className="reviews-section">
        <div className="review-background">
            <h2>What our Clients say about us...</h2>
          <div className="review-container">
            <div className="review-text" key={currentReview}>
              <p>{reviews[currentReview].text}</p>
              <p><strong>{reviews[currentReview].author}</strong> - {reviews[currentReview].company}</p>
            </div>
          </div>
          <div className="review-dots">
          {reviews.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentReview ? 'active' : ''}`}
              onClick={() => setCurrentReview(index)}
            ></span>
          ))}
        </div>
        </div>
        
      </div>
    </div>
  );
};

export default AboutUs;