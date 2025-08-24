"use client";
import React, { useEffect, useState } from 'react';
import { useScrollAnimation } from '@/Hooks/useScrollAnimation';

interface MaskRevealProps {
  children: React.ReactNode;
  direction?: 'left' | 'right' | 'up' | 'down';
  duration?: number;
  delay?: number;
  className?: string;
}

export const MaskReveal: React.FC<MaskRevealProps> = ({
  children,
  direction = 'left',
  duration = 800,
  delay = 0,
  className = '',
}) => {
  const { elementRef, isVisible } = useScrollAnimation<HTMLDivElement>();
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isVisible && !isAnimating) {
      setIsAnimating(true);
    }
  }, [isVisible, isAnimating]);

  const getMaskStyle = () => {
    if (!isVisible) {
      switch (direction) {
        case 'left':
          return { clipPath: 'inset(0 100% 0 0)' };
        case 'right':
          return { clipPath: 'inset(0 0 0 100%)' };
        case 'up':
          return { clipPath: 'inset(100% 0 0 0)' };
        case 'down':
          return { clipPath: 'inset(0 0 100% 0)' };
        default:
          return { clipPath: 'inset(0 100% 0 0)' };
      }
    }

    return { clipPath: 'inset(0 0 0 0)' };
  };

  const getTransformStyle = () => {
    if (!isVisible) {
      switch (direction) {
        case 'left':
          return { transform: 'translateX(-20px)' };
        case 'right':
          return { transform: 'translateX(20px)' };
        case 'up':
          return { transform: 'translateY(-20px)' };
        case 'down':
          return { transform: 'translateY(20px)' };
        default:
          return { transform: 'translateX(-20px)' };
      }
    }

    return { transform: 'translateX(0) translateY(0)' };
  };

  return (
    <div
      ref={elementRef}
      className={`mask-reveal ${className}`}
      style={{
        ...getMaskStyle(),
        ...getTransformStyle(),
        transition: `all ${duration}ms cubic-bezier(0.4, 0, 0.2, 1) ${delay}ms`,
        opacity: isVisible ? 1 : 0,
      }}
    >
      {children}
    </div>
  );
};
