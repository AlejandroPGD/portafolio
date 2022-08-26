import React from 'react'
import './About.css';
import aboutImage from './Images/about.png'
import Cv from './Documents/AlejandroPerez-CV-FullStack.pdf'

function About() {
    window.addEventListener("scroll", function () {
        const upToTop = this.document.querySelector("a.botton__to__top")
        upToTop.classList.toggle("active", this.window.scrollY > 0)
    })
    return (
        <div className='about component__space' id='About'>
            <div className='container'>
                <div className='row'>
                    <div className='col__2'>
                        <img src={aboutImage} alt='' className='about__img' />
                    </div>
                    <div className='col__2'>
                        <h1 className='about__heading'>Sobre Mi</h1>
                        <div className='about__meta'>
                            <p className='about__text p__color'>
                                Me encanta la tecnología, la robótica y sobre todo la programación, soy ingeniero mecatrónico graduado en la universidad de san Buenaventura, me gusta aprender cosas nuevas, y es por esto que estoy enfocado en desarrollo web full stack, inteligencia artificial y el internet de las cosas.
                            </p>
                            <p className='about__text p__color'>
                                ¿Por qué yo? Soy creativo, capaz de trabajar en equipo, siempre tratando de innovar y aprender nuevas tecnologías, reconozco mis debilidades y me apoyo en personas que saben más, soy eficaz para identificar problemas, sus posibles causas y de encontrar soluciones estratégicas oportunas.
                            </p>
                            <p className='about__text p__color'>
                                Quiero contribuir para que la tecnología llegue a todos los rincones del mundo y es por esto que  quiero compartir con ustedes mis habilidades. ¡¡Bienvenidos!!
                            </p>
                            <div className='about__button d__flex align__items__center'>
                                <a href={Cv} download="AlejandroPerez-CV-FullStack"><button className='about btn pointer'>Descargar Cv</button></a>
                                <a href='https://www.linkedin.com/in/alejandropgd/'><button className='about btn pointer'>LinkedIn </button></a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            {/*up to  top btn*/}
            <div className='up__to__top__btn'>
                <a href='#' className='botton__to__top'>

                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-chevron-up white"
                        viewBox="0 0 16 16">
                        <path
                            fill-rule="evenodd"
                            d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z" />
                    </svg>
                </a>
            </div>
        </div>
    )
}

export default About