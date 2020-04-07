import React from 'react';
import '../scss/Form.scss';
import HomeTitle from './Home/HomeTitle';
import formHero from '../assets/Form-Hero-Image.jpg';

const Form = () => {
  return (
    <section className="form">
      <img src={formHero} alt="green sweater" className="form__img"/>
      <div className="form__container">
        <HomeTitle title={"Oddaj rzeczy, których już nie chcesz POTRZEBUJĄCYM"} />
        <div>Wystarczą 4 proste kroki</div>
      </div>
    </section>
  )
}

export default Form;