import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer/Footer';
import './CarHire.css';

// Icon components using Unicode symbols
const CarIcon = () => <span className="icon">🚗</span>;
const ShieldIcon = () => <span className="icon">🛡️</span>;
const MapPinIcon = () => <span className="icon">📍</span>;
const UsersIcon = () => <span className="icon">👥</span>;
const StarIcon = () => <span className="icon">⭐</span>;
const QuoteIcon = () => <span className="icon">💬</span>;
const PhoneIcon = () => <span className="icon">📞</span>;
const CheckCircleIcon = () => <span className="icon">✅</span>;
const AlertTriangleIcon = () => <span className="icon">⚠️</span>;
const NavigationIcon = () => <span className="icon">🧭</span>;
const FuelIcon = () => <span className="icon">⛽</span>;
const SettingsIcon = () => <span className="icon">⚙️</span>;

function CarHire() {
  const [selectedVehicle, setSelectedVehicle] = useState("");
  const [activeTab, setActiveTab] = useState("process");
  const [openFAQ, setOpenFAQ] = useState(null);

  const vehicles = [
    {
      category: "Economy Cars",
      description: "Perfect for city driving and short trips",
      images: [
        "https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1549399084-d56ebf66c2cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
      ],
      features: ["Fuel efficient", "Easy parking", "Manual/Automatic", "GPS included", "Air conditioning", "Bluetooth connectivity"],
      priceRange: "$25-35/day",
      specifications: {
        passengers: 5,
        transmission: "Manual/Auto",
        fuelType: "Petrol",
        engine: "1.0L - 1.4L",
        fuelConsumption: "15-18km/L"
      },
      availability: 8
    },
    {
      category: "SUVs & 4WDs",
      description: "Ideal for safari adventures and rough terrain",
      images: [
        "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
      ],
      features: ["4WD capability", "High clearance", "Spacious interior", "Safari ready", "Roof rack", "Emergency kit"],
      priceRange: "$60-90/day",
      specifications: {
        passengers: 7,
        transmission: "4WD Auto",
        fuelType: "Diesel",
        engine: "2.5L - 3.0L",
        fuelConsumption: "10-12km/L"
      },
      availability: 3
    },
    {
      category: "Luxury Vehicles",
      description: "Premium comfort for special occasions",
      images: [
        "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1563720223185-11003d516935?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
      ],
      features: ["Premium brands", "Leather interiors", "Advanced features", "Executive comfort", "Chauffeur option", "Premium sound system"],
      priceRange: "$100-150/day",
      specifications: {
        passengers: 5,
        transmission: "Automatic",
        fuelType: "Petrol/Hybrid",
        engine: "2.0L - 3.5L",
        fuelConsumption: "8-12km/L"
      },
      availability: 2
    }
  ];

  const testimonials = [
    {
      name: "Michael Anderson",
      country: "Australia",
      rating: 5,
      comment: "Rented a 4WD for our self-drive safari. Excellent condition vehicle with all necessary equipment. Great value and professional service throughout our two-week adventure.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      trip: "14-day Safari Adventure"
    },
    {
      name: "Emma Garcia",
      country: "Mexico",
      rating: 5,
      comment: "Smooth rental process and reliable car for exploring Nairobi. GPS was very helpful and the 24/7 support gave us peace of mind during our trip.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      trip: "City Exploration"
    },
    {
      name: "James Thompson",
      country: "UK",
      rating: 5,
      comment: "Luxury sedan for our business trip was impeccable. Professional service from pickup to drop-off. Will definitely use again!",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      trip: "Business Travel"
    }
  ];

  const popularRoutes = [
    {
      name: "Nairobi to Maasai Mara",
      distance: "270 km",
      duration: "5-6 hours",
      difficulty: "Moderate",
      highlights: ["Scenic Rift Valley", "Traditional markets", "Wildlife viewing"]
    },
    {
      name: "Nairobi to Amboseli",
      distance: "240 km", 
      duration: "4-5 hours",
      difficulty: "Easy",
      highlights: ["Mount Kilimanjaro views", "Elephant herds", "Maasai culture"]
    },
    {
      name: "Mombasa Coastal Drive",
      distance: "150 km",
      duration: "3-4 hours", 
      difficulty: "Easy",
      highlights: ["Beautiful beaches", "Historical sites", "Swahili culture"]
    }
  ];

  const faqs = [
    {
      question: "What documents do I need to rent a car?",
      answer: "You need a valid international driving license, passport, and credit card for deposit. Minimum age is 23 years with at least 2 years driving experience."
    },
    {
      question: "Is insurance included in the rental price?",
      answer: "Yes, comprehensive insurance is included covering vehicle damage, theft, and third-party liability. Additional coverage options are available."
    },
    {
      question: "Can I pick up the car at the airport?",
      answer: "Absolutely! We offer free pickup and drop-off at Jomo Kenyatta International Airport and Wilson Airport. Other locations available with advance notice."
    },
    {
      question: "What's included in the safari-ready vehicles?",
      answer: "Our 4WD vehicles come equipped with GPS, first aid kit, emergency tools, roof rack, cooler box, and detailed route maps for national parks."
    },
    {
      question: "What if I have problems during my rental?",
      answer: "We provide 24/7 roadside assistance throughout Kenya. Our emergency hotline connects you to local support and mechanical services."
    }
  ];

  return (
    <div className="carhire-container">
      <Navbar />
      
      {/* Hero Section */}
      <section className="carhire-hero">
        <div className="hero-overlay"></div>
        <div className="hero-background"></div>
        <div className="hero-pattern"></div>
        
        <div className="hero-content">
          <h1 className="hero-title">
            Explore Kenya
            <span className="hero-subtitle">Your Way</span>
          </h1>
          <p className="hero-description">
            Experience the freedom of self-drive adventure with our modern fleet. 
            From city streets to safari trails, discover Kenya at your own pace.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary">
              Browse Vehicles
            </button>
            <button className="btn-secondary">
              Plan Your Route
            </button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="main-content">
        <div className="container">
          <div className="content-wrapper">
            {/* Service Overview */}
            <div className="service-overview">
              <div className="section-header">
                <h2 className="section-title">
                  Freedom to Explore Kenya
                </h2>
                <p className="section-description">
                  Experience authentic Kenya with our comprehensive self-drive service. Modern vehicles, 
                  local expertise, and 24/7 support for your perfect African adventure.
                </p>
              </div>

              <div className="features-grid">
                <div className="feature-card">
                  <div className="feature-header">
                    <CarIcon />
                    <h3 className="feature-title">Modern Fleet</h3>
                  </div>
                  <div className="feature-content">
                    <p className="feature-text">Well-maintained vehicles from trusted brands, regularly serviced for reliability</p>
                  </div>
                </div>

                <div className="feature-card">
                  <div className="feature-header">
                    <ShieldIcon />
                    <h3 className="feature-title">Full Coverage</h3>
                  </div>
                  <div className="feature-content">
                    <p className="feature-text">Comprehensive insurance and 24/7 roadside assistance throughout Kenya</p>
                  </div>
                </div>

                <div className="feature-card">
                  <div className="feature-header">
                    <MapPinIcon />
                    <h3 className="feature-title">GPS & Maps</h3>
                  </div>
                  <div className="feature-content">
                    <p className="feature-text">Latest navigation systems with updated Kenya maps and safari routes</p>
                  </div>
                </div>

                <div className="feature-card">
                  <div className="feature-header">
                    <UsersIcon />
                    <h3 className="feature-title">Local Support</h3>
                  </div>
                  <div className="feature-content">
                    <p className="feature-text">Expert local guidance and emergency support wherever your journey takes you</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Vehicle Fleet */}
            <div className="vehicle-fleet">
              <div className="section-header">
                <h2 className="section-title">
                  Our Vehicle Fleet
                </h2>
                <p className="section-subtitle">
                  Choose from our diverse range of vehicles suited for every Kenyan adventure
                </p>
              </div>

              <div className="vehicles-grid">
                {vehicles.map((vehicle, index) => (
                  <div key={index} className="vehicle-card">
                    <div className="vehicle-image-container">
                      <img 
                        src={vehicle.images[0]} 
                        alt={vehicle.category}
                        className="vehicle-image"
                      />
                      <div className="availability-badge">
                        {vehicle.availability} Available
                      </div>
                    </div>
                    <div className="vehicle-content">
                      <div className="vehicle-header">
                        <h3 className="vehicle-category">{vehicle.category}</h3>
                        <p className="vehicle-description">{vehicle.description}</p>
                        <div className="price-range">{vehicle.priceRange}</div>
                      </div>
                      
                      <div className="vehicle-specifications">
                        <div className="spec-item">
                          <UsersIcon />
                          <span>{vehicle.specifications.passengers} passengers</span>
                        </div>
                        <div className="spec-item">
                          <SettingsIcon />
                          <span>{vehicle.specifications.transmission}</span>
                        </div>
                        <div className="spec-item">
                          <FuelIcon />
                          <span>{vehicle.specifications.fuelType}</span>
                        </div>
                      </div>

                      <div className="vehicle-features">
                        {vehicle.features.slice(0, 4).map((feature, idx) => (
                          <div key={idx} className="feature-item">
                            <CheckCircleIcon />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                      <button 
                        className="vehicle-book-btn"
                        onClick={() => setSelectedVehicle(vehicle.category)}
                      >
                        Book Now
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Popular Routes */}
            <div className="popular-routes">
              <h2 className="section-title">
                Popular Self-Drive Routes
              </h2>
              <div className="routes-grid">
                {popularRoutes.map((route, index) => (
                  <div key={index} className="route-card">
                    <div className="route-header">
                      <h3 className="route-name">
                        <NavigationIcon />
                        {route.name}
                      </h3>
                      <div className="route-details">
                        <span>{route.distance}</span>
                        <span>{route.duration}</span>
                        <span className={`difficulty ${route.difficulty.toLowerCase()}`}>
                          {route.difficulty}
                        </span>
                      </div>
                    </div>
                    <div className="route-highlights">
                      {route.highlights.map((highlight, idx) => (
                        <div key={idx} className="highlight-item">
                          <CheckCircleIcon />
                          {highlight}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* How It Works */}
            <div className="how-it-works">
              <h2 className="section-title">
                How It Works
              </h2>
              
              <div className="tabs-container">
                <div className="tabs-nav">
                  <button 
                    className={`tab-button ${activeTab === 'process' ? 'active' : ''}`}
                    onClick={() => setActiveTab('process')}
                  >
                    Rental Process
                  </button>
                  <button 
                    className={`tab-button ${activeTab === 'requirements' ? 'active' : ''}`}
                    onClick={() => setActiveTab('requirements')}
                  >
                    Requirements
                  </button>
                  <button 
                    className={`tab-button ${activeTab === 'safety' ? 'active' : ''}`}
                    onClick={() => setActiveTab('safety')}
                  >
                    Safety Tips
                  </button>
                </div>
                
                <div className="tab-content">
                  {activeTab === 'process' && (
                    <div className="process-grid">
                      {[
                        { step: 1, title: "Book Online", desc: "Choose your vehicle and dates" },
                        { step: 2, title: "Document Check", desc: "Verify license and passport" },
                        { step: 3, title: "Vehicle Handover", desc: "Inspect and collect your car" },
                        { step: 4, title: "Explore Kenya", desc: "Hit the road with confidence!" }
                      ].map((item) => (
                        <div key={item.step} className="process-step">
                          <div className="step-number">
                            {item.step}
                          </div>
                          <div className="step-content">
                            <h3 className="step-title">{item.title}</h3>
                            <p className="step-desc">{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                  
                  {activeTab === 'requirements' && (
                    <div className="requirements-grid">
                      <div className="requirements-section">
                        <h3 className="requirements-title green">Required Documents</h3>
                        <div className="requirements-list">
                          {[
                            "Valid international driving license",
                            "Passport (minimum 6 months validity)",
                            "Credit card for security deposit",
                            "Proof of accommodation in Kenya"
                          ].map((req, idx) => (
                            <div key={idx} className="requirement-item">
                              <CheckCircleIcon />
                              <span>{req}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="requirements-section">
                        <h3 className="requirements-title blue">Driver Requirements</h3>
                        <div className="requirements-list">
                          {[
                            "Minimum age: 23 years",
                            "2+ years driving experience", 
                            "Clean driving record",
                            "Basic English communication"
                          ].map((req, idx) => (
                            <div key={idx} className="requirement-item">
                              <CheckCircleIcon />
                              <span>{req}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {activeTab === 'safety' && (
                    <div className="safety-grid">
                      <div className="safety-section">
                        <h3 className="safety-title orange">Driving in Kenya</h3>
                        <div className="safety-list">
                          {[
                            "Drive on the left side of the road",
                            "Speed limits: 50km/h city, 110km/h highway",
                            "Carry original documents at all times",
                            "Avoid driving at night outside cities"
                          ].map((tip, idx) => (
                            <div key={idx} className="safety-item">
                              <AlertTriangleIcon />
                              <span>{tip}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="safety-section">
                        <h3 className="safety-title red">Emergency Contacts</h3>
                        <div className="emergency-contacts">
                          <div className="emergency-item">
                            <PhoneIcon />
                            <span>24/7 Support: +254 700 123 456</span>
                          </div>
                          <div className="emergency-item">
                            <PhoneIcon />
                            <span>Police: 999</span>
                          </div>
                          <div className="emergency-item">
                            <PhoneIcon />
                            <span>Medical Emergency: 999</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Testimonials */}
            <div className="testimonials">
              <div className="section-header">
                <h2 className="section-title">
                  Customer Adventures
                </h2>
                <p className="section-subtitle">
                  Real stories from travelers who chose the freedom of self-drive exploration
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
                          <span className="trip-badge">{testimonial.trip}</span>
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

            {/* FAQ Section */}
            <div className="faq-section">
              <h2 className="section-title">
                Frequently Asked Questions
              </h2>
              <div className="faq-container">
                {faqs.map((faq, index) => (
                  <div key={index} className="faq-item">
                    <button 
                      className={`faq-question ${openFAQ === index ? 'active' : ''}`}
                      onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                    >
                      {faq.question}
                      <span className="faq-icon">{openFAQ === index ? '-' : '+'}</span>
                    </button>
                    <div className={`faq-answer ${openFAQ === index ? 'open' : ''}`}>
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default CarHire;
