
import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: React.ReactNode;
  to?: string;
  variant?: 'primary' | 'secondary';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  scrollToTop?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  to, 
  variant = 'primary', 
  className = '',
  type,
  onClick,
  scrollToTop = false
}) => {
  const baseClasses = 'inline-block text-center py-3 px-6 rounded-md font-medium transition-colors';
  const variantClasses = {
    primary: 'bg-cafe-ocre hover:bg-opacity-90 text-white',
    secondary: 'bg-transparent border border-cafe-ocre text-cafe-ocre hover:bg-cafe-ocre hover:text-white'
  };

  const handleClick = () => {
    if (scrollToTop) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
    
    if (onClick) onClick();
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes} onClick={handleClick}>
        {children}
      </Link>
    );
  }

  return (
    <button 
      type={type || 'button'} 
      className={classes} 
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default Button;
