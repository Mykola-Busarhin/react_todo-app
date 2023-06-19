import { useState } from 'react';

export function useLocalStorage<T>(key: string,
  initialValue: T): [T, (value: T) => void] {
  const [value, setValue] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(key) || '') || initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const save = (saveValue: T) => {
    setValue(saveValue);
    localStorage.setItem(key, JSON.stringify(saveValue));
  };

  return [value, save];
}
