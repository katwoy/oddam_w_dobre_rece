import React from 'react';
import '../../scss/FormStep4.scss';

const FormStep4 = () => {
  return (
    <>
      <div className="form__counter">Krok 4/4</div>
      <h3 className="form__title">Podaj adres oraz termin odbioru rzeczy przez kuriera</h3>
      <form className="form__fields">
        <div className="form__pickup">
          <div className="form__address">
            <h4>Adres odbioru:</h4>
            <label>
              <span>Ulica</span>
              <input type="text" name="street"></input>
            </label>
            <label>
              <span>Miasto</span>
              <input type="text" name="city"></input>
            </label>
            <label>
              <span>Kod pocztowy</span>
              <input type="text" name="postalcode"></input>
            </label>
            <label>
              <span>Numer telefonu</span>
              <input type="tel" name="phone"></input>
            </label>
          </div>
          <div className="form__date">
            <h4>Termin odbioru:</h4> 
            <label>
              <span>Data</span>
              <input type="date" name="date"></input>
            </label>
            <label>
              <span>Godzina</span>
              <input type="time" name="time"></input>
            </label>
            <label>
              <span>Uwagi dla kuriera</span>
              <textarea name="notes"></textarea>
            </label>
          </div>
        </div>
      </form>
    </>
  )
}

export default FormStep4;