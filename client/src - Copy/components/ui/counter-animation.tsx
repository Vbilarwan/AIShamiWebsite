import { useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

interface CounterAnimationProps {
  value: number;
  duration?: number;
  delay?: number;
}

export function CounterAnimation({ value, duration = 2, delay = 0 }: CounterAnimationProps) {
  const [count, setCount] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  // Use ref to store the interval id
  const intervalIdRef = useRef<NodeJS.Timeout | null>(null);
  
  // Calculate the increment per interval
  const increment = Math.ceil(value / (duration * 20));
  
  useEffect(() => {
    // Start the animation when the element comes into view
    if (inView && !isAnimating) {
      // Add delay if specified
      const timeoutId = setTimeout(() => {
        setIsAnimating(true);
        
        // Clear any existing interval
        if (intervalIdRef.current) {
          clearInterval(intervalIdRef.current);
        }
        
        // Set up a new interval
        intervalIdRef.current = setInterval(() => {
          setCount(prevCount => {
            // If we've reached or exceeded the target value, clear the interval and set the final value
            if (prevCount + increment >= value) {
              if (intervalIdRef.current) {
                clearInterval(intervalIdRef.current);
              }
              return value;
            }
            // Otherwise, increment the count
            return prevCount + increment;
          });
        }, 50); // Update roughly 20 times per second
      }, delay * 1000);
      
      // Clean up the timeout if the component unmounts before the delay completes
      return () => clearTimeout(timeoutId);
    }
    
    // Clean up interval on unmount
    return () => {
      if (intervalIdRef.current) {
        clearInterval(intervalIdRef.current);
      }
    };
  }, [inView, isAnimating, value, increment, duration, delay]);
  
  return (
    <span ref={ref}>
      {count}
    </span>
  );
}
