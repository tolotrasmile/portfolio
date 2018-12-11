import React, { useContext } from 'react';
import ThemeContext from '../../contexts/Theme';

export default function({ children }) {
  const theme = useContext(ThemeContext);
  return <h1 style={{ color: theme.primary }}>{children}</h1>;
}
