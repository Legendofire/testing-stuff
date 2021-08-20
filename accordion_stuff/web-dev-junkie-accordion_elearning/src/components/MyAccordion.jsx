import React, { useState, Fragment } from 'react'
import {FAQ} from "../FAQ"
import ContactUs from './ContactUs'
import "./index.css"


const MyAccordion = () => {
  const [clicked, setClicked] = useState(null)

  const toggle = index => { 
    clicked === index ? setClicked(null) : setClicked(index)
  }

return (
  <div className="accordion__item">
    {FAQ.map((item, index) => {
        return (
          <Fragment key={index}>
            <div className={`accordion__button ${clicked === index && 'rotate'}`}
                 onClick={() => toggle(index)}>
            
              <p className="accordion__title" >
                {item.title}
              </p>
            
              <img
                src='/icons/collapser.svg'
                className="accordion__icon"
                alt="arrow pointing down"
              />
            </div>
          <div className={clicked === index ? 'show' : 'content'}>

              <p >
              {item.content}
              </p>
          </div>
              
           
          </Fragment>
           )
      })}
       <ContactUs/>
      </div>)
    }


  export default MyAccordion