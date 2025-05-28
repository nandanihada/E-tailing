import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiPhone, FiMapPin, FiSend, FiCheck } from 'react-icons/fi'
import Button from '../components/ui/Button'

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
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
        subject: '',
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
              Talk to Our Humans
            </h1>
            <p style={{ 
              fontSize: '1.25rem',
              color: 'var(--gray-600)',
              maxWidth: '700px',
              margin: '0 auto var(--spacing-lg)',
            }}>
              Have a question, suggestion, or just want to chat about quirky products?
              Our team is here to help.
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
                    icon={<FiMail size={24} />}
                    title="Email Us"
                    info="support@quirkystore.com"
                    action="mailto:support@quirkystore.com"
                    actionText="Send an email"
                    delay={0}
                  />
                  
                  <ContactMethod 
                    icon={<FiPhone size={24} />}
                    title="Call Us"
                    info="+91 90000 00000"
                    action="tel:+919000000000"
                    actionText="Make a call"
                    delay={0.1}
                  />
                  
                  <ContactMethod 
                    icon={<FiMapPin size={24} />}
                    title="Find Us"
                    info="Online only — but always here"
                    action="#"
                    actionText="We're virtual!"
                    delay={0.2}
                  />
                </div>
                
                <div style={{ marginTop: 'var(--spacing-xxl)' }}>
                  <h3 style={{ marginBottom: 'var(--spacing-md)', fontSize: '1.25rem' }}>Business Hours</h3>
                  <div style={{ 
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginBottom: 'var(--spacing-xs)',
                    fontSize: '0.875rem'
                  }}>
                    <span>Monday - Friday</span>
                    <span>9:30 AM - 6:00 PM</span>
                  </div>
                  <div style={{ 
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginBottom: 'var(--spacing-xs)',
                    fontSize: '0.875rem'
                  }}>
                    <span>Saturday</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </div>
                  <div style={{ 
                    display: 'flex',
                    justifyContent: 'space-between',
                    fontSize: '0.875rem'
                  }}>
                    <span>Sunday</span>
                    <span>Closed</span>
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
                <h2 style={{ marginBottom: 'var(--spacing-lg)' }}>Send Us a Message</h2>
                
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
                    
                    <div style={{ marginBottom: 'var(--spacing-lg)' }}>
                      <label htmlFor="email" style={{ display: 'block', marginBottom: 'var(--spacing-sm)' }}>Your Email</label>
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
                    
                    <div style={{ marginBottom: 'var(--spacing-lg)' }}>
                      <label htmlFor="subject" style={{ display: 'block', marginBottom: 'var(--spacing-sm)' }}>Subject</label>
                      <input 
                        type="text" 
                        id="subject" 
                        name="subject"
                        value={formData.subject}
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
                    
                    <div style={{ marginBottom: 'var(--spacing-xl)' }}>
                      <label htmlFor="message" style={{ display: 'block', marginBottom: 'var(--spacing-sm)' }}>Your Message</label>
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
                      {isLoading ? 'Sending...' : 'Submit a Query'}
                    </Button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="faq-section section" style={{ backgroundColor: 'var(--gray-100)' }}>
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
            Frequently Asked Questions
          </motion.h2>
          
          <div style={{ 
            maxWidth: '800px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: 'var(--spacing-lg)',
          }}>
            <FaqItem 
              question="How fast is your shipping?"
              answer="We typically ship within 24-48 hours. Standard delivery across India takes 3-5 business days. Premium delivery options are available at checkout."
              index={0}
            />
            
            <FaqItem 
              question="What is your return policy?"
              answer="We offer a 30-day easy return policy. If you're not satisfied with your purchase, you can return it within 30 days for a full refund or exchange. Items must be unused and in original packaging."
              index={1}
            />
            
            <FaqItem 
              question="Do you ship internationally?"
              answer="Currently, we only ship within India. We're working on expanding our shipping options to other countries and will announce when international shipping becomes available."
              index={2}
            />
            
            <FaqItem 
              question="How do I track my order?"
              answer="Once your order ships, you'll receive a tracking number via email and SMS. You can also track your order in real-time by logging into your account on our website."
              index={3}
            />
          </div>
        </div>
      </section>
    </div>
  )
}

const ContactMethod = ({ icon, title, info, action, actionText, delay }) => {
  return (
    <motion.div
      style={{ 
        marginBottom: 'var(--spacing-xl)',
        display: 'flex',
        gap: 'var(--spacing-md)',
      }}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay }}
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
        <p style={{ margin: '0 0 var(--spacing-sm)', color: 'var(--gray-700)' }}>{info}</p>
        <a 
          href={action} 
          style={{ color: 'var(--primary)', textDecoration: 'none', fontWeight: 500 }}
          className="hover-scale"
        >
          {actionText}
        </a>
      </div>
    </motion.div>
  )
}

const FaqItem = ({ question, answer, index }) => {
  const [isOpen, setIsOpen] = useState(false)
  
  return (
    <motion.div 
      className="glass"
      style={{
        borderRadius: 'var(--radius-md)',
        overflow: 'hidden',
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <button 
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: '100%',
          padding: 'var(--spacing-lg)',
          textAlign: 'left',
          backgroundColor: isOpen ? 'var(--primary-light)' : 'transparent',
          color: isOpen ? 'var(--white)' : 'var(--gray-900)',
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontWeight: 600,
          fontSize: '1.125rem',
          transition: 'all 0.3s ease',
        }}
      >
        {question}
        <span style={{ transition: 'transform 0.3s ease', transform: isOpen ? 'rotate(45deg)' : 'rotate(0)' }}>+</span>
      </button>
      
      {isOpen && (
        <motion.div 
          style={{ padding: 'var(--spacing-lg)', backgroundColor: 'var(--white)' }}
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          transition={{ duration: 0.3 }}
        >
          <p style={{ margin: 0, lineHeight: 1.6 }}>{answer}</p>
        </motion.div>
      )}
    </motion.div>
  )
}

export default ContactPage