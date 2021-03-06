import React from 'react';
import {Link} from 'react-router-dom';
import '../../scss/HomeMain.scss';
import hero from '../../assets/Home-Hero-Image.jpg';

const HomeMain = () => {
  return (
    <main className="main">
      <div className="main__img">
        <img src={hero} alt="items packed in a box"/>
      </div>
      <div className="main__content">
        <h1 className="main__title">Zacznij pomagać! <br/> Oddaj niechciane rzeczy w zaufane ręce</h1>
        <Link to="/oddaj-rzeczy" className="main__button">Oddaj rzeczy</Link>
      </div>
    </main>
  )
}

export default HomeMain;