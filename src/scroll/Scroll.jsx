import React from 'react'
import "./scroll.css"

const Scroll = () => {
    window.addEventListener("scroll", () => {
        const scroll = document.querySelector(".scroll");
    
        // Use window.scrollY directly
        if (window.scrollY >= 560) {
            scroll.classList.add("show-scroll");
        } else {
            scroll.classList.remove("show-scroll");
        }
    });

    return (
        <a href="#home" className="scroll">
            <i className="uil uil-arrow-up scroll__icon"></i>
        </a>
    )
}

export default Scroll