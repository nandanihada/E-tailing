import { motion } from 'framer-motion'
import { FiUsers, FiPackage, FiSmile, FiTruck, FiHeadphones, FiSmartphone, FiMonitor, FiCheck } from 'react-icons/fi'
import Button from '../components/ui/Button'

const AboutPage = () => {
  return (
    <div className="about-page">
      <section className="hero-section section" style={{
        backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.9), rgba(255,255,255,0.7)), url(https://images.pexels.com/photos/3184423/pexels-photo-3184423.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: 'var(--spacing-xxl) 0',
      }}>
        <div className="container">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 style={{ 
              marginBottom: 'var(--spacing-md)',
              fontSize: '3rem',
              textAlign: 'center'
            }}>
              Your Trusted Tech Partner Since Day One
            </h1>
            <p style={{ 
              fontSize: '1.25rem',
              color: 'var(--gray-700)',
              maxWidth: '800px',
              margin: '0 auto var(--spacing-xl)',
              lineHeight: 1.6,
              textAlign: 'center'
            }}>
              Welcome to SurveyTitans - India's go-to destination for cutting-edge technology
              products and accessories. We're passionate about making premium tech accessible,
              affordable, and authentic, starting from just ₹200.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: 'var(--spacing-xl)'
          }}>
            <div style={{ gridColumn: 'span 5' }}>
              <motion.div
                className="glass"
                style={{ 
                  borderRadius: 'var(--radius-lg)',
                  overflow: 'hidden',
                  height: '100%',
                  minHeight: '400px'
                }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <img 
                  src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Our team"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </motion.div>
            </div>
            
            <div style={{ gridColumn: 'span 7' }}>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h2 style={{ marginBottom: 'var(--spacing-md)', textAlign: 'center' }}>Our Story</h2>
                <p style={{ marginBottom: 'var(--spacing-md)', lineHeight: 1.8 }}>
                  We began with a simple belief: everyone deserves quality tech without overpaying.
                  What started as a small vision to democratize access to everyday gadgets has grown
                  into a thriving online platform, serving thousands of happy customers across India.
                </p>
                <p style={{ marginBottom: 'var(--spacing-lg)', lineHeight: 1.8 }}>
                  With experience in both the retail and tech sectors, we know what Indian consumers 
                  really need - and we deliver it.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: 'var(--gray-100)' }}>
        <div className="container">
          <motion.h2 
            style={{ 
              textAlign: 'center',
              marginBottom: 'var(--spacing-xl)'
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            What We Offer
          </motion.h2>
          
          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'var(--spacing-xl)'
          }}>
            <ProductCategory 
              icon={<FiSmartphone size={32} />}
              title="Mobile Accessories"
              items={[
                "Stylish & protective phone cases",
                "Screen guards and tempered glass",
                "Fast charging cables and adapters",
                "Power banks & more"
              ]}
              index={0}
            />
            
            <ProductCategory 
              icon={<FiHeadphones size={32} />}
              title="Audio & Electronics"
              items={[
                "Bluetooth earphones & headphones",
                "Smart speakers and audio gear",
                "Gaming headsets & accessories",
                "Smartwatches & wearables"
              ]}
              index={1}
            />
            
            <ProductCategory 
              icon={<FiMonitor size={32} />}
              title="Tech Gadgets & More"
              items={[
                "Laptop peripherals and accessories",
                "Smart home devices",
                "Innovative gadgets",
                "Latest tech solutions"
              ]}
              index={2}
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <motion.h2 
            style={{ 
              textAlign: 'center',
              marginBottom: 'var(--spacing-xl)'
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Why Choose Us?
          </motion.h2>
          
          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: 'var(--spacing-xl)'
          }}>
            <ValueProp 
              icon={<FiCheck size={32} />}
              title="Genuine Products Only"
              description="Sourced directly from authorized distributors - no compromises, no fakes."
              index={0}
            />
            
            <ValueProp 
              icon={<FiCheck size={32} />}
              title="Affordable Pricing"
              description="Starting at just ₹200 - because great tech shouldn't come with a hefty price tag."
              index={1}
            />
            
            <ValueProp 
              icon={<FiCheck size={32} />}
              title="Quality Checked"
              description="Every product passes strict quality control before it reaches you."
              index={2}
            />
            
            <ValueProp 
              icon={<FiCheck size={32} />}
              title="Nationwide Delivery"
              description="Fast, secure, and trackable delivery to every corner of India."
              index={3}
            />
          </div>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: 'var(--gray-100)' }}>
        <div className="container">
          <div className="text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              style={{ marginBottom: 'var(--spacing-lg)', textAlign: 'center' }}
            >
              Company Information
            </motion.h2>
            
            <div style={{ 
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: 'var(--spacing-xl)',
              marginBottom: 'var(--spacing-xxl)'
            }}>
              <CompanyInfo label="Legal Entity" value="SURVTIT Market Research Survey LLP" index={0} />
              <CompanyInfo label="Founded" value="2023" index={1} />
              <CompanyInfo label="Location" value="Saharanpur, UP, India" index={2} />
              <CompanyInfo label="LLPIN" value="ACB-8160" index={3} />
            </div>
            
            <motion.div
              className="glass"
              style={{ 
                padding: 'var(--spacing-xl)',
                borderRadius: 'var(--radius-lg)',
                maxWidth: '800px',
                margin: '0 auto',
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 style={{ marginBottom: 'var(--spacing-md)', textAlign: 'center' }}>Get in Touch</h3>
              <div style={{ 
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: 'var(--spacing-md)',
                textAlign: 'left'
              }}>
                <ContactInfo label="Customer Support" value="support@surveytitans.com" />
                <ContactInfo label="Business Inquiries" value="business@surveytitans.com" />
                <ContactInfo label="Partnerships" value="partnerships@surveytitans.com" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

const ProductCategory = ({ icon, title, items, index }) => {
  return (
    <motion.div 
      className="value-prop glass hover-lift"
      style={{
        padding: 'var(--spacing-xl)',
        borderRadius: 'var(--radius-lg)',
        textAlign: 'center',
        height: '100%',
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
    >
      <div style={{ 
        marginBottom: 'var(--spacing-md)',
        color: 'var(--primary)',
        display: 'flex',
        justifyContent: 'center'
      }}>
        {icon}
      </div>
      <h3 style={{ fontSize: '1.25rem', marginBottom: 'var(--spacing-md)', textAlign: 'center' }}>{title}</h3>
      <ul style={{ 
        listStyle: 'none',
        padding: 0,
        textAlign: 'left',
        color: 'var(--gray-600)'
      }}>
        {items.map((item, i) => (
          <li key={i} style={{ 
            marginBottom: 'var(--spacing-sm)',
            display: 'flex',
            alignItems: 'center',
            gap: 'var(--spacing-sm)'
          }}>
            <FiCheck size={16} color="var(--primary)" />
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

const ValueProp = ({ icon, title, description, index }) => {
  return (
    <motion.div 
      className="value-prop glass hover-lift"
      style={{
        padding: 'var(--spacing-xl)',
        borderRadius: 'var(--radius-lg)',
        textAlign: 'center',
        height: '100%',
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
    >
      <div style={{ 
        marginBottom: 'var(--spacing-md)',
        color: 'var(--primary)',
        display: 'flex',
        justifyContent: 'center'
      }}>
        {icon}
      </div>
      <h3 style={{ fontSize: '1.25rem', marginBottom: 'var(--spacing-sm)', textAlign: 'center' }}>{title}</h3>
      <p style={{ color: 'var(--gray-600)', textAlign: 'center' }}>{description}</p>
    </motion.div>
  )
}

const CompanyInfo = ({ label, value, index }) => {
  return (
    <motion.div
      style={{ textAlign: 'center' }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
    >
      <div style={{ 
        fontSize: '1rem',
        color: 'var(--gray-600)',
        marginBottom: 'var(--spacing-xs)',
        textAlign: 'center'
      }}>
        {label}
      </div>
      <div style={{ 
        fontSize: '1.125rem',
        fontWeight: 600,
        color: 'var(--gray-900)',
        textAlign: 'center'
      }}>
        {value}
      </div>
    </motion.div>
  )
}

const ContactInfo = ({ label, value }) => {
  return (
    <div>
      <div style={{ 
        fontSize: '0.875rem',
        color: 'var(--gray-600)',
        marginBottom: 'var(--spacing-xs)',
        textAlign: 'center'
      }}>
        {label}
      </div>
      <div style={{ 
        fontSize: '1rem',
        color: 'var(--primary)',
        textAlign: 'center'
      }}>
        {value}
      </div>
    </div>
  )
}

export default AboutPage