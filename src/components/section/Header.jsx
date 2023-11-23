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
        <header id='header' toggleMenuBar={toggleMenuBar} role='banner'>
            <Logo />
            <Menu />
            <Sns />
        </header>
    )
}

export default Header