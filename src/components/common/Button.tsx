import React, { memo } from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'default' | 'large';
  disabled?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = memo(({
  children,
  variant = 'primary',
  size = 'default',
  disabled = false,
  onClick,
  type = 'button',
  className = '',
  fullWidth = false,
}) => {
  const baseClasses = `relative inline-flex items-center justify-center gap-3 font-semibold font-heading rounded-xl transition-all duration-300 hover:-translate-y-1 active:translate-y-0 disabled:opacity-40 disabled:cursor-not-allowed disabled:transform-none overflow-hidden group focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 ${fullWidth ? 'w-full' : ''}`;
  
  const variantClasses = {
    primary: 'bg-brand-gradient text-text-primary shadow-medium hover:shadow-glow border-0',
    secondary: 'bg-dark-surface border-2 border-dark-border text-text-primary hover:bg-dark-elevated hover:border-primary/30 hover:shadow-medium',
    outline: 'border-2 border-primary/60 backdrop-blur-sm bg-primary/5 text-text-primary hover:bg-primary/10 hover:border-primary hover:shadow-glow',
  };
  
  const sizeClasses = {
    small: 'px-4 py-2 text-sm min-h-[40px]',
    default: 'px-6 py-3 text-base min-h-[48px]',
    large: 'px-8 py-4 text-lg min-h-[56px]',
  };

  const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  return (
    <motion.button
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
      type={type}
      whileHover={{ scale: disabled ? 1 : 1.02, y: disabled ? 0 : -2 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      transition={{ duration: 0.2 }}
    >
      {/* Enhanced Shimmer Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700 ease-out" />
      
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Content */}
      <span className="relative z-10 flex items-center gap-3">
        {children}
      </span>
    </motion.button>
  );
});

Button.displayName = 'Button';

export default Button;