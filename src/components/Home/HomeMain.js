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
        <div className="main__buttons">
          <Link to="/logowanie" className="main__button">Oddaj <br/> rzeczy</Link>
          <Link to="/logowanie" className="main__button">Zorganizuj <br/> zbiórkę</Link>
        </div>
      </div>
    </main>
  )
}

export default HomeMain;