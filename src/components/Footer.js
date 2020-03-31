import React from 'react';
import '../scss/Footer.scss';
import facebook from '../assets/Facebook.svg';
import instagram from '../assets/Instagram.svg';

const HomeFooter = () => {
  return (
      <footer className="footer">
        <div className="footer__copyright">Copyright by Coders Lab</div>
        <div className="footer__socials">
          <a href="https://www.facebook.com/CodersLabSzkolaIT/" target="_blank" rel="noopener noreferrer"><img src={facebook} alt="facebook logo"/></a>
          <a href="https://www.instagram.com/coders.lab/?hl=pl" target="_blank" rel="noopener noreferrer"><img src={instagram} alt="instagram logo"/></a>
        </div>
      </footer>
  )
}

export default HomeFooter;