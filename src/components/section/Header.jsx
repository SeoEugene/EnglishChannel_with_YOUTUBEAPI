import React, { useState } from 'react'
import Logo from '../header/Logo'
import Menu from '../header/Menu'
import Sns from '../header/Sns'

const Header = () => {

    const [isMenuBarVisible, setIsMenuBarVisible] = useState(true);

    const toggleMenuBar = () => {
        setIsMenuBarVisible(!isMenuBarVisible);
    };

    return (
        <header id='header' className={isMenuBarVisible ? 'show' : ''} role='banner'>
            <Logo toggleMenuBar={toggleMenuBar} />
            <Menu />
            <Sns />
        </header>
    )
}

export default Header