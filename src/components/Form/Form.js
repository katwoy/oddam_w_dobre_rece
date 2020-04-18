import React from 'react';
import FormHero from './FormHero';
import FormInfo from './FormInfo';
import FormSteps from './FormSteps';
import HomeContactForm from '../Home/HomeContactForm';

const Form = () => {
  return (
    <main className="form__container">
      <FormHero />
      <FormInfo />
      <FormSteps />
      <HomeContactForm />
    </main>
  )
}

export default Form;