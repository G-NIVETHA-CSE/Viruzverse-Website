import React from 'react';
import Header from './Header';
import Hero from './Hero';
import Footer from './Footer';
import '../stylefiles/Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <Header />
      <Hero />
      <Footer />
    </div>
  );
};

export default Home;
