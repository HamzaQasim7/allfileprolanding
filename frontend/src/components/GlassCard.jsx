import React from 'react';

const GlassCard = ({ children, className = '', hover = true, ...props }) => {
  return (
    <div
      className={`glass-card ${hover ? 'hover:glass-card' : ''} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default GlassCard;
