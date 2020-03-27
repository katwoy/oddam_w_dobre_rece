import React from 'react';
import '../../scss/HomeAboutUs.scss';
import team from '../../assets/People.jpg';
import signature from '../../assets/Signature.svg';

const HomeAboutUs = ({id}) => {
  return (
    <section className="about" id={id}>
      <div className="about__wrapper">
        <div className="about__title">O nas</div>
        <p className="about__text">Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.</p>
        <img src={signature} alt="signature"/>
      </div>
      <div className="about__img">
        <img src={team} alt="our team"/>
      </div>
    </section>
  )
}

export default HomeAboutUs;