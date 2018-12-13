import { useEffect, useState } from 'react';

export function useBodyColor(previousColors) {
  useEffect(
    () => {
      document.body.style.background = previousColors.background;
      document.body.style.color = previousColors.foreground;
    },
    [previousColors]
  );
}

export function useLocalStorageState(key, initialValue) {
  const [state, setState] = useState(() =>
    JSON.parse(window.localStorage.getItem(key) || JSON.stringify(initialValue))
  );
  useEffect(
    () => {
      window.localStorage.setItem(key, JSON.stringify(state));
    },
    [state]
  );
  return [state, setState];
}
