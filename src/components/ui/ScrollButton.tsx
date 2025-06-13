
import React from 'react';
import Button from '@/components/ui/Button';

interface ScrollButtonProps {
  children: React.ReactNode;
  to?: string;
  variant?: 'primary' | 'secondary';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
}

const ScrollButton: React.FC<ScrollButtonProps> = (props) => {
  const handleClick = () => {
    // Scroll to top
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    
    // Call the original onClick if it exists
    if (props.onClick) {
      props.onClick();
    }
  };

  return (
    <Button {...props} onClick={handleClick} />
  );
};

export default ScrollButton;
