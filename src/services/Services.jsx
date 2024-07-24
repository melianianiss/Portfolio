import React, { useState } from 'react'
import "./services.css"

const Services = () => {
    const [toggle,setToggle] = useState(0)

    const showToggle = (index) => {
        setToggle(index)
    }
    return (
        <section className="services section" id="services">
            <h2 className="section__title">Services</h2>
            <span className="section__subtitle">What I offer</span>

            <div className="services__container container grid">
                <div className="services__content">
                    <div>
                        <i className="uil uil-arrow services__icon"></i>
                        <h3 className="services__title">Front End <br /> developpeur  </h3>
                    </div>
                    <span onClick={()=>{showToggle(1)}} className="services__button">
                        View More 
                        <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>
                    
                    <div className={toggle === 1 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i onClick={()=>{showToggle(0)}} className="uil uil-times services__modal-close"></i>
                            <h3 className="services__modal-title">Front End</h3>
                            <p className="services__modal-description">
                            I specialize in designing user-friendly websites for a great online experience."</p>
                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">HTML, CSS, and JavaScript</p>
                                </li>
                                
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">React and front-end frameworks</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Responsive design</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Visually appealing interfaces</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Visually appealing interfaces</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="services__content">
                    <div>
                        <i className="uil uil-arrow services__icon"></i>
                        <h3 className="services__title">Back End <br /> developpeur  </h3>
                    </div>
                    <span onClick={()=>{showToggle(2)}} className="services__button">
                        View More 
                        <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>
                    
                    <div className={toggle === 2 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i onClick={()=>{showToggle(0)}} className="uil uil-times services__modal-close"></i>
                            <h3 className="services__modal-title">Back End</h3>
                            <p className="services__modal-description">
                            I specialize in developing efficient server-side solutions and managing databases.                            </p>
                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Server-side scripting and API development</p>
                                </li>
                                
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Database management and optimization</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Ensuring data security and compliance</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Ensuring data security and compliance</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Collaboration with front-end developers for seamless integration</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="services__content">
                    <div>
                        <i className="uil uil-arrow services__icon"></i>
                        <h3 className="services__title">UML <br /> Diagrammes</h3>
                    </div>
                    <span onClick={()=>{showToggle(3)}} className="services__button">
                        View More 
                        <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>
                    
                    <div className={toggle === 3 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i onClick={()=>{showToggle(0)}} className="uil uil-times services__modal-close"></i>
                            <h3 className="services__modal-title">UML Diagrammes</h3>
                            <p className="services__modal-description">
                                I specialize in creating UML diagrams for visualizing and communicating software designs. 
                            </p>
                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Use Case Diagrams</p>
                                </li>
                                
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Class Diagrams</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Sequence Diagrams</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">State Machine Diagrams</p>
                                </li>

                                {/* <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info"></p>
                                </li> */}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services