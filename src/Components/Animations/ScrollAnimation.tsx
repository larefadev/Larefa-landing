"use client";
import React from 'react';
import { useScrollAnimation } from '@/Hooks/useScrollAnimation';

interface ScrollAnimationProps {
  children: React.ReactNode;
  animation?: 'fadeIn' | 'slideUp' | 'slideLeft' | 'slideRight' | 'scaleIn' | 'bounceIn';
  delay?: number;
  duration?: number;
  className?: string;
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export const ScrollAnimation: React.FC<ScrollAnimationProps> = ({
  children,
  animation = 'fadeIn',
  delay = 0,
  duration = 600,
  className = '',
  threshold = 0.1,
  rootMargin = '0px 0px -50px 0px',
  triggerOnce = true,
}) => {
  const { elementRef, isVisible } = useScrollAnimation<HTMLDivElement>({
    threshold,
    rootMargin,
    triggerOnce,
  });

  const getAnimationClasses = () => {
    const baseClasses = 'transition-all duration-700 ease-out';
    
    if (!isVisible) {
      switch (animation) {
        case 'fadeIn':
          return `${baseClasses} opacity-0`;
        case 'slideUp':
          return `${baseClasses} opacity-0 translate-y-8`;
        case 'slideLeft':
          return `${baseClasses} opacity-0 translate-x-8`;
        case 'slideRight':
          return `${baseClasses} opacity-0 -translate-x-8`;
        case 'scaleIn':
          return `${baseClasses} opacity-0 scale-95`;
        case 'bounceIn':
          return `${baseClasses} opacity-0 scale-95`;
        default:
          return `${baseClasses} opacity-0`;
      }
    }

    switch (animation) {
      case 'fadeIn':
        return `${baseClasses} opacity-100`;
      case 'slideUp':
        return `${baseClasses} opacity-100 translate-y-0`;
      case 'slideLeft':
        return `${baseClasses} opacity-100 translate-x-0`;
      case 'slideRight':
        return `${baseClasses} opacity-100 translate-x-0`;
      case 'scaleIn':
        return `${baseClasses} opacity-100 scale-100`;
      case 'bounceIn':
        return `${baseClasses} opacity-100 scale-100`;
      default:
        return `${baseClasses} opacity-100`;
    }
  };

  const animationStyle = {
    transitionDelay: `${delay}ms`,
    transitionDuration: `${duration}ms`,
  };

  return (
    <div
      ref={elementRef}
      className={`${getAnimationClasses()} ${className}`}
      style={animationStyle}
    >
      {children}
    </div>
  );
};
