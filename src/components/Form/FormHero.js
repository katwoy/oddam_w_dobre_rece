import React from 'react';
import '../../scss/FormHero.scss';
import formHero from '../../assets/Form-Hero-Image.jpg';

const FormHero = () => {
  return (
    <section className="form__hero">
      <div className="hero__img">
        <img src={formHero} alt="green sweater"/>
      </div> 
      <div className="hero__description">
        <h1 className="hero__title">Oddaj rzeczy, których już nie chcesz<br/><span>potrzebującym</span></h1>
        <div className="hero__subtitle">Wystarczą 4 proste kroki:</div>
        <div className="hero__steps">
          <div><span>1</span><br/>Wybierz rzeczy</div>
          <div><span>2</span><br/>Spakuj je <br/> w worki</div>
          <div><span>3</span><br/>Wybierz fundację</div>
          <div><span>4</span><br/>Zamów kuriera</div>
        </div>
      </div>
    </section>
  )
}

export default FormHero;