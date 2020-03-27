import React from 'react';
import HomeHeader from './HomeHeader';
import HomeMain from './HomeMain';
import HomeThreeColumns from './HomeThreeColumns';
import HomeSteps from './HomeSteps';
import HomeAboutUs from './HomeAboutUs';

const Home = () => {
  return (
    <>
      <HomeHeader />
      <HomeMain />
      <HomeThreeColumns />
      <HomeSteps id="steps" />
      <HomeAboutUs id="about" />
    </>
  )
}

export default Home;