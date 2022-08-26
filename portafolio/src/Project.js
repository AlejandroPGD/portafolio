import React from 'react'
import './Project.css'
import Project1 from './Images/p1.jpg'
import Project2 from './Images/p2.png'
function Project() {
    return (
        <div className='project component__space' id='Portfolio'>
            <div className='heading'>
                <h1 className='heading'>Portafolio</h1>
                <p className='heading p__color'> Últimos proyectos</p>
                {/* <p className='heading p__color'>but de adsfafdmajourti klañsdfjñalkdsfjñakfdjñalkfdjañlkdfjañlkfdj lkjl</p> */}
            </div>
            <div className='container'>
                <div className='row'>
                    <div className='col__2'>
                        <div className='project__box pointer relative'>
                            <div className='project__box__img pointer relative'>
                                <div className='project__img__box'>
                                    <img src={Project1} alt='' className='project__img' />
                                </div>
                                <div className='mask__effect'></div>
                            </div>
                            <div className='project__meta absolute'>
                                <h5 className='project__text'>Countries App</h5>
                                {/* <h4 className='project__text'>co </h4> */}
                                <a href='https://countries-pi-zeta.vercel.app/' className='project__btn'>Demo</a>
                            </div>
                        </div>

                    </div>
                    <div className='col__2'>
                        <div className='project__box pointer relative'>
                            <div className='project__box__img pointer relative'>
                                <div className='project__img__box'>
                                    <img src={Project2} alt='' className='project__img' />
                                </div>
                                <div className='mask__effect'></div>
                            </div>
                            <div className='project__meta absolute'>
                                <h5 className='project__text'>Bring It App</h5>
                                {/* <h4 className='project__text'>bringitdsañfd </h4> */}
                                <a href='https://bring-it-app.vercel.app/' className='project__btn'>Demo</a>
                            </div>
                        </div>
                    </div>
                    {/* <div className='view__more__btn d__flex align__items__center justify__content__center pxy__30'>
                        <button className='view__more pointer btn'>View more</button>
                    </div> */}
                </div>

            </div>
        </div>
    )
}

export default Project