import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Item from './components/Item';
import { Router } from '@reach/router';
import pages from './pages';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__main">
        <Router>
          {pages.map((page, index) => (
            <Item key={index} {...page} />
          ))}
        </Router>
      </div>
      <Footer />
    </div>
  );
}

export default App;
