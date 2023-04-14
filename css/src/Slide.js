import React from 'react'

const Slide = ({slides}) => {
  return (
    <div>
      {slides.map((slide) => (
        <div key={slide.id}>{slide.texto}</div>
      ))}
    </div>
  )
}

export default Slide
