import { useEffect, useRef, useState } from 'react';

export const useFadeIn = () => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const checkVisibility = () => {
      const currentElement = domRef.current;

      if (!currentElement) {
        return;
      }

      const rect = currentElement.getBoundingClientRect();
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
      const triggerTop = viewportHeight * 0.88;
      const triggerBottom = viewportHeight * 0.12;

      const shouldBeVisible = rect.top <= triggerTop && rect.bottom >= triggerBottom;

      setIsVisible(shouldBeVisible);
    };

    checkVisibility();

    const handleScroll = () => {
      checkVisibility();
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return { domRef, isVisible };
};
