import React from 'react';
import FormHero from './FormHero';
import FormSteps from './FormSteps';
import HomeContactForm from '../Home/HomeContactForm';

const Form = () => {
  return (
    <main className="form__container">
      <FormHero />
      <FormSteps />
      <HomeContactForm />
    </main>
  )
}

export default Form;