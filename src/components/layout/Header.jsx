import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiShoppingCart, FiMenu, FiX, FiSearch } from 'react-icons/fi'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsScrolled(scrollPosition > 50)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  useEffect(() => {
    // Close menu when changing routes
    setMenuOpen(false)
  }, [location])

  return (
    <header 
      className={`header ${isScrolled ? 'glass scrolled' : ''}`}
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        padding: isScrolled ? '12px 0' : '20px 0',
        transition: 'all 0.3s ease',
        backgroundColor: isScrolled ? 'var(--glass-bg)' : 'transparent',
        backdropFilter: isScrolled ? 'var(--glass-blur)' : 'none',
        borderBottom: isScrolled ? '1px solid var(--glass-border)' : 'none',
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Link to="/" className="logo" style={{ fontWeight: 700, fontSize: '1.5rem', color: 'var(--gray-900)' }}>
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            style={{ color: 'var(--primary)' }}
          >
            Quirky
          </motion.span>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Store
          </motion.span>
        </Link>
        
        <div className="search-bar" style={{ 
          flex: '1', 
          maxWidth: '400px', 
          margin: '0 var(--spacing-xl)',
          display: menuOpen ? 'none' : 'flex',
          alignItems: 'center',
          background: 'var(--white)',
          borderRadius: 'var(--radius-full)',
          padding: 'var(--spacing-sm) var(--spacing-md)',
          boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
        }}>
          <input 
            type="text" 
            placeholder="Search for products..."
            style={{
              border: 'none',
              padding: 'var(--spacing-sm)',
              flex: 1,
              background: 'transparent',
              outline: 'none',
            }}
          />
          <FiSearch size={20} color="var(--gray-600)" />
        </div>
        
        <nav 
          className={menuOpen ? 'active' : ''}
          style={{
            display: menuOpen ? 'flex' : 'none',
            position: menuOpen ? 'fixed' : 'static',
            top: menuOpen ? '0' : 'auto',
            left: menuOpen ? '0' : 'auto',
            width: menuOpen ? '100%' : 'auto',
            height: menuOpen ? '100vh' : 'auto',
            backgroundColor: menuOpen ? 'var(--white)' : 'transparent',
            zIndex: menuOpen ? '200' : '1',
            flexDirection: menuOpen ? 'column' : 'row',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 'var(--spacing-lg)',
            '@media (min-width: 768px)': {
              display: 'flex',
              position: 'static',
              width: 'auto',
              height: 'auto',
              backgroundColor: 'transparent',
            }
          }}
        >
          {menuOpen && (
            <button 
              className="close-menu" 
              onClick={() => setMenuOpen(false)}
              style={{
                position: 'absolute',
                top: 'var(--spacing-lg)',
                right: 'var(--spacing-lg)',
                backgroundColor: 'transparent',
                border: 'none',
                cursor: 'pointer',
                fontSize: '1.5rem',
              }}
            >
              <FiX size={24} />
            </button>
          )}
          
          <NavItem to="/" label="Home" />
          <NavItem to="/categories" label="Categories" />
          <NavItem to="/about" label="About" />
          <NavItem to="/blog" label="Blog" />
          <NavItem to="/contact" label="Contact" />
        </nav>
        
        <div className="header-actions" style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-md)' }}>
          <Link to="/cart" className="cart-icon hover-scale" style={{ position: 'relative' }}>
            <FiShoppingCart size={24} />
            <span style={{
              position: 'absolute',
              top: '-8px',
              right: '-8px',
              background: 'var(--primary)',
              color: 'var(--white)',
              borderRadius: '50%',
              width: '18px',
              height: '18px',
              fontSize: '0.75rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>3</span>
          </Link>
          
          <button 
            className="menu-toggle"
            onClick={() => setMenuOpen(true)}
            style={{
              display: 'block',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              '@media (min-width: 768px)': {
                display: 'none',
              }
            }}
          >
            <FiMenu size={24} />
          </button>
        </div>
      </div>
    </header>
  )
}

const NavItem = ({ to, label }) => {
  const location = useLocation()
  const isActive = location.pathname === to
  
  return (
    <Link 
      to={to}
      style={{
        fontWeight: isActive ? '600' : '400',
        color: isActive ? 'var(--primary)' : 'var(--gray-800)',
        position: 'relative',
        padding: 'var(--spacing-sm) var(--spacing-md)',
      }}
      className="nav-item"
    >
      {label}
      {isActive && (
        <motion.div 
          layoutId="navbar-indicator"
          style={{
            position: 'absolute',
            bottom: '-2px',
            left: '0',
            right: '0',
            height: '2px',
            backgroundColor: 'var(--primary)',
            borderRadius: 'var(--radius-full)',
          }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        />
      )}
    </Link>
  )
}

export default Header