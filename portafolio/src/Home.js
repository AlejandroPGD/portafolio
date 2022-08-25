import React, { useState } from 'react'
import './Home.css';
import logo from "./Images/logo.png"
import { Link } from "react-scroll";

function Home() {
    window.addEventListener("scroll", function () {
        const header = this.document.querySelector(".header")
        header.classList.toggle("active", this.window.scrollY > 0)
    })
    const [show, setShow] = useState(false);


    return (
        <div className='home' id='Home'>
            <div className='home__bg'>
                <div className='header d__flex align__items__center pxy__30'>
                    <div className='logo'>
                        <img src={logo} alt="" style={{ "width": "50%" }} />
                    </div>
                    <div className='navigation pxy__30'>
                        <ul className='navbar  d__flex'>
                            <Link to='home' smooth={true} duration={500}><li className='nav__items mx__15'>Home</li></Link>
                            <Link to='About' smooth={true} duration={500}><li className='nav__items mx__15'>About</li></Link>
                            <Link to='service' smooth={true} duration={500}><li className='nav__items mx__15'>Services</li></Link>
                            <Link to='Portfolio' smooth={true} duration={500}><li className='nav__items mx__15'>Portafolio</li></Link>
                            {/* <Link to='Blog' smooth={true} duration={500}><li className='nav__items mx__15'>Blog</li></Link> */}
                            <Link to='Contact' smooth={true} duration={500}><li className='nav__items mx__15'>Contact</li></Link>
                        </ul>
                    </div>
                    <div className='toggle__menu'>
                        <svg onClick={() => setShow(!show)}
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-justify white pointer"
                            viewBox="0 0 16 16">
                            <path
                                fill-rule="evenodd"
                                d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" />
                        </svg>
                    </div>
                    {show ? (

                        <div className='sideNavbar'>
                            <ul className='sidebar d__flex'>
                                <li className='sideNavbar'>
                                    <a href='#home'>Home</a>
                                </li>
                                <li className='sideNavbar'>
                                    <a href='#about'>About</a>
                                </li>
                                <li className='sideNavbar'>
                                    <a href='#services'>Services</a>
                                </li>
                                <li className='sideNavbar'>
                                    <a href='#portfolio'>Portafoliooo</a>
                                </li>
                                <li className='sideNavbar'>
                                    <a href='#blog'>Blog</a>
                                </li>
                                <li className='sideNavbar'>
                                    <a href='#contact'>Contact</a>
                                </li>
                            </ul>
                        </div>
                    ) : null}
                </div>
                {/* Home Content */}
                <div className='container'>
                    <div className='home__content'>
                        <div className='home__meta'>
                            <h1 className='home__text pz__10'>
                                Bienvenidos,
                            </h1>
                            <h2 className='home__text pz__10'>
                                Hola! soy Alejandro Pérez
                            </h2>
                            <h3 className='home__text sweet pz__10'>
                                Full Stack Developer.
                            </h3>
                            <h4 className='home__text pz__10'>
                                Colombia.
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home