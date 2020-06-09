import React, { useState, useEffect } from 'react';
import '../../scss/FormStep1.scss';

const FormStep1 = ({stepOneState, what}) => {

  const [things, setThings] = useState(what);

  const handleChange = (e) => {
    setThings(e.currentTarget.value)
  }

  useEffect(() => {
    stepOneState(things)
  }, [things, stepOneState])

  return (
    <>
      <div className="form__counter">Krok 1/4</div>
      <h3 className="form__title">Zaznacz co chcesz oddać:</h3>
      <form className="form__fields">
        <div className="form__what">
          <label>
            <input type="radio" name="what" value="ubrania w dobrym stanie" onChange={(e) => handleChange(e)} checked={things === "ubrania w dobrym stanie"}></input>
            ubrania w dobrym stanie
          </label>
          <br/>
          <label>
            <input type="radio" name="what" value="ubrania do wyrzucenia" onChange={(e) => handleChange(e)} checked={things === "ubrania do wyrzucenia"}></input>
            ubrania do wyrzucenia
          </label>
          <br/>
          <label>
            <input type="radio" name="what" value="zabawki" onChange={(e) => handleChange(e)} checked={things === "zabawki"}></input>
            zabawki
          </label>
          <br/>
          <label>
            <input type="radio" name="what" value="książki" onChange={(e) => handleChange(e)} checked={things === "książki"}></input>
            książki
          </label>
          <br/>
          <label>
            <input type="radio" name="what" value="inne" onChange={(e) => handleChange(e)} checked={things === "inne"}></input>
            inne
          </label>
        </div>
      </form>
    </>
  )
}

export default FormStep1;