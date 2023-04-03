import React from 'react';
import SubHeading from '../../components/SubHeading/SubHeading';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chief} alt="chef_image" />
    </div>
    <div className="app__wrapper_info">
    <SubHeading title="Mot du PDG" />
    <h1 className="headtext__cormorant">Un QG pour vos fiesta</h1>
      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p__opensans"> GBOKOUNTCHAN vous propose la privatisation du lieu pour organiser votre événement .</p>
        </div>
        <p className="p__opensans">   Retrouvez vos amis, collègues ou votre famille GBOKOUNTCHAN, votre bar restaurant idéalement situé à Zè Dodji-Bata. Son ambiance conviviale et chaleureuse ainsi que nos équipes sauront vous accueillir vous et vos proches pour un moment inoubliable.</p>
      </div>

      <div className="app__chef-sign">
        <p>BOUTOKPO Mahougnon Pierre</p>
        <p className="p__opensans">Le PDG </p>
      </div>
    </div>
  </div>
);

export default Chef;
