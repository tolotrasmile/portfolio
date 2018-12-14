import React, { useContext } from 'react';
import './ThemeSwitcher.css';
import ThemeContext, { themes } from './Theme';

function ThemeSwitcher() {
  const { current, switchTheme, primary } = useContext(ThemeContext);
  return (
    <div className="ThemeSwitcher">
      {Object.entries(themes).map(([name, theme], index) => (
        <div
          key={index}
          onClick={() => switchTheme(name)}
          className="light"
          style={{
            backgroundColor: theme.primary,
            borderColor: current === name ? primary : 'transparent',
            marginRight: 5
          }}
        />
      ))}
    </div>
  );
}
export default ThemeSwitcher;
