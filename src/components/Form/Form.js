import React from 'react';
import FormHero from './FormHero';
import FormInfo from './FormInfo';
import FormSteps from './FormSteps';

const Form = () => {
  return (
    <main className="form__container">
      <FormHero />
      <FormInfo />
      <FormSteps />
    </main>
  )
}

export default Form;