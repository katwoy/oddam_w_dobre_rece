import React from 'react';
import '../../scss/FormStep2.scss';

const FormStep2 = () => {
  return (
    <>
      <div className="form__counter">Krok 2/4</div>
      <h3 className="form__title">Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:</h3>
      <form className="form__fields">
        <span className="form__text">Liczba 60l worków:</span>
        <div className="form__amount">
          <select>
            <option value="0">- wybierz -</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
      </form>
    </>
  )
}

export default FormStep2;