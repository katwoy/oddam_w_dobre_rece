import React from 'react';
import '../../scss/FormSteps.scss';

const FormButtonNext = ({nextPage, step}) => {

  const handleClick = (e) => {
    e.preventDefault();
    nextPage(step+=1)
  }

  return (
    <button className="form__button" onClick={(e) => handleClick(e)}>
      Dalej
    </button>
  )
}

export default FormButtonNext;