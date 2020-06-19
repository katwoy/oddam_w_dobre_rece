import React from 'react';
import {Link} from 'react-router-dom';
import '../../scss/HomeSteps.scss';
import shirt from '../../assets/Icon-1.svg';
import bag from '../../assets/Icon-2.svg';
import magnifier from '../../assets/Icon-3.svg';
import arrows from '../../assets/Icon-4.svg';
import HomeTitle from './HomeTitle';

const HomeSteps = ({id}) => {
  return (
    <section className="steps" id={id}>
      <HomeTitle title={"Wystarczą 4 proste kroki"} />
      <div className="steps__wrapper">
        <div className="steps__step">
          <img src={shirt} alt="shirt" className="steps__image"/>
          <p className="steps__subtitle">Wybierz rzeczy</p>
          <p className="steps__text">ubrania, zabawki, sprzęt i inne</p>
        </div>
        <div className="steps__step">
          <img src={bag} alt="bag" className="steps__image"/>
          <p className="steps__subtitle">Spakuj je</p>
          <p className="steps__text">skorzystaj z worków na śmieci</p>
        </div>
        <div className="steps__step">
          <img src={magnifier} alt="magnifier" className="steps__image"/>
          <p className="steps__subtitle">Zdecyduj komu chcesz pomóc</p>
          <p className="steps__text">wybierz zaufane miejsce</p>
        </div>
        <div className="steps__step">
          <img src={arrows} alt="arrows" className="steps__image"/>
          <p className="steps__subtitle">Zamów kuriera</p>
          <p className="steps__text">kurier przyjedzie w dogodnym terminie</p>
        </div>
      </div>
      <Link to="/logowanie" className="steps__button">Oddaj rzeczy</Link>
    </section>
  )
}

export default HomeSteps;