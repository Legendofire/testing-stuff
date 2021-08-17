import React, { useState } from 'react'
import "./index.css"


const MyAccordion = ({ item, index }) => {
    const [selected, setSelected] = useState(null)

    const toggle = index => {
      if (selected === index) {
        return setSelected(null)
      } else {
        setSelected(index)
      }
    }
     return (
      <div
        className="accordion__item"
        key={index}
      
      >
        {/* when you loop through react to display things using map, we need to give the component a key  */}
        <button className="accordion__button"
          >
          <p className="accordion__title" onClick={() => toggle(index)}>
          {item.title}
          </p>
          <img
            src='/icons/collapser.svg'   
            className="accordion__icon"
          />
        </button>
        <div className={selected === index ? 'content show' : 'content'}>{item.content}</div>
      </div>
    );
  };
  
 
export default MyAccordion