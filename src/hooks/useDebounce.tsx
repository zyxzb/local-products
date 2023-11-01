import { useEffect, useCallback, EffectCallback } from 'react';

const useDebounce = (
  effect: EffectCallback,
  dependencies: any[],
  delay: number,
) => {
  const callback = useCallback(effect, dependencies);

  useEffect(() => {
    const timeout = setTimeout(callback, delay);
    return () => clearTimeout(timeout);
  }, [callback, delay]);
};

export default useDebounce;
