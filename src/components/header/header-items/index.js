import React from 'react'
import { animateScroll as scroll, Link  } from 'react-scroll'
import { TelephoneFill } from 'react-bootstrap-icons';

const HeaderItems = ({show, changeShow}) => (
  <>
    <ul className="nav navbar justify-content-center">

      <li className="nav-item">
        <button className="header-button" onClick={() => changeShow()}>
          Metropol
        </button>
      </li>
      <li className="nav-item" onClick={() => scroll.scrollToTop()}>ГЛАВНАЯ</li>
      <li className="nav-item">
        <Link
          activeClass="active"
          to="price-list"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        > 
          ПРАЙС-ЛИСТ  
        </Link>
      </li>
      <li className="nav-item" onClick={() => scroll.scrollToBottom()}>КОНТАКТЫ</li>
      <li className="nav-item telephone">
        <TelephoneFill color="#ffe648"/>
          <a href="tel: +375 (29) 605-50-04">+375 (29) 605-50-04</a>
      </li>
    </ul>
  </>
)

export default HeaderItems;