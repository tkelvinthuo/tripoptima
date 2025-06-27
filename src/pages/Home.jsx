import Navbar from '../components/Navbar';
import './Home.css';
import { MapPin, Plane, Users, Star, User } from 'lucide-react';
import ServiceCard from '../components/Services/Services';
import { services } from '../components/Services/servicesData';

function Home() {
  return (
    <>
      <Navbar />
      <main className='home-container'>
        <section className='journey'>
          <div className='journey-content'>
            <div className='highlighted-message'>
              <MapPin className='icon' size={16} />
              <span className='message'>Discover East Africa's Hidden Treasures</span>
            </div>
            <div className='welcome-message'>
              <h1 className='part-a'>Journey Into</h1>
              <h1 className='part-b'>Wild Africa</h1>
            </div>
            <div className='main-message'>
              <p>From the thundering hooves of the Great Migration to the snow-capped peaks of</p>
              <p>Mount Kilimanjaro, experience Africa's raw beauty through our premium logistics</p>
              <p>and safari services.</p>
              <p className='last-part'>Where every journey tells an ancient story.</p>
            </div>
            <div className='options-buttons'>
              <div className='options-start'>
                <MapPin className='options-icon' size={16} />
                <span className='start'>Start Your Safari</span>
              </div>
              <div className='options-explore'>
                <Plane className="mr-2" size={20} />
                <span className='explore'>Explore Services</span>
              </div>
            </div>
            <div className='stats-cards'>
              <div className='stats-card'>
                <div className='stats-icon'>
                  <MapPin className='icon' size={28} />
                </div>

                <p className='stats-number'>15+</p>
                <p className='stats-title'>National Parks and Reserves</p>
                <p className='stats-subtext'>Including Maasai Mara and Amboseli</p>
              </div>
              <div className='stats-card'>
                <div className='stats-icon'>
                  <Users className='icon' size={28} />
                </div>
                <p className='stats-number'>2000+</p>
                <p className='stats-title'>Happy Adventurers</p>
                <p className='stats-subtext'>From 30+ countries worldwide</p>
              </div>
              <div className='stats-card'>
                <div className='stats-icon'>
                  <Star className='icon' size={28} />
                </div>
                <p className='stats-number'>4.8</p>
                <p className='stats-title'>Excellence Rating</p>
                <p className='stats-subtext'>Based on 1000+ reviews</p>
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

          <div>
            <p>Ready to Experience Authentic Africa?</p>
            <p>Let our local experts craft a personalized journey that connects you with the heart</p>
            <p>and soul of Kenya's wilderness and culture.</p>
            <p>Start Planning Your Adventure</p>
          </div>
        </section>
        <section className='packages'>
          <h1>Featured Safari Packages</h1>
        </section>
        <section className='contact'>
          <h1>Get in touch</h1>
        </section>
        <section className='company-info'>
          <h1>Footer</h1>
        </section>
      </main>
    </>
  );
}

export default Home;
