import { Link } from 'react-router-dom'
import { FiMail, FiPhone, FiMapPin, FiFacebook, FiInstagram, FiTwitter, FiYoutube } from 'react-icons/fi'

const Footer = () => {
  return (
    <footer className="footer" style={{ backgroundColor: 'var(--gray-900)', color: 'var(--gray-300)', padding: 'var(--spacing-xxl) 0 var(--spacing-lg)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 'var(--spacing-xl)' }}>
          <div className="footer-section">
            <h4 style={{ color: 'var(--white)', marginBottom: 'var(--spacing-lg)' }}>QuirkyStore</h4>
            <p style={{ marginBottom: 'var(--spacing-lg)' }}>
              Discover unique, unusual and surprisingly useful products you didn't know you needed.
            </p>
            <div className="social-links" style={{ display: 'flex', gap: 'var(--spacing-md)' }}>
              <a href="#" className="social-icon hover-scale" style={{ color: 'var(--gray-300)', transition: 'color 0.3s ease' }}>
                <FiFacebook size={20} />
              </a>
              <a href="#" className="social-icon hover-scale" style={{ color: 'var(--gray-300)', transition: 'color 0.3s ease' }}>
                <FiInstagram size={20} />
              </a>
              <a href="#" className="social-icon hover-scale" style={{ color: 'var(--gray-300)', transition: 'color 0.3s ease' }}>
                <FiTwitter size={20} />
              </a>
              <a href="#" className="social-icon hover-scale" style={{ color: 'var(--gray-300)', transition: 'color 0.3s ease' }}>
                <FiYoutube size={20} />
              </a>
            </div>
          </div>
          
          <div className="footer-section">
            <h5 style={{ color: 'var(--white)', marginBottom: 'var(--spacing-lg)' }}>Shop</h5>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              <FooterLink to="/categories" label="All Categories" />
              <FooterLink to="/categories" label="Home Hacks" />
              <FooterLink to="/categories" label="Tech & Gadgets" />
              <FooterLink to="/categories" label="Clean & Tidy" />
              <FooterLink to="/categories" label="Just Plain Weird" />
            </ul>
          </div>
          
          <div className="footer-section">
            <h5 style={{ color: 'var(--white)', marginBottom: 'var(--spacing-lg)' }}>Company</h5>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              <FooterLink to="/about" label="About Us" />
              <FooterLink to="/blog" label="Blog" />
              <FooterLink to="/contact" label="Contact" />
              <FooterLink to="/" label="Shipping & Returns" />
              <FooterLink to="/" label="Privacy Policy" />
            </ul>
          </div>
          
          <div className="footer-section">
            <h5 style={{ color: 'var(--white)', marginBottom: 'var(--spacing-lg)' }}>Contact</h5>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-md)', marginBottom: 'var(--spacing-md)' }}>
                <FiMail size={16} />
                <span>support@quirkystore.com</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-md)', marginBottom: 'var(--spacing-md)' }}>
                <FiPhone size={16} />
                <span>+91 90000 00000</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-md)', marginBottom: 'var(--spacing-md)' }}>
                <FiMapPin size={16} />
                <span>Online only — but always here</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom" style={{ 
          marginTop: 'var(--spacing-xxl)', 
          paddingTop: 'var(--spacing-lg)',
          borderTop: '1px solid var(--gray-700)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center'
        }}>
          <p style={{ color: 'var(--gray-500)', fontSize: '0.875rem' }}>
            &copy; {new Date().getFullYear()} QuirkyStore. All rights reserved.
          </p>
          <p style={{ color: 'var(--gray-500)', fontSize: '0.875rem', marginTop: 'var(--spacing-sm)' }}>
            Made with ❤️ for the curious minds
          </p>
        </div>
      </div>
    </footer>
  )
}

const FooterLink = ({ to, label }) => {
  return (
    <li style={{ marginBottom: 'var(--spacing-md)' }}>
      <Link 
        to={to} 
        style={{ 
          color: 'var(--gray-400)', 
          transition: 'color 0.3s ease',
          textDecoration: 'none'
        }}
        className="footer-link"
        onMouseOver={(e) => e.target.style.color = 'var(--primary)'}
        onMouseOut={(e) => e.target.style.color = 'var(--gray-400)'}
      >
        {label}
      </Link>
    </li>
  )
}

export default Footer