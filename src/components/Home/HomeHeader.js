import React from 'react';
import {Link} from 'react-router-dom';
import '../../scss/HomeHeader.scss';

const HomeHeader = () => {
  return (
    <header className="header">
      <div className="header__buttons">
        <Link to="/logowanie" className="header__button">Zaloguj</Link>
        <Link to="/rejestracja" className="header__button">Załóż konto</Link>
      </div>
      <nav className="header__nav">
        <ul className="header__list">
          <li className="header__li"><a href="/">Start</a></li>
          <li className="header__li"><a href="/">O co chodzi?</a></li>
          <li className="header__li"><a href="/">O nas</a></li>
          <li className="header__li"><a href="/">Fundacje i organizacje</a></li>
          <li className="header__li"><a href="/">Kontakt</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default HomeHeader;