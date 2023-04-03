import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import FooterOverlay from '../../components/Footer/FooterOverlay'
import Newsletter from '../../components/Footer/Newsletter'
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contactez-nous</h1>
        <p className="p__opensans">Zè Dodji-bata</p>
        <p className="p__opensans">+229 66999578</p>
      </div>

      <div className="app__footer-links_logo">
      {/*   <img src={images.logos} alt="footer_logo" /> */}
        <p className="p__opensans">&quot;Le meilleur moyen de se retrouver est de perdre au service des autres&quot;</p>
        <img src={images.spoon} className="spoon__img" alt='spoon' style={{ marginTop: 15, width:100 }} />
        <div className="app__footer-links_icons">
        <a href="https://www.facebook.com/pages/Motel-bar-Gbokountchan/108237807294456" target="blanc" ><FiFacebook /></a>
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">L'heure de travail</h1>
        <p className="p__opensans">Lundi-Vendredi:</p>
        <p className="p__opensans">10:00 - 02:00</p>
        <p className="p__opensans">Samedi-Dimanche:</p>
        <p className="p__opensans">10:00 - 04:00 </p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">GBOKOUNTCHAN  © Copyright 2023 - Tous droits reservés</p>
    </div>

  </div>
);

export default Footer;
