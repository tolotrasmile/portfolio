import { useEffect, useState } from 'react';
import { themes } from './contexts/Theme';

export function useBodyColor(previousColors) {
  useEffect(
    () => {
      document.body.style.background = previousColors.background;
      document.body.style.color = previousColors.foreground;
    },
    [previousColors]
  );
}

export function useTheme(defaultTheme = 'dark') {
  const [theme, setTheme] = useLocalStorageState(
    'portfolio:theme',
    defaultTheme
  );
  function switchTheme(newTheme) {
    setTheme(previousTheme => {
      return previousTheme.key !== newTheme
        ? {
            key: newTheme,
            ...(newTheme === 'dark' ? themes.dark : themes.light)
          }
        : { ...previousTheme };
    });
  }
  useBodyColor(theme);
  return [theme, switchTheme];
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
