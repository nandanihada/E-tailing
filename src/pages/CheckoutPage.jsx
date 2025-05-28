import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiArrowLeft, FiCheck, FiLock } from 'react-icons/fi'
import Button from '../components/ui/Button'
import products from '../data/products'

const CheckoutPage = () => {
  const navigate = useNavigate()
  
  // Simulate cart items from previous page
  const cartItems = [
    { id: 1, productId: 1, quantity: 2 },
    { id: 2, productId: 3, quantity: 1 },
    { id: 3, productId: 5, quantity: 1 }
  ]
  
  const cartProducts = cartItems.map(item => {
    const product = products.find(p => p.id === item.productId)
    return {
      ...item,
      product
    }
  })
  
  const subtotal = cartProducts.reduce((total, item) => {
    return total + (item.product.price * item.quantity)
  }, 0)
  
  const discount = 0
  const shipping = subtotal > 999 ? 0 : 99
  const totalAmount = subtotal - discount + shipping
  
  // Form state
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    phone: '',
    paymentMethod: 'cod'
  })
  
  const [step, setStep] = useState(1)
  const [orderComplete, setOrderComplete] = useState(false)
  
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Simulate order processing
    setOrderComplete(true)
  }
  
  const handleBackToShop = () => {
    navigate('/')
  }
  
  if (orderComplete) {
    return (
      <div className="order-complete section">
        <div className="container">
          <motion.div 
            className="glass"
            style={{ 
              maxWidth: '600px',
              margin: '0 auto',
              padding: 'var(--spacing-xxl)',
              borderRadius: 'var(--radius-lg)',
              textAlign: 'center',
            }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div style={{
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              backgroundColor: 'var(--success)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto var(--spacing-lg)',
            }}>
              <FiCheck size={40} color="white" />
            </div>
            
            <h1 style={{ marginBottom: 'var(--spacing-md)' }}>
              Your Order is Confirmed!
            </h1>
            
            <p style={{ 
              marginBottom: 'var(--spacing-lg)',
              color: 'var(--gray-600)',
              fontSize: '1.125rem',
            }}>
              Thank you for your purchase! Your order has been received and is being processed.
            </p>
            
            <div style={{
              backgroundColor: 'var(--gray-100)',
              padding: 'var(--spacing-lg)',
              borderRadius: 'var(--radius-md)',
              marginBottom: 'var(--spacing-xl)',
              textAlign: 'left',
            }}>
              <div style={{ 
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: 'var(--spacing-sm)',
              }}>
                <span style={{ fontWeight: 600 }}>Order Number:</span>
                <span>QS{Math.floor(100000 + Math.random() * 900000)}</span>
              </div>
              
              <div style={{ 
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: 'var(--spacing-sm)',
              }}>
                <span style={{ fontWeight: 600 }}>Order Date:</span>
                <span>{new Date().toLocaleDateString()}</span>
              </div>
              
              <div style={{ 
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: 'var(--spacing-sm)',
              }}>
                <span style={{ fontWeight: 600 }}>Total Amount:</span>
                <span>₹{totalAmount}</span>
              </div>
              
              <div style={{ 
                display: 'flex',
                justifyContent: 'space-between',
              }}>
                <span style={{ fontWeight: 600 }}>Estimated Delivery:</span>
                <span>
                  {new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toLocaleDateString()} - 
                  {new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString()}
                </span>
              </div>
            </div>
            
            <Button 
              variant="primary"
              size="large"
              icon={<FiArrowLeft />}
              iconPosition="left"
              onClick={handleBackToShop}
              animated={true}
            >
              Continue Shopping
            </Button>
          </motion.div>
        </div>
      </div>
    )
  }
  
  return (
    <div className="checkout-page section">
      <div className="container">
        <div style={{ 
          display: 'flex',
          alignItems: 'center',
          gap: 'var(--spacing-xs)',
          marginBottom: 'var(--spacing-xl)',
        }}>
          <Link 
            to="/cart" 
            style={{ 
              color: 'var(--gray-600)',
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--spacing-xs)',
              fontSize: '0.875rem',
            }}
          >
            <FiArrowLeft size={14} />
            Back to Cart
          </Link>
        </div>
        
        <h1 style={{ marginBottom: 'var(--spacing-xl)' }}>Checkout</h1>
        
        <div style={{ 
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gap: 'var(--spacing-xl)',
        }}>
          {/* Checkout Form */}
          <motion.div 
            style={{ gridColumn: 'span 8' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="checkout-steps">
              <div className="step-indicators" style={{
                display: 'flex',
                marginBottom: 'var(--spacing-xl)',
              }}>
                <div 
                  className={`step ${step >= 1 ? 'active' : ''}`}
                  style={{
                    flex: 1,
                    textAlign: 'center',
                    position: 'relative',
                  }}
                >
                  <div style={{
                    width: '30px',
                    height: '30px',
                    borderRadius: '50%',
                    backgroundColor: step >= 1 ? 'var(--primary)' : 'var(--gray-300)',
                    color: 'var(--white)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto var(--spacing-sm)',
                    fontWeight: 600,
                    zIndex: 2,
                    position: 'relative',
                  }}>
                    {step > 1 ? <FiCheck size={16} /> : '1'}
                  </div>
                  <div style={{ 
                    fontSize: '0.875rem',
                    fontWeight: step >= 1 ? 600 : 400,
                    color: step >= 1 ? 'var(--gray-900)' : 'var(--gray-500)',
                  }}>
                    Shipping
                  </div>
                  <div style={{
                    position: 'absolute',
                    top: '15px',
                    left: '50%',
                    width: '100%',
                    height: '2px',
                    backgroundColor: step > 1 ? 'var(--primary)' : 'var(--gray-300)',
                    zIndex: 1,
                  }}></div>
                </div>
                
                <div 
                  className={`step ${step >= 2 ? 'active' : ''}`}
                  style={{
                    flex: 1,
                    textAlign: 'center',
                    position: 'relative',
                  }}
                >
                  <div style={{
                    width: '30px',
                    height: '30px',
                    borderRadius: '50%',
                    backgroundColor: step >= 2 ? 'var(--primary)' : 'var(--gray-300)',
                    color: 'var(--white)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto var(--spacing-sm)',
                    fontWeight: 600,
                    zIndex: 2,
                    position: 'relative',
                  }}>
                    2
                  </div>
                  <div style={{ 
                    fontSize: '0.875rem',
                    fontWeight: step >= 2 ? 600 : 400,
                    color: step >= 2 ? 'var(--gray-900)' : 'var(--gray-500)',
                  }}>
                    Payment
                  </div>
                </div>
              </div>
              
              <form onSubmit={handleSubmit}>
                {step === 1 && (
                  <motion.div 
                    className="shipping-step glass"
                    style={{
                      padding: 'var(--spacing-xl)',
                      borderRadius: 'var(--radius-lg)',
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 style={{ marginBottom: 'var(--spacing-lg)' }}>Shipping Information</h2>
                    
                    <div style={{ marginBottom: 'var(--spacing-lg)' }}>
                      <label htmlFor="email" style={{ display: 'block', marginBottom: 'var(--spacing-sm)' }}>
                        Email Address*
                      </label>
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
                    
                    <div style={{ 
                      display: 'grid',
                      gridTemplateColumns: '1fr 1fr',
                      gap: 'var(--spacing-md)',
                      marginBottom: 'var(--spacing-lg)'
                    }}>
                      <div>
                        <label htmlFor="firstName" style={{ display: 'block', marginBottom: 'var(--spacing-sm)' }}>
                          First Name*
                        </label>
                        <input 
                          type="text" 
                          id="firstName" 
                          name="firstName"
                          value={formData.firstName}
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
                        <label htmlFor="lastName" style={{ display: 'block', marginBottom: 'var(--spacing-sm)' }}>
                          Last Name*
                        </label>
                        <input 
                          type="text" 
                          id="lastName" 
                          name="lastName"
                          value={formData.lastName}
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
                      <label htmlFor="address" style={{ display: 'block', marginBottom: 'var(--spacing-sm)' }}>
                        Street Address*
                      </label>
                      <input 
                        type="text" 
                        id="address" 
                        name="address"
                        value={formData.address}
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
                      gridTemplateColumns: '1fr 1fr 1fr',
                      gap: 'var(--spacing-md)',
                      marginBottom: 'var(--spacing-lg)'
                    }}>
                      <div>
                        <label htmlFor="city" style={{ display: 'block', marginBottom: 'var(--spacing-sm)' }}>
                          City*
                        </label>
                        <input 
                          type="text" 
                          id="city" 
                          name="city"
                          value={formData.city}
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
                        <label htmlFor="state" style={{ display: 'block', marginBottom: 'var(--spacing-sm)' }}>
                          State*
                        </label>
                        <input 
                          type="text" 
                          id="state" 
                          name="state"
                          value={formData.state}
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
                        <label htmlFor="pincode" style={{ display: 'block', marginBottom: 'var(--spacing-sm)' }}>
                          PIN Code*
                        </label>
                        <input 
                          type="text" 
                          id="pincode" 
                          name="pincode"
                          value={formData.pincode}
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
                    
                    <div style={{ marginBottom: 'var(--spacing-xl)' }}>
                      <label htmlFor="phone" style={{ display: 'block', marginBottom: 'var(--spacing-sm)' }}>
                        Phone Number*
                      </label>
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
                    
                    <div style={{ textAlign: 'right' }}>
                      <Button 
                        type="button"
                        variant="primary"
                        size="large"
                        onClick={() => setStep(2)}
                        animated={true}
                      >
                        Continue to Payment
                      </Button>
                    </div>
                  </motion.div>
                )}
                
                {step === 2 && (
                  <motion.div 
                    className="payment-step glass"
                    style={{
                      padding: 'var(--spacing-xl)',
                      borderRadius: 'var(--radius-lg)',
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 style={{ marginBottom: 'var(--spacing-lg)' }}>Payment Method</h2>
                    
                    <div style={{ marginBottom: 'var(--spacing-xl)' }}>
                      <div style={{ 
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 'var(--spacing-md)',
                      }}>
                        <label style={{ 
                          display: 'flex',
                          alignItems: 'center',
                          padding: 'var(--spacing-md)',
                          border: '1px solid var(--gray-300)',
                          borderRadius: 'var(--radius-md)',
                          cursor: 'pointer',
                          backgroundColor: formData.paymentMethod === 'cod' ? 'var(--gray-100)' : 'transparent',
                        }}>
                          <input 
                            type="radio"
                            name="paymentMethod"
                            value="cod"
                            checked={formData.paymentMethod === 'cod'}
                            onChange={handleChange}
                            style={{ marginRight: 'var(--spacing-md)' }}
                          />
                          <div>
                            <div style={{ fontWeight: 600 }}>Cash on Delivery</div>
                            <div style={{ fontSize: '0.875rem', color: 'var(--gray-600)' }}>
                              Pay when your order arrives
                            </div>
                          </div>
                        </label>
                        
                        <label style={{ 
                          display: 'flex',
                          alignItems: 'center',
                          padding: 'var(--spacing-md)',
                          border: '1px solid var(--gray-300)',
                          borderRadius: 'var(--radius-md)',
                          cursor: 'pointer',
                          backgroundColor: formData.paymentMethod === 'upi' ? 'var(--gray-100)' : 'transparent',
                        }}>
                          <input 
                            type="radio"
                            name="paymentMethod"
                            value="upi"
                            checked={formData.paymentMethod === 'upi'}
                            onChange={handleChange}
                            style={{ marginRight: 'var(--spacing-md)' }}
                          />
                          <div>
                            <div style={{ fontWeight: 600 }}>UPI Payment</div>
                            <div style={{ fontSize: '0.875rem', color: 'var(--gray-600)' }}>
                              Google Pay, PhonePe, Paytm, or any UPI app
                            </div>
                          </div>
                        </label>
                        
                        <label style={{ 
                          display: 'flex',
                          alignItems: 'center',
                          padding: 'var(--spacing-md)',
                          border: '1px solid var(--gray-300)',
                          borderRadius: 'var(--radius-md)',
                          cursor: 'pointer',
                          backgroundColor: formData.paymentMethod === 'card' ? 'var(--gray-100)' : 'transparent',
                        }}>
                          <input 
                            type="radio"
                            name="paymentMethod"
                            value="card"
                            checked={formData.paymentMethod === 'card'}
                            onChange={handleChange}
                            style={{ marginRight: 'var(--spacing-md)' }}
                          />
                          <div>
                            <div style={{ fontWeight: 600 }}>Credit/Debit Card</div>
                            <div style={{ fontSize: '0.875rem', color: 'var(--gray-600)' }}>
                              Visa, MasterCard, Rupay accepted
                            </div>
                          </div>
                        </label>
                      </div>
                    </div>
                    
                    <div style={{ 
                      display: 'flex', 
                      justifyContent: 'space-between',
                      alignItems: 'center', 
                    }}>
                      <button 
                        type="button"
                        onClick={() => setStep(1)}
                        style={{
                          backgroundColor: 'transparent',
                          border: 'none',
                          color: 'var(--primary)',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          gap: 'var(--spacing-xs)',
                        }}
                      >
                        <FiArrowLeft size={16} />
                        Back to Shipping
                      </button>
                      
                      <Button 
                        type="submit"
                        variant="primary"
                        size="large"
                        animated={true}
                      >
                        Confirm & Place Order
                      </Button>
                    </div>
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>
          
          {/* Order Summary */}
          <motion.div 
            style={{ gridColumn: 'span 4' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="glass" style={{
              padding: 'var(--spacing-xl)',
              borderRadius: 'var(--radius-lg)',
              position: 'sticky',
              top: 'var(--spacing-xl)',
            }}>
              <h2 style={{ 
                marginBottom: 'var(--spacing-lg)',
                fontSize: '1.5rem',
              }}>
                Order Summary
              </h2>
              
              <div style={{ marginBottom: 'var(--spacing-lg)' }}>
                {cartProducts.map((item, index) => (
                  <div 
                    key={item.id}
                    style={{ 
                      display: 'flex',
                      gap: 'var(--spacing-md)',
                      marginBottom: 'var(--spacing-md)',
                    }}
                  >
                    <div style={{ 
                      width: '60px',
                      height: '60px',
                      borderRadius: 'var(--radius-md)',
                      overflow: 'hidden',
                      flexShrink: 0,
                    }}>
                      <img 
                        src={item.product.image} 
                        alt={item.product.name}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                        }}
                      />
                    </div>
                    
                    <div style={{ flex: 1 }}>
                      <div style={{ 
                        fontSize: '0.875rem',
                        fontWeight: 500,
                        marginBottom: 'var(--spacing-xs)',
                      }}>
                        {item.product.name}
                      </div>
                      <div style={{ 
                        display: 'flex',
                        justifyContent: 'space-between',
                        fontSize: '0.875rem',
                        color: 'var(--gray-600)',
                      }}>
                        <span>Qty: {item.quantity}</span>
                        <span>₹{item.product.price * item.quantity}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div style={{
                marginBottom: 'var(--spacing-md)',
                paddingTop: 'var(--spacing-md)',
                borderTop: '1px solid var(--gray-200)',
              }}>
                <div style={{ 
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginBottom: 'var(--spacing-sm)',
                }}>
                  <span>Subtotal</span>
                  <span>₹{subtotal}</span>
                </div>
                
                {discount > 0 && (
                  <div style={{ 
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginBottom: 'var(--spacing-sm)',
                    color: 'var(--success)',
                  }}>
                    <span>Discount</span>
                    <span>-₹{discount}</span>
                  </div>
                )}
                
                <div style={{ 
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginBottom: 'var(--spacing-md)',
                }}>
                  <span>Shipping</span>
                  <span>{shipping === 0 ? 'Free' : `₹${shipping}`}</span>
                </div>
                
                <div style={{ 
                  display: 'flex',
                  justifyContent: 'space-between',
                  fontWeight: 700,
                  fontSize: '1.25rem',
                  marginBottom: 'var(--spacing-md)',
                  paddingTop: 'var(--spacing-md)',
                  borderTop: '1px solid var(--gray-200)',
                }}>
                  <span>Total</span>
                  <span>₹{totalAmount}</span>
                </div>
              </div>
              
              <div style={{ 
                backgroundColor: 'var(--gray-100)',
                padding: 'var(--spacing-md)',
                borderRadius: 'var(--radius-md)',
                fontSize: '0.875rem',
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--spacing-sm)',
                color: 'var(--gray-700)',
              }}>
                <FiLock size={16} />
                <span>Your data is encrypted and secure with us</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default CheckoutPage