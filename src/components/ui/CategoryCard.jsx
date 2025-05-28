import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const CategoryCard = ({ category, index }) => {
  // Animation variants
  const cardVariants = {
    rest: { scale: 1, transition: { duration: 0.2 } },
    hover: { scale: 1.05, transition: { duration: 0.2 } },
  }
  
  const imageVariants = {
    rest: { scale: 1, filter: 'brightness(0.8)', transition: { duration: 0.3 } },
    hover: { scale: 1.1, filter: 'brightness(1)', transition: { duration: 0.3 } },
  }
  
  const textVariants = {
    rest: { y: 0, transition: { duration: 0.3 } },
    hover: { y: -5, transition: { duration: 0.3 } },
  }
  
  // Staggered entry animation
  const entryVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.1,
        duration: 0.5,
      }
    }
  }
  
  return (
    <motion.div 
      className="flip-card"
      initial="hidden"
      animate="visible"
      variants={entryVariants}
      style={{ height: '250px' }}
    >
      <div className="flip-card-inner">
        <motion.div 
          className="flip-card-front glass"
          initial="rest"
          whileHover="hover"
          style={{
            position: 'relative',
            borderRadius: 'var(--radius-lg)',
            overflow: 'hidden',
            width: '100%',
            height: '100%',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
          }}
        >
          <motion.div
            variants={imageVariants}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              zIndex: -1,
            }}
          >
            <img 
              src={category.image} 
              alt={category.name}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </motion.div>
          
          <div 
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              width: '100%',
              padding: 'var(--spacing-xl) var(--spacing-lg) var(--spacing-lg)',
              background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%)',
              color: 'var(--white)',
              zIndex: 1,
            }}
          >
            <motion.h3 
              variants={textVariants}
              style={{ 
                fontSize: '1.5rem', 
                fontWeight: 700,
                marginBottom: 'var(--spacing-xs)',
              }}
            >
              {category.name}
            </motion.h3>
            <motion.p 
              variants={textVariants}
              style={{ fontSize: '0.875rem', opacity: 0.9 }}
            >
              {category.description}
            </motion.p>
          </div>
        </motion.div>
        
        <div className="flip-card-back">
          <div style={{ textAlign: 'center', padding: 'var(--spacing-lg)' }}>
            <h3 style={{ 
              fontSize: '1.5rem', 
              fontWeight: 700,
              marginBottom: 'var(--spacing-md)',
            }}>
              {category.name}
            </h3>
            <p style={{ 
              fontSize: '0.875rem', 
              marginBottom: 'var(--spacing-xl)',
            }}>
              {category.longDescription || category.description}
            </p>
            <Link 
              to={`/categories?filter=${category.slug}`} 
              style={{
                display: 'inline-block',
                backgroundColor: 'var(--white)',
                color: 'var(--primary)',
                padding: 'var(--spacing-sm) var(--spacing-lg)',
                borderRadius: 'var(--radius-full)',
                fontWeight: 500,
                textDecoration: 'none',
                transition: 'all 0.3s ease',
              }}
              className="hover-scale"
            >
              Browse Products
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default CategoryCard