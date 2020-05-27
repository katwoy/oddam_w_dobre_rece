import React, { useState, useEffect } from 'react';
import '../../scss/FormStep2.scss';

const FormStep2 = ({stepTwoState}) => {

  const [option, setOption] = useState(0);

  const handleOption = (e) => {
    setOption(e.currentTarget.value);
  }

  useEffect(() => {
    stepTwoState(option)
  }, [option, stepTwoState])

  return (
    <>
      <div className="form__counter">Krok 2/4</div>
      <h3 className="form__title">Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:</h3>
      <form className="form__fields">
        <span className="form__text">Liczba 60l worków:</span>
        <div className="form__amount">
          <select value={option} onChange={handleOption}>
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