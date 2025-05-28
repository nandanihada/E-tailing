import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiShoppingCart, FiHeart } from 'react-icons/fi'

const ProductCard = ({ product, index }) => {
  const [isHovered, setIsHovered] = useState(false)
  const [isFavorite, setIsFavorite] = useState(false)
  
  // Staggered animation for cards
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.1,
      }
    }
  }
  
  return (
    <motion.div
      className="product-card glass hover-lift shimmer"
      style={{
        borderRadius: 'var(--radius-lg)',
        overflow: 'hidden',
        transition: 'all 0.3s ease',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial="hidden"
      animate="visible"
      variants={cardVariants}
    >
      <div 
        className="product-image-container"
        style={{ 
          position: 'relative',
          paddingTop: '80%', // 4:5 aspect ratio
          overflow: 'hidden',
          borderRadius: 'var(--radius-lg) var(--radius-lg) 0 0',
        }}
      >
        <Link to={`/product/${product.slug}`}>
          <img 
            src={product.image} 
            alt={product.name}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transition: 'transform 0.6s ease',
              transform: isHovered ? 'scale(1.05)' : 'scale(1)',
            }}
          />
        </Link>
        
        <button 
          className={`favorite-button ${isFavorite ? 'active' : ''}`}
          onClick={() => setIsFavorite(!isFavorite)}
          style={{
            position: 'absolute',
            top: 'var(--spacing-md)',
            right: 'var(--spacing-md)',
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            border: 'none',
            borderRadius: '50%',
            width: '36px',
            height: '36px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            zIndex: 2,
            transition: 'background-color 0.3s ease',
          }}
        >
          <FiHeart 
            size={18} 
            fill={isFavorite ? 'var(--primary)' : 'none'} 
            color={isFavorite ? 'var(--primary)' : 'var(--gray-700)'}
          />
        </button>
        
        {product.tag && (
          <div 
            className="product-tag"
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
              zIndex: 2,
            }}
          >
            {product.tag}
          </div>
        )}
      </div>
      
      <div 
        className="product-info"
        style={{
          padding: 'var(--spacing-lg)',
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
        }}
      >
        <div style={{ marginBottom: 'var(--spacing-sm)' }}>
          <h3 
            style={{ 
              fontSize: '1.125rem', 
              marginBottom: 'var(--spacing-xs)',
              transition: 'color 0.3s ease',
              color: isHovered ? 'var(--primary)' : 'var(--gray-900)',
            }}
          >
            <Link to={`/product/${product.slug}`} style={{ color: 'inherit', textDecoration: 'none' }}>
              {product.name}
            </Link>
          </h3>
          <p style={{ 
            fontSize: '0.875rem', 
            color: 'var(--gray-600)',
            marginBottom: 'var(--spacing-md)',
          }}>
            {product.shortDescription}
          </p>
        </div>
        
        <div style={{ 
          marginTop: 'auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
          <div className="product-price" style={{ fontWeight: 700, fontSize: '1.125rem' }}>
            ₹{product.price}
          </div>
          
          <button 
            className="add-to-cart btn-bounce"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'var(--primary)',
              color: 'var(--white)',
              border: 'none',
              borderRadius: 'var(--radius-full)',
              width: '40px',
              height: '40px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--primary-dark)'
              e.currentTarget.style.transform = 'translateY(-2px)'
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--primary)'
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            <FiShoppingCart size={18} />
          </button>
        </div>
      </div>
      
      {isHovered && (
        <Link 
          to={`/product/${product.slug}`}
          className="quick-view-button"
          style={{
            position: 'absolute',
            bottom: 'var(--spacing-lg)',
            left: '50%',
            transform: 'translateX(-50%)',
            backgroundColor: 'var(--white)',
            color: 'var(--gray-900)',
            padding: 'var(--spacing-sm) var(--spacing-lg)',
            borderRadius: 'var(--radius-full)',
            fontWeight: 500,
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
            zIndex: 2,
            opacity: 0,
            animation: 'fadeIn 0.3s forwards',
            textDecoration: 'none',
          }}
        >
          View Details
        </Link>
      )}
    </motion.div>
  )
}

export default ProductCard