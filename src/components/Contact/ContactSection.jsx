import './ContactSection.css';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

function ContactSection() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-header">
          <h2>Get In Touch</h2>
          <p>
            Ready to start your African adventure? Contact our expert team for personalized service.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left Column - Form */}
          <div className="contact-form-card">
            <h3>Send Us a Message</h3>
            <form className="contact-form">
              <div className="form-row">
                <input type="text" placeholder="First Name" />
                <input type="text" placeholder="Last Name" />
              </div>
              <input type="email" placeholder="Email Address"  className='contact-email'/>
              <input type="text" placeholder="Phone Number"  className='contact-number'/>
              <textarea placeholder="Tell us about your travel plans..." rows={4}></textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>

          {/* Right Column - Info */}
          <div className="contact-info">
            <div className="info-group">
              <Phone size={24} className="info-icon" />
              <div>
                <h4>Phone</h4>
                <p>+254 700 123 456</p>
                <p>+254 711 987 654</p>
              </div>
            </div>
            <div className="info-group">
              <Mail size={24} className="info-icon" />
              <div>
                <h4>Email</h4>
                <p>info@safarilogistics.com</p>
                <p>bookings@safarilogistics.com</p>
              </div>
            </div>
            <div className="info-group">
              <MapPin size={24} className="info-icon" />
              <div>
                <h4>Address</h4>
                <p>Westlands, Nairobi</p>
                <p>Kenya, East Africa</p>
              </div>
            </div>
            <div className="info-group">
              <Clock size={24} className="info-icon" />
              <div>
                <h4>Operating Hours</h4>
                <p>24/7 Customer Support</p>
                <p>Office: Mon–Fri 8AM–6PM</p>
              </div>
            </div>

            <div className="info-note">
              <h4>Why Choose Safari Logistics?</h4>
              <ul>
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
