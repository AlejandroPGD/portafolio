import React from 'react'
import './Contact.css'
import contactImg from './Images/about-9bw.png'

function Contact() {
    return (
        <div className='contact component__space' id='Contact'>
            <div className='row'>
                <div className='col__2'>
                    <div className='contact__box'>
                        <div className='contact__meta'>
                            <h1 className='hire__text'>Hire Me.</h1>
                            <p className='hire__text white'> I am avalible for freelance work contact with me via phone:</p>
                            <p className='hire__text white'><strong>+57 350 897 0439</strong>or email <strong>alejandropgd@outlook.com</strong></p>
                        </div>
                        <div className='input__box'>
                            <input className='contact name' placeholder='Your name *' type="text" />
                            <input className='contact email' placeholder='Your email *' type="text" />
                            <input className='contact subject' placeholder='Write a subject *' type="text" />
                            <textarea name='message' id='message' placeholder='Write your message'></textarea>
                            <button className='btn contact pointer' type='submit'>Submit</button>
                        </div>
                    </div>
                </div>
                <div className='col__2'>
                    <img src={contactImg} alt='' className='contact__img' />

                </div>
            </div>
        </div>
    )
}

export default Contact