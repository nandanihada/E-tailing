import { motion } from 'framer-motion'

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'medium',
  icon,
  iconPosition = 'left',
  className = '',
  animated = false,
  ...props 
}) => {
  const baseStyles = 'btn'
  const variantStyles = {
    primary: 'btn-primary',
    accent: 'btn-accent',
    outline: 'btn-outline',
  }
  
  const sizeStyles = {
    small: { padding: 'var(--spacing-sm) var(--spacing-md)', fontSize: '0.875rem' },
    medium: { padding: 'var(--spacing-sm) var(--spacing-lg)', fontSize: '1rem' },
    large: { padding: 'var(--spacing-md) var(--spacing-xl)', fontSize: '1.125rem' },
  }
  
  const animationClass = animated ? 'btn-bounce' : ''
  
  const buttonContent = (
    <>
      {icon && iconPosition === 'left' && (
        <span className="button-icon">{icon}</span>
      )}
      <span className="button-text">{children}</span>
      {icon && iconPosition === 'right' && (
        <span className="button-icon">{icon}</span>
      )}
    </>
  )
  
  return (
    <motion.button
      className={`${baseStyles} ${variantStyles[variant]} ${animationClass} ${className}`}
      style={sizeStyles[size]}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {buttonContent}
    </motion.button>
  )
}

export default Button