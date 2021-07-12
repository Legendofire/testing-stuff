import React from 'react'
import Overlay from 'react-image-overlay'
import results from '../img/results-loading.png'

//using a functional component

const FirstTestingOverlay = () => {
  return (
    <Overlay
      url='https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRnuY63p6ZxSaNVe48lKp-PMDbByCl3pG3YQv70Q6nu6XgItEDdw1YcnhrNgMVsaTl-nl6aFO9ta9xn5GhGnjMPbA' // required
      overlayUrl={results} // required
      imageHeight={100}
      position={'center'}
      overlayWidth={100}
      overlayHeight={50}
      overlayPadding={10}
      watermark={false}
    />
  )
}

export default FirstTestingOverlay
