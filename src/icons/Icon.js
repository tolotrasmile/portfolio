import React, { useContext } from 'react';
import ThemeContext from '../contexts/Theme';
import icons from './icons';

export default function({ name }) {
  const { d, viewBox } = icons[name];
  const { primary } = useContext(ThemeContext);

  const style = {
    width: 30,
    height: 30,
    padding: '0.5em',
    color: primary,
    fill: primary
  };

  return (
    <div className="social" style={style}>
      <svg viewBox={viewBox}>
        <g>
          <path d={d} />
        </g>
      </svg>
    </div>
  );
}
