import React, {useState, useEffect} from 'react';
import '../../scss/FormStep3.scss';

const FormStep3 = ({stepThreeState, city, who}) => {

  const [option, setOption] = useState(city);
  const [helpGroup, setHelpGroup] = useState(who);

  const handleOption = (e) => {
    setOption(e.currentTarget.value);
  }

  const handleChange = (e) => {
    setHelpGroup(e.currentTarget.value)
  }

  useEffect(() => {
    stepThreeState(option, helpGroup)
  }, [option, helpGroup, stepThreeState])

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
            <input type="radio" name="who" value="dzieci" onChange={(e) => handleChange(e)} checked={who === "dzieci"}></input>
            <span>dzieciom</span>
          </label>
          <label>
            <input type="radio" name="who" value="samotnych matek" onChange={(e) => handleChange(e)} checked={who === "samotnych matek"}></input>
            <span>samotnym matkom</span>
          </label>
          <label>
            <input type="radio" name="who" value="bezdomnych" onChange={(e) => handleChange(e)} checked={who === "bezdomnych"}></input>
            <span>bezdomnym</span>
          </label>
          <label>
            <input type="radio" name="who" value="niepełnosprawnych" onChange={(e) => handleChange(e)} checked={who === "niepełnosprawnych"}></input>
            <span>niepełnosprawnym</span>
          </label>
          <label>
            <input type="radio" name="who" value="osób starszych" onChange={(e) => handleChange(e)} checked={who === "osób starszych"}></input>
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