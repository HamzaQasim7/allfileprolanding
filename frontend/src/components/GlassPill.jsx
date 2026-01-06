import React from 'react';

const GlassPill = ({ children, className = '', ...props }) => {
  return (
    <div
      className={`glass-pill rounded-full ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default GlassPill;
