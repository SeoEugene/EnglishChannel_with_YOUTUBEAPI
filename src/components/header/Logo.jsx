import React from 'react'
import { GiButterfly } from "react-icons/gi";
import { Link } from 'react-router-dom'

const Logo = ({ toggleMenuBar }) => {
    return (
        <>
            <h1 className='header__logo'>
                <Link to='/' onClick={toggleMenuBar}>
                    <em><GiButterfly /></em>
                    <div>Find English</div>
                </Link>
            </h1>
        </>
    )
}

export default Logo