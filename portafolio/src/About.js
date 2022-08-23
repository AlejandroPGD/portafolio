import React from 'react'
import './About.css';
import aboutImage from './Images/about.png'

function About() {
    return (
        <div className='about component__space'>
            <div className='container'>
                <div className='row'>
                    <div className='col__2'>
                        <img src={aboutImage} alt='' className='about__img' />
                    </div>
                    <div className='col__2'>
                        <h1 className='about__heading'>About Me</h1>
                        <div className='about__meta'>
                            <p className='about__text p__color'>
                                there are manyassssssssssss   sad f asdfaslñjñl asjd ñlasdjñlaña sdkfjñasldkñsajd ñflasjdñflaksjdñfalkjñlasjfdñl sdkafljñ aksjdlñaksjdñlasjdñaj lksajd ñasjd lkasdj ñalksjd fñalksjd falñks djañls djfñalskdjañlsdjañlsdkfjañlsdjañlsjñ
                            </p>
                            <p className='about__text p__color'>
                                there are manyassssssssssss   sad f asdfaslñjñl asjd ñlasdjñlaña sdkfjñasldkñsajd ñflasjdñflaksjdñfalkjñlasjfdñl sdkafljñ aksjdlñaksjdñlasjdñaj lksajd ñasjd lkasdj ñalksjd fñalksjd falñks djañls djfñalskdjañlsdjañlsdkfjañlsdjañlsjñ
                            </p>
                            <p className='about__text p__color'>
                                there are manyassssssssssss   sad f asdfaslñjñl asjd ñlasdjñlaña sdkfjñasldkñsajd ñflasjdñflaksjdñfalkjñlasjfdñl sdkaf
                            </p>
                            <div className='about__button d__flex align__items__center'>
                                <a href='#'><button className='about btn pointer'>Download Cv</button></a>
                                <a href='#'><button className='about btn pointer'>Hire Me </button></a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default About