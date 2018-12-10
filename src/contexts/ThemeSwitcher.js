import React, { useContext } from 'react';
import './ThemeSwitcher.css';
import ThemeContext from './Theme';

function ThemeSwitcher({ setTheme, theme: { key } }) {
  const theme = useContext(ThemeContext);
  return (
    <div className="ThemeSwitcher" style={{ backgroundColor: theme.primary }}>
      <div
        onClick={() => setTheme('light')}
        className={`light ${theme.key === 'light' ? 'active' : ''}`}
      />
      <div
        onClick={() => setTheme('dark')}
        className={`dark ${theme.key === 'dark' ? 'active' : ''}`}
      />
    </div>
  );
}
export default ThemeSwitcher;
