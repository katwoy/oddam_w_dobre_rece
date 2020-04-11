import React from 'react';
import '../scss/Form.scss';
import formHero from '../assets/Form-Hero-Image.jpg';

const Form = () => {
  return (
    <section className="form">
      <div className="form__hero">
        <div className="form__img">
          <img src={formHero} alt="green sweater"/>
        </div> 
        <div className="form__description">
          <h1 className="form__title">Oddaj rzeczy, których już nie chcesz<br/><span>potrzebującym</span></h1>
          <div className="form__subtitle">Wystarczą 4 proste kroki:</div>
          <div className="form__steps">
            <div><span>1</span><br/>Wybierz rzeczy</div>
            <div><span>2</span><br/>Spakuj je <br/> w worki</div>
            <div><span>3</span><br/>Wybierz fundację</div>
            <div><span>4</span><br/>Zamów kuriera</div>
          </div>
        </div>
      </div>
      <div className="form__info">
        <strong>Ważne!</strong>
        <p>Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je przekazać.</p>
      </div>
    </section>
  )
}

export default Form;