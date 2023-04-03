import React from 'react';
import './App.css';
import BackTop from './components/backToTop/BackTop';
import Navbars from './components/Navbar/Navbars';
import Chef from './container/Chef/Chef';
import Events from './container/Events/Events';
import FindUs from './container/Findus/FindUs';
import Footer from './container/Footer/Footer';
import Gallery from './container/Gallery/Gallery';
import Header from './container/Header/Header';
import Intro from './container/Intro/Intro';
import Laurels from './container/Laurels/Laurels';
import SpecialMenu from './container/Menu/SpecialMenu';

const App = () => (
  <div>
    <Navbars />
    <Header />
    <Events />
    <SpecialMenu />
    <Chef />
    <Intro />
    <Laurels />
     <Gallery />
    <FindUs /> 
    <Footer />
    <BackTop />
  </div>
);

export default App;
