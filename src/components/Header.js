import React, { useState } from 'react';
import { navigate } from '@reach/router';
import pages from '../pages';
import './Header.css';

function MenuLink({ active, children, ...props }) {
  return (
    <li {...props} className={active ? 'active' : ''}>
      {children}
    </li>
  );
}

function Header() {
  const [activeLink, setActiveLink] = useState(window.location.pathname);
  function goTo(path) {
    navigate(path);
    setActiveLink(path);
  }
  return (
    <nav className="header">
      <div className="header__left">Tolotra Raharison</div>
      <ul className="header__right">
        {pages.map((page, index) => (
          <MenuLink key={index} active={activeLink === page.path} onClick={() => goTo(page.path)}>
            {page.title}
          </MenuLink>
        ))}
      </ul>
    </nav>
  );
}

export default Header;
