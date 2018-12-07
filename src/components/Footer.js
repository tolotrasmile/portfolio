import React from 'react';
import { ReactComponent as Facebook } from '../icons/facebook.svg';
import { ReactComponent as Twitter } from '../icons/twitter.svg';
import { ReactComponent as LinkedIn } from '../icons/linkedin.svg';
import { ReactComponent as GitHub } from '../icons/github.svg';
import './Footer.css';

export default () => {
  const style = { width: 30, height: 30, padding: '0.5em' };
  return (
    <footer className="footer">
      <GitHub className="social" style={style} />
      <Twitter className="social" style={style} />
      <LinkedIn className="social" style={style} />
      <Facebook className="social" style={style} />
    </footer>
  );
};
