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
import FormButtonSubmit from './FormButtonSubmit';

const FormSteps = () => {

  const [step, setStep] = useState(1);
  const [what, setWhat] = useState("xyz");
  const [amount, setAmount] = useState(0);
  const [city, setCity] = useState("");

  const nextPage = (stepNumber) => setStep(stepNumber);
  const prevPage = (stepNumber) => setStep(stepNumber);
  const stepOneState = (stepOneWhat) => setWhat(stepOneWhat);
  const stepTwoState = (stepTwoAmount) => setAmount(stepTwoAmount);
  const stepThreeState = (stepThreeCity) => setCity(stepThreeCity);

  return (
    <>
      {step === 1 && <FormInfo info={"Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je przekazać."} />}
      {step === 2 && <FormInfo info={"Wszystkie rzeczy do oddania zapakuj w 60l worki."} />}
      {step === 3 && <FormInfo info={"Jeśli wiesz komu chcesz pomóc, możesz podać nazwę konkretnej organizacji."} />}
      {step === 4 && <FormInfo info={"Podaj adres oraz termin odbioru rzeczy."} />}
      {step === 5 && <FormInfo info={"Sprawdź, czy wszystko się zgadza."} />}
      {step === 6 && <FormInfo info={"Twój formularz został wysłany."} />}
      <section className="form__steps">
        {step===1 && <FormStep1 stepOneState={stepOneState} />}
        {step===2 && <FormStep2 stepTwoState={stepTwoState} amount={amount} />}
        {step===3 && <FormStep3 stepThreeState={stepThreeState} city={city} />}
        {step===4 && <FormStep4 />}
        {step===5 && <FormSummary what={what} amount={amount} city={city} />}
        {step===6 && <FormThanks />}
        <div className="form__buttons">
          {step !== 1 && step !== 6 && <FormButtonPrev prevPage={prevPage} step={step} />}
          {step !== 5 && step!== 6 && <FormButtonNext nextPage={nextPage} step={step} />}
          {step === 5 && step!== 6 && <FormButtonSubmit nextPage={nextPage} step={step} />}
        </div>
      </section>
    </>
  )
}

export default FormSteps;