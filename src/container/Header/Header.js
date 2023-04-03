import React from 'react'
import SubHeading from '../../components/SubHeading/SubHeading';
import './Header.css';
import { images } from '../../constants';

const Header = () => {
  return (
     <div className="app__header app__wrapper section__padding" id="home">
     <div className="app__wrapper_info">
      <SubHeading  title="Partagez une bière entre amis au" />
       <h1 className="app__header-h1">Motel bar Gbokounchan </h1>
       <p className="p__opensans" style={{ margin: '1.5rem 0' }}> Un endroit convivial et chaleureux pour passer un moment inoubliable.</p>
      {/*  <a href="#menu" className="custom__button">Voir menu</a> */}
     </div>
 
     <div className="app__wrapper_img">
       <img src={images.img9} alt="header_img" /> 
     </div>
   </div>
  )
}

export default Header
