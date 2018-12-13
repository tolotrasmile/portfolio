import React, { Suspense, lazy } from 'react'
import { Router } from '@reach/router'
import ThemeContext from './contexts/Theme'
import { useTheme } from './hooks'
import Header from './components/elements/Header'
import Footer from './components/elements/Footer'
import pages from './pages'
import './App.css'

const Page = lazy(() => import('./components/pages/Item'))

function App() {
  const [theme, switchTheme] = useTheme()
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
