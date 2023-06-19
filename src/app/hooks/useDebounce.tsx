import { useEffect, useCallback, EffectCallback } from 'react';

export default function useDebounce(
  effect: EffectCallback,
  dependencies: [{}],
  delay: number,
) {
  const callback = useCallback(effect, dependencies);

  useEffect(() => {
    const timeout = setTimeout(callback, delay);
    return () => clearTimeout(timeout);
  }, [callback, delay]);
}
