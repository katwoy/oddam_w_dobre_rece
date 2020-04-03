import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import '../scss/Register.scss';
import HomeTitle from './Home/HomeTitle';

const Register = () => {
  const [email, setEmail] = useState("");
  const [emailValidation, setEmailValidation] = useState(true);
  const [emailError, setEmailError] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordValidation, setPasswordValidation] = useState(true);
  const [passwordError, setPasswordError] = useState(false);
  const [password2, setPassword2] = useState("");
  const [password2Validation, setPassword2Validation] = useState(true);
  const [password2Error, setPassword2Error] = useState(false);

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

  useEffect(() => {
    if (password2 === password) {
      setPassword2Validation(true)
    } else {
      setPassword2Validation(false)
    }
  }, [password2, password])

  const handleClick = (e) => {
    e.preventDefault();
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
    if (!password2Validation) {
      setPassword2Error(true)
    } else {
      setPassword2Error(false)
    }
  }
  return (
    <section className="register">
      <HomeTitle title={"Załóż konto"} />
      <form className="register__form">
        <div className="register__fields">
          <label>Email
            <input type="email" name="email" value={email} onChange={e => setEmail(e.currentTarget.value)} style={{borderBottomColor: emailError && "red"}}/>
          </label>
          <div className="login__error" style={{visibility: emailError ? "visible" : "hidden"}}>Podany email jest nieprawidłowy!</div>
          <label>Hasło
            <input type="password" name="password" value={password} onChange={e => setPassword(e.currentTarget.value)} style={{borderBottomColor: passwordError && "red"}}/>
          </label>
          <div className="login__error" style={{visibility: passwordError ? "visible" : "hidden"}}>Podane hasło jest za krótkie!</div>
          <label>Powtórz hasło
            <input type="password" name="password2" value={password2} onChange={e => setPassword2(e.currentTarget.value)} style={{borderBottomColor: password2Error && "red"}}/>
          </label>
          <div className="login__error" style={{visibility: password2Error ? "visible" : "hidden"}}>Podane hasła różnią się!</div>
        </div>
        <div className="register__buttons">
          <Link to="/logowanie" className="register__button">Zaloguj się</Link>
          <button type="submit" className="register__button active" onClick={handleClick}>Załóż konto</button>
        </div>
      </form>
    </section>
  )
}

export default Register;