import React, { useState, useEffect } from 'react';
import '../../scss/FormStep2.scss';

const FormStep2 = ({stepTwoState, amount}) => {

  const [bags, setBags] = useState(amount);

  const handleBags = (e) => {
    setBags(e.currentTarget.value);
  }

  useEffect(() => {
    stepTwoState(bags)
  }, [bags, stepTwoState])

  return (
    <>
      <div className="form__counter">Krok 2/4</div>
      <h3 className="form__title">Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:</h3>
      <form className="form__fields">
        <span className="form__text">Liczba 60l worków:</span>
        <div className="form__amount">
          <select value={bags} onChange={handleBags}>
            <option>- wybierz -</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>
      </form>
    </>
  )
}

export default FormStep2;