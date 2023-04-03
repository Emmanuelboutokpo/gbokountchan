import React, { useState} from "react";
import {Modal} from 'react-bootstrap';
import './Publication.css';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import {BsEye} from 'react-icons/bs';


const Publication = ({item}) => {
  
  const [show, setShow] = useState(false); 
  return (
    <div className='app__pub-images_card flex__app__center'>
          <img src={item.fields.images[0].fields.file.url} alt="" />
           <button className="pub__image-icon" onClick={() => setShow(true)}> Voir détails  <BsEye className='svgEye' /> </button>
        {/* <div className="card">
             <h1>{item.fields.name}</h1>
              <p className='dtes' >Le {item.fields.dtes} ☺☻</p>
              <p>{item.fields.description}</p>
        </div> */}
          <Modal show={show} onHide={() => setShow(false)}>
                <Modal.Header>
                    <Modal.Title>{item.fields.name}</Modal.Title>
                    <button type="button" className="btn-close improveBtn" onClick={() => setShow(false)}>   <MdOutlineRestaurantMenu fontSize={27} className="overlay__clos"/> </button>
                </Modal.Header>
                    <Modal.Body>
                    <div className='app__pub-images_card flex__app__center'>
                       <img src={item.fields.images[0].fields.file.url} alt="" />      
                    </div>
                     <p className="modalPara">

                          {item.fields.description}
                     </p>
                    </Modal.Body>
                    <Modal.Footer>
                        <button variant="secondary" onClick={() => setShow(false)}>
                            Fermer
                        </button>
                    </Modal.Footer>
            </Modal>
    </div>
  )
}

export default Publication
 