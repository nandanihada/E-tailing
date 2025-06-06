import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiArrowRight, FiCalendar, FiUser, FiTag } from 'react-icons/fi'
import { FiShoppingCart, FiSmartphone, FiTruck, FiCreditCard, FiHeadphones, FiHardDrive, FiGift, FiShield, FiBriefcase, FiSettings } from 'react-icons/fi'

const services = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    slug: 'e-commerce-platform',
    excerpt: "Seamless digital shopping experience with user-friendly navigation, advanced search, secure checkout, and multiple payment options.",
    image: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=800',
    icon: <FiShoppingCart />,
    category: 'Shopping',
    featured: true,
    details: [
      "User-friendly website with intuitive navigation",
      "Advanced search and filter options",
      "Detailed product descriptions",
      "High-resolution product images/videos",
      "Customer reviews and ratings",
      "Secure checkout process",
      "Multiple payment options",
      "Mobile-optimized platform"
    ]
  },
  {
    id: 2,
    title: 'Mobile Accessories',
    slug: 'mobile-accessories',
    excerpt: 'Premium cases, charging solutions, and protection accessories for all major smartphone brands.',
    image: 'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=800',
    icon: <FiSmartphone />,
    category: 'Products',
    details: [
      "Premium cases for iPhone, Samsung, OnePlus, Xiaomi",
      "Rugged protection cases",
      "Screen protectors",
      "Fast charging cables",
      "Wireless charging pads",
      "Power banks (5000mAh to 30000mAh)",
      "Starting from ₹200"
    ]
  },
  {
    id: 3,
    title: 'Delivery Services',
    slug: 'delivery-services',
    excerpt: 'Pan-India delivery with standard, express, and same-day options to meet all your urgency needs.',
    image: 'https://images.pexels.com/photos/4391470/pexels-photo-4391470.jpeg?auto=compress&cs=tinysrgb&w=800',
    icon: <FiTruck />,
    category: 'Logistics',
    details: [
      "Standard Delivery (3-7 business days)",
      "Express Delivery (1-3 business days)",
      "Same-Day Delivery (Metro cities)",
      "Real-time shipment tracking",
      "Secure packaging",
      "Coverage: 25,000+ PIN codes",
      "Starting from ₹40"
    ]
  },
  {
    id: 4,
    title: 'Payment Services',
    slug: 'payment-services',
    excerpt: 'Multiple secure payment options including digital wallets, UPI, cards, and cash on delivery.',
    image: 'https://images.pexels.com/photos/4386158/pexels-photo-4386158.jpeg?auto=compress&cs=tinysrgb&w=800',
    icon: <FiCreditCard />,
    category: 'Finance',
    details: [
      "Credit/Debit Cards (Visa, MasterCard, RuPay)",
      "UPI Payments (Google Pay, PhonePe)",
      "Digital Wallets (Paytm, Amazon Pay)",
      "Cash on Delivery (15,000+ locations)",
      "Bank Transfer/NEFT",
      "256-bit SSL encryption",
      "PCI DSS compliant"
    ]
  },
  {
    id: 5,
    title: 'Audio & Electronics',
    slug: 'audio-electronics',
    excerpt: 'Premium sound solutions and smart electronics to enhance your digital lifestyle.',
    image: 'https://images.pexels.com/photos/3394663/pexels-photo-3394663.jpeg?auto=compress&cs=tinysrgb&w=800',
    icon: <FiHeadphones />,
    category: 'Products',
    details: [
      "Bluetooth earphones and headphones",
      "Wired earphones with premium sound",
      "Portable Bluetooth speakers",
      "Gaming headsets",
      "Fitness trackers and smartwatches",
      "Smart home devices",
      "Tech gadgets and accessories"
    ]
  },
  {
    id: 6,
    title: 'Computer Accessories',
    slug: 'computer-accessories',
    excerpt: 'Enhance your productivity with our range of laptop accessories and storage solutions.',
    image: 'https://images.pexels.com/photos/3825586/pexels-photo-3825586.jpeg?auto=compress&cs=tinysrgb&w=800',
    icon: <FiHardDrive />,
    category: 'Products',
    details: [
      "Laptop bags and sleeves",
      "Wireless keyboards and mice",
      "USB hubs and adapters",
      "Monitor stands",
      "External hard drives and SSDs",
      "USB flash drives",
      "Memory cards (SD, microSD)"
    ]
  }
]

const ServicesPage = () => {
  const featuredService = services.find(service => service.featured)
  const regularServices = services.filter(service => !service.featured)
  
  return (
    <div className="blog-page">
      <section className="hero-section section" style={{ paddingBottom: 0 }}>
        <div className="container">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 style={{ marginBottom: 'var(--spacing-md)' }}>
              Our Services
            </h1>
            <p style={{ 
              fontSize: '1.25rem',
              color: 'var(--gray-600)',
              maxWidth: '700px',
              margin: '0 auto var(--spacing-xl)',
            }}>
              Complete Tech Solutions at Your Doorstep
            </p>
            <p style={{ 
              fontSize: '1rem',
              color: 'var(--gray-600)',
              maxWidth: '800px',
              margin: '0 auto var(--spacing-xl)',
            }}>
              Survey Titans is your one-stop destination for all technology needs. We offer comprehensive services designed to enhance your digital lifestyle with quality products, exceptional support, and unmatched convenience.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Featured Service */}
      {featuredService && (
        <section className="featured-post section" style={{ paddingTop: 'var(--spacing-lg)' }}>
          <div className="container">
            <motion.div 
              className="glass hover-lift"
              style={{
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                display: 'grid',
                gridTemplateColumns: 'repeat(12, 1fr)',
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -5 }}
            >
              <div style={{ gridColumn: 'span 7', position: 'relative' }}>
                <img 
                  src={featuredService.image} 
                  alt={featuredService.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
                <div style={{
                  position: 'absolute',
                  top: 'var(--spacing-md)',
                  left: 'var(--spacing-md)',
                  backgroundColor: 'var(--primary)',
                  color: 'var(--white)',
                  padding: 'var(--spacing-xs) var(--spacing-md)',
                  borderRadius: 'var(--radius-sm)',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                }}>
                  Featured Service
                </div>
              </div>
              
              <div style={{ 
                gridColumn: 'span 5',
                padding: 'var(--spacing-xl)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}>
                <div style={{ 
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--spacing-md)',
                  marginBottom: 'var(--spacing-md)',
                  color: 'var(--gray-600)',
                  fontSize: '0.875rem',
                }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-xs)' }}>
                    {featuredService.icon}
                    {featuredService.category}
                  </span>
                </div>
                
                <h2 style={{ marginBottom: 'var(--spacing-md)' }}>
                  <Link to={`/services/${featuredService.slug}`} style={{ color: 'var(--gray-900)', textDecoration: 'none' }}>
                    {featuredService.title}
                  </Link>
                </h2>
                
                <p style={{ 
                  marginBottom: 'var(--spacing-lg)',
                  color: 'var(--gray-700)',
                  lineHeight: 1.6,
                }}>
                  {featuredService.excerpt}
                </p>
                
                <ul style={{ 
                  marginBottom: 'var(--spacing-lg)',
                  color: 'var(--gray-600)',
                  paddingLeft: 'var(--spacing-md)',
                }}>
                  {featuredService.details.slice(0, 4).map((detail, index) => (
                    <li key={index} style={{ marginBottom: 'var(--spacing-xs)' }}>{detail}</li>
                  ))}
                </ul>
                
                <div style={{ marginTop: 'auto' }}>
                  <Link 
                    to={`/services/${featuredService.slug}`}
                    style={{ 
                      display: 'flex',
                      alignItems: 'center',
                      gap: 'var(--spacing-xs)',
                      color: 'var(--primary)',
                      fontWeight: 500,
                      textDecoration: 'none',
                    }}
                    className="hover-scale"
                  >
                    View Full Service Details
                    <FiArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}
      
      {/* Regular Services */}
      <section className="blog-posts section">
        <div className="container">
          <h2 style={{ marginBottom: 'var(--spacing-xl)' }}>Our Comprehensive Services</h2>
          
          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: 'var(--spacing-xl)',
          }}>
            {regularServices.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Newsletter */}
      <section className="newsletter-section section" style={{ backgroundColor: 'var(--gray-100)' }}>
        <div className="container">
          <div className="glass" style={{ 
            padding: 'var(--spacing-xl)',
            borderRadius: 'var(--radius-lg)',
            maxWidth: '800px',
            margin: '0 auto',
            textAlign: 'center',
          }}>
            <motion.h2 
              style={{ marginBottom: 'var(--spacing-md)' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Get Started With Survey Titans
            </motion.h2>
            
            <motion.p
              style={{ 
                marginBottom: 'var(--spacing-lg)',
                maxWidth: '600px',
                margin: '0 auto var(--spacing-lg)',
                color: 'var(--gray-600)',
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Sign up to explore our complete range of services and get exclusive offers.
            </motion.p>
            
            <motion.div
              style={{
                display: 'flex',
                gap: 'var(--spacing-md)',
                maxWidth: '500px',
                margin: '0 auto',
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <input 
                type="email" 
                placeholder="Your email address"
                style={{
                  flex: 1,
                  padding: 'var(--spacing-md) var(--spacing-lg)',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--gray-300)',
                  fontSize: '1rem',
                }}
              />
              <button
                style={{
                  backgroundColor: 'var(--primary)',
                  color: 'var(--white)',
                  padding: 'var(--spacing-md) var(--spacing-lg)',
                  borderRadius: 'var(--radius-md)',
                  border: 'none',
                  fontWeight: 500,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  minWidth: '150px',
                }}
                className="hover-scale"
              >
                Sign Up
              </button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

const ServiceCard = ({ service, index }) => {
  return (
    <motion.div 
      className="blog-card glass hover-lift"
      style={{
        borderRadius: 'var(--radius-lg)',
        overflow: 'hidden',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div style={{ position: 'relative' }}>
        <Link to={`/services/${service.slug}`}>
          <img 
            src={service.image} 
            alt={service.title}
            style={{
              width: '100%',
              height: '200px',
              objectFit: 'cover',
            }}
          />
        </Link>
        <div style={{
          position: 'absolute',
          top: 'var(--spacing-md)',
          left: 'var(--spacing-md)',
          backgroundColor: 'var(--white)',
          color: 'var(--primary)',
          padding: 'var(--spacing-xs) var(--spacing-md)',
          borderRadius: 'var(--radius-sm)',
          fontSize: '0.75rem',
          fontWeight: 600,
          display: 'flex',
          alignItems: 'center',
          gap: 'var(--spacing-xs)'
        }}>
          {service.icon}
          {service.category}
        </div>
      </div>
      
      <div style={{ 
        padding: 'var(--spacing-lg)',
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
      }}>
        <h3 style={{ marginBottom: 'var(--spacing-md)', fontSize: '1.25rem' }}>
          <Link to={`/services/${service.slug}`} style={{ color: 'var(--gray-900)', textDecoration: 'none' }}>
            {service.title}
          </Link>
        </h3>
        
        <p style={{ 
          color: 'var(--gray-600)',
          marginBottom: 'var(--spacing-md)',
          lineHeight: 1.6,
        }}>
          {service.excerpt}
        </p>
        
        <ul style={{ 
          color: 'var(--gray-600)',
          marginBottom: 'var(--spacing-md)',
          paddingLeft: 'var(--spacing-md)',
          fontSize: '0.875rem',
          flex: 1,
        }}>
          {service.details.slice(0, 3).map((detail, index) => (
            <li key={index} style={{ marginBottom: 'var(--spacing-xs)' }}>{detail}</li>
          ))}
        </ul>
        
        <Link 
          to={`/services/${service.slug}`}
          style={{ 
            display: 'flex',
            alignItems: 'center',
            gap: 'var(--spacing-xs)',
            color: 'var(--primary)',
            fontWeight: 500,
            textDecoration: 'none',
            marginTop: 'auto',
          }}
          className="hover-scale"
        >
          Learn More
          <FiArrowRight size={16} />
        </Link>
      </div>
    </motion.div>
  )
}

export default ServicesPage