import React from 'react';
import '../../scss/FormInfo.scss';

const FormInfo = ({info}) => {
  return (
    <section className="form__info">
      <h3>Ważne!</h3>
      <p>{info}</p>
    </section>
  )
}

export default FormInfo;