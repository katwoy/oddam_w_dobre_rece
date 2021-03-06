import React from 'react';
import Header from '../Header';
import HomeMain from './HomeMain';
import HomeThreeColumns from './HomeThreeColumns';
import HomeSteps from './HomeSteps';
import HomeAboutUs from './HomeAboutUs';
import HomeWhoWeHelp from './HomeWhoWeHelp';
import HomeContactForm from './HomeContactForm';

const Home = () => {
  return (
    <>
      <Header />
      <HomeMain />
      <HomeThreeColumns />
      <HomeSteps id="steps" />
      <HomeAboutUs id="about" />
      <HomeWhoWeHelp id="whowehelp" />
      <HomeContactForm id="contact" />
    </>
  )
}

export default Home;