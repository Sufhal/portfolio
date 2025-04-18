import { useState, useRef, useEffect } from "react";

export function useLazyMedia<T extends HTMLElement>(
  threshold: number = 0.1,
  rootMargin: string = "100px"
): [boolean, React.RefObject<T>] {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const elementRef = useRef<T>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      {
        threshold,
        rootMargin,
      }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [threshold, rootMargin]);

  return [isIntersecting, elementRef];
}
