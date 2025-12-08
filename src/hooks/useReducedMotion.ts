import { useState, useEffect, createContext, useContext } from 'react';

const ReducedMotionContext = createContext<{
  reducedMotion: boolean;
  setReducedMotion: (value: boolean) => void;
}>({
  reducedMotion: false,
  setReducedMotion: () => {},
});

export function useReducedMotion() {
  return useContext(ReducedMotionContext);
}

export function useReducedMotionProvider() {
  const [reducedMotion, setReducedMotion] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }
    return false;
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handler = (event: MediaQueryListEvent) => {
      setReducedMotion(event.matches);
    };

    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  return { reducedMotion, setReducedMotion, ReducedMotionContext };
}
