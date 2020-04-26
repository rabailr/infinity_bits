import React from 'react';
import Header from './Header';
import Framing from './Framing';
import Feature from './Feature';
import Work from './Work';
import ChooseUs from './ChooseUs';
import OurClients from './OurClients';
import Blog from './Blog';

function Home() {
  return (
    <div className="home" style={{paddingLeft:'75px', paddingRight:'75px'}}>
      <Header/>
      <Framing/>
      <Feature/>
      <Work/>
      <ChooseUs/>
      <OurClients/>
      <Blog/>
    </div>
  );
}

export default Home;
