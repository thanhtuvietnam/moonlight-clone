import { useState, useEffect } from 'react';

export const useCurrentViewportView = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', () => {
      setWidth(window.innerWidth);
    });
    return () =>
      window.removeEventListener('resize', () => {
        setWidth(window.innerWidth);
      });
  }, []);

  return { width, ismobile: width < 768 };
};
