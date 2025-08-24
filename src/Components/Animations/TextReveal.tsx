"use client";
import React, { useState, useEffect } from 'react';
import { useScrollAnimation } from '@/Hooks/useScrollAnimation';

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  staggerDelay?: number;
  threshold?: number;
}

export const TextReveal: React.FC<TextRevealProps> = ({
  text,
  className = '',
  delay = 0,
  staggerDelay = 50,
  threshold = 0.1,
}) => {
  const { elementRef, isVisible } = useScrollAnimation<HTMLDivElement>({ threshold });
  const [animatedText, setAnimatedText] = useState<string[]>([]);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        const chars = text.split('');
        let currentIndex = 0;

        const interval = setInterval(() => {
          if (currentIndex < chars.length) {
            setAnimatedText(chars.slice(0, currentIndex + 1));
            currentIndex++;
          } else {
            clearInterval(interval);
          }
        }, staggerDelay);

        return () => clearInterval(interval);
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [isVisible, text, delay, staggerDelay]);

  return (
    <div ref={elementRef} className={className}>
      {animatedText.map((char, index) => (
        <span
          key={index}
          className={`inline-block transition-all duration-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          style={{
            transitionDelay: `${delay + index * staggerDelay}ms`,
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </div>
  );
};
