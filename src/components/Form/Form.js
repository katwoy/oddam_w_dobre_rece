import React from 'react';
import FormHero from './FormHero';
import FormInfo from './FormInfo';
import FormSteps from './FormSteps';

const Form = () => {
  return (
    <section className="form__container">
      <FormHero />
      <FormInfo />
      <FormSteps />
    </section>
  )
}

export default Form;