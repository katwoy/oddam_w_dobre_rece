import React from 'react';
import '../../scss/FormSteps.scss';

const FormButtonPrev = ({prevPage, step}) => {

  const handleClick = (e) => {
    e.preventDefault();
    prevPage(step-=1)
  }

  return (
    <button className="form__button" onClick={(e) => handleClick(e)}>
      Wstecz
    </button>
  )
}

export default FormButtonPrev;