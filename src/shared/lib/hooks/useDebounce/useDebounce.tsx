import { useRef, MutableRefObject, useCallback } from 'react';

export function useDebounce(callback: (...arg: any[]) => void, delay: number) {
  const timer = useRef() as MutableRefObject<any>;

  return useCallback(() => {
    if (timer.current) {
      clearTimeout(timer.current);
    }

    timer.current = setTimeout((...arg) => {
      callback(...arg);
    }, delay);
  }, [callback, delay]);
}
