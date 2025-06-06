import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiPackage, FiUsers, FiDollarSign, FiTrendingUp, FiPlus, FiEdit2, FiTrash2 } from 'react-icons/fi';
import { collection, getDocs, addDoc, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { db, auth } from '../lib/firebase';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const AdminDashboard = () => {
  const [products, setProducts] = useState([]);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    category: '',
    description: '',
    image: ''
  });
  
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (!user) {
        navigate('/admin/login');
      }
    });

    fetchProducts();
    return () => unsubscribe();
  }, [navigate]);

  const fetchProducts = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'products'));
      const productsData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setProducts(productsData);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const handleAddProduct = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'products'), formData);
      setIsAddModalOpen(false);
      setFormData({
        name: '',
        price: '',
        category: '',
        description: '',
        image: ''
      });
      fetchProducts();
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  const handleEditProduct = async (e) => {
    e.preventDefault();
    try {
      await updateDoc(doc(db, 'products', selectedProduct.id), formData);
      setIsEditModalOpen(false);
      setSelectedProduct(null);
      fetchProducts();
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };

  const handleDeleteProduct = async (productId) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      try {
        await deleteDoc(doc(db, 'products', productId));
        fetchProducts();
      } catch (error) {
        console.error('Error deleting product:', error);
      }
    }
  };

  const mockChartData = [
    { name: 'Jan', sales: 4000 },
    { name: 'Feb', sales: 3000 },
    { name: 'Mar', sales: 5000 },
    { name: 'Apr', sales: 4500 },
    { name: 'May', sales: 6000 },
    { name: 'Jun', sales: 5500 }
  ];

  return (
    <div className="admin-dashboard" style={{ padding: 'var(--spacing-xl)' }}>
      <div className="container">
        <div style={{ 
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 'var(--spacing-xl)'
        }}>
          <h1>Admin Dashboard</h1>
          <button
            onClick={() => setIsAddModalOpen(true)}
            style={{
              backgroundColor: 'var(--primary)',
              color: 'white',
              padding: 'var(--spacing-md) var(--spacing-lg)',
              borderRadius: 'var(--radius-md)',
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--spacing-sm)',
              border: 'none',
              cursor: 'pointer',
            }}
            className="hover-lift"
          >
            <FiPlus />
            Add New Product
          </button>
        </div>

        {/* Stats Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: 'var(--spacing-lg)',
          marginBottom: 'var(--spacing-xl)'
        }}>
          <StatCard
            icon={<FiPackage />}
            title="Total Products"
            value={products.length}
            trend="+12%"
          />
          <StatCard
            icon={<FiUsers />}
            title="Total Users"
            value="1,234"
            trend="+25%"
          />
          <StatCard
            icon={<FiDollarSign />}
            title="Revenue"
            value="₹1,23,456"
            trend="+18%"
          />
          <StatCard
            icon={<FiTrendingUp />}
            title="Orders"
            value="256"
            trend="+15%"
          />
        </div>

        {/* Sales Chart */}
        <div className="glass" style={{
          padding: 'var(--spacing-xl)',
          borderRadius: 'var(--radius-lg)',
          marginBottom: 'var(--spacing-xl)',
          height: '400px'
        }}>
          <h2 style={{ marginBottom: 'var(--spacing-lg)' }}>Sales Overview</h2>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={mockChartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="sales" stroke="var(--primary)" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Products Table */}
        <div className="glass" style={{
          padding: 'var(--spacing-xl)',
          borderRadius: 'var(--radius-lg)',
        }}>
          <h2 style={{ marginBottom: 'var(--spacing-lg)' }}>Products</h2>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr>
                  <th style={{ textAlign: 'left', padding: 'var(--spacing-md)' }}>Product</th>
                  <th style={{ textAlign: 'left', padding: 'var(--spacing-md)' }}>Category</th>
                  <th style={{ textAlign: 'left', padding: 'var(--spacing-md)' }}>Price</th>
                  <th style={{ textAlign: 'right', padding: 'var(--spacing-md)' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product.id}>
                    <td style={{ padding: 'var(--spacing-md)' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-md)' }}>
                        <img
                          src={product.image}
                          alt={product.name}
                          style={{
                            width: '50px',
                            height: '50px',
                            objectFit: 'cover',
                            borderRadius: 'var(--radius-md)',
                          }}
                        />
                        {product.name}
                      </div>
                    </td>
                    <td style={{ padding: 'var(--spacing-md)' }}>{product.category}</td>
                    <td style={{ padding: 'var(--spacing-md)' }}>₹{product.price}</td>
                    <td style={{ padding: 'var(--spacing-md)', textAlign: 'right' }}>
                      <button
                        onClick={() => {
                          setSelectedProduct(product);
                          setFormData(product);
                          setIsEditModalOpen(true);
                        }}
                        style={{
                          backgroundColor: 'var(--gray-200)',
                          border: 'none',
                          borderRadius: 'var(--radius-md)',
                          padding: 'var(--spacing-sm)',
                          marginRight: 'var(--spacing-sm)',
                          cursor: 'pointer',
                        }}
                      >
                        <FiEdit2 />
                      </button>
                      <button
                        onClick={() => handleDeleteProduct(product.id)}
                        style={{
                          backgroundColor: 'var(--error)',
                          color: 'white',
                          border: 'none',
                          borderRadius: 'var(--radius-md)',
                          padding: 'var(--spacing-sm)',
                          cursor: 'pointer',
                        }}
                      >
                        <FiTrash2 />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Add/Edit Product Modal */}
      {(isAddModalOpen || isEditModalOpen) && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
        }}>
          <motion.div
            className="glass"
            style={{
              padding: 'var(--spacing-xl)',
              borderRadius: 'var(--radius-lg)',
              width: '100%',
              maxWidth: '500px',
            }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <h2 style={{ marginBottom: 'var(--spacing-lg)' }}>
              {isAddModalOpen ? 'Add New Product' : 'Edit Product'}
            </h2>
            <form onSubmit={isAddModalOpen ? handleAddProduct : handleEditProduct}>
              <div style={{ marginBottom: 'var(--spacing-md)' }}>
                <label>Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
              <div style={{ marginBottom: 'var(--spacing-md)' }}>
                <label>Price</label>
                <input
                  type="number"
                  value={formData.price}
                  onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                  required
                />
              </div>
              <div style={{ marginBottom: 'var(--spacing-md)' }}>
                <label>Category</label>
                <input
                  type="text"
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  required
                />
              </div>
              <div style={{ marginBottom: 'var(--spacing-md)' }}>
                <label>Description</label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  required
                  rows="4"
                />
              </div>
              <div style={{ marginBottom: 'var(--spacing-xl)' }}>
                <label>Image URL</label>
                <input
                  type="url"
                  value={formData.image}
                  onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                  required
                />
              </div>
              <div style={{ display: 'flex', gap: 'var(--spacing-md)' }}>
                <button
                  type="submit"
                  style={{
                    backgroundColor: 'var(--primary)',
                    color: 'white',
                    padding: 'var(--spacing-md)',
                    borderRadius: 'var(--radius-md)',
                    border: 'none',
                    flex: 1,
                    cursor: 'pointer',
                  }}
                >
                  {isAddModalOpen ? 'Add Product' : 'Save Changes'}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setIsAddModalOpen(false);
                    setIsEditModalOpen(false);
                    setSelectedProduct(null);
                  }}
                  style={{
                    backgroundColor: 'var(--gray-300)',
                    color: 'var(--gray-700)',
                    padding: 'var(--spacing-md)',
                    borderRadius: 'var(--radius-md)',
                    border: 'none',
                    flex: 1,
                    cursor: 'pointer',
                  }}
                >
                  Cancel
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </div>
  );
};

// eslint-disable-next-line react/prop-types
const StatCard = ({ icon, title, value, trend }) => {
  return (
    <motion.div
      className="glass hover-lift"
      style={{
        padding: 'var(--spacing-lg)',
        borderRadius: 'var(--radius-lg)',
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--spacing-md)',
        marginBottom: 'var(--spacing-md)',
      }}>
        <div style={{
          backgroundColor: 'var(--primary-light)',
          color: 'var(--primary)',
          width: '40px',
          height: '40px',
          borderRadius: 'var(--radius-md)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          {icon}
        </div>
        <div style={{ color: 'var(--gray-600)' }}>{title}</div>
      </div>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
      }}>
        <div style={{ fontSize: '1.5rem', fontWeight: 700 }}>{value}</div>
        <div style={{ color: 'var(--success)', fontSize: '0.875rem' }}>{trend}</div>
      </div>
    </motion.div>
  );
};

export default AdminDashboard;