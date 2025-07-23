import './Footer.css';
import { MapPin, Phone, Mail, FacebookIcon, TwitterIcon, InstagramIcon } from 'lucide-react';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">

          {/* Company Info */}
          <div className="footer-section">
            <div className="footer-brand">
              <div className="brand-logo">SL</div>
              <div>
                <h3>Safari Logistics</h3>
                <p className="tagline">Premium Travel Services</p>
              </div>
            </div>
            <p className="company-description">
              Your trusted partner for unforgettable African adventures and premium logistics services across East Africa.
            </p>
            <div className="social-icons">
              <FacebookIcon className="icon" size={20} />
              <TwitterIcon className="icon" size={20} />
              <InstagramIcon className="icon" size={20} />
            </div>
          </div>

          {/* Services */}
          <div className="footer-section">
            <h4>Our Services</h4>
            <ul>
              <li><a href="#">Safari Tours</a></li>
              <li><a href="#">Airport Transfers</a></li>
              <li><a href="#">Chauffeur Services</a></li>
              <li><a href="#">Car Hire</a></li>
              <li><a href="#">Group Travel</a></li>
            </ul>
          </div>

          {/* Destinations */}
          <div className="footer-section">
            <h4>Popular Destinations</h4>
            <ul>
              <li><a href="#">Maasai Mara</a></li>
              <li><a href="#">Amboseli National Park</a></li>
              <li><a href="#">Tsavo East & West</a></li>
              <li><a href="#">Lake Nakuru</a></li>
              <li><a href="#">Samburu Reserve</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h4>Contact Info</h4>
            <div className="contact-info">
              <div><Phone size={16} /> <span>+254 724 121246</span></div>
              <div><Mail size={16} /> <span>info@safarilogistics.com</span></div>
              <div><MapPin size={16} className="pin-icon" /> <span>Westlands, Nairobi<br />Kenya, East Africa</span></div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2025 Roam And Rove Xpeditions. All rights reserved.</p>
          <div className="footer-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
