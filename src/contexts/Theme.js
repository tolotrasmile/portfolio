import React from 'react';

export const themes = {
  light: {
    foreground: 'black',
    background: 'white',
    primary: '#E30335',
    name: 'light'
  },
  dark: {
    foreground: 'white',
    background: 'black',
    primary: 'yellowgreen',
    name: 'dark'
  },
  blue: {
    foreground: 'white',
    background: '#EC4B51',
    primary: '#F1E15E',
    name: 'blue'
  },
  vintage: {
    foreground: 'black',
    background: '#EBE5D7',
    primary: '#ED1D2F',
    name: 'red'
  }
};

export const ThemeContext = React.createContext(
  themes.dark // default value
);

export default ThemeContext;
