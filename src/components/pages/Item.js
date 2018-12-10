import React from 'react';
import Title from '../elements/Title';

export default ({ title, content, path }) => {
  return (
    <div style={{ display: 'flex', minHeight: 'calc(100vh-160px)', flexDirection: 'column' }}>
      <Title>{title}</Title>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium quia voluptatibus
        provident officia aperiam dolore soluta veniam recusandae temporibus debitis dolorem sint,
        minus alias facilis error ea nemo amet nihil.
      </p>
    </div>
  );
};
