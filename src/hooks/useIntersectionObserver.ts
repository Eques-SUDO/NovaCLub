import { useEffect, useRef, useState } from 'react';

interface UseIntersectionObserverOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export const useIntersectionObserver = (
  options: UseIntersectionObserverOptions = {}
) => {
  const { threshold = 0.1, rootMargin = '0px', triggerOnce = true } = options;
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isVisible = entry.isIntersecting;
        
        // Mobile optimization: Add slight delay to prevent flickering during fast scrolls
        const isMobile = window.innerWidth <= 768;
        const delay = isMobile ? 50 : 0;
        
        setTimeout(() => {
          if (isVisible && (!triggerOnce || !hasTriggered)) {
            setIsIntersecting(true);
            if (triggerOnce) {
              setHasTriggered(true);
            }
          } else if (!triggerOnce) {
            setIsIntersecting(isVisible);
          }
        }, delay);
      },
      { 
        threshold, 
        rootMargin,
        // Mobile optimization: Use passive observation
        ...(window.innerWidth <= 768 && { rootMargin: '20px' })
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [threshold, rootMargin, triggerOnce, hasTriggered]);

  return { ref, isIntersecting };
};