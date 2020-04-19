import React from 'react';

const FormStep2 = () => {
  return (
    <>
      <div className="form__subtitle">Krok 2/4</div>
      <h3 className="form__title">Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:</h3>
      <form className="form__fields">
        <p>Liczba 60l worków:</p>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </form>
      <div className="form__buttons">
        <button className="form__button">Wstecz</button>
        <button className="form__button">Dalej</button>
      </div>
    </>
  )
}

export default FormStep2;