
import React from 'react';
import { About, Footer, Hero, Skills, Testimonials, Work } from './container'
import { Header } from './components';
import './App.scss';

const App = () => {
  return (
    <div className="app">
      <Header />
      <Hero />
      <About />
      <Work />
      <Skills />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
