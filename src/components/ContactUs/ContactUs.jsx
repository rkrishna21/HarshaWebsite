import React from 'react';
import emailjs from 'emailjs-com';
import './ContactUs.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationArrow, faPhoneAlt, faClock } from '@fortawesome/free-solid-svg-icons';

const ContactUs = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
      .then((result) => {
        alert('Message sent successfully!');
      }, (error) => {
        alert('Failed to send message, please try again later.');
      });
      
    e.target.reset();
  };

  return (
    <div className="contact-page">
      <div className="map-container">
        <iframe
          title="company-location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2889.586581263912!2d-79.64351672489336!3d43.59432685623817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548671cc563eb991%3A0xe4943add89051a95!2sWalmart%20Supercentre!5e0!3m2!1sen!2sca!4v1721336847765!5m2!1sen!2sca" 
          width="100%"
          height="450"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
      <div className="contact-details-form">
        <div className="contact-form">
          <form onSubmit={sendEmail}>
            <label>Your Name (required)</label>
            <input type="text" name="name" required />
            <label>Your Email (required)</label>
            <input type="email" name="email" required />
            <label>Subject</label>
            <input type="text" name="subject" />
            <label>Your Message</label>
            <textarea rows="4" name="message"></textarea>
            <button type="submit">Send Now</button>
          </form>
        </div>
        <div className="location-details">
          <h3>Location</h3>
          <p><FontAwesomeIcon icon={faLocationArrow} /> &nbsp;&nbsp;# 203, 2nd Floor, 6-3-866/A, Mekins Maheshwari Mayank Plaza, Greenlands, Hyderabad, Telangana, India, 500016.</p>
          <h3>Phone</h3>
          <p><FontAwesomeIcon icon={faPhoneAlt} /> &nbsp;&nbsp;040-48573678</p>
          <h3>Opening Hours</h3>
          <p><FontAwesomeIcon icon={faClock} />&nbsp;&nbsp;Mon - Fri: 09:00am - 07:00pm</p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
