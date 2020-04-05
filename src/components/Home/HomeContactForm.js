import React, {useState, useEffect} from 'react';
import '../../scss/HomeContactForm.scss';
import HomeTitle from './HomeTitle';

const HomeContactForm = ({id}) => {
  const [email, setEmail] = useState("");
  const [emailValidation, setEmailValidation] = useState(true);
  const [emailError, setEmailError] = useState(false);
  const [name, setName] = useState("");
  const [nameValidation, setNameValidation] = useState(true);
  const [nameError, setNameError] = useState(false);
  const [message, setMessage] = useState("");
  const [messageValidation, setMessageValidation] = useState(true);
  const [messageError, setMessageError] = useState(false);
  const [success, setSuccess] = useState(false);

  const validateName = (name) => {
    const re = /^[a-zA-Z]*$/;
    return re.test(name);
  }

  useEffect(() => {
    if (validateName(name) && name.length > 0) {
      setNameValidation(true)
    } else {
      setNameValidation(false)
    }
  }, [name])

  const validateEmail = (email) => {
    const reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return reg.test(String(email).toLowerCase());
  }

  useEffect(() => {
    if (validateEmail(email)) {
      setEmailValidation(true)
    } else {
      setEmailValidation(false)
    }
  }, [email])

  useEffect(() => {
    if (message.length >= 120) {
      setMessageValidation(true)
    } else {
      setMessageValidation(false)
    }
  }, [message])

  const handleClick = (e) => {
    e.preventDefault();
    if (!nameValidation) {
      setNameError(true)
    } else {
      setNameError(false)
    }
    if (!emailValidation) {
      setEmailError(true)
    } else {
      setEmailError(false)
    }
    if (!messageValidation) {
      setMessageError(true)
    } else {
      setMessageError(false)
    }
    fetch('https://fer-api.coderslab.pl/v1/portfolio/contact',{
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({name: name, email: email, message: message}),
      })
      .then(response => response.json())
      .then(response => {
        console.log(response);
        if (response.status === 'success') {
          setName("");
          setEmail("");
          setMessage("");
          setSuccess(true);
        } else if (response.status === 'fail'){
          alert("Message failed to send.")
      }
    })
  }

  return (
    <section className="contact" id={id}>
      <div className="contact__container">
        <form className="contact__form">
          <HomeTitle title={"Skontaktuj się z nami"}/>
          <div className="contact__fields">
            <div className="success" style={{visibility: success ? "visible" : "hidden"}}>Wiadomość wysłana! <br/>Wkrótce się skontaktujemy!</div>
            <div className="contact__data">
              <label>Wpisz swoje imię
                <input type="name" name="name" placeholder="Krzysztof" value={name} onChange={e => setName(e.currentTarget.value)} style={{borderBottomColor: nameError && "red"}}/>
                <div className="contact__error" style={{visibility: nameError ? "visible" : "hidden"}}>Podane imię jest nieprawidłowe!</div>
              </label>
              <label>Wpisz swój email
                <input type="email" name="email" placeholder="abc@xyz.pl" value={email} onChange={e => setEmail(e.currentTarget.value)} style={{borderBottomColor: emailError && "red"}}/>
                <div className="contact__error" style={{visibility: emailError ? "visible" : "hidden"}}>Podany email jest nieprawidłowy!</div>
              </label>
            </div>
            <label>Wpisz swoją wiadomość
              <textarea 
                name="message" 
                placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                value={message} 
                onChange={e => setMessage(e.currentTarget.value)} 
                style={{borderBottomColor: nameError && "red"}}>
              </textarea>
            </label>
            <div className="contact__error message" style={{visibility: messageError ? "visible" : "hidden"}}>Wiadomość musi mieć co najmniej 120 znaków!</div>
            <button type="submit" onClick={handleClick}>Wyślij</button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default HomeContactForm;