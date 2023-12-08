import React from 'react'
import { GiButterfly } from "react-icons/gi";
import { Link } from 'react-router-dom'

const Logo = ({ toggleMenuBar }) => {
    return (
        <h1 className='header__logo'>
            <Link to='/' onClick={toggleMenuBar}>
                <div className="ham">menu</div>
                <em><GiButterfly /></em>
                <span>Find English Channel<br />Youtube</span>
            </Link>
        </h1>
    )
}

export default Logo