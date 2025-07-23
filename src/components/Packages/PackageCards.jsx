import React from 'react';
import './packageCards.css';
import { featuredPackages } from './packageData';
import { Clock, Users, Star, Camera } from 'lucide-react';

const PackageCards = () => {
  return (
    <div className="packages-grid">
      {featuredPackages.map((pkg, index) => (
        <div className="package-card" key={index}>
          <div className="image-container">
            <img src={pkg.image} alt={pkg.title} className="card-image" />
            <div className="image-gradient"></div>
            <div className="badge">Popular</div>
            <div className="image-overlay-content">
              <h3 className="image-title">{pkg.title}</h3>
              <div className="image-rating">
                <Star size={16} className="star-filled" />
                <span className="rating-value">{pkg.rating}</span>
              </div>
            </div>
          </div>
          
          <div className="card-header">
            <p className="card-description">{pkg.description}</p>
          </div>
          
          <div className="card-content">
            <div className="meta-info">
              <div className="meta-item">
                <Clock size={16} className="meta-icon" />
                <span className='meta-cont'>{pkg.duration}</span>
              </div>
              <div className="meta-item">
                <Users size={16} className="meta-icon" />
                <span className='meta-cont'>{pkg.groupSize}</span>
              </div>
            </div>

            <div className="highlights-list">
              {pkg.highlights.map((highlight, idx) => (
                <div key={idx} className="highlight-item">
                  <Camera size={14} className="camera-icon" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>

            <div className="card-footer">
              <div className="price-section">
                <span className="price">{pkg.price}</span>
                <span className="price-per">/person</span>
              </div>
              <button className="book-btn">Book Now</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PackageCards;
