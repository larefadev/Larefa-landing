"use client";
import React, { useState, useEffect } from 'react';
import { useScrollAnimation } from '@/Hooks/useScrollAnimation';

interface CounterAnimationProps {
  end: number;
  duration?: number;
  delay?: number;
  className?: string;
  suffix?: string;
  prefix?: string;
  threshold?: number;
}

export const CounterAnimation: React.FC<CounterAnimationProps> = ({
  end,
  duration = 2000,
  delay = 0,
  className = '',
  suffix = '',
  prefix = '',
  threshold = 0.1,
}) => {
  const { elementRef, isVisible } = useScrollAnimation<HTMLDivElement>({ threshold });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        let startTime: number;
        let animationFrame: number;

        const animate = (currentTime: number) => {
          if (!startTime) startTime = currentTime;
          const progress = Math.min((currentTime - startTime) / duration, 1);
          
          // Función de easing suave
          const easeOutQuart = 1 - Math.pow(1 - progress, 4);
          const currentCount = Math.floor(easeOutQuart * end);
          
          setCount(currentCount);

          if (progress < 1) {
            animationFrame = requestAnimationFrame(animate);
          }
        };

        animationFrame = requestAnimationFrame(animate);

        return () => {
          if (animationFrame) {
            cancelAnimationFrame(animationFrame);
          }
        };
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [isVisible, end, duration, delay]);

  return (
    <div ref={elementRef} className={className}>
      {prefix}{count}{suffix}
    </div>
  );
};
