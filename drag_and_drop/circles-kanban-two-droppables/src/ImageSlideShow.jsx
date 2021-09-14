import React from 'react'
import { useState } from 'react'
import './data/data'
import imgArr from './data/data'

const ImageSlideShow = () => {

    const [imageIndex, setImageIndex] = useState(0)

    const nextImage = () => {
        setImageIndex((imageIndex+1)%imgArr.length)
    }
    
    const previousImage = () => {
        setImageIndex((imageIndex+imgArr.length-1)%imgArr.length)
        // we add imgArr.length so the number divided by imgArr.length is never zero
    }

    const currentImage = imgArr.find((image, index) => index === imageIndex) 

    return (
        <div>
            <button onClick={previousImage}>-</button>   
               <img 
                    src={currentImage?.url}
                    key={currentImage?.id}
                    alt={currentImage?.alt}
               />
            <button onClick={nextImage}>+</button>
        </div>
)
    
}

export default ImageSlideShow


// map(item, index, array)