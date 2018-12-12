import React, { Suspense, lazy } from 'react';
import { Router } from '@reach/router';
import ThemeContext, { themes } from './contexts/Theme';
import { useBodyColor, useLocalStorageState } from './hooks';
import Header from './components/elements/Header';
import Footer from './components/elements/Footer';
import pages from './pages';
import './App.css';

const Page = lazy(() => import('./components/pages/Item'));

function App() {
  const [theme, setTheme] = useLocalStorageState('portfolio:theme', 'dark');
  function switchTheme(newTheme) {
    setTheme(previousTheme => {
      return previousTheme.key !== newTheme
        ? { key: newTheme, ...(newTheme === 'dark' ? themes.dark : themes.light) }
        : { ...previousTheme };
    });
  }

  useBodyColor(theme);

  return (
    <ThemeContext.Provider value={{ ...theme, switchTheme }}>
      <div className="app">
        <Header />
        <div className="app__main">
          <Suspense fallback={<div>...</div>}>
            <Router>
              {pages.map((page, index) => (
                <Page key={index} {...page} />
              ))}
            </Router>
          </Suspense>
        </div>
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
