import React from 'react';
import '../../scss/HomeThreeColumns.scss';

const HomeThreeColumns = () => {
  return (
    <section className="three-columns">
      <div className="column">
        <div className="column__title">10</div>
        <div className="column__subtitle">Oddanych worków</div>
        <div className="column__text">Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</div>
      </div>
      <div className="column">
        <div className="column__title">5</div>
        <div className="column__subtitle">Wspartych organizacji</div>
        <div className="column__text">Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</div>
      </div>
      <div className="column">
        <div className="column__title">7</div>
        <div className="column__subtitle">Zorganizowanych zbiórek</div>
        <div className="column__text">Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</div>
      </div>
    </section>
  )
}

export default HomeThreeColumns;