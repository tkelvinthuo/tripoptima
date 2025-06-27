import React from 'react';
import './services.css';
import { Link } from 'react-router-dom';

function ServiceCard({ service }) {
  const Icon = service.icon;

  return (
    <div className="service-card">
      <div className="service-card-image">
        <img src={service.image} alt={service.title} />
        <div className="image-overlay">
          <div className="icon-wrapper">
            <Icon size={24} className="overlay-icon" />
          </div>
          <div className="overlay-text">
            <h3>{service.title}</h3>
            <p>Authentic Experiences</p>
          </div>
        </div>
      </div>

      <div className="service-card-body">
        <p className="service-description">{service.description}</p>

        <ul className="features-list">
          {service.features.map((feature, idx) => (
            <li key={idx}>
              <span className="bullet"></span>
              {feature}
            </li>
          ))}
        </ul>

        <Link to={service.link}>
          <button className="explore-button">
            Explore {service.title}
          </button>
        </Link>
      </div>
    </div>
  );
}

export default ServiceCard;
