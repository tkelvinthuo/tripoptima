import './ContactSection.css';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

function ContactSection() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-header">
          <h2>Get In Touch</h2>
          <p>
            Ready to start your African adventure? Contact our expert team for personalized service
          </p>
        </div>

        <div className="contact-grid">
          {/* Contact Form */}
          <div className="contact-form-card">
            <div className="card-header">
              <h3>Send Us a Message</h3>
            </div>
            <div className="card-content">
              <form className="contact-form">
                <div className="form-row">
                  <input 
                    type="text" 
                    placeholder="First Name" 
                    className="form-input"
                  />
                  <input 
                    type="text" 
                    placeholder="Last Name" 
                    className="form-input"
                  />
                </div>
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="form-input"
                />
                <input 
                  type="tel" 
                  placeholder="Phone Number" 
                  className="form-input"
                />
                <textarea 
                  placeholder="Tell us about your travel plans..." 
                  rows={4}
                  className="form-textarea"
                ></textarea>
                <button type="submit" className="form-button">
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="contact-info">
            <div className="info-section">
              <h3 className="info-title">Contact Information</h3>
              <div className="info-groups">
                <div className="info-group">
                  <div className="info-header">
                    <Phone className="info-icon" size={24} />
                    <h4>Phone</h4>
                  </div>
                  <div className="info-details">
                    <p>+254 724 121 246</p>
                    <p>+254 735 121 246</p>
                  </div>
                </div>
                
                <div className="info-group">
                  <div className="info-header">
                    <Mail className="info-icon" size={24} />
                    <h4>Email</h4>
                  </div>
                  <div className="info-details">
                    <p>info@safarilogistics.com</p>
                    <p>bookings@safarilogistics.com</p>
                  </div>
                </div>
                
                <div className="info-group">
                  <div className="info-header">
                    <MapPin className="info-icon" size={24} />
                    <h4>Address</h4>
                  </div>
                  <div className="info-details">
                    <p>Karen, Nairobi</p>
                    <p>Kenya, East Africa</p>
                  </div>
                </div>
                
                <div className="info-group">
                  <div className="info-header">
                    <Clock className="info-icon" size={24} />
                    <h4>Operating Hours</h4>
                  </div>
                  <div className="info-details">
                    <p>24/7 Customer Support</p>
                    <p>Office: Mon-Fri 8AM-6PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="info-note">
              <h4>Why Choose Safari Logistics?</h4>
              <ul className="info-list">
                <li>• 10+ years of experience in African tourism</li>
                <li>• Licensed and insured operations</li>
                <li>• Professional multilingual guides</li>
                <li>• Modern, well-maintained vehicle fleet</li>
                <li>• 24/7 customer support</li>
                <li>• Competitive pricing with no hidden fees</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
