import React from 'react';
import HomeHeader from './HomeHeader';
import HomeMain from './HomeMain';
import HomeThreeColumns from './HomeThreeColumns';
import HomeSteps from './HomeSteps';
import HomeAboutUs from './HomeAboutUs';
import HomeWhoWeHelp from './HomeWhoWeHelp';

const Home = () => {
  return (
    <>
      <HomeHeader />
      <HomeMain />
      <HomeThreeColumns />
      <HomeSteps id="steps" />
      <HomeAboutUs id="about" />
      <HomeWhoWeHelp id="whowehelp" />
    </>
  )
}

export default Home;