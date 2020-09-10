import React from 'react';
import FormHero from './FormHero';
import FormSteps from './FormSteps';

const Form = () => {
  return (
    <main className="form__container">
      <FormHero />
      <FormSteps />
    </main>
  )
}

export default Form;