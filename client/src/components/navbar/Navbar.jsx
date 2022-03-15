import './navbar.scss'
import React, { useState } from 'react'
import { ArrowDropDown, Notifications, Search } from '@material-ui/icons'

const Navbar = () => {

  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };


  return (
    <div className={isScrolled ? 'navbar scrolled' : 'navbar'}>
      <div className="container">
        <div className="left">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt="" />
          <span>Accueil</span>
          <span>Series</span>
          <span>Films</span>
          <span>Nouveautés</span>
          <span>Favoris</span>
        </div>
        <div className="right">
          <Search className='icon' />
          <span>Enfants</span>
          <Notifications className='icon' />
          <img src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />

          <div className="profile">
            <ArrowDropDown className='icon' />
            <div className="options">
              <span>Paramètres</span>
              <span>Déconnexion</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
