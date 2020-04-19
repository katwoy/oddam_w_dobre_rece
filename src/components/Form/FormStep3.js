import React from 'react';

const FormStep2 = () => {
  return (
    <>
      <div className="form__subtitle">Krok 3/4</div>
      <h3 className="form__title">Lokalizacja:</h3>
      <form className="form__fields">
        <div className="select">
          <select>
            <option value="0">- wybierz -</option>
            <option value="1">Poznań</option>
            <option value="2">Warszawa</option>
            <option value="3">Kraków</option>
            <option value="4">Wrocław</option>
            <option value="5">Katowice</option>
          </select>
        </div>
      </form>
      <div className="form__buttons">
        <button className="form__button">Wstecz</button>
        <button className="form__button">Dalej</button>
      </div>
    </>
  )
}

export default FormStep2;