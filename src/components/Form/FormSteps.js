import React from 'react';
import '../../scss/FormSteps.scss';

const FormSteps = () => {
  return (
    <section className="form__steps">
      <div className="form__subtitle">Krok 1/4</div>
      <h3 className="form__title">Zaznacz co chcesz oddać:</h3>
      <form className="form__fields">
        <label>
          <input type="checkbox" name="what" value="goodclothes"></input>
          ubrania, które nadają się do ponownego użycia
        </label>
        <label>
          <input type="checkbox" name="what" value="badclothes"></input>
          ubrania do wyrzucenia
        </label>
        <label>
          <input type="checkbox" name="what" value="toys"></input>
          zabawki
        </label>
        <label>
          <input type="checkbox" name="what" value="books"></input>
          książki
        </label>
        <label>
          <input type="checkbox" name="what" value="other"></input>
          inne
        </label>
      </form>
      <button className="form__button">Dalej</button>
    </section>
  )
}

export default FormSteps;