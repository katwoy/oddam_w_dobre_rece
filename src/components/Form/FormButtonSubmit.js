import React from 'react';
import '../../scss/FormSteps.scss';

const FormButtonSubmit = ({nextPage, step}) => {

  const handleClick = (e) => {
    e.preventDefault();
    nextPage(step+=1)
  }

  return (
    <button className="form__button" onClick={(e) => handleClick(e)}>
      Potwierdzam
    </button>
  )
}

export default FormButtonSubmit;