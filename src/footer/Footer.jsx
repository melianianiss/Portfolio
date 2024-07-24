import React from 'react'
import "./footer.css"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Aniss</h1>

                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>

                    <li>
                        <a href="#portfolio" className="footer__link">Portfolio</a>
                    </li>

                    <li>
                        <a href="#skills" className="footer__link">Skills</a>
                    </li>
                </ul>
                <div className="footer__social">
                    <a href="https://www.facebook.com/aniss.meliani.12/" className="footer__social-link" target='_blank'>
                    <i className='bx bxl-facebook'></i>
                    </a>


                    <a href="https://www.instagram.com/vniis_uml/" className="footer__social-link" target='_blank'>
                        <i className='bx bxl-instagram'></i>
                    </a>


                    <a href="https://x.com/Aniss__0" className="footer__social-link" target='_blank'>
                        <i className='bx bxl-twitter'></i>
                    </a>
                </div>
                <span className="footer__copy">&#169; Crypticalcoder. All rights reserved</span>
            </div>
        </footer>
    )
}

export default Footer