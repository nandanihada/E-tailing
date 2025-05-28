import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiArrowLeft, FiShoppingCart, FiHeart, FiPlay, FiShare2, FiCheck } from 'react-icons/fi'
import Button from '../components/ui/Button'
import ProductCard from '../components/ui/ProductCard'
import products from '../data/products'

const ProductPage = () => {
  const { slug } = useParams()
  const product = products.find(p => p.slug === slug)
  
  const [mainImage, setMainImage] = useState(product?.image)
  const [quantity, setQuantity] = useState(1)
  const [isAddedToCart, setIsAddedToCart] = useState(false)
  const [isFavorite, setIsFavorite] = useState(false)
  
  // Find related products (same category, excluding current product)
  const relatedProducts = products
    .filter(p => p.category === product?.category && p.id !== product?.id)
    .slice(0, 4)
  
  if (!product) {
    return (
      <div className="container" style={{ padding: 'var(--spacing-xxl) 0' }}>
        <h2>Product not found</h2>
        <Link to="/">Return to homepage</Link>
      </div>
    )
  }
  
  const handleAddToCart = () => {
    setIsAddedToCart(true)
    setTimeout(() => setIsAddedToCart(false), 2000)
    // Here you would add the actual cart functionality
  }
  
  return (
    <div className="product-page">
      {/* Breadcrumb */}
      <div className="container" style={{ padding: 'var(--spacing-lg) 0' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-xs)' }}>
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
            Back to products
          </Link>
        </div>
      </div>
      
      {/* Product Details */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: 'var(--spacing-xl)',
          }}>
            {/* Product Images */}
            <div style={{ gridColumn: 'span 6' }}>
              <motion.div 
                className="main-image glass"
                style={{ 
                  borderRadius: 'var(--radius-lg)',
                  overflow: 'hidden',
                  marginBottom: 'var(--spacing-md)',
                  paddingTop: '100%', // 1:1 aspect ratio
                  position: 'relative',
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <img 
                  src={mainImage} 
                  alt={product.name}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
                
                {product.tag && (
                  <div 
                    style={{
                      position: 'absolute',
                      top: 'var(--spacing-md)',
                      left: 'var(--spacing-md)',
                      backgroundColor: 
                        product.tag === 'New' ? 'var(--primary)' :
                        product.tag === 'Sale' ? 'var(--accent)' : 'var(--warning)',
                      color: 'var(--white)',
                      padding: 'var(--spacing-xs) var(--spacing-sm)',
                      borderRadius: 'var(--radius-sm)',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                    }}
                  >
                    {product.tag}
                  </div>
                )}
              </motion.div>
              
              <div style={{ 
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: 'var(--spacing-md)'
              }}>
                {product.gallery?.map((image, index) => (
                  <motion.div 
                    key={index}
                    className="thumbnail glass"
                    style={{
                      borderRadius: 'var(--radius-md)',
                      overflow: 'hidden',
                      cursor: 'pointer',
                      paddingTop: '100%', // 1:1 aspect ratio
                      position: 'relative',
                      border: mainImage === image ? '2px solid var(--primary)' : 'none',
                    }}
                    whileHover={{ scale: 1.05 }}
                    onClick={() => setMainImage(image)}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                  >
                    <img 
                      src={image} 
                      alt={`${product.name} view ${index + 1}`}
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                      }}
                    />
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Product Info */}
            <div style={{ gridColumn: 'span 6' }}>
              <motion.div
                className="stagger-fade-in"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <motion.h1 
                  style={{ 
                    fontSize: '2.5rem',
                    marginBottom: 'var(--spacing-sm)',
                  }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {product.name}
                </motion.h1>
                
                <motion.div 
                  style={{ 
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--spacing-md)',
                    marginBottom: 'var(--spacing-md)'
                  }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <div style={{ 
                    fontSize: '1.75rem',
                    fontWeight: 700,
                    color: 'var(--primary)'
                  }}>
                    ₹{product.price}
                  </div>
                  
                  <div style={{ 
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--spacing-xs)'
                  }}>
                    {[...Array(5)].map((_, i) => (
                      <span 
                        key={i}
                        style={{
                          color: i < Math.floor(product.rating) ? 'var(--warning)' : 'var(--gray-300)'
                        }}
                      >
                        ★
                      </span>
                    ))}
                    <span style={{ color: 'var(--gray-600)', fontSize: '0.875rem' }}>
                      ({product.reviewCount} reviews)
                    </span>
                  </div>
                </motion.div>
                
                <motion.p 
                  style={{ 
                    fontSize: '1.125rem',
                    color: 'var(--gray-700)',
                    marginBottom: 'var(--spacing-lg)',
                    lineHeight: 1.6,
                  }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  {product.shortDescription}
                </motion.p>
                
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <div style={{ marginBottom: 'var(--spacing-xl)' }}>
                    <p style={{ 
                      fontSize: '1rem',
                      color: 'var(--gray-800)',
                      marginBottom: 'var(--spacing-lg)',
                      lineHeight: 1.6,
                    }}>
                      {product.description}
                    </p>
                    
                    <div style={{ marginBottom: 'var(--spacing-lg)' }}>
                      <h3 style={{ fontSize: '1.25rem', marginBottom: 'var(--spacing-md)' }}>Key Features</h3>
                      <ul style={{ paddingLeft: 'var(--spacing-lg)' }}>
                        {product.features.map((feature, index) => (
                          <li 
                            key={index}
                            style={{ 
                              marginBottom: 'var(--spacing-sm)',
                              position: 'relative',
                            }}
                          >
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--spacing-md)',
                    marginBottom: 'var(--spacing-lg)',
                  }}>
                    <div style={{ 
                      display: 'flex',
                      alignItems: 'center',
                      backgroundColor: 'var(--gray-200)',
                      borderRadius: 'var(--radius-md)',
                      overflow: 'hidden',
                    }}>
                      <button 
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        style={{
                          width: '40px',
                          height: '40px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          backgroundColor: 'transparent',
                          border: 'none',
                          cursor: 'pointer',
                          fontSize: '1.25rem',
                        }}
                      >
                        −
                      </button>
                      
                      <div 
                        style={{
                          width: '40px',
                          height: '40px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontWeight: 500,
                        }}
                      >
                        {quantity}
                      </div>
                      
                      <button 
                        onClick={() => setQuantity(quantity + 1)}
                        style={{
                          width: '40px',
                          height: '40px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          backgroundColor: 'transparent',
                          border: 'none',
                          cursor: 'pointer',
                          fontSize: '1.25rem',
                        }}
                      >
                        +
                      </button>
                    </div>
                    
                    <div style={{ display: 'flex', gap: 'var(--spacing-md)', flex: 1 }}>
                      <Button 
                        variant="primary" 
                        style={{ flex: 1 }}
                        icon={isAddedToCart ? <FiCheck /> : <FiShoppingCart />}
                        onClick={handleAddToCart}
                        animated={true}
                      >
                        {isAddedToCart ? 'Added!' : 'Add to Cart'}
                      </Button>
                      
                      <button 
                        onClick={() => setIsFavorite(!isFavorite)}
                        style={{
                          width: '48px',
                          height: '48px',
                          borderRadius: 'var(--radius-md)',
                          backgroundColor: isFavorite ? 'var(--primary-light)' : 'var(--gray-200)',
                          border: 'none',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          cursor: 'pointer',
                          transition: 'all 0.3s ease',
                        }}
                        className="hover-scale"
                      >
                        <FiHeart 
                          size={20} 
                          color={isFavorite ? 'white' : 'var(--gray-700)'} 
                          fill={isFavorite ? 'white' : 'none'} 
                        />
                      </button>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div
                  className="product-actions"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <div style={{ 
                    display: 'flex',
                    gap: 'var(--spacing-md)',
                    marginBottom: 'var(--spacing-xl)'
                  }}>
                    <Button 
                      variant="outline" 
                      icon={<FiPlay size={16} />}
                      style={{ flex: 1 }}
                    >
                      View Demo Video
                    </Button>
                    
                    <Button 
                      variant="outline"
                      icon={<FiShare2 size={16} />}
                      style={{ flex: 1 }}
                    >
                      Share Product
                    </Button>
                  </div>
                  
                  <div className="shipping-info glass" style={{
                    padding: 'var(--spacing-lg)',
                    borderRadius: 'var(--radius-md)',
                  }}>
                    <h3 style={{ fontSize: '1rem', marginBottom: 'var(--spacing-md)' }}>Product Details</h3>
                    <div style={{ 
                      display: 'grid',
                      gridTemplateColumns: 'repeat(2, 1fr)',
                      gap: 'var(--spacing-md)'
                    }}>
                      <div>
                        <p style={{ fontSize: '0.875rem', color: 'var(--gray-600)', marginBottom: 'var(--spacing-xs)' }}>Availability</p>
                        <p style={{ 
                          fontWeight: 500,
                          color: product.inStock ? 'var(--success)' : 'var(--error)'
                        }}>
                          {product.inStock ? 'In Stock' : 'Out of Stock'}
                        </p>
                      </div>
                      
                      <div>
                        <p style={{ fontSize: '0.875rem', color: 'var(--gray-600)', marginBottom: 'var(--spacing-xs)' }}>Shipping</p>
                        <p style={{ fontWeight: 500 }}>3–5 days PAN India</p>
                      </div>
                      
                      <div>
                        <p style={{ fontSize: '0.875rem', color: 'var(--gray-600)', marginBottom: 'var(--spacing-xs)' }}>Category</p>
                        <p style={{ fontWeight: 500 }}>
                          <Link to={`/categories?filter=${product.category}`} style={{ color: 'var(--primary)' }}>
                            {product.category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                          </Link>
                        </p>
                      </div>
                      
                      <div>
                        <p style={{ fontSize: '0.875rem', color: 'var(--gray-600)', marginBottom: 'var(--spacing-xs)' }}>Returns</p>
                        <p style={{ fontWeight: 500 }}>30-day easy returns</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Related Products */}
      <section className="section" style={{ backgroundColor: 'var(--gray-100)' }}>
        <div className="container">
          <h2 style={{ marginBottom: 'var(--spacing-xl)' }}>You May Also Like</h2>
          
          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: 'var(--spacing-lg)'
          }}>
            {relatedProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProductPage