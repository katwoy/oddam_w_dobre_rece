import React from 'react';
import '../../scss/HomeContactForm.scss';
import HomeTitle from './HomeTitle';

const HomeContactForm = ({id}) => {
  return (
    <section className="contact" id={id}>
      <HomeTitle title={"Skontaktuj się z nami"}/>
      <form>
        <label>Wpisz swoje imię
          <input type="name" name="name" placeholder="Krzysztof"/>
        </label>
        <label>Wpisz swój email
          <input type="email" name="email" placeholder="abc@xyz.pl"/>
        </label>
        <label>Wpisz swoją wiadomość
          <textarea></textarea>
        </label>
        <button type="submit">Wyślij</button>
      </form>
    </section>
  )
}

export default HomeContactForm;