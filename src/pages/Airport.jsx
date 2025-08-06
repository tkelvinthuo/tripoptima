import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer/Footer';
import './Airport.css';

// Icon components (using Unicode symbols as replacements for Lucide icons)
const PlaneIcon = () => <span className="icon">✈️</span>;
const ClockIcon = () => <span className="icon">🕒</span>;
const ShieldIcon = () => <span className="icon">🛡️</span>;
const UsersIcon = () => <span className="icon">👥</span>;
const StarIcon = () => <span className="icon">⭐</span>;
const QuoteIcon = () => <span className="icon">💬</span>;

function Airport() {
  const services = [
    {
      title: "Nairobi Airport (JKIA) Transfers",
      description: "Premium transfers from Jomo Kenyatta International Airport to your destination",
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      features: ["Meet & Greet Service", "Flight Tracking", "Luxury Vehicles", "24/7 Availability"]
    },
    {
      title: "Wilson Airport Transfers", 
      description: "Convenient transfers for domestic flights and charter services",
      image: "https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      features: ["Domestic Flights", "Charter Services", "Quick Transfers", "Local Expertise"]
    },
    {
      title: "Mombasa Airport Transfers",
      description: "Coastal airport transfers with onward connections to beach resorts",
      image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      features: ["Beach Resort Connections", "Coastal Expertise", "Resort Partnerships", "Scenic Routes"]
    }
  ];

  const testimonials = [
    {
      name: "Robert Chen",
      country: "Singapore",
      rating: 5,
      comment: "Seamless transfer from JKIA to our hotel. The driver was waiting with a sign, helped with luggage, and the vehicle was spotless. Perfect start to our Kenya trip!",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Linda Thompson",
      country: "Canada", 
      rating: 5,
      comment: "Flight was delayed by 3 hours but the driver waited patiently and tracked our flight. Exceptional service and professionalism throughout.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    }
  ];

  return (
    <div className="airport-container">
      <Navbar />
      
      {/* Hero Section */}
      <section className="airport-hero">
        <div className="hero-overlay"></div>
        <div className="hero-background"></div>
        
        <div className="hero-content">
          <h1 className="hero-title">
            Premium Airport Transfers
          </h1>
          <p className="hero-description">
            Start your Kenyan adventure in comfort with our reliable, professional airport transfer services 
            connecting you seamlessly to your destination.
          </p>
        </div>
      </section>

      {/* Service Overview */}
      <section className="service-overview">
        <div className="container">
          <div className="overview-header">
            <h2 className="section-title">
              Why Choose Our Airport Transfers?
            </h2>
            <p className="section-description">
              From the moment you land in Kenya to your final destination, we ensure your journey 
              is comfortable, safe, and stress-free. Our professional drivers and modern fleet 
              provide the perfect introduction to Kenyan hospitality.
            </p>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-header">
                <PlaneIcon />
                <h3 className="feature-title">Flight Tracking</h3>
              </div>
              <div className="feature-content">
                <p className="feature-text">We monitor your flight status and adjust pickup times accordingly</p>
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-header">
                <UsersIcon />
                <h3 className="feature-title">Meet & Greet</h3>
              </div>
              <div className="feature-content">
                <p className="feature-text">Personal welcome service with assistance for luggage and directions</p>
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-header">
                <ShieldIcon />
                <h3 className="feature-title">Safety First</h3>
              </div>
              <div className="feature-content">
                <p className="feature-text">Licensed drivers, insured vehicles, and GPS tracking for your security</p>
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-header">
                <ClockIcon />
                <h3 className="feature-title">24/7 Service</h3>
              </div>
              <div className="feature-content">
                <p className="feature-text">Round-the-clock availability for all arrival and departure times</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transfer Services */}
      <section className="transfer-services">
        <div className="container">
          <div className="services-header">
            <h2 className="section-title">
              Our Transfer Services
            </h2>
            <p className="section-subtitle">
              Comprehensive airport transfer solutions across Kenya's major airports
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
                    Popular
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
                    Book Transfer
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
              Traveler Experiences
            </h2>
            <p className="section-subtitle">
              What our guests say about our airport transfer services
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
                      <p className="testimonial-country">{testimonial.country}</p>
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

export default Airport;
