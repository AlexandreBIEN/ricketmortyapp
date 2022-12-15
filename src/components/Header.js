import React from 'react';
import '../styles/Header.scss';
import logo from '../assets/logo-rick-et-morty.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faReact } from '@fortawesome/free-brands-svg-icons';
import { NavLink } from 'react-router-dom';


const Header = () => {
  return (
    <div className='text-center text-white'>
      {/* Redirection du logo vers la page accueil */}
      <NavLink to='/home'>
        <img className='logo-rick-et-morty' src={logo} alt='logo rick et morty'/>
      </NavLink>
      <p>Rick et Morty : apprentissage de react sans prise de tête</p>
      {/* Logos html / css / js / react*/}
      <FontAwesomeIcon className='logo-header' icon={faHtml5} color='orangered' />
      <FontAwesomeIcon className='logo-header' icon={faCss3Alt} color='rgb(51, 75, 255)' />
      <FontAwesomeIcon className='logo-header' icon={faJs} color='rgb(255, 255, 68)' />
      <FontAwesomeIcon className='logo-header' icon={faReact} color='rgb(116, 212, 224)' />
    </div>
  )
}

export default Header
