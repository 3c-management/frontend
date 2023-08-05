import { useState, useCallback, useRef, useEffect } from 'react';

const useToggle = (initialValue: boolean = false) => {
  const [value, setValue] = useState<boolean>(initialValue);
  const ref = useRef<HTMLDivElement>(null);

  const toggle = useCallback(() => {
    setValue((prevValue) => !prevValue);
  }, []);

  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setValue(false);
      }
    },
    [ref]
  );

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleClickOutside]);

  return [value, toggle, ref] as const;
};

export default useToggle;
