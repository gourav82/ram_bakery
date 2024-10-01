import React from 'react'
import Slider from 'react-slick'

const Video = ({embedID}) => {


  return (

    <iframe 
    width={250}
    height={250}
     src={`https://www.youtube.com/embed/${embedID}`}
     allow='autoplay'
     
     >
        
        </iframe>
  )
}

export default Video