import React from 'react'
import { animateScroll as scroll  } from 'react-scroll'
import { TelephoneFill } from 'react-bootstrap-icons';

const HeaderItems = () => (
  <ul className="nav navbar justify-content-center">
    <li className="nav-item" onClick={() => scroll.scrollToTop()}>ГЛАВНАЯ</li>
    <li className="nav-item">УСЛУГИ</li>
    <li className="nav-item">КОНТАКТЫ</li>
    <li className="nav-item telephone">
      <TelephoneFill color="#ffe648"/>
        <a href="tel: +375 (29) 605-50-04">+375 (29) 605-50-04</a>
    </li>
  </ul>
)

export default HeaderItems;