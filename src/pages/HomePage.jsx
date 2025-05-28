import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiArrowRight, FiPlay, FiCheckCircle } from 'react-icons/fi'
import Button from '../components/ui/Button'
import ProductCard from '../components/ui/ProductCard'
import CategoryCard from '../components/ui/CategoryCard'
import products from '../data/products'
import categories from '../data/categories'

const HomePage = () => {
  const trendingProducts = products.filter(product => product.tag === 'Trending').slice(0, 4)
  const featuredCategories = categories.filter(category => category.featured).slice(0, 4)
  
  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero" style={{
        backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.8), rgba(255,255,255,0.6)), url(https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: 'var(--spacing-xxl) 0',
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
      }}>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="grid" style={{ gridTemplateColumns: '1fr 1fr', gap: 'var(--spacing-xl)' }}>
            <motion.div 
              className="hero-content stagger-fade-in"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.h1 
                style={{ 
                  fontSize: '3.5rem', 
                  fontWeight: 700,
                  marginBottom: 'var(--spacing-lg)',
                  lineHeight: 1.1,
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Wildly Unexpected.
                <br />
                Seriously Useful.
              </motion.h1>
              
              <motion.p 
                style={{ 
                  fontSize: '1.25rem', 
                  color: 'var(--gray-700)',
                  marginBottom: 'var(--spacing-xl)',
                  maxWidth: '500px',
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Discover 100+ offbeat products you didn't know you needed. Until now.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Button 
                  variant="primary" 
                  size="large" 
                  icon={<FiArrowRight />} 
                  iconPosition="right"
                  animated={true}
                >
                  Shop the Collection
                </Button>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="hero-image glass"
              style={{ 
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                boxShadow: 'var(--glass-shadow)',
                position: 'relative',
              }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <img 
                src="https://images.pexels.com/photos/4271568/pexels-photo-4271568.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Quirky products" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Trending Now Section */}
      <section className="trending-section section">
        <div className="container">
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 'var(--spacing-xl)'
          }}>
            <h2>Trending Now</h2>
            <Link 
              to="/categories" 
              style={{ 
                display: 'flex', 
                alignItems: 'center',
                gap: 'var(--spacing-xs)',
                color: 'var(--primary)',
                fontWeight: 500,
              }}
              className="hover-scale"
            >
              View All Products
              <FiArrowRight />
            </Link>
          </div>
          
          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: 'var(--spacing-lg)'
          }}>
            {trendingProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Video Demos Section */}
      <section className="video-section section" style={{ backgroundColor: 'var(--gray-100)' }}>
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: 'var(--spacing-xl)' }}>See the Weird in Action</h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: 'var(--spacing-lg)'
          }}>
            {products.slice(0, 3).map((product, index) => (
              <motion.div 
                key={product.id}
                className="video-card glass hover-lift"
                style={{ 
                  borderRadius: 'var(--radius-lg)',
                  overflow: 'hidden',
                  position: 'relative',
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div style={{ 
                  paddingTop: '56.25%', // 16:9 aspect ratio
                  position: 'relative',
                }}>
                  <img 
                    src={product.image} 
                    alt={product.name}
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                  
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'rgba(0,0,0,0.3)',
                  }}>
                    <button 
                      className="play-button hover-scale"
                      style={{
                        width: '60px',
                        height: '60px',
                        borderRadius: '50%',
                        backgroundColor: 'var(--primary)',
                        border: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                      }}
                    >
                      <FiPlay color="white" size={24} style={{ marginLeft: '4px' }} />
                    </button>
                  </div>
                </div>
                
                <div style={{ padding: 'var(--spacing-lg)' }}>
                  <h3 style={{ marginBottom: 'var(--spacing-sm)' }}>{product.name}</h3>
                  <p style={{ fontSize: '0.875rem', color: 'var(--gray-600)' }}>
                    {product.shortDescription}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Categories Section */}
      <section className="categories-section section">
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: 'var(--spacing-sm)' }}>Shop by Curiosity</h2>
          <p style={{ 
            textAlign: 'center', 
            marginBottom: 'var(--spacing-xl)',
            maxWidth: '600px',
            margin: '0 auto var(--spacing-xl)',
            color: 'var(--gray-600)',
          }}>
            Explore our carefully curated categories of unexpected solutions
          </p>
          
          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: 'var(--spacing-xl)'
          }}>
            {featuredCategories.map((category, index) => (
              <CategoryCard key={category.id} category={category} index={index} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Why Choose Us Section */}
      <section className="why-choose-section section" style={{ backgroundColor: 'var(--gray-100)' }}>
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: 'var(--spacing-sm)' }}>This Isn't Just Another Store.</h2>
          <p style={{ 
            textAlign: 'center', 
            marginBottom: 'var(--spacing-xl)',
            maxWidth: '600px',
            margin: '0 auto var(--spacing-xl)',
            color: 'var(--gray-600)',
          }}>
            We search the globe for products that make you say "wow"—and actually work.
          </p>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: 'var(--spacing-xl)'
          }}>
            <ValueProp 
              icon={<FiCheckCircle size={36} color="var(--primary)" />}
              title="Unusual Products That Solve Real Problems"
              description="Every item we stock has been tested and proven to make life better in some unexpected way."
              index={0}
            />
            
            <ValueProp 
              icon={<FiCheckCircle size={36} color="var(--primary)" />}
              title="Curated by Real Humans, Not Algorithms"
              description="Our team personally vets every product, ensuring quality and functionality that algorithms miss."
              index={1}
            />
            
            <ValueProp 
              icon={<FiCheckCircle size={36} color="var(--primary)" />}
              title="Fast Delivery. Easy Returns."
              description="3-5 day delivery across India, with a hassle-free 30-day return policy if you're not amazed."
              index={2}
            />
          </div>
        </div>
      </section>
    </div>
  )
}

const ValueProp = ({ icon, title, description, index }) => {
  return (
    <motion.div 
      className="value-prop glass"
      style={{
        padding: 'var(--spacing-xl)',
        borderRadius: 'var(--radius-lg)',
        height: '100%',
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
    >
      <div style={{ marginBottom: 'var(--spacing-md)' }}>
        {icon}
      </div>
      <h3 style={{ fontSize: '1.25rem', marginBottom: 'var(--spacing-sm)' }}>{title}</h3>
      <p style={{ color: 'var(--gray-600)' }}>{description}</p>
    </motion.div>
  )
}

export default HomePage