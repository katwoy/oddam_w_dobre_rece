import React from 'react';
import '../../scss/FormSummary.scss';
import shirt from '../../assets/Icon-1.svg';
import arrows from '../../assets/Icon-4.svg';

const FormSummary = ({what, amount, city, who}) => {
  return (
    <>
      <h3 className="form__title">Podsumowanie Twojej darowizny</h3>
      <div className="summary__what">
        <h4>Oddajesz:</h4>
        <div className="summary__item">
          <img src={shirt} alt="shirt" className="summary__image"/>
          <p className="summary__text">{what}, liczba worków: {amount}, przeznaczone dla {who}</p>
        </div>
        <div className="summary__item">
          <img src={arrows} alt="arrows" className="summary__image"/>
          <p className="summary__text">dla lokalizacji: {city}</p>
        </div>
      </div>
      <div className="summary__whenwhere">
        <div className="summary__when">
          <h4>Adres odbioru:</h4>
          <div className="summary__item">
            <p>Ulica</p>
            <p>Prosta 51</p>
          </div>
          <div className="summary__item">
            <p>Miasto</p>
            <p>Warszawa</p>
          </div>
          <div className="summary__item">
            <p>Kod pocztowy</p>
            <p>90-209</p>
          </div>
          <div className="summary__item">
            <p>Numer telefonu</p>
            <p>473 839 483</p>
          </div>
        </div > 
        <div className="summary__where">
          <h4>Termin odbioru:</h4>
          <div className="summary__item">
            <p>Data</p>
            <p>05.05.2020</p>
          </div>
          <div className="summary__item">
            <p>Godzina</p>
            <p>15:00</p>
          </div>
          <div className="summary__item">
            <p>Uwagi dla kuriera</p>
            <p></p>
          </div>
        </div> 
      </div>
      <div className="form__buttons">
        <button className="form__button">Wstecz</button>
        <button className="form__button">Potwierdzam</button>
      </div>
    </>
  )
}

export default FormSummary;