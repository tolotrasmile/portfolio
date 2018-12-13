import React, { useState, useContext } from 'react';
import { navigate } from '@reach/router';
import pages from '../../pages';
import ThemeContext from '../../contexts/Theme';
import './Header.css';

function MenuLink({ active, children, borderColor, color, ...props }) {
  return (
    <li
      {...props}
      className={active ? 'active' : ''}
      style={{
        borderColor: active ? borderColor : 'transparent',
        color
      }}
    >
      {children}
    </li>
  );
}

function Header() {
  const [activeLink, setActiveLink] = useState(window.location.pathname);

  const theme = useContext(ThemeContext);

  function goTo(path) {
    navigate(path);
    setActiveLink(path);
  }

  return (
    <nav className="header">
      <div className="header__left" style={{ color: theme.foreground }}>
        Title
      </div>
      <ul className="header__right">
        {pages.map((page, index) => (
          <MenuLink
            active={activeLink === page.path}
            onClick={() => goTo(page.path)}
            borderColor={theme.primary}
            color={theme.foreground}
            key={index}
          >
            {page.title}
          </MenuLink>
        ))}
      </ul>
    </nav>
  );
}

export default Header;
