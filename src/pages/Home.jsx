import Navbar from '../components/Navbar';
import './Home.css';
import { MapPin, Plane, Users, Star, User } from 'lucide-react';
import ServiceCard from '../components/Services/Services';
import { services } from '../components/Services/servicesData';
import PackageCards from '../components/Packages/PackageCards';
import ContactSection from '../components/Contact/ContactSection';
import Footer from '../components/Footer/Footer';
import AdventurePlanningModal from '../components/AdventurePlanningModal/AdventurePlanningModal';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Home() {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Smooth scroll to packages section for "Start Your Safari"
  const scrollToPackages = () => {
    const packagesSection = document.querySelector('.packages');
    const navbar = document.querySelector('.navBar');
    
    if (packagesSection && navbar) {
      const navbarHeight = navbar.offsetHeight;
      const targetPosition = packagesSection.offsetTop - navbarHeight - 20; 
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Smooth scroll to services section for "Explore Services"
  const scrollToServices = () => {
    const servicesSection = document.querySelector('.comprehensive');
    const navbar = document.querySelector('.navBar');
    
    if (servicesSection && navbar) {
      const navbarHeight = navbar.offsetHeight;
      const targetPosition = servicesSection.offsetTop - navbarHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <Navbar />
      <main className='home-container'>
        <section className='journey'>
          {/* Floating Elements */}
          <div className='floating-elements'>
            <div className='floating-dot floating-dot-1'></div>
            <div className='floating-dot floating-dot-2'></div>
            <div className='floating-dot floating-dot-3'></div>
          </div>

          {/* Content */}
          <div className='journey-content'>
            <div className='journey-container'>
              {/* Subtitle */}
              <div className='highlighted-message'>
                <MapPin className='icon' size={16} />
                <span className='message'>Discover East Africa's Hidden Treasures</span>
              </div>

              {/* Main Heading */}
              <div className='welcome-message'>
                <h1 className='part-a'>Journey Into</h1>
                <h1 className='part-b'>Wild Africa</h1>
              </div>
              
              {/* Description */}
              <div className='main-message'>
                <p>From the thundering hooves of the Great Migration to the snow-capped peaks of Mount Kilimanjaro, experience Africa's raw beauty through our premium logistics and safari services.</p>
                <span className='last-part'>Where every journey tells an ancient story.</span>
              </div>

              {/* Action Buttons */}
              <div className='options-buttons'>
                <button className='options-start' onClick={scrollToPackages}>
                  <MapPin className='options-icon' size={20} />
                  <span className='start'>Start Your Safari</span>
                </button>
                <button className='options-explore' onClick={scrollToServices}>
                  <Plane className="explore-icon" size={20} />
                  <span className='explore'>Explore Services</span>
                </button>
              </div>

              {/* Enhanced Stats */}
              <div className='stats-cards'>
                <div className='stats-card'>
                  <div className='stats-icon'>
                    <MapPin className='icon' size={28} />
                  </div>
                  <div className='stats-number'>15+</div>
                  <div className='stats-title'>National Parks & Reserves</div>
                  <div className='stats-subtext'>Including Maasai Mara & Amboseli</div>
                </div>
                <div className='stats-card'>
                  <div className='stats-icon'>
                    <Users className='icon' size={28} />
                  </div>
                  <div className='stats-number'>1,000+</div>
                  <div className='stats-title'>Happy Adventurers</div>
                  <div className='stats-subtext'>From 50+ countries worldwide</div>
                </div>
                <div className='stats-card'>
                  <div className='stats-icon'>
                    <Star className='icon' size={28} />
                  </div>
                  <div className='stats-number'>4.9</div>
                  <div className='stats-title'>Excellence Rating</div>
                  <div className='stats-subtext'>Based on 400+ reviews</div>
                </div>
              </div>

              {/* African Quote */}
              <div className='african-quote'>
                <blockquote className='quote-text'>
                  "In Africa, you have space. There are huge empty places. It's a profound silence."
                  <footer className='quote-footer'>- African Proverb</footer>
                </blockquote>
              </div>
            </div>
          </div>
        </section>
        <section className='comprehensive'>
          <div className='top-section'>
            <div className='services-badge'>
              <span>Our premium services</span>
            </div>
            
            <span className='services-heading'>Comprehensive African</span>
            <span className='services-subheading'>Adventure Solutions</span>
            
            <p className='services-description'>From thrilling safaris to seamless transfers, 
              we provide end-to-end logistics for unforgettable African experiences
               rooted in authentic cultural connections.</p>
          </div>

          <div className='services-container'>
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>

          <div className='services-ready'>
            <h3>Ready to Experience Authentic Africa?</h3>
            <p>Let our local experts craft a personalized journey that connects you with the heart and soul of Kenya's wilderness and culture.</p>
            <button className='cta-button' onClick={() => setIsModalOpen(true)}>
              Start Planning Your Adventure
            </button>
          </div>
        </section>
        
        <section className='packages'>
          <h2>Featured Safari Packages</h2>
          <span className='packages-span'>Carefully curated safari experiences showcasing Kenya's most spectacular wildlife destinations</span>
          <div className="container">
          <PackageCards />
          </div>
          <button className='explore-packages-btn' onClick={() => navigate('/tours')}>View all Safari Packages</button>
        </section>

        <section className='contact'>
          <ContactSection/>
        </section>
        <section className='company-info'>
          <Footer/>
        </section>
      </main>
      
      <AdventurePlanningModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
}

export default Home;
