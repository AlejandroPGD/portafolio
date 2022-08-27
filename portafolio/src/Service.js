import React from 'react'
import './Service.css'
import jsLogo from './Images/jsLogo.png'
import reactLogo from './Images/reactLogo.png'
import reduxLogo from './Images/reduxLogo.png'
import nodejsLogo from './Images/nodejsLogo.png'
import htmlLogo from './Images/htmlLogo.png'
import cssLogo from './Images/cssLogo.png'
import bootstrapLogo from './Images/bootstrapLogo.png'
import socketioLogo from './Images/socketioLogo.png'
import postgresqlLogo from './Images/PostgreSQLLogo.png'
import sqlite3Logo from './Images/SQlite3Logo.png'
import sequelizeLogo from './Images/sequelizeLogo.png'
import githubLogo from './Images/githubLogo.png'
import solidworksLogo from './Images/solidworksLogo.png'
import matlabLogo from './Images/matlabLogo.png'
import arduinoLogo from './Images/arduinoLogo.png'
import raspberrypiLogo from './Images/raspberrypiLogo.png'

function Service() {
    return (
        <div className='service component__space' id='Services'>
            <div className='heading'>
                <h1 className='heading'>Tecnologías</h1>
                {/* <p className='heading p__color'>Algunas tecnologias con las que he trabajado.</p> */}
                {/* <p className='heading p__color'>but de majourti klañsdfjñalkdsfjñakfdjñalkfdjañlkdfjañlkfdj lkjl</p> */}
            </div>
            <div className='container'>
                <div className='row'>
                    <div className='col__4'>
                        <div className='service__box pointer'>
                            <div className='icon'>
                                <img src={jsLogo} alt='js' style={{ "width": "80%" }} />
                            </div>
                            <div className='service__meta'>
                                <h1 className='service__text'>
                                    JavaScript
                                </h1>
                                {/* <p className='p service__text p__color'>
                                    añlksdjfñlasjfdñ ñalskdjfñajsdf añlskdf jñalsdjf
                                </p>
                                <p className='p service__text p__color'>
                                    aaaal  laksjdlkf ajasaasadsafa
                                </p>
                                <p className='p service__text p__color'>
                                    bbbba lkasdjflasñdfj
                                </p> */}
                            </div>
                        </div>
                    </div>
                    <div className='col__4'>
                        <div className='service__box pointer'>
                            <div className='icon'>
                                <img src={reactLogo} alt='js' style={{ "width": "70%" }} />
                            </div>
                            <div className='service__meta'>
                                <h1 className='service__text'>
                                    React
                                </h1>
                            </div>
                        </div>
                    </div>
                    <div className='col__4'>
                        <div className='service__box pointer'>
                            <div className='icon'>
                                <img src={reduxLogo} alt='js' style={{ "width": "70%" }} />
                            </div>
                            <div className='service__meta'>
                                <h1 className='service__text'>
                                    Redux
                                </h1>
                            </div>
                        </div>
                    </div>
                    <div className='col__4'>
                        <div className='service__box pointer'>
                            <div className='icon'>
                                <img src={nodejsLogo} alt='js' style={{ "width": "70%" }} />
                            </div>
                            <div className='service__meta'>
                                <h1 className='service__text'>
                                    Node.js
                                </h1>

                            </div>
                        </div>
                    </div>
                    <div className='col__4'>
                        <div className='service__box pointer'>
                            <div className='icon'>
                                <img src={htmlLogo} alt='js' style={{ "width": "55%" }} />
                            </div>
                            <div className='service__meta'>
                                <h1 className='service__text'>
                                    HTML
                                </h1>

                            </div>
                        </div>
                    </div>
                    <div className='col__4'>
                        <div className='service__box pointer'>
                            <div className='icon'>
                                <img src={cssLogo} alt='js' style={{ "width": "50%" }} />
                            </div>
                            <div className='service__meta'>
                                <h1 className='service__text'>
                                    CSS
                                </h1>

                            </div>
                        </div>
                    </div>
                    <div className='col__4'>
                        <div className='service__box pointer'>
                            <div className='icon'>
                                <img src={bootstrapLogo} alt='js' style={{ "width": "80%" }} />

                            </div>
                            <div className='service__meta'>
                                <h1 className='service__text'>
                                    Bootstrap
                                </h1>

                            </div>
                        </div>
                    </div>
                    <div className='col__4'>
                        <div className='service__box pointer'>
                            <div className='icon'>
                                <img src={socketioLogo} alt='js' style={{ "width": "100%" }} />
                            </div>
                            <div className='service__meta'>
                                <h1 className='service__text'>
                                    Socket.io
                                </h1>

                            </div>
                        </div>
                    </div>
                    <div className='col__4'>
                        <div className='service__box pointer'>
                            <div className='icon'>
                                <img src={postgresqlLogo} alt='js' style={{ "width": "75%" }} />
                            </div>
                            <div className='service__meta'>
                                <h1 className='service__text'>
                                    PostgreSQL
                                </h1>

                            </div>
                        </div>
                    </div>
                    <div className='col__4'>
                        <div className='service__box pointer'>
                            <div className='icon'>
                                <img src={sequelizeLogo} alt='js' style={{ "width": "75%" }} />
                            </div>
                            <div className='service__meta'>
                                <h1 className='service__text'>
                                    Sequelize
                                </h1>

                            </div>
                        </div>
                    </div>
                    <div className='col__4'>
                        <div className='service__box pointer'>
                            <div className='icon'>
                                <img src={sqlite3Logo} alt='js' style={{ "width": "75%" }} />
                            </div>
                            <div className='service__meta'>
                                <h1 className='service__text'>
                                    SQLite3
                                </h1>

                            </div>
                        </div>
                    </div>
                    <div className='col__4'>
                        <div className='service__box pointer'>
                            <div className='icon'>
                                <img src={githubLogo} alt='js' style={{ "width": "75%" }} />
                            </div>
                            <div className='service__meta'>
                                <h1 className='service__text'>
                                    GitHub
                                </h1>

                            </div>
                        </div>
                    </div>
                    <div className='col__4'>
                        <div className='service__box pointer'>
                            <div className='icon'>
                                <img src={solidworksLogo} alt='js' style={{ "width": "75%" }} />
                            </div>
                            <div className='service__meta'>
                                <h1 className='service__text'>
                                    SolidWorks
                                </h1>

                            </div>
                        </div>
                    </div>
                    <div className='col__4'>
                        <div className='service__box pointer'>
                            <div className='icon'>
                                <img src={matlabLogo} alt='js' style={{ "width": "75%" }} />
                            </div>
                            <div className='service__meta'>
                                <h1 className='service__text'>
                                    MATLAB
                                </h1>

                            </div>
                        </div>
                    </div>
                    <div className='col__4'>
                        <div className='service__box pointer'>
                            <div className='icon'>
                                <img src={arduinoLogo} alt='js' style={{ "width": "75%" }} />
                            </div>
                            <div className='service__meta'>
                                <h1 className='service__text'>
                                    Arduino
                                </h1>
                            </div>
                        </div>
                    </div>
                    <div className='col__4'>
                        <div className='service__box pointer'>
                            <div className='icon'>
                                <img src={raspberrypiLogo} alt='js' style={{ "width": "75%" }} />
                            </div>
                            <div className='service__meta'>
                                <h1 className='service__text'>
                                    Raspberry Pi
                                </h1>

                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Service