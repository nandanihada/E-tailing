import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiPhone, FiMapPin, FiSend, FiCheck, FiClock, FiLock, FiInstagram, FiFacebook, FiTwitter, FiLinkedin } from 'react-icons/fi'
import Button from '../components/ui/Button'

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    orderId: '',
    message: ''
  })
  
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      setIsSubmitted(true)
      setFormData({
        name: '',
        email: '',
        phone: '',
        orderId: '',
        message: ''
      })
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    }, 1500)
  }
  
  return (
    <div className="contact-page">
      <section className="hero-section section" style={{ paddingBottom: 0 }}>
        <div className="container">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 style={{ marginBottom: 'var(--spacing-md)' }}>
              We're Here to Help!
            </h1>
            <p style={{ 
              fontSize: '1.25rem',
              color: 'var(--gray-600)',
              maxWidth: '700px',
              margin: '0 auto var(--spacing-lg)',
            }}>
              Whether you have questions about your order, need help with a product, or just want
              to say hi — our support team is happy to assist you!
            </p>
          </motion.div>
        </div>
      </section>
      
      <section className="contact-form-section section">
        <div className="container">
          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: 'var(--spacing-xl)',
          }}>
            {/* Contact Info */}
            <motion.div 
              style={{ gridColumn: 'span 4' }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="glass" style={{ 
                padding: 'var(--spacing-xl)',
                borderRadius: 'var(--radius-lg)',
                height: '100%',
              }}>
                <h2 style={{ marginBottom: 'var(--spacing-lg)' }}>Get In Touch</h2>
                
                <div className="contact-methods">
                  <ContactMethod 
                    icon={<FiPhone size={24} />}
                    title="Customer Support"
                    info="+91-XXXX-XXXXXX"
                    subInfo="Mon–Sat | 9:00 AM – 7:00 PM IST"
                    delay={0}
                  />
                  
                  <ContactMethod 
                    icon={<FiMail size={24} />}
                    title="Email Us"
                    info="support@surveytitans.com"
                    subInfo="For order issues: returns@surveytitans.com"
                    delay={0.1}
                  />
                  
                  <ContactMethod 
                    icon={<FiMapPin size={24} />}
                    title="Visit Us"
                    info="STMR Survey LLP"
                    subInfo="C/O Mohd. Inam, Mehndi Sarai, Near Dhobi Wali Masjid, Jankipuram Police Station, Saharanpur – 247001, Uttar Pradesh, India"
                    delay={0.2}
                  />

                  <ContactMethod 
                    icon={<FiClock size={24} />}
                    title="Office Hours"
                    info="Mon – Fri: 9:00 AM – 6:00 PM"
                    subInfo="Sat: 10:00 AM – 4:00 PM | Sun: Closed"
                    delay={0.3}
                  />
                </div>
                
                <div style={{ marginTop: 'var(--spacing-xxl)' }}>
                  <h3 style={{ marginBottom: 'var(--spacing-md)', fontSize: '1.25rem' }}>Company Information</h3>
                  <div style={{ fontSize: '0.875rem', color: 'var(--gray-600)' }}>
                    <p style={{ marginBottom: 'var(--spacing-xs)' }}>LLPIN: ACB-8160</p>
                    <p style={{ marginBottom: 'var(--spacing-xs)' }}>PAN: AFAFS9301P</p>
                    <p style={{ marginBottom: 'var(--spacing-xs)' }}>TAN: MRTS28234D</p>
                    <p>Incorporated: 3rd July 2023</p>
                  </div>
                </div>

                <div style={{ marginTop: 'var(--spacing-xl)' }}>
                  <h3 style={{ marginBottom: 'var(--spacing-md)', fontSize: '1.25rem' }}>Follow Us</h3>
                  <div style={{ 
                    display: 'flex',
                    gap: 'var(--spacing-md)',
                    color: 'var(--gray-600)'
                  }}>
                    <a href="#" className="hover-scale" style={{ color: 'inherit' }}><FiInstagram size={24} /></a>
                    <a href="#" className="hover-scale" style={{ color: 'inherit' }}><FiFacebook size={24} /></a>
                    <a href="#" className="hover-scale" style={{ color: 'inherit' }}><FiTwitter size={24} /></a>
                    <a href="#" className="hover-scale" style={{ color: 'inherit' }}><FiLinkedin size={24} /></a>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Contact Form */}
            <motion.div 
              style={{ gridColumn: 'span 8' }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="glass" style={{
                padding: 'var(--spacing-xl)',
                borderRadius: 'var(--radius-lg)',
              }}>
                <h2 style={{ marginBottom: 'var(--spacing-lg)' }}>Quick Contact Form</h2>
                <p style={{ 
                  marginBottom: 'var(--spacing-xl)',
                  color: 'var(--gray-600)'
                }}>
                  We'll respond within 24 hours!
                </p>
                
                {isSubmitted ? (
                  <motion.div 
                    style={{
                      backgroundColor: 'var(--success)',
                      color: 'var(--white)',
                      padding: 'var(--spacing-lg)',
                      borderRadius: 'var(--radius-md)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 'var(--spacing-md)',
                    }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FiCheck size={24} />
                    <div>
                      <h3 style={{ color: 'var(--white)', marginBottom: 'var(--spacing-xs)' }}>Message Sent!</h3>
                      <p style={{ color: 'var(--white)', margin: 0 }}>We'll get back to you as soon as possible.</p>
                    </div>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div style={{ marginBottom: 'var(--spacing-lg)' }}>
                      <label htmlFor="name" style={{ display: 'block', marginBottom: 'var(--spacing-sm)' }}>Your Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        style={{
                          width: '100%',
                          padding: 'var(--spacing-md)',
                          borderRadius: 'var(--radius-md)',
                          border: '1px solid var(--gray-300)',
                          fontSize: '1rem',
                        }}
                      />
                    </div>
                    
                    <div style={{ 
                      display: 'grid',
                      gridTemplateColumns: 'repeat(2, 1fr)',
                      gap: 'var(--spacing-md)',
                      marginBottom: 'var(--spacing-lg)'
                    }}>
                      <div>
                        <label htmlFor="email" style={{ display: 'block', marginBottom: 'var(--spacing-sm)' }}>Email</label>
                        <input 
                          type="email" 
                          id="email" 
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          style={{
                            width: '100%',
                            padding: 'var(--spacing-md)',
                            borderRadius: 'var(--radius-md)',
                            border: '1px solid var(--gray-300)',
                            fontSize: '1rem',
                          }}
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="phone" style={{ display: 'block', marginBottom: 'var(--spacing-sm)' }}>Phone</label>
                        <input 
                          type="tel" 
                          id="phone" 
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          style={{
                            width: '100%',
                            padding: 'var(--spacing-md)',
                            borderRadius: 'var(--radius-md)',
                            border: '1px solid var(--gray-300)',
                            fontSize: '1rem',
                          }}
                        />
                      </div>
                    </div>

                    <div style={{ marginBottom: 'var(--spacing-lg)' }}>
                      <label htmlFor="orderId" style={{ display: 'block', marginBottom: 'var(--spacing-sm)' }}>
                        Order ID (if applicable)
                      </label>
                      <input 
                        type="text" 
                        id="orderId" 
                        name="orderId"
                        value={formData.orderId}
                        onChange={handleChange}
                        style={{
                          width: '100%',
                          padding: 'var(--spacing-md)',
                          borderRadius: 'var(--radius-md)',
                          border: '1px solid var(--gray-300)',
                          fontSize: '1rem',
                        }}
                      />
                    </div>
                    
                    <div style={{ marginBottom: 'var(--spacing-xl)' }}>
                      <label htmlFor="message" style={{ display: 'block', marginBottom: 'var(--spacing-sm)' }}>Message</label>
                      <textarea 
                        id="message" 
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        style={{
                          width: '100%',
                          padding: 'var(--spacing-md)',
                          borderRadius: 'var(--radius-md)',
                          border: '1px solid var(--gray-300)',
                          fontSize: '1rem',
                          resize: 'vertical',
                        }}
                      />
                    </div>
                    
                    <Button 
                      type="submit"
                      variant="primary"
                      size="large"
                      icon={<FiSend />}
                      disabled={isLoading}
                      style={{ minWidth: '180px' }}
                      animated={true}
                    >
                      {isLoading ? 'Sending...' : 'Send Message'}
                    </Button>
                  </form>
                )}
              </div>

              <motion.div
                className="glass"
                style={{ 
                  padding: 'var(--spacing-lg)',
                  borderRadius: 'var(--radius-lg)',
                  marginTop: 'var(--spacing-xl)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--spacing-md)',
                  color: 'var(--gray-700)',
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <FiLock size={24} />
                <div>
                  <h3 style={{ 
                    fontSize: '1.125rem',
                    marginBottom: 'var(--spacing-xs)',
                    color: 'var(--gray-900)'
                  }}>
                    Secure Shopping Guaranteed
                  </h3>
                  <p style={{ 
                    margin: 0,
                    fontSize: '0.875rem'
                  }}>
                    Fast support | Safe Payments | Easy Return
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

const ContactMethod = ({ icon, title, info, subInfo, delay }) => {
  return (
    <motion.div
      style={{ 
        marginBottom: 'var(--spacing-xl)',
        display: 'flex',
        gap: 'var(--spacing-md)',
      }}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      <div style={{ 
        color: 'var(--primary)', 
        display: 'flex', 
        alignItems: 'flex-start' 
      }}>
        {icon}
      </div>
      <div>
        <h3 style={{ fontSize: '1.125rem', marginBottom: 'var(--spacing-xs)' }}>{title}</h3>
        <p style={{ margin: '0 0 var(--spacing-xs)', color: 'var(--gray-700)' }}>{info}</p>
        {subInfo && (
          <p style={{ 
            margin: 0,
            fontSize: '0.875rem',
            color: 'var(--gray-600)'
          }}>
            {subInfo}
          </p>
        )}
      </div>
    </motion.div>
  )
}

export default ContactPage