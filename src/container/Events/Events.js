import React, { useState} from "react";
import {Modal} from 'react-bootstrap';
import Publication from '../../components/Publication/Publication';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import data from '../../datas'
import './Event.css'
const Events = () => {
    const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === 'left') {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

  return (
    <div  className="event__bg" id="event">
    <h1 className="headtext__cormorants">Nos évenements</h1>
    <div className="app__pub-images">
        <div className="app__pub-images_container" ref={scrollRef}>
        {
             data.map((item, index) =>(
                  <Publication key={index} item={item}/>
             ))
        }
        </div>
        <div className="app__gallery-images_arrows">
          <BsArrowLeftShort className="gallery__arrow-icon" onClick={() => scroll('left')} />
          <BsArrowRightShort className="gallery__arrow-icon" onClick={() => scroll('right')} />
        </div>
      </div>

    </div>
  )
}

export default Events
