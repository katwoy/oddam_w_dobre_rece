import React from 'react';
import HomeHeader from './HomeHeader';
import HomeMain from './HomeMain';
import HomeThreeColumns from './HomeThreeColumns';
import HomeSteps from './HomeSteps';

const Home = () => {
  return (
    <>
      <HomeHeader />
      <HomeMain />
      <HomeThreeColumns />
      <HomeSteps id="section1" />
    </>
  )
}

export default Home;