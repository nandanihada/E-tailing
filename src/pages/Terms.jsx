import { motion } from 'framer-motion'
import { FiMail, FiPhone, FiMapPin, FiExternalLink } from 'react-icons/fi'

const TermsAndConditions = () => {
  return (
    <div className="terms-page">
      <section className="hero-section section" style={{ paddingBottom: 'var(--spacing-md)' }}>
        <div className="container">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 style={{ marginBottom: 'var(--spacing-md)' }}>
              Terms and Conditions
            </h1>
            <div style={{ 
              display: 'flex',
              justifyContent: 'center',
              gap: 'var(--spacing-lg)',
              marginBottom: 'var(--spacing-xl)',
              color: 'var(--gray-600)',
              fontSize: '0.875rem',
            }}>
              <span>Effective Date: [Insert Date]</span>
              <span>Last Updated: [Insert Date]</span>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="glass" style={{ 
            padding: 'var(--spacing-xl)',
            borderRadius: 'var(--radius-lg)',
          }}>
            {/* Company Information */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h2 style={{ marginBottom: 'var(--spacing-md)' }}>1. Agreement to Terms</h2>
              <p style={{ marginBottom: 'var(--spacing-lg)' }}>
                By accessing and using the Survey Titans website (www.surveytitans.com),
                you agree to comply with and be bound by these Terms and Conditions. If you do not
                agree with any part of these terms, please refrain from using our website or services.
              </p>
            </motion.div>

            {/* Company Information */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              style={{ marginBottom: 'var(--spacing-xl)' }}
            >
              <h2 style={{ marginBottom: 'var(--spacing-md)' }}>2. Company Information</h2>
              <ul style={{ 
                listStyleType: 'none',
                paddingLeft: 0,
                marginBottom: 'var(--spacing-md)',
              }}>
                <li style={{ marginBottom: 'var(--spacing-xs)' }}>• Legal Name: SURVTIT Market Research Survey LLP</li>
                <li style={{ marginBottom: 'var(--spacing-xs)' }}>• Trade Name: STMR Survey LLP</li>
                <li style={{ marginBottom: 'var(--spacing-xs)' }}>• Website: www.surveytitans.com</li>
                <li style={{ marginBottom: 'var(--spacing-xs)' }}>• Registered Address: [Insert Full Address]</li>
                <li style={{ marginBottom: 'var(--spacing-xs)' }}>• LLPIN: ACB-8160</li>
                <li style={{ marginBottom: 'var(--spacing-xs)' }}>• GST Number: [Insert GST Number]</li>
                <li style={{ marginBottom: 'var(--spacing-xs)' }}>• PAN: AFAFS9301P</li>
                <li style={{ marginBottom: 'var(--spacing-xs)' }}>• TAN: MRTS28234D</li>
              </ul>
            </motion.div>

            {/* Definitions */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              style={{ marginBottom: 'var(--spacing-xl)' }}
            >
              <h2 style={{ marginBottom: 'var(--spacing-md)' }}>3. Definitions</h2>
              <ul style={{ 
                listStyleType: 'none',
                paddingLeft: 0,
                marginBottom: 'var(--spacing-md)',
              }}>
                <li style={{ marginBottom: 'var(--spacing-xs)' }}>• "Company", "we", "our", "us": Refers to STMR Survey LLP or its final trade name.</li>
                <li style={{ marginBottom: 'var(--spacing-xs)' }}>• "Customer", "you", "your": Refers to the user purchasing from or browsing our website.</li>
                <li style={{ marginBottom: 'var(--spacing-xs)' }}>• "Products": Refers to the electronics, gadgets, and accessories sold.</li>
                <li style={{ marginBottom: 'var(--spacing-xs)' }}>• "Services": Refers to the online shopping platform and related operations.</li>
              </ul>
            </motion.div>

            {/* Use of Website */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              style={{ marginBottom: 'var(--spacing-xl)' }}
            >
              <h2 style={{ marginBottom: 'var(--spacing-md)' }}>4. Use of Website</h2>
              <h3 style={{ marginBottom: 'var(--spacing-sm)', fontSize: '1.1rem' }}>Eligibility</h3>
              <ul style={{ 
                listStyleType: 'none',
                paddingLeft: 0,
                marginBottom: 'var(--spacing-md)',
              }}>
                <li style={{ marginBottom: 'var(--spacing-xs)' }}>• You must be at least 18 years old to make purchases.</li>
                <li style={{ marginBottom: 'var(--spacing-xs)' }}>• You agree to provide accurate, up-to-date registration and account information.</li>
                <li style={{ marginBottom: 'var(--spacing-xs)' }}>• You are responsible for securing your account login credentials.</li>
              </ul>

              <h3 style={{ marginBottom: 'var(--spacing-sm)', fontSize: '1.1rem' }}>Acceptable Use</h3>
              <p style={{ marginBottom: 'var(--spacing-md)' }}>You agree not to:</p>
              <ul style={{ 
                listStyleType: 'none',
                paddingLeft: 0,
                marginBottom: 'var(--spacing-md)',
              }}>
                <li style={{ marginBottom: 'var(--spacing-xs)' }}>• Engage in any illegal or harmful activity.</li>
                <li style={{ marginBottom: 'var(--spacing-xs)' }}>• Attempt unauthorized access or tamper with the platform.</li>
                <li style={{ marginBottom: 'var(--spacing-xs)' }}>• Introduce malware or disruptive software.</li>
                <li style={{ marginBottom: 'var(--spacing-xs)' }}>• Violate local or international laws through use of our site.</li>
              </ul>
            </motion.div>

            {/* Products and Pricing */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              style={{ marginBottom: 'var(--spacing-xl)' }}
            >
              <h2 style={{ marginBottom: 'var(--spacing-md)' }}>5. Products and Pricing</h2>
              <h3 style={{ marginBottom: 'var(--spacing-sm)', fontSize: '1.1rem' }}>Product Information</h3>
              <ul style={{ 
                listStyleType: 'none',
                paddingLeft: 0,
                marginBottom: 'var(--spacing-md)',
              }}>
                <li style={{ marginBottom: 'var(--spacing-xs)' }}>• Images and specifications are for reference; minor variations may occur.</li>
                <li style={{ marginBottom: 'var(--spacing-xs)' }}>• While we strive for accuracy, we do not guarantee descriptions are error-free.</li>
              </ul>

              <h3 style={{ marginBottom: 'var(--spacing-sm)', fontSize: '1.1rem' }}>Pricing</h3>
              <ul style={{ 
                listStyleType: 'none',
                paddingLeft: 0,
                marginBottom: 'var(--spacing-md)',
              }}>
                <li style={{ marginBottom: 'var(--spacing-xs)' }}>• Prices are in Indian Rupees (INR) and include applicable taxes unless stated otherwise.</li>
                <li style={{ marginBottom: 'var(--spacing-xs)' }}>• Prices may change without prior notice.</li>
                <li style={{ marginBottom: 'var(--spacing-xs)' }}>• Products start from as low as ₹200.</li>
              </ul>

              <h3 style={{ marginBottom: 'var(--spacing-sm)', fontSize: '1.1rem' }}>Availability</h3>
              <ul style={{ 
                listStyleType: 'none',
                paddingLeft: 0,
                marginBottom: 'var(--spacing-md)',
              }}>
                <li style={{ marginBottom: 'var(--spacing-xs)' }}>• Limited stock; availability may change without notice.</li>
                <li style={{ marginBottom: 'var(--spacing-xs)' }}>• If a product is unavailable after ordering, we will offer alternatives or a full refund.</li>
              </ul>
            </motion.div>

            {/* Ordering and Payments */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              style={{ marginBottom: 'var(--spacing-xl)' }}
            >
              <h2 style={{ marginBottom: 'var(--spacing-md)' }}>6. Ordering and Payments</h2>
              <h3 style={{ marginBottom: 'var(--spacing-sm)', fontSize: '1.1rem' }}>Order Process</h3>
              <ul style={{ 
                listStyleType: 'none',
                paddingLeft: 0,
                marginBottom: 'var(--spacing-md)',
              }}>
                <li style={{ marginBottom: 'var(--spacing-xs)' }}>• Orders are processed only after full payment is received.</li>
                <li style={{ marginBottom: 'var(--spacing-xs)' }}>• Confirmation will be sent via email.</li>
                <li style={{ marginBottom: 'var(--spacing-xs)' }}>• We reserve the right to cancel any suspicious or bulk orders.</li>
              </ul>

              <h3 style={{ marginBottom: 'var(--spacing-sm)', fontSize: '1.1rem' }}>Accepted Payment Methods</h3>
              <ul style={{ 
                listStyleType: 'none',
                paddingLeft: 0,
                marginBottom: 'var(--spacing-md)',
              }}>
                <li style={{ marginBottom: 'var(--spacing-xs)' }}>• Credit/Debit Cards (Visa, MasterCard, RuPay, Amex)</li>
                <li style={{ marginBottom: 'var(--spacing-xs)' }}>• UPI (Google Pay, PhonePe, Paytm, etc.)</li>
                <li style={{ marginBottom: 'var(--spacing-xs)' }}>• Net Banking</li>
                <li style={{ marginBottom: 'var(--spacing-xs)' }}>• Digital Wallets</li>
                <li style={{ marginBottom: 'var(--spacing-xs)' }}>• Cash on Delivery (COD) where available</li>
              </ul>

              <h3 style={{ marginBottom: 'var(--spacing-sm)', fontSize: '1.1rem' }}>Payment Security</h3>
              <ul style={{ 
                listStyleType: 'none',
                paddingLeft: 0,
                marginBottom: 'var(--spacing-md)',
              }}>
                <li style={{ marginBottom: 'var(--spacing-xs)' }}>• Payments are processed securely through third-party gateways.</li>
                <li style={{ marginBottom: 'var(--spacing-xs)' }}>• We do not store any payment details on our servers.</li>
              </ul>
            </motion.div>

            {/* Shipping and Delivery */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              style={{ marginBottom: 'var(--spacing-xl)' }}
            >
              <h2 style={{ marginBottom: 'var(--spacing-md)' }}>7. Shipping and Delivery</h2>
              <h3 style={{ marginBottom: 'var(--spacing-sm)', fontSize: '1.1rem' }}>Shipping Areas</h3>
              <ul style={{ 
                listStyleType: 'none',
                paddingLeft: 0,
                marginBottom: 'var(--spacing-md)',
              }}>
                <li style={{ marginBottom: 'var(--spacing-xs)' }}>• We deliver pan-India to serviceable PIN codes.</li>
                <li style={{ marginBottom: 'var(--spacing-xs)' }}>• Remote or inaccessible areas may face longer delivery times.</li>
              </ul>

              <h3 style={{ marginBottom: 'var(--spacing-sm)', fontSize: '1.1rem' }}>Delivery Timelines</h3>
              <ul style={{ 
                listStyleType: 'none',
                paddingLeft: 0,
                marginBottom: 'var(--spacing-md)',
              }}>
                <li style={{ marginBottom: 'var(--spacing-xs)' }}>• Standard Delivery: 3–7 working days</li>
                <li style={{ marginBottom: 'var(--spacing-xs)' }}>• Express Delivery: 1–3 working days (if available in your area)</li>
              </ul>

              <h3 style={{ marginBottom: 'var(--spacing-sm)', fontSize: '1.1rem' }}>Shipping Charges</h3>
              <ul style={{ 
                listStyleType: 'none',
                paddingLeft: 0,
                marginBottom: 'var(--spacing-md)',
              }}>
                <li style={{ marginBottom: 'var(--spacing-xs)' }}>• Charges depend on order size, weight, and location.</li>
                <li style={{ marginBottom: 'var(--spacing-xs)' }}>• Free shipping may apply for orders above a certain value.</li>
                <li style={{ marginBottom: 'var(--spacing-xs)' }}>• All charges are shown clearly at checkout.</li>
              </ul>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              style={{ 
                backgroundColor: 'var(--gray-100)',
                padding: 'var(--spacing-lg)',
                borderRadius: 'var(--radius-md)',
                marginTop: 'var(--spacing-xl)',
              }}
            >
              <h2 style={{ marginBottom: 'var(--spacing-md)' }}>Contact Us</h2>
              <div style={{ 
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: 'var(--spacing-md)',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)' }}>
                  <FiMail size={20} />
                  <span>legal@surveytitans.com</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)' }}>
                  <FiPhone size={20} />
                  <span>+91-[Insert Number]</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)' }}>
                  <FiMapPin size={20} />
                  <span>[Insert Full Registered Address]</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              style={{ 
                marginTop: 'var(--spacing-xl)',
                textAlign: 'center',
                color: 'var(--gray-600)',
                fontSize: '0.875rem',
              }}
            >
              <p>
                By using this site, you confirm that you've read, understood, and agreed to these
                Terms and Conditions.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default TermsAndConditions