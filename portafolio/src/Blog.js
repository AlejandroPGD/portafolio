import React from 'react'
import './Blog.css'
import Blog1 from './Images/p1.jpg'

function Blog() {
    return (
        <div className='blog component__space'>
            <div className='heading'>
                <h1 className='heading'>latest news</h1>
                <p className='heading p__color'> asdfa  ñañkdfjñafkdjñalfkdjñjkñkasdñlkajñ</p>
                <p className='heading p__color'>but de adsfafdmajourti klañsdfjñalkdsfjñakfdjñalkfdjañlkdfjañlkfdj lkjl</p>
            </div>
            <div className='container'>
                <div className='row'>
                    <div className='col__3'>
                        <div className='project__box pointer relative'>
                            <div className='project__box__img pointer relative'>
                                <div className='project__img__box'>
                                    <img src={Blog1} alt='' className='project__img' />
                                </div>
                                <div className='mask__effect'></div>
                            </div>
                            <div className='Blog__meta absolute'>
                                <h5 className='project__text'>Development</h5>
                                <h4 className='project__text'>countreisadsañfd </h4>
                                <a href='#' className='blog project__btn btn'>Read more</a>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default Blog