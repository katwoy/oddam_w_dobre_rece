import React from 'react';
import {Link} from 'react-router-dom';
import '../scss/Register.scss';
import HomeTitle from './Home/HomeTitle';

const Register = () => {
  return (
    <section className="register">
      <HomeTitle title={"Załóż konto"} />
      <form className="register__form">
        <label>Email
          <input type="email" name="email"/>
        </label>
        <label>Hasło
          <input type="password" name="password"/>
        </label>
        <label>Powtórz hasło
          <input type="password" name="password2"/>
        </label>
      </form>
      <div className="register__buttons">
      <Link to="/logowanie" className="register__button">Zaloguj się</Link>
      <Link to="/rejestracja" className="register__button active">Załóż konto</Link>
      </div>
    </section>
  )
}

export default Register;