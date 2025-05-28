import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiFilter, FiX } from 'react-icons/fi'
import CategoryCard from '../components/ui/CategoryCard'
import ProductCard from '../components/ui/ProductCard'
import categories from '../data/categories'
import products from '../data/products'

const CategoriesPage = () => {
  const location = useLocation()
  const queryParams = new URLSearchParams(location.search)
  const initialFilter = queryParams.get('filter')
  
  const [activeFilter, setActiveFilter] = useState(initialFilter || '')
  const [priceRange, setPriceRange] = useState([0, 2000])
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  
  useEffect(() => {
    // Update URL when filter changes
    const params = new URLSearchParams(location.search)
    if (activeFilter) {
      params.set('filter', activeFilter)
    } else {
      params.delete('filter')
    }
    
    const newUrl = `${location.pathname}${params.toString() ? `?${params.toString()}` : ''}`
    window.history.replaceState({}, '', newUrl)
  }, [activeFilter, location.pathname, location.search])
  
  const filteredProducts = products.filter(product => {
    if (activeFilter && product.category !== activeFilter) {
      return false
    }
    
    if (product.price < priceRange[0] || product.price > priceRange[1]) {
      return false
    }
    
    return true
  })
  
  return (
    <div className="categories-page">
      <div className="container">
        <section className="section" style={{ paddingBottom: 0 }}>
          <motion.h1 
            style={{ 
              textAlign: 'center',
              marginBottom: 'var(--spacing-md)',
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Shop by Curiosity
          </motion.h1>
          <motion.p 
            style={{ 
              textAlign: 'center',
              maxWidth: '600px',
              margin: '0 auto var(--spacing-xl)',
              color: 'var(--gray-600)',
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Explore our carefully curated collections of unconventional products
          </motion.p>
        </section>
        
        {!activeFilter && (
          <section className="section">
            <div style={{ 
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: 'var(--spacing-xl)'
            }}>
              {categories.map((category, index) => (
                <CategoryCard 
                  key={category.id} 
                  category={category} 
                  index={index}
                  onClick={() => setActiveFilter(category.slug)}
                />
              ))}
            </div>
          </section>
        )}
        
        <section className="section">
          <div style={{ 
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 'var(--spacing-xl)',
          }}>
            <h2>
              {activeFilter ? 
                `${categories.find(c => c.slug === activeFilter)?.name || 'Products'}` :
                'All Products'
              }
            </h2>
            
            <div style={{ display: 'flex', gap: 'var(--spacing-md)' }}>
              {activeFilter && (
                <button 
                  onClick={() => setActiveFilter('')}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--spacing-xs)',
                    backgroundColor: 'var(--gray-200)',
                    border: 'none',
                    borderRadius: 'var(--radius-full)',
                    padding: 'var(--spacing-xs) var(--spacing-md)',
                    cursor: 'pointer',
                    fontSize: '0.875rem',
                  }}
                  className="hover-scale"
                >
                  {categories.find(c => c.slug === activeFilter)?.name}
                  <FiX size={16} />
                </button>
              )}
              
              <button 
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--spacing-xs)',
                  backgroundColor: isFilterOpen ? 'var(--primary)' : 'var(--gray-200)',
                  color: isFilterOpen ? 'var(--white)' : 'var(--gray-800)',
                  border: 'none',
                  borderRadius: 'var(--radius-full)',
                  padding: 'var(--spacing-xs) var(--spacing-md)',
                  cursor: 'pointer',
                }}
                className="hover-scale"
              >
                <FiFilter size={16} />
                Filters
              </button>
            </div>
          </div>
          
          <div style={{ display: 'flex', gap: 'var(--spacing-xl)', position: 'relative' }}>
            {/* Filters sidebar */}
            {isFilterOpen && (
              <motion.div 
                className="filters-sidebar glass"
                style={{
                  width: '280px',
                  borderRadius: 'var(--radius-lg)',
                  padding: 'var(--spacing-lg)',
                  position: 'sticky',
                  top: 'var(--spacing-xl)',
                  height: 'fit-content',
                  zIndex: 10,
                }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h3 style={{ marginBottom: 'var(--spacing-lg)' }}>Filters</h3>
                
                <div style={{ marginBottom: 'var(--spacing-xl)' }}>
                  <h4 style={{ marginBottom: 'var(--spacing-md)', fontSize: '1rem' }}>Categories</h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-sm)' }}>
                    <label style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)' }}>
                      <input 
                        type="radio" 
                        name="category" 
                        checked={activeFilter === ''} 
                        onChange={() => setActiveFilter('')}
                      />
                      All Categories
                    </label>
                    
                    {categories.map(category => (
                      <label key={category.id} style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)' }}>
                        <input 
                          type="radio" 
                          name="category" 
                          checked={activeFilter === category.slug} 
                          onChange={() => setActiveFilter(category.slug)}
                        />
                        {category.name}
                      </label>
                    ))}
                  </div>
                </div>
                
                <div style={{ marginBottom: 'var(--spacing-xl)' }}>
                  <h4 style={{ marginBottom: 'var(--spacing-md)', fontSize: '1rem' }}>Price Range</h4>
                  <div>
                    <div style={{ 
                      display: 'flex', 
                      justifyContent: 'space-between',
                      marginBottom: 'var(--spacing-sm)',
                    }}>
                      <span>₹{priceRange[0]}</span>
                      <span>₹{priceRange[1]}</span>
                    </div>
                    <input 
                      type="range"
                      min="0"
                      max="2000"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                      style={{ width: '100%' }}
                    />
                  </div>
                </div>
              </motion.div>
            )}
            
            {/* Products grid */}
            <div style={{ 
              flex: 1,
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: 'var(--spacing-lg)'
            }}>
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product, index) => (
                  <ProductCard key={product.id} product={product} index={index} />
                ))
              ) : (
                <div 
                  style={{ 
                    gridColumn: '1 / -1',
                    textAlign: 'center',
                    padding: 'var(--spacing-xxl)',
                  }}
                >
                  <h3 style={{ marginBottom: 'var(--spacing-md)' }}>No products found</h3>
                  <p>Try adjusting your filters or browse other categories</p>
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default CategoriesPage