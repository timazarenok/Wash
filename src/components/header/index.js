import React, {useState} from 'react'
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

const Header = () => {
    const [show, setShow] = useState(false);

    const changeShow = () => {
        setShow(!show);
    }

    return (
        <>
            <Desktop>
                <HeaderItems show={show} changeShow={changeShow}/>
            </Desktop>
            <Mobile>
                {
                    show ? <HeaderItems changeShow={changeShow} /> : 
                    (
                        <ul className="nav navbar justify-content-center">
                            <li className="nav-item">
                                <button className="header-button" onClick={() => changeShow()}>
                                    Metropol
                                </button>
                            </li>
                        </ul>
                    )
                }
            </Mobile>
        </>
    )
}

export default Header;