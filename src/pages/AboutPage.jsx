import { motion } from 'framer-motion'
import { FiUsers, FiPackage, FiSmile, FiTruck } from 'react-icons/fi'
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
              fontSize: '3rem'
            }}>
              Built for the Curious
            </h1>
            <p style={{ 
              fontSize: '1.25rem',
              color: 'var(--gray-700)',
              maxWidth: '700px',
              margin: '0 auto var(--spacing-xl)',
              lineHeight: 1.6
            }}>
              We're not your average store. We're a team of explorers who hunt for strange, smart, and 
              conversation-starting products from all over the globe.
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
                <h2 style={{ marginBottom: 'var(--spacing-md)' }}>Our Story</h2>
                <p style={{ marginBottom: 'var(--spacing-md)', lineHeight: 1.8 }}>
                  QuirkyStore began in 2023 with a simple mission: find products that make people say "I need that!" 
                  and "I've never seen that before!" in the same breath.
                </p>
                <p style={{ marginBottom: 'var(--spacing-md)', lineHeight: 1.8 }}>
                  We believe shopping should be an adventure. That's why we scour markets, trade shows, and 
                  social media to find items that are equal parts delightful, surprising, and genuinely useful.
                </p>
                <p style={{ marginBottom: 'var(--spacing-lg)', lineHeight: 1.8 }}>
                  If it makes us laugh and say "wait, that's useful!" — it's in. We live for delight, oddity, 
                  and practicality in one box.
                </p>
                
                <Button 
                  variant="primary"
                  size="large"
                  animated={true}
                >
                  Join Our Journey
                </Button>
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
            What Makes Us Different
          </motion.h2>
          
          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: 'var(--spacing-xl)'
          }}>
            <ValueProp 
              icon={<FiUsers size={32} />}
              title="Human Curation"
              description="No algorithms. Real people find, test, and approve every item in our collection."
              index={0}
            />
            
            <ValueProp 
              icon={<FiPackage size={32} />}
              title="Unique Selection"
              description="We don't stock what you'll find everywhere else. Our inventory is deliberately different."
              index={1}
            />
            
            <ValueProp 
              icon={<FiSmile size={32} />}
              title="Delight Guarantee"
              description="If it doesn't make you smile or solve a problem, we don't want it in our store."
              index={2}
            />
            
            <ValueProp 
              icon={<FiTruck size={32} />}
              title="Fast Shipping"
              description="Most orders arrive in 3-5 business days across India. Because weird shouldn't wait."
              index={3}
            />
          </div>
        </div>
      </section>
      
      <section className="section">
        <div className="container">
          <div className="text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              style={{ marginBottom: 'var(--spacing-lg)' }}
            >
              The Numbers That Make Us Smile
            </motion.h2>
            
            <div style={{ 
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: 'var(--spacing-xl)',
              marginBottom: 'var(--spacing-xxl)'
            }}>
              <StatCounter number="100+" label="Unique Products" index={0} />
              <StatCounter number="10,000+" label="Happy Customers" index={1} />
              <StatCounter number="4.8" label="Average Rating" index={2} />
              <StatCounter number="99%" label="On-time Delivery" index={3} />
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
              <p style={{ 
                fontSize: '1.25rem',
                fontStyle: 'italic',
                marginBottom: 'var(--spacing-lg)',
                color: 'var(--gray-700)',
                lineHeight: 1.6
              }}>
                "Our goal isn't to sell you more stuff. It's to sell you better stuff. 
                Things that make your everyday moments a little bit easier, a little more joyful, 
                and definitely more interesting."
              </p>
              <p style={{ fontWeight: 600 }}>
                — The QuirkyStore Team
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
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
      <h3 style={{ fontSize: '1.25rem', marginBottom: 'var(--spacing-sm)' }}>{title}</h3>
      <p style={{ color: 'var(--gray-600)' }}>{description}</p>
    </motion.div>
  )
}

const StatCounter = ({ number, label, index }) => {
  return (
    <motion.div
      style={{ textAlign: 'center' }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
    >
      <div style={{ 
        fontSize: '3rem',
        fontWeight: 700,
        color: 'var(--primary)',
        marginBottom: 'var(--spacing-xs)',
        lineHeight: 1
      }}>
        {number}
      </div>
      <div style={{ color: 'var(--gray-700)' }}>
        {label}
      </div>
    </motion.div>
  )
}

export default AboutPage