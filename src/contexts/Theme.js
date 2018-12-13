import React from 'react';

export const themes = {
  light: {
    foreground: 'black',
    background: 'white',
    primary: 'yellowgreen'
  },
  dark: {
    foreground: 'white',
    background: 'black',
    primary: 'yellowgreen'
  }
};

export const ThemeContext = React.createContext(
  themes.dark // default value
);

export default ThemeContext;
