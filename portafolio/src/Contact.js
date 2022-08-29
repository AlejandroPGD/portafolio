import React, { useState } from 'react'
import './Contact.css'
import contactImg from './Images/contact.png'
import emailjs from 'emailjs-com'
import swal from "sweetalert";

function Contact() {

    const [input, setInput] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    })
    const handleSubmit = (event) => {
        event.preventDefault();
        emailjs.send('service_mf2cl98', 'template_nsjiptb', input, "hPKzgbqiFguygkn7W")
            .then((res) => {
                console.log(res);
            }, (e) => {
                console.log(e);
            });
        swal("¡Gracias!", "Recibí su mensaje, contestaré lo más pronto posible.", "success");
        setInput((prevInput) => {
            return {
                name: "",
                email: "",
                subject: "",
                message: "",
            }
        });
    }
    const handleInputChange = (event) => {
        event.preventDefault();
        setInput((prevInput) => {
            return {
                ...prevInput,
                [event.target.name]: event.target.value,
            }
        });
    }
    return (
        <div className='contact component__space' id='Contact'>
            <div className='row'>
                <div className='col__2'>
                    <div className='contact__box'>
                        <div className='contact__meta'>
                            <h1 className='hire__text'>Contacto</h1>
                            {/* <p className='hire__text white'> Estoy d:</p> */}
                            <p className='hire__text white'><strong>+57 350 897 0439 </strong>  <strong>alejandropgd@outlook.com</strong></p>
                        </div>
                        <div className='input__box'>
                            <form onSubmit={handleSubmit} >
                                <input
                                    className='contact name'
                                    placeholder='Nombre '
                                    type="text"
                                    name="name"
                                    value={input.name}
                                    onChange={handleInputChange}
                                />
                                <input
                                    className='contact email'
                                    placeholder='Correo Electrónico '
                                    type="text"
                                    name="email"
                                    value={input.email}
                                    onChange={handleInputChange}
                                />
                                <input
                                    className='contact subject'
                                    placeholder='Asunto '
                                    type="text"
                                    name='subject'
                                    value={input.subject}
                                    onChange={handleInputChange}
                                />
                                <textarea
                                    name='message'
                                    id='message'
                                    placeholder='Mensaje'
                                    value={input.message}
                                    onChange={handleInputChange}
                                ></textarea>
                                <button className='btn contact pointer' type='submit'>Enviar</button>
                            </form>
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