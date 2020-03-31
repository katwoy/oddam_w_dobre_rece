import React from 'react';
import {Link} from 'react-router-dom';
import '../scss/Login.scss';
import HomeTitle from './Home/HomeTitle';

const Login = () => {
  return (
    <section className="login">
      <HomeTitle title={"Zaloguj się"} />
      <form className="login__form">
        <label>Email
          <input type="email" name="email"/>
        </label>
        <label>Hasło
          <input type="password" name="password"/>
        </label>
      </form>
      <div className="login__buttons">
      <Link to="/rejestracja" className="login__button">Załóż konto</Link>
      <Link to="/logowanie" className="login__button active">Zaloguj się</Link>
      </div>
    </section>
  )
}

export default Login;