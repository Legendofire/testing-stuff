import React from 'react'

const SecondTestingOverlay = () => {
  return (
    <div className='box'>
      <img
        src='https://dynaimage.cdn.cnn.com/cnn/q_auto,w_1221,c_fill,g_auto,h_687,ar_16:9/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F201111165502-05-saint-basils-origins-test-of-time.jpg'
        alt='russian cathedral'
      />
      <div className='overlay'>
        <img
          className='smiley'
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Mr._Smiley_Face.svg/1024px-Mr._Smiley_Face.svg.png'
          alt='smiley face'
        />
        <h1 className='txt'>Overlay</h1>
      </div>
    </div>
  )
}

export default SecondTestingOverlay
