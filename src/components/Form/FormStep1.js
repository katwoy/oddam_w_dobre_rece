import React from 'react';
import '../../scss/FormStep1.scss';

const FormStep1 = ({stepOneState}) => {

  const handleClick = (e) => {
    e.preventDefault();
    stepOneState(e.currentTarget.value)
  }

  return (
    <>
      <div className="form__counter">Krok 1/4</div>
      <h3 className="form__title">Zaznacz co chcesz oddać:</h3>
      <form className="form__fields">
        <div className="form__what">
          <label>
            <input type="checkbox" name="what" value="ubrania w dobrym stanie" onClick={(e) => handleClick(e)}></input>
            ubrania w dobrym stanie
          </label>
          <br/>
          <label>
            <input type="checkbox" name="what" value="ubrania do wyrzucenia"></input>
            ubrania do wyrzucenia
          </label>
          <br/>
          <label>
            <input type="checkbox" name="what" value="zabawki"></input>
            zabawki
          </label>
          <br/>
          <label>
            <input type="checkbox" name="what" value="książki"></input>
            książki
          </label>
          <br/>
          <label>
            <input type="checkbox" name="what" value="inne"></input>
            inne
          </label>
        </div>
      </form>
    </>
  )
}

export default FormStep1;