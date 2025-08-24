"use client";
import React, { useEffect, useRef } from 'react';

interface ParallaxElementProps {
  children: React.ReactNode;
  speed?: number;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right';
}

export const ParallaxElement: React.FC<ParallaxElementProps> = ({
  children,
  speed = 0.5,
  className = '',
  direction = 'up'
}) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (elementRef.current) {
        const scrolled = window.pageYOffset;
        const rate = scrolled * speed;
        
        let transform = '';
        switch (direction) {
          case 'up':
            transform = `translateY(${rate}px)`;
            break;
          case 'down':
            transform = `translateY(-${rate}px)`;
            break;
          case 'left':
            transform = `translateX(${rate}px)`;
            break;
          case 'right':
            transform = `translateX(-${rate}px)`;
            break;
        }
        
        elementRef.current.style.transform = transform;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed, direction]);

  return (
    <div
      ref={elementRef}
      className={`parallax-element ${className}`}
      style={{
        willChange: 'transform',
        transform: 'translateZ(0)',
      }}
    >
      {children}
    </div>
  );
};
