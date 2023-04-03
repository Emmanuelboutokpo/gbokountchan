import React from 'react';
import SubHeading from '../../components/SubHeading/SubHeading';
import { images } from '../../constants';

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding pad" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="Contactez-nous" />
      <h1 className="headtext__cormorant" >Notre adresse</h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">   ZE, BODJI-BATA </p>
        <p className="p__cormorant" style={{ color: '#DCCA87' }}>Heure d'ouverture</p>
        <p className="p__opensans">lundi - vendredi: 10:00 - 02:00</p>
        <p className="p__opensans">Samedi - Dimanche: 10:00 - 04:00</p>
      </div>
{/*       <button type="button" className="custom__button" style={{ marginTop: '2rem' }}>Visit Us</button>
 */}    </div>

    <div className="app__wrapper_img">
      <img src={images.findus} alt="finus_img" />
    </div>
  </div>
);

export default FindUs;
