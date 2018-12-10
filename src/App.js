import React, { useEffect, useState, Suspense, lazy } from 'react'
import Header from './components/elements/Header'
import Footer from './components/elements/Footer'
import { Router } from '@reach/router'
import pages from './pages'
import './App.css'
import ThemeContext, { themes } from './contexts/Theme'

const Page = lazy(() => import('./components/pages/Item'))

function useBodyColor(previousColors) {
  useEffect(
    () => {
      document.body.style.background = previousColors.background
      document.body.style.color = previousColors.foreground
    },
    [previousColors],
  )
}

function App() {
  const localTheme = JSON.parse(window.localStorage.getItem('theme'))
  const [theme, setTheme] = useState(localTheme || themes.dark)
  function switchTheme(t) {
    setTheme(prev => {
      if (prev.key !== t) {
        let theme = t === 'dark' ? themes.dark : themes.light
        try {
          window.localStorage.setItem(
            'theme',
            JSON.stringify({ key: t, ...theme }),
          )
        } catch (error) {
          // prevent error printing
        }

        return { key: t, ...theme }
      }
      return { ...prev }
    })
  }

  useBodyColor(theme)

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
  )
}

export default App
