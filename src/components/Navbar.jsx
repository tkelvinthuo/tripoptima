import './Navbar.css';
import { Menu, X, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";


function Navbar () {
    return (
        <header className='navBar'>
            <div className='topBar'>
                <div className='contact-left'>
                    <Phone className='amber-icon' size={16}/>
                    <span>+254 724 121246</span>
                </div>
                <div className='contact-right'>
                    <Mail className='amber-icon' size={16}/>
                    <span>roamrovexpeditions@gmail.com</span>
                </div>
            </div>
             <div className='topBar-divider'></div>
            <div className="main-nav">
                <div className="nav-left">
                    <img src="/roamnrove.png" alt="R&R" className="logo" />
                    <div className="brand-text">
                    <span className="brand-name">Roam & Rove</span>
                    <span className="brand-tagline">Authentic African Adventures</span>
                    </div>
                </div>
                <nav className="nav-links">
                    <Link to='/'>Home</Link>
                    <Link to='/tours'>Tours & Safaris</Link>
                    <Link to='/airport'>Airport Transfers</Link>
                    <Link to='/carhire'>Car Hire</Link>
                    <Link to='/chauffeur'>Chauffeur Services</Link>
                </nav>
            </div>
        </header>
    );
}

export default Navbar;