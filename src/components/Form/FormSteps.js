import React from 'react';
import '../../scss/FormSteps.scss';
import FormInfo from './FormInfo';
import FormStep1 from './FormStep1';
// import FormStep2 from './FormStep2';

const FormSteps = () => {

  return (
    <>
      <FormInfo />
      <section className="form__steps">
        <FormStep1 />
      </section>
    </>
  )
}

export default FormSteps;