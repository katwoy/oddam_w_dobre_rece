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
        <div className="main__title">Zacznij pomagać! <br/> Oddaj niechciane rzeczy w zaufane ręce</div>
        <div className="main__buttons">
          <Link to="/logowanie"><button className="main__button">Oddaj <br/> rzeczy</button></Link>
          <Link to="/logowanie"><button className="main__button">Zorganizuj <br/> zbiórkę</button></Link>
        </div>
      </div>
    </main>
  )
}

export default HomeMain;