import React from 'react';
import {Link as ScrollLink} from "react-scroll";
import '../scss/Header.scss';

const HomeHeader = () => {
  return (
    <header className="header">
      <nav className="header__nav">
        <ul className="header__list">
          <li className="header__li"><a href="/">Start</a></li>
          <li className="header__li">
            <ScrollLink 
                activeClass="active"
                to="steps"
                spy={true}
                smooth={true}
                offset={-45}
                duration={500}>O co chodzi?
            </ScrollLink>
          </li>
          <li className="header__li">
            <ScrollLink 
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}>O nas
            </ScrollLink>
          </li>
          <li className="header__li">
            <ScrollLink 
                activeClass="active"
                to="whowehelp"
                spy={true}
                smooth={true}
                offset={-75}
                duration={500}>Fundacje i organizacje
            </ScrollLink>
          </li>
          <li className="header__li">
            <ScrollLink 
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}>Kontakt
            </ScrollLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default HomeHeader;