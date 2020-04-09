import React from 'react';
import '../scss/Form.scss';
import formHero from '../assets/Form-Hero-Image.jpg';

const Form = () => {
  return (
    <section className="form">
      <div className="form__img">
        <img src={formHero} alt="green sweater"/>
      </div> 
      <div className="form__description">
        <h1 className="form__title">Oddaj rzeczy, których już nie chcesz<br/><span>potrzebującym</span></h1>
        <div className="form__subtitle">Wystarczą 4 proste kroki:</div>
        <div className="form__steps">
          <div>1<br/>Wybierz rzeczy</div>
          <div>2<br/>Spakuj je w worki</div>
          <div>3<br/>Wybierz fundację</div>
          <div>4<br/>Zamów kuriera</div>
        </div>
      </div>
    </section>
  )
}

export default Form;