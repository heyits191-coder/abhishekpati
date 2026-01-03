
import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit';
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  onClick, 
  className = '', 
  type = 'button' 
}) => {
  const baseStyles = "px-8 py-3 rounded-2xl font-medium transition-all duration-300 flex items-center justify-center gap-2 text-sm md:text-base";
  
  const variants = {
    primary: "bg-dental-blue text-white shadow-lg shadow-dental-blue/20 hover:bg-blue-600 hover:shadow-xl hover:shadow-dental-blue/30 active:scale-95",
    secondary: "bg-white text-dental-dark border border-gray-200 shadow-sm hover:border-dental-blue hover:text-dental-blue active:scale-95"
  };

  return (
    <motion.button
      type={type}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
};

export default Button;
