import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer/Footer';
import './Chauffeur.css';

// Icon components using Unicode symbols
const UsersIcon = () => <span className="icon">👥</span>;
const ClockIcon = () => <span className="icon">🕰️</span>;
const ShieldIcon = () => <span className="icon">🛡️</span>;
const StarIcon = () => <span className="icon">⭐</span>;
const QuoteIcon = () => <span className="icon">💬</span>;
const MapPinIcon = () => <span className="icon">📍</span>;

function Chauffeur() {
  const services = [
    {
      title: "Executive Business Travel",
      description: "Professional chauffeur services for business meetings and corporate events",
      image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      features: ["Executive vehicles", "Professional attire", "Punctual service", "Confidentiality"]
    },
    {
      title: "City Tours & Sightseeing",
      description: "Personalized guided tours of Nairobi and other major Kenyan cities",
      image: "https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      features: ["Local expertise", "Cultural insights", "Flexible itineraries", "Photo opportunities"]
    },
    {
      title: "Special Events & Occasions",
      description: "Luxury transportation for weddings, celebrations, and special occasions",
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      features: ["Luxury fleet", "Special decorations", "Professional service", "Memorable experiences"]
    }
  ];

  const testimonials = [
    {
      name: "David Wilson",
      company: "Tech Solutions Ltd",
      rating: 5,
      comment: "Outstanding service for our business delegation. The chauffeur was professional, punctual, and knew all the best routes. Made our Nairobi meetings seamless.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Alexandra Smith",
      company: "Personal Client",
      rating: 5,
      comment: "Perfect city tour experience! Our chauffeur guide shared fascinating stories about Nairobi's history and culture. Felt like traveling with a knowledgeable friend.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    }
  ];

  return (
    <div className="chauffeur-container">
      <Navbar />
      
      {/* Hero Section */}
      <section className="chauffeur-hero">
        <div className="hero-overlay"></div>
        <div className="hero-background"></div>
        
        <div className="hero-content">
          <h1 className="hero-title">
            Premium Chauffeur Services
          </h1>
          <p className="hero-description">
            Experience Kenya in style with our professional chauffeur services, 
            combining luxury, local expertise, and personalized attention.
          </p>
        </div>
      </section>

      {/* Service Overview */}
      <section className="service-overview">
        <div className="container">
          <div className="overview-header">
            <h2 className="section-title">
              Luxury Travel Redefined
            </h2>
            <p className="section-description">
              Our chauffeur services go beyond simple transportation. We provide a premium travel 
              experience with professional drivers who double as local ambassadors, sharing insights 
              about Kenya's rich culture, history, and hidden gems.
            </p>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-header">
                <UsersIcon />
                <h3 className="feature-title">Professional Chauffeurs</h3>
              </div>
              <div className="feature-content">
                <p className="feature-text">Experienced, licensed, and trained professionals with local expertise</p>
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-header">
                <ShieldIcon />
                <h3 className="feature-title">Executive Fleet</h3>
              </div>
              <div className="feature-content">
                <p className="feature-text">Luxury vehicles maintained to the highest standards for your comfort</p>
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-header">
                <ClockIcon />
                <h3 className="feature-title">Flexible Scheduling</h3>
              </div>
              <div className="feature-content">
                <p className="feature-text">Adaptable to your itinerary with real-time schedule adjustments</p>
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-header">
                <MapPinIcon />
                <h3 className="feature-title">Local Knowledge</h3>
              </div>
              <div className="feature-content">
                <p className="feature-text">Insider knowledge of routes, attractions, and cultural experiences</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="service-categories">
        <div className="container">
          <div className="categories-header">
            <h2 className="section-title">
              Our Chauffeur Services
            </h2>
            <p className="section-subtitle">
              Tailored transportation solutions for every occasion
            </p>
          </div>

          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-image-container">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="service-image"
                  />
                  <span className="service-badge">
                    Premium
                  </span>
                </div>
                <div className="service-header">
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">
                    {service.description}
                  </p>
                </div>
                <div className="service-content">
                  <div className="service-features">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="service-feature">
                        <div className="feature-bullet"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                  <button className="service-button">
                    Book Service
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <div className="container">
          <div className="testimonials-header">
            <h2 className="section-title">
              Client Testimonials
            </h2>
            <p className="section-subtitle">
              Exceptional service experiences from our valued clients
            </p>
          </div>

          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="testimonial-header">
                  <div className="testimonial-profile">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="testimonial-avatar"
                    />
                    <div className="testimonial-info">
                      <h4 className="testimonial-name">{testimonial.name}</h4>
                      <p className="testimonial-company">{testimonial.company}</p>
                    </div>
                  </div>
                  <div className="testimonial-rating">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <StarIcon key={i} />
                    ))}
                  </div>
                </div>
                <div className="testimonial-content">
                  <QuoteIcon />
                  <p className="testimonial-comment">"{testimonial.comment}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}

export default Chauffeur;
