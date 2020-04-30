import React from 'react';
import '../../scss/FormSteps.scss';
import FormInfo from './FormInfo';
// import FormStep1 from './FormStep1';
// import FormStep2 from './FormStep2';
// import FormStep3 from './FormStep3';
import FormStep4 from './FormStep4';

const FormSteps = () => {

  return (
    <>
      <FormInfo />
      <section className="form__steps">
        <FormStep4 />
      </section>
    </>
  )
}

export default FormSteps;