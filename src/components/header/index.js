import React from 'react'
import { animateScroll as scroll  } from 'react-scroll'

import './header.css'


const Header = () => (
    <ul>
        <li onClick={() => scroll.scrollToTop}>Главная</li>
        <li>Перечень услуг</li>
        <li>Собрать свою услугу</li>
        <li>О нас</li>
        <li>Контакты</li>
    </ul>
)

export default Header;