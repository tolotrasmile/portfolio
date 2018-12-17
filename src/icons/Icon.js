import React, { useContext, useState } from 'react';
import ThemeContext from '../contexts/Theme';
import icons from './icons';

export default function({ name }) {
  const { d, viewBox } = icons[name];
  const { primary, foreground } = useContext(ThemeContext);
  const [hover, setHover] = useState(false);

  const style = {
    width: 30,
    height: 30,
    padding: '0.5em'
  };

  return (
    <div
      className="social"
      style={{ ...style, fill: hover ? primary : foreground }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <svg viewBox={viewBox}>
        <g>
          <path d={d} />
        </g>
      </svg>
    </div>
  );
}
