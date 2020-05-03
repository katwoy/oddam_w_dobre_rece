import React, { useState } from 'react';
import '../../scss/FormSteps.scss';
import FormInfo from './FormInfo';
import FormStep1 from './FormStep1';
import FormStep2 from './FormStep2';
import FormStep3 from './FormStep3';
import FormStep4 from './FormStep4';
import FormSummary from './FormSummary';
import FormThanks from './FormThanks';
import FormButtonNext from './FormButtonNext';
import FormButtonPrev from './FormButtonPrev';

const FormSteps = () => {

  const [step, setStep] = useState(1);

  const nextPage = (stepNumber) => setStep(stepNumber);
  const prevPage = (stepNumber) => setStep(stepNumber);

  return (
    <>
      <FormInfo />
      <section className="form__steps">
        {step===1 && <FormStep1 />}
        {step===2 && <FormStep2 />}
        {step===3 && <FormStep3 />}
        {step===4 && <FormStep4 />}
        {step===5 && <FormSummary />}
        {step===6 && <FormThanks />}
        <div className="form__buttons">
          {step !== 1 && <FormButtonPrev prevPage={prevPage} step={step} />}
          {step !== 5 && <FormButtonNext nextPage={nextPage} step={step} />}
        </div>
      </section>
    </>
  )
}

export default FormSteps;