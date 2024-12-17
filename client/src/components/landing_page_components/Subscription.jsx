import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './landingPageStylings/Subscription.css';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

export default function Subscription() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="subscription-section">
      <div className="subscriptionTitle">
        <h2>Subscribe To our Weekly Newsletter</h2>
        <p>Stay updated with the latest news and special offers!</p>
      </div>
      <div className="subscription-info">
        <h6>Subscribe</h6>
        <form onSubmit={handleSubmit}>
          <input 
            type="email" 
            placeholder="Enter your email" 
            required 
            aria-label="Email address"
          />
          <button type="submit">Subscribe</button>
        </form>
      </div>
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <div>
            <FontAwesomeIcon icon={faCheckCircle} className='success-icon'/>
            <p>Thank you for subscribing!</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
