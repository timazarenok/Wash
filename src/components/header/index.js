import React, {useState} from 'react'
import HeaderItems from './header-items'
import {Mobile, Desktop} from '../utils'

import 'bootstrap/dist/css/bootstrap.css';
import './header.css'

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
                            <button className="header-burger-button" onClick={() => changeShow()}>
                                <div></div>
                                <div></div>
                                <div></div>
                            </button>
                        </ul>
                    )
                }
            </Mobile>
        </>
    )
}

export default Header;