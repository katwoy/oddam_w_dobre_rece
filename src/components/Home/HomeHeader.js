import React from 'react';
import {Link} from 'react-router-dom';
import '../../scss/HomeHeader.scss';

const HomeHeader = () => {
  return (
    <header className="header">
      <Link to="/logowanie"><button className="header__button">Zaloguj</button></Link>
      <Link to="/rejestracja"><button className="header__button">Załóż konto</button></Link>
    </header>
  )
}

export default HomeHeader;