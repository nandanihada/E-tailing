import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiArrowRight, FiCalendar, FiUser, FiTag } from 'react-icons/fi'

const blogPosts = [
  {
    id: 1,
    title: '7 Weird Things That Actually Make Life Easier',
    slug: '7-weird-things',
    excerpt: "Life's messy. These 7 products make it a bit less chaotic. From self-cleaning pads to collapsible crates, here's our best-kept secrets.",
    image: 'https://images.pexels.com/photos/4271317/pexels-photo-4271317.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'Priya Sharma',
    date: 'August 15, 2023',
    category: 'Productivity',
    featured: true
  },
  {
    id: 2,
    title: 'Kitchen Gadgets You Never Knew You Needed',
    slug: 'kitchen-gadgets',
    excerpt: 'Your kitchen is probably missing these 5 game-changing tools that make cooking faster, cleaner, and way more fun.',
    image: 'https://images.pexels.com/photos/4226901/pexels-photo-4226901.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'Rahul Mehra',
    date: 'July 28, 2023',
    category: 'Kitchen'
  },
  {
    id: 3,
    title: 'Tech Wonders Under ₹500',
    slug: 'tech-wonders',
    excerpt: 'Budget-friendly tech doesn\'t have to be boring. These affordable gadgets deliver functionality and fun without breaking the bank.',
    image: 'https://images.pexels.com/photos/4264047/pexels-photo-4264047.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'Vikram Singh',
    date: 'June 12, 2023',
    category: 'Tech'
  },
  {
    id: 4,
    title: 'The Psychology of Quirky Products',
    slug: 'psychology-quirky-products',
    excerpt: 'Why do unusual products bring us so much joy? We explore the science behind why uniqueness triggers happiness and satisfaction.',
    image: 'https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'Dr. Ananya Patel',
    date: 'May 5, 2023',
    category: 'Psychology'
  },
  {
    id: 5,
    title: 'Travel Hacks: Tiny Tools, Big Impact',
    slug: 'travel-hacks',
    excerpt: 'These pocket-sized travel companions will transform your next trip. From portable washers to collapsible everything.',
    image: 'https://images.pexels.com/photos/934718/pexels-photo-934718.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'Aditya Kapoor',
    date: 'April 22, 2023',
    category: 'Travel'
  },
  {
    id: 6,
    title: 'Gift Guide: For People Who Have Everything',
    slug: 'gift-guide',
    excerpt: 'Shopping for someone impossible? These conversation-starting gifts will surprise even the person who seems to have it all.',
    image: 'https://images.pexels.com/photos/1666067/pexels-photo-1666067.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'Neha Gupta',
    date: 'March 10, 2023',
    category: 'Gifting'
  }
]

const BlogPage = () => {
  const featuredPost = blogPosts.find(post => post.featured)
  const regularPosts = blogPosts.filter(post => !post.featured)
  
  return (
    <div className="blog-page">
      <section className="hero-section section" style={{ paddingBottom: 0 }}>
        <div className="container">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 style={{ marginBottom: 'var(--spacing-md)' }}>
              Quirky Insights
            </h1>
            <p style={{ 
              fontSize: '1.25rem',
              color: 'var(--gray-600)',
              maxWidth: '700px',
              margin: '0 auto var(--spacing-xl)',
            }}>
              Stories, guides, and discoveries from the world of unusual products
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Featured Post */}
      {featuredPost && (
        <section className="featured-post section" style={{ paddingTop: 'var(--spacing-lg)' }}>
          <div className="container">
            <motion.div 
              className="glass hover-lift"
              style={{
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                display: 'grid',
                gridTemplateColumns: 'repeat(12, 1fr)',
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -5 }}
            >
              <div style={{ gridColumn: 'span 7', position: 'relative' }}>
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
                <div style={{
                  position: 'absolute',
                  top: 'var(--spacing-md)',
                  left: 'var(--spacing-md)',
                  backgroundColor: 'var(--primary)',
                  color: 'var(--white)',
                  padding: 'var(--spacing-xs) var(--spacing-md)',
                  borderRadius: 'var(--radius-sm)',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                }}>
                  Featured
                </div>
              </div>
              
              <div style={{ 
                gridColumn: 'span 5',
                padding: 'var(--spacing-xl)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}>
                <div style={{ 
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--spacing-md)',
                  marginBottom: 'var(--spacing-md)',
                  color: 'var(--gray-600)',
                  fontSize: '0.875rem',
                }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-xs)' }}>
                    <FiCalendar size={14} />
                    {featuredPost.date}
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-xs)' }}>
                    <FiTag size={14} />
                    {featuredPost.category}
                  </span>
                </div>
                
                <h2 style={{ marginBottom: 'var(--spacing-md)' }}>
                  <Link to={`/blog/${featuredPost.slug}`} style={{ color: 'var(--gray-900)', textDecoration: 'none' }}>
                    {featuredPost.title}
                  </Link>
                </h2>
                
                <p style={{ 
                  marginBottom: 'var(--spacing-lg)',
                  color: 'var(--gray-700)',
                  lineHeight: 1.6,
                }}>
                  {featuredPost.excerpt}
                </p>
                
                <div style={{ marginTop: 'auto' }}>
                  <Link 
                    to={`/blog/${featuredPost.slug}`}
                    style={{ 
                      display: 'flex',
                      alignItems: 'center',
                      gap: 'var(--spacing-xs)',
                      color: 'var(--primary)',
                      fontWeight: 500,
                      textDecoration: 'none',
                    }}
                    className="hover-scale"
                  >
                    Read Full Article
                    <FiArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}
      
      {/* Regular Posts */}
      <section className="blog-posts section">
        <div className="container">
          <h2 style={{ marginBottom: 'var(--spacing-xl)' }}>Latest Articles</h2>
          
          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: 'var(--spacing-xl)',
          }}>
            {regularPosts.map((post, index) => (
              <BlogCard key={post.id} post={post} index={index} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Newsletter */}
      <section className="newsletter-section section" style={{ backgroundColor: 'var(--gray-100)' }}>
        <div className="container">
          <div className="glass" style={{ 
            padding: 'var(--spacing-xl)',
            borderRadius: 'var(--radius-lg)',
            maxWidth: '800px',
            margin: '0 auto',
            textAlign: 'center',
          }}>
            <motion.h2 
              style={{ marginBottom: 'var(--spacing-md)' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Subscribe to Quirky Insights
            </motion.h2>
            
            <motion.p
              style={{ 
                marginBottom: 'var(--spacing-lg)',
                maxWidth: '600px',
                margin: '0 auto var(--spacing-lg)',
                color: 'var(--gray-600)',
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Get our latest articles, product recommendations, and exclusive offers delivered directly to your inbox.
            </motion.p>
            
            <motion.div
              style={{
                display: 'flex',
                gap: 'var(--spacing-md)',
                maxWidth: '500px',
                margin: '0 auto',
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <input 
                type="email" 
                placeholder="Your email address"
                style={{
                  flex: 1,
                  padding: 'var(--spacing-md) var(--spacing-lg)',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--gray-300)',
                  fontSize: '1rem',
                }}
              />
              <button
                style={{
                  backgroundColor: 'var(--primary)',
                  color: 'var(--white)',
                  padding: 'var(--spacing-md) var(--spacing-lg)',
                  borderRadius: 'var(--radius-md)',
                  border: 'none',
                  fontWeight: 500,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  minWidth: '150px',
                }}
                className="hover-scale"
              >
                Subscribe
              </button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

const BlogCard = ({ post, index }) => {
  return (
    <motion.div 
      className="blog-card glass hover-lift"
      style={{
        borderRadius: 'var(--radius-lg)',
        overflow: 'hidden',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div style={{ position: 'relative' }}>
        <Link to={`/blog/${post.slug}`}>
          <img 
            src={post.image} 
            alt={post.title}
            style={{
              width: '100%',
              height: '200px',
              objectFit: 'cover',
            }}
          />
        </Link>
        <div style={{
          position: 'absolute',
          top: 'var(--spacing-md)',
          left: 'var(--spacing-md)',
          backgroundColor: 'var(--white)',
          color: 'var(--primary)',
          padding: 'var(--spacing-xs) var(--spacing-md)',
          borderRadius: 'var(--radius-sm)',
          fontSize: '0.75rem',
          fontWeight: 600,
        }}>
          {post.category}
        </div>
      </div>
      
      <div style={{ 
        padding: 'var(--spacing-lg)',
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
      }}>
        <div style={{ 
          display: 'flex',
          alignItems: 'center',
          gap: 'var(--spacing-md)',
          marginBottom: 'var(--spacing-md)',
          color: 'var(--gray-600)',
          fontSize: '0.75rem',
        }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-xs)' }}>
            <FiUser size={12} />
            {post.author}
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-xs)' }}>
            <FiCalendar size={12} />
            {post.date}
          </span>
        </div>
        
        <h3 style={{ marginBottom: 'var(--spacing-md)', fontSize: '1.25rem' }}>
          <Link to={`/blog/${post.slug}`} style={{ color: 'var(--gray-900)', textDecoration: 'none' }}>
            {post.title}
          </Link>
        </h3>
        
        <p style={{ 
          color: 'var(--gray-600)',
          marginBottom: 'var(--spacing-lg)',
          lineHeight: 1.6,
          flex: 1,
        }}>
          {post.excerpt}
        </p>
        
        <Link 
          to={`/blog/${post.slug}`}
          style={{ 
            display: 'flex',
            alignItems: 'center',
            gap: 'var(--spacing-xs)',
            color: 'var(--primary)',
            fontWeight: 500,
            textDecoration: 'none',
            marginTop: 'auto',
          }}
          className="hover-scale"
        >
          Read More
          <FiArrowRight size={16} />
        </Link>
      </div>
    </motion.div>
  )
}

export default BlogPage