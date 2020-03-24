import React from 'react';
import {Link} from 'react-router-dom';
import '../../scss/HomeHeader.scss';

const HomeHeader = () => {
  return (
    <header className="header">
      <div className="header__buttons">
        <Link to="/logowanie"><button className="header__button">Zaloguj</button></Link>
        <Link to="/rejestracja"><button className="header__button">Załóż konto</button></Link>
      </div>
      <nav className="header__nav">
        <ul className="header__list">
          <li className="header__li">Start</li>
          <li className="header__li">O co chodzi?</li>
          <li className="header__li">O nas</li>
          <li className="header__li">Fundacje i organizacje</li>
          <li className="header__li">Kontakt</li>
        </ul>
      </nav>
    </header>
  )
}

export default HomeHeader;