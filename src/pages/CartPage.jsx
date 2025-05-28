import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiShoppingBag, FiTrash2, FiPlus, FiMinus, FiArrowLeft } from 'react-icons/fi'
import Button from '../components/ui/Button'
import products from '../data/products'

const CartPage = () => {
  const navigate = useNavigate()
  const [cartItems, setCartItems] = useState([
    { id: 1, productId: 1, quantity: 2 },
    { id: 2, productId: 3, quantity: 1 },
    { id: 3, productId: 5, quantity: 1 }
  ])
  
  const [couponCode, setCouponCode] = useState('')
  const [couponApplied, setCouponApplied] = useState(false)
  const [discount, setDiscount] = useState(0)
  
  // Calculate cart totals
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
  
  const shipping = subtotal > 999 ? 0 : 99
  const totalAmount = subtotal - discount + shipping
  
  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity < 1) return
    
    setCartItems(prev => prev.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    ))
  }
  
  const handleRemoveItem = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id))
  }
  
  const handleApplyCoupon = () => {
    if (couponCode.toLowerCase() === 'quirky10') {
      setCouponApplied(true)
      setDiscount(Math.round(subtotal * 0.1)) // 10% discount
    } else {
      alert('Invalid coupon code')
    }
  }
  
  const handleCheckout = () => {
    navigate('/checkout')
  }
  
  // Empty cart view
  if (cartItems.length === 0) {
    return (
      <div className="empty-cart section">
        <div className="container">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{ 
              maxWidth: '600px', 
              margin: '0 auto',
              padding: 'var(--spacing-xxl) 0',
            }}
          >
            <div style={{
              width: '120px',
              height: '120px',
              borderRadius: '50%',
              backgroundColor: 'var(--gray-100)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto var(--spacing-xl)',
            }}>
              <FiShoppingBag size={48} color="var(--gray-400)" />
            </div>
            
            <h1 style={{ marginBottom: 'var(--spacing-md)' }}>Your Cart is Empty</h1>
            <p style={{ 
              color: 'var(--gray-600)',
              marginBottom: 'var(--spacing-xl)',
            }}>
              Looks like you haven't added any quirky products to your cart yet. 
              Start exploring our collection to find something that catches your eye!
            </p>
            
            <Link to="/categories">
              <Button 
                variant="primary"
                size="large"
                icon={<FiShoppingBag />}
                animated={true}
              >
                Start Shopping
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    )
  }
  
  return (
    <div className="cart-page section">
      <div className="container">
        <div style={{ 
          display: 'flex',
          alignItems: 'center',
          gap: 'var(--spacing-xs)',
          marginBottom: 'var(--spacing-xl)',
        }}>
          <Link 
            to="/" 
            style={{ 
              color: 'var(--gray-600)',
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--spacing-xs)',
              fontSize: '0.875rem',
            }}
          >
            <FiArrowLeft size={14} />
            Continue Shopping
          </Link>
        </div>
        
        <h1 style={{ marginBottom: 'var(--spacing-xl)' }}>Your Bag of Oddities 🛍️</h1>
        
        <div style={{ 
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gap: 'var(--spacing-xl)',
        }}>
          {/* Cart Items */}
          <motion.div 
            style={{ gridColumn: 'span 8' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="glass" style={{
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden',
            }}>
              <div style={{ 
                padding: 'var(--spacing-lg)',
                borderBottom: '1px solid var(--gray-200)',
                display: 'grid',
                gridTemplateColumns: '100px 2fr 1fr 1fr auto',
                gap: 'var(--spacing-md)',
                alignItems: 'center',
                fontWeight: 600,
              }}>
                <div>Product</div>
                <div>Details</div>
                <div style={{ textAlign: 'center' }}>Quantity</div>
                <div style={{ textAlign: 'right' }}>Price</div>
                <div></div>
              </div>
              
              {cartProducts.map((item, index) => (
                <CartItem 
                  key={item.id} 
                  item={item} 
                  onQuantityChange={handleQuantityChange}
                  onRemove={handleRemoveItem}
                  index={index}
                />
              ))}
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
              
              <div style={{
                marginBottom: 'var(--spacing-lg)',
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
                  marginBottom: 'var(--spacing-lg)',
                }}>
                  <span>Shipping</span>
                  <span>{shipping === 0 ? 'Free' : `₹${shipping}`}</span>
                </div>
                
                <div style={{ 
                  display: 'flex',
                  justifyContent: 'space-between',
                  fontWeight: 700,
                  fontSize: '1.25rem',
                  marginBottom: 'var(--spacing-lg)',
                  paddingTop: 'var(--spacing-md)',
                  borderTop: '1px solid var(--gray-200)',
                }}>
                  <span>Total</span>
                  <span>₹{totalAmount}</span>
                </div>
              </div>
              
              {/* Coupon Code */}
              {!couponApplied ? (
                <div style={{ marginBottom: 'var(--spacing-xl)' }}>
                  <label htmlFor="coupon" style={{ display: 'block', marginBottom: 'var(--spacing-sm)' }}>
                    Have a coupon?
                  </label>
                  <div style={{ display: 'flex', gap: 'var(--spacing-sm)' }}>
                    <input 
                      type="text" 
                      id="coupon"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                      placeholder="Enter code"
                      style={{
                        flex: 1,
                        padding: 'var(--spacing-sm) var(--spacing-md)',
                        borderRadius: 'var(--radius-md)',
                        border: '1px solid var(--gray-300)',
                        fontSize: '0.875rem',
                      }}
                    />
                    <button 
                      onClick={handleApplyCoupon}
                      style={{
                        padding: 'var(--spacing-sm) var(--spacing-md)',
                        backgroundColor: 'var(--gray-800)',
                        color: 'var(--white)',
                        border: 'none',
                        borderRadius: 'var(--radius-md)',
                        cursor: 'pointer',
                        fontWeight: 500,
                        fontSize: '0.875rem',
                      }}
                      className="hover-scale"
                    >
                      Apply
                    </button>
                  </div>
                  <div style={{ 
                    fontSize: '0.75rem', 
                    color: 'var(--gray-600)', 
                    marginTop: 'var(--spacing-xs)' 
                  }}>
                    Try code: QUIRKY10 for 10% off
                  </div>
                </div>
              ) : (
                <div style={{ 
                  marginBottom: 'var(--spacing-xl)',
                  backgroundColor: 'var(--success)',
                  color: 'var(--white)',
                  padding: 'var(--spacing-sm) var(--spacing-md)',
                  borderRadius: 'var(--radius-md)',
                  fontSize: '0.875rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                  <span>Coupon QUIRKY10 applied!</span>
                  <button 
                    onClick={() => {
                      setCouponApplied(false)
                      setDiscount(0)
                      setCouponCode('')
                    }}
                    style={{
                      backgroundColor: 'transparent',
                      border: 'none',
                      color: 'var(--white)',
                      cursor: 'pointer',
                      padding: 0,
                      fontSize: '0.875rem',
                      textDecoration: 'underline',
                    }}
                  >
                    Remove
                  </button>
                </div>
              )}
              
              <Button 
                variant="primary"
                size="large"
                style={{ width: '100%' }}
                onClick={handleCheckout}
                animated={true}
              >
                Proceed to Checkout
              </Button>
              
              <div style={{ 
                marginTop: 'var(--spacing-lg)',
                padding: 'var(--spacing-md)',
                backgroundColor: 'var(--gray-100)',
                borderRadius: 'var(--radius-md)',
                fontSize: '0.875rem',
              }}>
                <p style={{ margin: 0, fontSize: '0.75rem', color: 'var(--gray-600)' }}>
                  Free shipping on all orders over ₹999
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

const CartItem = ({ item, onQuantityChange, onRemove, index }) => {
  return (
    <motion.div 
      style={{ 
        padding: 'var(--spacing-lg)',
        borderBottom: '1px solid var(--gray-200)',
        display: 'grid',
        gridTemplateColumns: '100px 2fr 1fr 1fr auto',
        gap: 'var(--spacing-md)',
        alignItems: 'center',
      }}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
    >
      <div style={{ position: 'relative' }}>
        <Link to={`/product/${item.product.slug}`}>
          <div className="shimmer" style={{ 
            borderRadius: 'var(--radius-md)',
            overflow: 'hidden',
          }}>
            <img 
              src={item.product.image} 
              alt={item.product.name}
              style={{
                width: '100%',
                height: 'auto',
                maxHeight: '80px',
                objectFit: 'cover',
              }}
            />
          </div>
        </Link>
      </div>
      
      <div>
        <h3 style={{ fontSize: '1.125rem', marginBottom: 'var(--spacing-xs)' }}>
          <Link to={`/product/${item.product.slug}`} style={{ color: 'var(--gray-900)', textDecoration: 'none' }}>
            {item.product.name}
          </Link>
        </h3>
        <p style={{ 
          fontSize: '0.875rem',
          color: 'var(--gray-600)',
          margin: 0,
        }}>
          {item.product.shortDescription}
        </p>
      </div>
      
      <div style={{ 
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <div style={{ 
          display: 'flex',
          alignItems: 'center',
          backgroundColor: 'var(--gray-100)',
          borderRadius: 'var(--radius-md)',
          overflow: 'hidden',
        }}>
          <button 
            onClick={() => onQuantityChange(item.id, item.quantity - 1)}
            style={{
              width: '30px',
              height: '30px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'transparent',
              border: 'none',
              cursor: 'pointer',
              fontSize: '1rem',
            }}
          >
            <FiMinus size={16} />
          </button>
          
          <div 
            style={{
              width: '30px',
              height: '30px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 500,
            }}
          >
            {item.quantity}
          </div>
          
          <button 
            onClick={() => onQuantityChange(item.id, item.quantity + 1)}
            style={{
              width: '30px',
              height: '30px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'transparent',
              border: 'none',
              cursor: 'pointer',
              fontSize: '1rem',
            }}
          >
            <FiPlus size={16} />
          </button>
        </div>
      </div>
      
      <div style={{ textAlign: 'right' }}>
        <div style={{ fontWeight: 600 }}>₹{item.product.price * item.quantity}</div>
        <div style={{ fontSize: '0.75rem', color: 'var(--gray-600)' }}>
          ₹{item.product.price} each
        </div>
      </div>
      
      <button 
        onClick={() => onRemove(item.id)}
        style={{
          backgroundColor: 'transparent',
          border: 'none',
          cursor: 'pointer',
          color: 'var(--gray-500)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '32px',
          height: '32px',
          borderRadius: '50%',
          transition: 'all 0.3s ease',
        }}
        className="hover-scale"
      >
        <FiTrash2 size={16} />
      </button>
    </motion.div>
  )
}

export default CartPage