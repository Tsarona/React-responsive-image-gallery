import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCircleChevronLeft,
  faCircleChevronRight,
  faCircleXmark
} from '@fortawesome/free-solid-svg-icons'
import './GalleryComponents.css'

const GalleryComponents = ({galleryImages}) => {

  const [slideNumber, setSlideNumber] = useState(0)
  const [openModal, setOpenModal] =  useState(false)

const handleOpenModal = (index) => {
  setSlideNumber(index)
  setOpenModal(true)
}
  const handleCloseModal = () => {
    setOpenModal(false)
  }
  const prevSlide = () => {
    slideNumber === 0 
      ? setSlideNumber( galleryImages.length -1 )
      : setSlideNumber( slideNumber -  1)
    }
  const nextSlide = () => {
    slideNumber + 1 === galleryImages.length 
    ? setSlideNumber(0) 
    : setSlideNumber(slideNumber + 1)
  }
  return (
  <div>

    {openModal && 
               <div className= "sliderWrap">
  <FontAwesomeIcon icon={faCircleXmark} className="btnClose" onClick={handleCloseModal}/>
    <FontAwesomeIcon icon={faCircleChevronLeft} className="btnPrev" onClick={prevSlide}/>
    <FontAwesomeIcon icon={faCircleChevronRight} className="btnNext" onClick={nextSlide}/>
    <div className="fullScreenImage">
    <img src={galleryImages[slideNumber].img} />
    </div>
    </div>
  
}
    <br/>
    Current slide number: {slideNumber}
<br/>
    total slides: {galleryImages.length}
    <br/><br/>
      <div className= "galleryWrap">
        {
          galleryImages && galleryImages.map((slide, index) => {
return (
        <div 
          className="single" 
          key={index}
          onClick={ () => handleOpenModal(index) }
          >
        <img src={slide.img} />
        </div>
)
})
}
      </div>
    </div>
    
  )
  
}
export default GalleryComponents