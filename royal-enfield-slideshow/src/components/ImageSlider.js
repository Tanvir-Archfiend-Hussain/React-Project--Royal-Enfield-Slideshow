import React, {useState} from 'react'
import {SliderData} from './SliderData'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'

const ImageSlider = ({slides}) => {
  const [current, setCurrent] = useState(0)
  const length = slides.length

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }



  if (!Array.isArray(slides) || slides.length <= 0) {
      return null; // this code doesnt matter now. 
  }


  return (
    <section className='slider'>
      <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} /> 
      <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide}/>
        {SliderData.map((x, index) => {
            return ( 
              <div className={index === current ? 'slide active' : 'slide'} key={index}>
                {index === current && (<img src={x.image} alt="Royal Enfields" className='image'/>)}
              </div>
            )
        })} 
    
    
    
      </section>
  )
}

export default ImageSlider