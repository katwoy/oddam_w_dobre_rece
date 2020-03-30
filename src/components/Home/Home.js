import React from 'react';
import HomeHeader from './HomeHeader';
import HomeMain from './HomeMain';
import HomeThreeColumns from './HomeThreeColumns';
import HomeSteps from './HomeSteps';
import HomeAboutUs from './HomeAboutUs';
import HomeWhoWeHelp from './HomeWhoWeHelp';
import HomeContactForm from './HomeContactForm';
import HomeFooter from './HomeFooter';

const Home = () => {
  return (
    <>
      <HomeHeader />
      <HomeMain />
      <HomeThreeColumns />
      <HomeSteps id="steps" />
      <HomeAboutUs id="about" />
      <HomeWhoWeHelp id="whowehelp" />
      <HomeContactForm id="contact" />
      <HomeFooter />
    </>
  )
}

export default Home;