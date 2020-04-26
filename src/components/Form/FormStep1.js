import React from 'react';
import '../../scss/FormStep1.scss';

const FormStep1 = () => {

  return (
    <>
      <div className="form__counter">Krok 1/4</div>
      <h3 className="form__title">Zaznacz co chcesz oddać:</h3>
      <form className="form__fields">
        <div className="form__what">
          <label>
            <input type="checkbox" name="what" value="goodclothes"></input>
            ubrania, które nadają się do ponownego użycia
          </label>
          <br/>
          <label>
            <input type="checkbox" name="what" value="badclothes"></input>
            ubrania do wyrzucenia
          </label>
          <br/>
          <label>
            <input type="checkbox" name="what" value="toys"></input>
            zabawki
          </label>
          <br/>
          <label>
            <input type="checkbox" name="what" value="books"></input>
            książki
          </label>
          <br/>
          <label>
            <input type="checkbox" name="what" value="other"></input>
            inne
          </label>
        </div>
      </form>
      <div className="form__buttons">
        <button className="form__button">Dalej</button>
      </div>
    </>
  )
}

export default FormStep1;