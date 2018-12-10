import React, { useEffect, useState } from 'react';
import Header from './components/elements/Header';
import Footer from './components/elements/Footer';
import Item from './components/pages/Item';
import { Router } from '@reach/router';
import pages from './pages';
import './App.css';
import ThemeContext, { themes } from './contexts/Theme';
import ThemeSwitcher from './contexts/ThemeSwitcher';

function useBodyColor(previousColors) {
  useEffect(
    () => {
      document.body.style.background = previousColors.background;
      document.body.style.color = previousColors.foreground;
    },
    [previousColors]
  );
}

function App() {
  const localTheme = JSON.parse(window.localStorage.getItem('theme'));
  const [theme, setTheme] = useState(localTheme || themes.dark);
  function safeSetTheme(t) {
    setTheme(prev => {
      if (prev.key !== t) {
        let theme = t === 'dark' ? themes.dark : themes.light;
        try {
          window.localStorage.setItem('theme', JSON.stringify({ key: t, ...theme }));
        } catch (error) {}

        return { key: t, ...theme };
      }
      return { ...prev };
    });
  }

  useBodyColor(theme);

  return (
    <ThemeContext.Provider value={theme}>
      <div className="app">
        <ThemeSwitcher setTheme={safeSetTheme} theme={theme} />
        <Header />
        <div className="app__main">
          <Router>
            {pages.map((page, index) => (
              <Item key={index} {...page} />
            ))}
          </Router>
        </div>
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
