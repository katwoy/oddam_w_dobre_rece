import React from 'react';
import '../../scss/HomeContactForm.scss';
import HomeTitle from './HomeTitle';

const HomeContactForm = ({id}) => {
  return (
    <section className="contact" id={id}>
      <div className="contact__container">
        <form className="contact__form">
          <HomeTitle title={"Skontaktuj się z nami"}/>
          <div className="contact__fields">
            <div className="contact__data">
              <label>Wpisz swoje imię
                <input type="name" name="name" placeholder="Krzysztof"/>
              </label>
              <label>Wpisz swój email
                <input type="email" name="email" placeholder="abc@xyz.pl"/>
              </label>
            </div>
            <label>Wpisz swoją wiadomość
              <textarea name="message" placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."></textarea>
            </label>
            <button type="submit">Wyślij</button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default HomeContactForm;