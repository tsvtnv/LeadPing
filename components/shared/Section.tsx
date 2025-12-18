import React, { ReactNode } from 'react';
import { clsx } from 'clsx';

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  dark?: boolean;
}

const Section: React.FC<SectionProps> = ({ children, className, id, dark = false }) => {
  return (
    <section 
      id={id} 
      className={clsx(
        "py-16 md:py-24 px-4 sm:px-6 lg:px-8", 
        dark ? "bg-black text-white" : "bg-white text-black",
        className
      )}
    >
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </section>
  );
};

export default Section;