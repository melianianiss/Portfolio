import { useState } from "react"
import "./header.css"

export default function Headers() {

    // ==========================================
    window.addEventListener("scroll", () => {
        const header = document.querySelector(".header");
    
        // Use window.scrollY directly
        if (window.scrollY >= 80) {
            header.classList.add("scroll-header");
        } else {
            header.classList.remove("scroll-header");
        }
    });
    // ==========================================
    const [toggle, setToggle] = useState(false)
    const [activeLink, setActiveLink] = useState("home")


    return(
        <header className="header" >
            <nav className="nav container">
                <a className="nav__logo" href="#home">Aniss</a>

                <div className={toggle ? "nav__menu show-menu" : "nav__menu"}>
                    <ul className="nav__list grid">

                        <li className="nav__item" onClick={() => { setActiveLink("home") }}>
                            <a href="#home" className={activeLink === "home" ? "nav__link active-link" : "nav__link" } >
                                <i className="uil uil-estate nav__icon"></i> Home
                            </a>
                        </li>

                        <li className="nav__item" onClick={() => { setActiveLink("about") }}>
                            <a href="#about"  className={activeLink === "about" ? "nav__link active-link" : "nav__link" }>
                                <i className="uil uil-user nav__icon"></i> About
                            </a>
                        </li>

                        <li className="nav__item" onClick={() => { setActiveLink("skills") }}>
                            <a href="#skills" className={activeLink === "skills" ? "nav__link active-link" : "nav__link" } >
                                <i className="uil uil-file-alt nav__icon"></i>Skills
                            </a>
                        </li>

                        <li className="nav__item" onClick={() => { setActiveLink("Services") }}>
                            <a href="#" className={activeLink === "Services" ? "nav__link active-link" : "nav__link" }>
                                <i className="uil uil-briefcase nav__icon"></i>Services
                            </a>
                        </li>

                        <li className="nav__item" onClick={() => { setActiveLink("Portfolio") }}>
                            <a href="#portfolio" className={activeLink === "Portfolio" ? "nav__link active-link" : "nav__link" }>
                                <i className="uil uil-scenery nav__icon"></i>Portfolio
                            </a>
                        </li>

                        <li className="nav__item" onClick={() => { setActiveLink("Contact") }}>
                            <a href="#contact" className={activeLink === "Contact" ? "nav__link active-link" : "nav__link" }>
                                <i className="uil uil-message nav__icon"></i> Contact
                            </a>
                        </li>

                    </ul>

                    <i className="uil uil-times nav__close" 
                    onClick={()=>{
                        setToggle(!toggle)
                    }}
                    ></i>
                </div>
                <div className="nav__toggle" onClick={ () => { setToggle(!toggle) } } >
                    <i className="uil uil-apps"></i>
                </div>
            </nav>
        </header>
    )
}   