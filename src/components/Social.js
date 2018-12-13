import React from 'react';

function Icon({ id, fill, d, size }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      x="0px"
      y="0px"
      width={size}
      height={size}
      viewBox="0 0 90 90"
      xml:space="preserve"
    >
      <g>
        <path id={id} d={d} fill={fill} />
      </g>
    </svg>
  );
}

export default Icon;
