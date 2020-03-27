import React from 'react';
import '../../scss/HomeWhoWeHelp.scss';
import HomeTitle from './HomeTitle';

const HomeWhoWeHelp = ({id}) => {
  return (
    <section className="about" id={id}>
      <HomeTitle title={"Komu pomagamy?"}/>
    </section>
  )
}

export default HomeWhoWeHelp;