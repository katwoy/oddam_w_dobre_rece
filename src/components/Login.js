import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import '../scss/Login.scss';
import HomeTitle from './Home/HomeTitle';

const Login = () => {
  const [email, setEmail] = useState("");
  const [emailValidation, setEmailValidation] = useState(true);
  const [emailError, setEmailError] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordValidation, setPasswordValidation] = useState(true);
  const [passwordError, setPasswordError] = useState(false);

  const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  useEffect(() => {
    if (validateEmail(email)) {
      setEmailValidation(true)
    } else {
      setEmailValidation(false)
    }
  }, [email])

  useEffect(() => {
    if (password.length >= 6) {
      setPasswordValidation(true)
    } else {
      setPasswordValidation(false)
    }
  }, [password])

  const handleClick = () => {
    if (!passwordValidation) {
      setPasswordError(true)
    } else {
      setPasswordError(false)
    }
    if (!emailValidation) {
      setEmailError(true)
    } else {
      setEmailError(false)
    }
  }


  return (
    <section className="login">
      <HomeTitle title={"Zaloguj się"} />
      <form className="login__form">
        <label>Email
          <input type="email" name="email" value={email} onChange={e => setEmail(e.currentTarget.value)} style={{borderBottomColor: emailError && "red"}}/>
        </label>
        <div className="login__error" style={{visibility: emailError ? "visible" : "hidden"}}>Podany email jest nieprawidłowy!</div>
        <label>Hasło
          <input type="password" name="password" value={password} onChange={e => setPassword(e.currentTarget.value)} style={{borderBottomColor: passwordError && "red"}}/>
        </label>
        <div className="login__error" style={{visibility: passwordError ? "visible" : "hidden"}}>Podane hasło jest za krótkie!</div>
      </form>
      <div className="login__buttons">
      <Link to="/rejestracja" className="login__button">Załóż konto</Link>
      <Link to="/logowanie" className="login__button active" onClick={handleClick}>Zaloguj się</Link>
      </div>
    </section>
  )
}

export default Login;