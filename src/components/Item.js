import React from 'react';

export default ({ title, content, path }) => {
  return (
    <div style={{ display: 'flex', minHeight: 'calc(100vh-160px)', flexDirection: 'column' }}>
      <h1>{title}</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium quia voluptatibus
        provident officia aperiam dolore soluta veniam recusandae temporibus debitis dolorem sint,
        minus alias facilis error ea nemo amet nihil.
      </p>
    </div>
  );
};
