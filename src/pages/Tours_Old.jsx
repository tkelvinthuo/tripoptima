import React, { useState } from 'react';
import Navbar  from '../components/Navbar';
import './Tours.css';
import Footer from '../components/Footer/Footer';
import { Camera, Star, Quote, Calendar, Users, MapPin } from 'lucide-react';
import SeasonalPackages from '../components/Tours/SeasonalPackages';
import ServiceProviders from '../components/Tours/ServiceProviders';

function Tours() {
  const [activeTab, setActiveTab] = useState('destinations');

  const renderTabContent = () => {
    switch(activeTab) {
      case 'destinations':
        return (
          <>
            {/* Featured Parks Section */}
            <section className='featured-parks-section'>
              <div className='featured-parks-container'>
                <div className='parks-header'>
                  <h2 className='parks-title'>Kenya's Crown Jewels</h2>
                  <p className='parks-description'>
                    Explore the diverse ecosystems that make Kenya a world-class safari destination
                  </p>
                </div>
                
                <div className='parks-grid'>
                  {/* Maasai Mara */}
                  <div className='park-card'>
                    <div className='park-image-container'>
                      <img 
                        src='https://images.unsplash.com/photo-1581852017103-68ac65514cf7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80' 
                        alt='Maasai Mara National Reserve'
                        className='park-image' 
                      />
                      <div className='park-badge'>Best: July - October</div>
                    </div>
                    <div className='park-content'>
                      <h3 className='park-name'>Maasai Mara National Reserve</h3>
                      <p className='park-description-text'>
                        Home to the Great Migration and the Big Five, offering spectacular game viewing year-round.
                      </p>
                      <div className='park-highlights'>
                        <div className='highlight-item'>
                          <Camera size={14} className='highlight-icon' />
                          Great Migration
                        </div>
                        <div className='highlight-item'>
                          <Camera size={14} className='highlight-icon' />
                          Big Five
                        </div>
                        <div className='highlight-item'>
                          <Camera size={14} className='highlight-icon' />
                          Hot air balloons
                        </div>
                        <div className='highlight-item'>
                          <Camera size={14} className='highlight-icon' />
                          Maasai culture
                        </div>
                      </div>
                      <button className='explore-btn'>Explore Maasai Mara</button>
                    </div>
                  </div>
                  
                  {/* Amboseli */}
                  <div className='park-card'>
                    <div className='park-image-container'>
                      <img 
                        src='https://images.unsplash.com/photo-1564760055775-d63b17a55c44?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80' 
                        alt='Amboseli National Park'
                        className='park-image' 
                      />
                      <div className='park-badge'>Best: June - October</div>
                    </div>
                    <div className='park-content'>
                      <h3 className='park-name'>Amboseli National Park</h3>
                      <p className='park-description-text'>
                        Famous for large elephant herds and stunning views of Mount Kilimanjaro.
                      </p>
                      <div className='park-highlights'>
                        <div className='highlight-item'>
                          <Camera size={14} className='highlight-icon' />
                          Elephant herds
                        </div>
                        <div className='highlight-item'>
                          <Camera size={14} className='highlight-icon' />
                          Mount Kilimanjaro views
                        </div>
                        <div className='highlight-item'>
                          <Camera size={14} className='highlight-icon' />
                          Swamplands
                        </div>
                        <div className='highlight-item'>
                          <Camera size={14} className='highlight-icon' />
                          Maasai villages
                        </div>
                      </div>
                      <button className='explore-btn'>Explore Amboseli</button>
                    </div>
                  </div>
                  
                  {/* Tsavo */}
                  <div className='park-card'>
                    <div className='park-image-container'>
                      <img 
                        src='https://images.unsplash.com/photo-1534177616072-ef7dc120449d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80' 
                        alt='Tsavo East & West'
                        className='park-image' 
                      />
                      <div className='park-badge'>Best: June - September</div>
                    </div>
                    <div className='park-content'>
                      <h3 className='park-name'>Tsavo East & West</h3>
                      <p className='park-description-text'>
                        Kenya's largest protected area, known for red elephants and diverse landscapes.
                      </p>
                      <div className='park-highlights'>
                        <div className='highlight-item'>
                          <Camera size={14} className='highlight-icon' />
                          Red elephants
                        </div>
                        <div className='highlight-item'>
                          <Camera size={14} className='highlight-icon' />
                          Mzima Springs
                        </div>
                        <div className='highlight-item'>
                          <Camera size={14} className='highlight-icon' />
                          Rock climbing
                        </div>
                        <div className='highlight-item'>
                          <Camera size={14} className='highlight-icon' />
                          Bird watching
                        </div>
                      </div>
                      <button className='explore-btn'>Explore Tsavo</button>
                    </div>
                  </div>
                  
                  {/* Samburu */}
                  <div className='park-card'>
                    <div className='park-image-container'>
                      <img 
                        src='https://images.unsplash.com/photo-1493962853295-0fd70327578a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80' 
                        alt='Samburu National Reserve'
                        className='park-image' 
                      />
                      <div className='park-badge'>Best: June - September</div>
                    </div>
                    <div className='park-content'>
                      <h3 className='park-name'>Samburu National Reserve</h3>
                      <p className='park-description-text'>
                        Unique northern ecosystem with rare species and traditional Samburu culture.
                      </p>
                      <div className='park-highlights'>
                        <div className='highlight-item'>
                          <Camera size={14} className='highlight-icon' />
                          Grevy's zebra
                        </div>
                        <div className='highlight-item'>
                          <Camera size={14} className='highlight-icon' />
                          Reticulated giraffe
                        </div>
                        <div className='highlight-item'>
                          <Camera size={14} className='highlight-icon' />
                          Ewaso Nyiro River
                        </div>
                        <div className='highlight-item'>
                          <Camera size={14} className='highlight-icon' />
                          Samburu culture
                        </div>
                      </div>
                      <button className='explore-btn'>Explore Samburu</button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </>
        );
      case 'seasonal':
        return <SeasonalPackages />;
      case 'providers':
        return <ServiceProviders />;
      default:
        return null;
    }
  };

  return (
    <>
      <Navbar/>
      <main className='tours-container'>
        {/* Hero Section */}
        <section className='hero-section'>
          <div className='hero-overlay'></div>
          <div className='hero-content'>
            <h1 className='hero-title'>
              African Safari Adventures
            </h1>
            <p className='hero-description'>
              Experience the untamed beauty of Kenya's wilderness through expertly 
              guided safaris that bring you face-to-face with Africa's most 
              magnificent wildlife.
            </p>
          </div>
        </section>
        
        {/* Introduction Section */}
        <section className='introduction-section'>
          <div className='introduction-container'>
            <div className='introduction-content'>
              <h2 className='introduction-title'>
                Discover Kenya's Premier National Parks
              </h2>
              <p className='introduction-description'>
                Kenya is home to some of Africa's most spectacular wildlife destinations. Our expertly crafted 
                safari packages take you deep into these pristine ecosystems, where every game drive reveals 
                new wonders. From the thundering hooves of the Great Migration to intimate encounters with 
                gentle giants, each safari is a journey into the heart of wild Africa.
              </p>
              <div className='stats-grid'>
                <div className='stat-item'>
                  <div className='stat-number'>15+</div>
                  <div className='stat-label'>National Parks</div>
                </div>
                <div className='stat-item'>
                  <div className='stat-number'>500+</div>
                  <div className='stat-label'>Safari Tours</div>
                </div>
                <div className='stat-item'>
                  <div className='stat-number'>98%</div>
                  <div className='stat-label'>Success Rate</div>
                </div>
                <div className='stat-item'>
                  <div className='stat-number'>24/7</div>
                  <div className='stat-label'>Support</div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Navigation Tabs */}
        <section className='tours-navigation'>
          <div className='navigation-container'>
            <div className='tab-buttons'>
              <button 
                className={`tab-btn ${activeTab === 'destinations' ? 'active' : ''}`}
                onClick={() => setActiveTab('destinations')}
              >
                <MapPin size={18} />
                Destinations
              </button>
              <button 
                className={`tab-btn ${activeTab === 'seasonal' ? 'active' : ''}`}
                onClick={() => setActiveTab('seasonal')}
              >
                <Calendar size={18} />
                Seasonal Packages
              </button>
              <button 
                className={`tab-btn ${activeTab === 'providers' ? 'active' : ''}`}
                onClick={() => setActiveTab('providers')}
              >
                <Users size={18} />
                Service Providers
              </button>
            </div>
          </div>
        </section>
        
        {/* Tab Content */}
        <div className='tab-content'>
          {renderTabContent()}
        </div>
        
        {/* Testimonials Section - Keep this outside tabs */}
        <section className='testimonials-section'>
          <div className='testimonials-container'>
            <div className='testimonials-header'>
              <h2 className='testimonials-title'>Stories from the Savanna</h2>
              <p className='testimonials-description'>
                Hear from adventurers who've experienced the magic of African safaris
              </p>
            </div>

            <div className='testimonials-grid'>
                <div className='park-image-container'>
                  <img 
                    src='https://images.unsplash.com/photo-1581852017103-68ac65514cf7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80' 
                    alt='Maasai Mara National Reserve'
                    className='park-image' 
                  />
                  <div className='park-badge'>Best: July - October</div>
                </div>
                <div className='park-content'>
                  <h3 className='park-name'>Maasai Mara National Reserve</h3>
                  <p className='park-description-text'>
                    Home to the Great Migration and the Big Five, offering spectacular game viewing year-round.
                  </p>
                  <div className='park-highlights'>
                    <div className='highlight-item'>
                      <Camera size={14} className='highlight-icon' />
                      Great Migration
                    </div>
                    <div className='highlight-item'>
                      <Camera size={14} className='highlight-icon' />
                      Big Five
                    </div>
                    <div className='highlight-item'>
                      <Camera size={14} className='highlight-icon' />
                      Hot air balloons
                    </div>
                    <div className='highlight-item'>
                      <Camera size={14} className='highlight-icon' />
                      Maasai culture
                    </div>
                  </div>
                  <button className='explore-btn'>Explore Maasai Mara</button>
                </div>
              </div>
              
              {/* Amboseli */}
              <div className='park-card'>
                <div className='park-image-container'>
                  <img 
                    src='https://images.unsplash.com/photo-1564760055775-d63b17a55c44?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80' 
                    alt='Amboseli National Park'
                    className='park-image' 
                  />
                  <div className='park-badge'>Best: June - October</div>
                </div>
                <div className='park-content'>
                  <h3 className='park-name'>Amboseli National Park</h3>
                  <p className='park-description-text'>
                    Famous for large elephant herds and stunning views of Mount Kilimanjaro.
                  </p>
                  <div className='park-highlights'>
                    <div className='highlight-item'>
                      <Camera size={14} className='highlight-icon' />
                      Elephant herds
                    </div>
                    <div className='highlight-item'>
                      <Camera size={14} className='highlight-icon' />
                      Mount Kilimanjaro views
                    </div>
                    <div className='highlight-item'>
                      <Camera size={14} className='highlight-icon' />
                      Swamplands
                    </div>
                    <div className='highlight-item'>
                      <Camera size={14} className='highlight-icon' />
                      Maasai villages
                    </div>
                  </div>
                  <button className='explore-btn'>Explore Amboseli</button>
                </div>
              </div>
              
              {/* Tsavo */}
              <div className='park-card'>
                <div className='park-image-container'>
                  <img 
                    src='https://images.unsplash.com/photo-1534177616072-ef7dc120449d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80' 
                    alt='Tsavo East & West'
                    className='park-image' 
                  />
                  <div className='park-badge'>Best: June - September</div>
                </div>
                <div className='park-content'>
                  <h3 className='park-name'>Tsavo East & West</h3>
                  <p className='park-description-text'>
                    Kenya's largest protected area, known for red elephants and diverse landscapes.
                  </p>
                  <div className='park-highlights'>
                    <div className='highlight-item'>
                      <Camera size={14} className='highlight-icon' />
                      Red elephants
                    </div>
                    <div className='highlight-item'>
                      <Camera size={14} className='highlight-icon' />
                      Mzima Springs
                    </div>
                    <div className='highlight-item'>
                      <Camera size={14} className='highlight-icon' />
                      Rock climbing
                    </div>
                    <div className='highlight-item'>
                      <Camera size={14} className='highlight-icon' />
                      Bird watching
                    </div>
                  </div>
                  <button className='explore-btn'>Explore Tsavo</button>
                </div>
              </div>
              
              {/* Samburu */}
            <div className='testimonials-grid'>
              {/* Testimonial 1 */}
              <div className='testimonial-card'>
                <div className='testimonial-header'>
                  <div className='testimonial-avatar'>
                    <img src='https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80' alt='Sarah Johnson' className='testimonial-image'/>
                  </div>
                  <div className='testimonial-info'>
                    <h3 className='testimonial-name'>Sarah Johnson</h3>
                    <p className='testimonial-country'>United States</p>
                  </div>
                </div>
                <div className='testimonial-rating'>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className='testimonial-star' size={16} />
                  ))}
                </div>
                <div className='testimonial-content'>
                  <Quote className='testimonial-quote' size={20}/>
                  <p className='testimonial-comment'>
                    "The Maasai Mara safari exceeded all expectations. Our guide was incredibly knowledgeable and we witnessed the river crossing during the Great Migration. Absolutely magical!"
                  </p>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className='testimonial-card'>
                <div className='testimonial-header'>
                  <div className='testimonial-avatar'>
                    <img src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80' alt='James Mitchell' className='testimonial-image'/>
                  </div>
                  <div className='testimonial-info'>
                    <h3 className='testimonial-name'>James Mitchell</h3>
                    <p className='testimonial-country'>United Kingdom</p>
                  </div>
                </div>
                <div className='testimonial-rating'>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className='testimonial-star' size={16} />
                  ))}
                </div>
                <div className='testimonial-content'>
                  <Quote className='testimonial-quote' size={20}/>
                  <p className='testimonial-comment'>
                    "Three weeks exploring Kenya's parks with Safari Logistics was the trip of a lifetime. Professional guides, comfortable accommodations, and unforgettable wildlife encounters."
                  </p>
                </div>
              </div>

              {/* Testimonial 3 */}
              <div className='testimonial-card'>
                <div className='testimonial-header'>
                  <div className='testimonial-avatar'>
                    <img src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80' alt='Maria Rodriguez' className='testimonial-image'/>
                  </div>
                  <div className='testimonial-info'>
                    <h3 className='testimonial-name'>Maria Rodriguez</h3>
                    <p className='testimonial-country'>Spain</p>
                  </div>
                </div>
                <div className='testimonial-rating'>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className='testimonial-star' size={16} />
                  ))}
                </div>
                <div className='testimonial-content'>
                  <Quote className='testimonial-quote' size={20}/>
                  <p className='testimonial-comment'>
                    "Perfect organization from start to finish. The Amboseli safari with Mount Kilimanjaro backdrop was breathtaking. Highly recommend their personalized service!"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className='cta-section'>
          <div className='cta-container'>
            <h2 className='cta-title'>Ready for Your African Adventure?</h2>
            <p className='cta-description'>
              Let our expert guides create a personalized safari experience that will create memories to last a lifetime.
            </p>
            <div className='cta-buttons'>
              <button className='cta-btn-primary'>Plan My Safari</button>
              <button className='cta-btn-secondary'>View All Packages</button>
            </div>
          </div>
        </section>
        
        <Footer/>
      </main>
    </>
  );
}

export default Tours;
