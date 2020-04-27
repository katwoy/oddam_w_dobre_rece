import React from 'react';
import '../../scss/FormStep3.scss';

const FormStep2 = () => {
  return (
    <>
      <div className="form__counter">Krok 3/4</div>
      <h3 className="form__title">Lokalizacja:</h3>
      <form className="form__fields">
        <div className="form__city">
          <select>
            <option value="0">- wybierz -</option>
            <option value="1">Poznań</option>
            <option value="2">Warszawa</option>
            <option value="3">Kraków</option>
            <option value="4">Wrocław</option>
            <option value="5">Katowice</option>
          </select>
        </div>
        <h4 className="form__subtitle">Komu chcesz pomóc?</h4>
        <div className="form__who">
          <label>
            <input type="checkbox" name="who" value="children"></input>
            <span>dzieciom</span>
          </label>
          <label>
            <input type="checkbox" name="who" value="singlemothers"></input>
            <span>samotnym matkom</span>
          </label>
          <label>
            <input type="checkbox" name="who" value="homeless"></input>
            <span>bezdomnym</span>
          </label>
          <label>
            <input type="checkbox" name="who" value="disabled"></input>
            <span>niepełnosprawnym</span>
          </label>
          <label>
            <input type="checkbox" name="who" value="elderly"></input>
            <span>osobom starszym</span>
          </label>
        </div>
        <div className="form__organisation">
          <h4 className="form__subtitle">Wpisz nazwę konkretnej organizacji (opcjonalnie)</h4>
          <textarea></textarea>
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