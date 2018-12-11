import React, { useContext } from 'react'
import './ThemeSwitcher.css'
import ThemeContext from './Theme'

function ThemeSwitcher() {
  const { key, switchTheme } = useContext(ThemeContext)
  return (
    <div className="ThemeSwitcher">
      <div
        onClick={() => switchTheme('light')}
        className={`light ${key === 'light' ? 'active' : ''}`}
      />
      <div
        onClick={() => switchTheme('dark')}
        className={`dark ${key === 'dark' ? 'active' : ''}`}
      />
    </div>
  )
}
export default ThemeSwitcher
