import React from 'react';
import Header from './layout/Header';
import Banner from './layout/Banner';
import About from './components/About'
import Footer from './layout/Footer';

import './App.css';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App ">
      <Header />
      <Banner />
      <Portfolio />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
