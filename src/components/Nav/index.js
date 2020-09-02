import React from 'react'



const Nav = () => {
    return (
        <nav className="navbar fixed-top">
            <div className="container">
                <a className="navbar-brand-logo" href="/">
                    <img src={require('../../assets/brand/nav-brand-logo.svg')} />
                    <img src={require('../../assets/brand/nav-brand-text.svg')} />
                </a>
                <ul className="menu-items">
                    <li>
                        <a></a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export { Nav };