import { useEffect, useRef, useState } from "react";

export const useInView = (threshold = 0.2) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold }
    );

    observer.observe(node);

    return () => {
      observer.unobserve(node);
    };
  }, [threshold]);

  return { ref, isVisible };
};
