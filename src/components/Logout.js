import React from 'react';
import {Link} from 'react-router-dom';
import '../scss/Logout.scss';
import HomeTitle from './Home/HomeTitle';

const Logout = () => {
  return (
    <section className="logout">
      <div className="logout__container">
        <HomeTitle title={"Wylogowanie nastąpiło pomyślnie!"} />
        <Link to="/" className="logout__button">Strona główna</Link>
      </div>
    </section>
  )
}

export default Logout;