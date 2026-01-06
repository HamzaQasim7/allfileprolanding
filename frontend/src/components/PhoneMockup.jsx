import React from 'react';

const PhoneMockup = ({
  children,
  className = '',
  width = 'w-[220px] md:w-[240px] lg:w-[260px]',
  ...props
}) => {
  return (
    <div className={`perspective-container ${className}`} {...props}>
      <div
        className={`tilted-phone relative z-10 ${width} aspect-[9/19.5] bg-slate-900 rounded-[2.4rem] border-[6px] border-slate-800 shadow-2xl phone-shadow overflow-hidden animate-float`}
      >
        {children}
      </div>
    </div>
  );
};

export default PhoneMockup;
