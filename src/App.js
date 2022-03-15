import React from 'react'
import Navbar from './Navbar';
import Home from './Home';
import Feature from './Feature';
import Footer from './Footer';
import GetInTouch from './GetInTouch';

const App =()=> {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Feature/>
      <GetInTouch/>
      <Footer/>
    </div>
  );
}

export default App;
