import React from 'react';
import About from './About/About';
import Banner from './Banner/Banner';
import Items from './Items/Items';
import Newsletter from './Newsletter/Newsletter';

const Home = () => {
  return (
    <div>
      <Banner />
      <Items />
      <About />
      <Newsletter />
    </div>
  );
};

export default Home;
