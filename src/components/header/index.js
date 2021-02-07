import React from 'react'
import HeaderItems from './header-items'

import 'bootstrap/dist/css/bootstrap.css';
import './header.css'

const Mobile = ({children}) => (
    <span className="mobile">
        {children}
    </span> 
) 

const Desktop = ({children}) => (
    <span className="desktop">
        {children}
    </span> 
) 

const Header = () => (
    <>
        <Desktop>
            <HeaderItems/>
        </Desktop>
        <Mobile>
            <h1>Mobile</h1>
        </Mobile>
    </>
)

export default Header;