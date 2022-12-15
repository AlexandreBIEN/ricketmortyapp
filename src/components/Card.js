import React from 'react';
import '../styles/Card.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faCross, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

const Card = (props) => {
  return (
    <div className='card-item' id={props.id}>
        <img className='card-item-image' src={props.image} alt={`image de ${props.name}`}/>
        <p className='card-item-name'>{(props.status == "Dead") ? <FontAwesomeIcon icon={faCross} /> : ""} {props.name}</p>
        <p className='card-item-location'><FontAwesomeIcon icon={faLocationDot} /> {props.location}</p>
        {/* Redirection vers la page détail avec l'id en paramètre */}
        <NavLink to={`/details/${props.id}`}>
          <div className='text-end'>
            <button className='card-btn'>Détails <FontAwesomeIcon icon={faArrowAltCircleRight} /></button>
          </div>
        </NavLink>
    </div>
  )
}

export default Card
