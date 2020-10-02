import React from 'react'

import constants from '../../constants/texts'
import { Button } from '../Button'

const Footer = (props) => {

    if (props.isHome) {
        return (
            <footer>
                <div className="container">
                    <div id="footer-content">
                        <div id="footer-col-1" className="footer-col">
                            <a href="/">
                                <img alt="Logo sobre vida" src={require('../../assets/brand/footer-brand-full.svg')} />
                            </a>
                        </div>
                        <div id="footer-col-2" className="footer-col">
                            <span>{constants['footer.col2.title']}</span>
                            <ul>
                                <li><a href="/">{constants['footer.col2.li1']}</a></li>
                                <li><a href="/">{constants['footer.col2.li2']}</a></li>
                                <li><a href="/">{constants['footer.col2.li3']}</a></li>
                                <li><a href="/">{constants['footer.col2.li4']}</a></li>
                                <li><a href="/">{constants['footer.col2.li5']}</a></li>
                                <li><a href="/">{constants['footer.col2.li6']}</a></li>
                            </ul>
                        </div>
                        <div id="footer-col-3" className="footer-col">
                            <span>{constants['footer.col3.title']}</span>
                            <ul>
                                <li><a href="/">{constants['footer.col3.li1']}</a></li>
                                <li><a href="/">{constants['footer.col3.li2']}</a></li>
                                <li><a href="/">{constants['footer.col3.li3']}</a></li>
                                <li><a href="/">{constants['footer.col3.li4']}</a></li>
                            </ul>
                        </div>
                        <div id="footer-col-4" className="footer-col">
                            <h6>{constants['footer.col4.title']}</h6>
                            <Button value="Seja um Doador" className="solid-button-secondary footer-button" />
                        </div>
                    </div>
                    <div id="footer-rigths">
                        <p>{constants['footer.rights']}</p>
                    </div>
                </div>
            </footer>
        )
    }
    else {
        return (
            <footer id='footer'>
                <div className="container">
                    <div id="footer-rigths">
                        <p>{constants['footer.rights']}</p>
                    </div>
                </div>
            </footer>
        )
    }
}

export { Footer }