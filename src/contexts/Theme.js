import React from 'react';

export const themes = {
  light: {
    foreground: 'black',
    background: 'white',
    primary: 'yellowgreen',
    name: 'light'
  },
  dark: {
    foreground: 'white',
    background: 'black',
    primary: 'yellowgreen',
    name: 'dark'
  },
  blue: {
    foreground: '#AA00FF',
    background: '#00AAFF',
    primary: 'yellowgreen',
    name: 'blue'
  },
  red: {
    foreground: 'white',
    background: 'darkgrey',
    primary: 'yellowgreen',
    name: 'red'
  }
};

export const ThemeContext = React.createContext(
  themes.dark // default value
);

export default ThemeContext;
