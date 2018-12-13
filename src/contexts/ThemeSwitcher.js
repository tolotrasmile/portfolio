import React, { useContext } from 'react'
import './ThemeSwitcher.css'
import ThemeContext from './Theme'

function ThemeSwitcher() {
  const { key, switchTheme, primary } = useContext(ThemeContext);

  return (
    <div className="ThemeSwitcher">
      <div
        onClick={() => switchTheme('light')}
        className="light"
        style={{ borderColor: key === 'light' ? primary : 'transparent' }}
      />
      <div
        onClick={() => switchTheme('dark')}
        className="dark"
        style={{ borderColor: key === 'dark' ? primary : 'transparent' }}
      />
    </div>
  )
}
export default ThemeSwitcher
