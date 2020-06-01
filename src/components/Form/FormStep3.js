import React, {useState, useEffect} from 'react';
import '../../scss/FormStep3.scss';

const FormStep3 = ({stepThreeState}) => {

  const [option, setOption] = useState(0);

  const handleOption = (e) => {
    setOption(e.currentTarget.value);
  }

  useEffect(() => {
    stepThreeState(option)
  }, [option, stepThreeState])

  return (
    <>
      <div className="form__counter">Krok 3/4</div>
      <h3 className="form__title">Lokalizacja:</h3>
      <form className="form__fields">
        <div className="form__city">
          <select value={option} onChange={handleOption}>
            <option>- wybierz -</option>
            <option>Poznań</option>
            <option>Warszawa</option>
            <option>Kraków</option>
            <option>Wrocław</option>
            <option>Katowice</option>
          </select>
        </div>
        <h4 className="form__subtitle">Komu chcesz pomóc?</h4>
        <div className="form__who">
          <label>
            <input type="checkbox" name="who" value="children"></input>
            <span>dzieciom</span>
          </label>
          <label>
            <input type="checkbox" name="who" value="singlemothers"></input>
            <span>samotnym matkom</span>
          </label>
          <label>
            <input type="checkbox" name="who" value="homeless"></input>
            <span>bezdomnym</span>
          </label>
          <label>
            <input type="checkbox" name="who" value="disabled"></input>
            <span>niepełnosprawnym</span>
          </label>
          <label>
            <input type="checkbox" name="who" value="elderly"></input>
            <span>osobom starszym</span>
          </label>
        </div>
        <div className="form__organisation">
          <h4 className="form__subtitle">Wpisz nazwę konkretnej organizacji (opcjonalnie)</h4>
          <textarea></textarea>
        </div>
      </form>
    </>
  )
}

export default FormStep3;