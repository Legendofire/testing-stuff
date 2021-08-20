import React, { useState, Fragment } from 'react'
import "./index.css"


const MyAccordion = (title, content) => {
  const [isOpen, setIsOpen] = useState(false)

return (
  <div className="accordion__item"
  >
    {items.map((item, index) => (
          <Fragment key={index}>
            <div className={`accordion__button ${isOpen === index && 'rotate'}`}
                 onClick={() => setIsOpen(!isOpen)}>
            <p className="accordion__title" >
                {title}
              </p>
            
              <img
                src='/icons/collapser.svg'
                className="accordion__icon"
                alt="arrow pointing down"
              />
            </div>
            {isOpen &&
          <div className="show">

              
              {content}
              
          </div>}
              
           
          </Fragment>))}


      </div>)}
    


  export default MyAccordion