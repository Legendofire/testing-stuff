import {useState} from "react"
import "./Accordion.css"

const Accordion =({image, title, body}) => {
  
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="accordion">
      <div className="accordion-header" onClick={()=> setIsOpen(!isOpen)}>
        <img src={image} alt="chocolate chip cookie" className="accordion-image" />
        <h2>{title}</h2>
        <div className="accordion-indicator">{isOpen ? "-" : "+"}</div>
        </div>
        {isOpen &&
        <div className="accordion-body">
         {body}
      </div>}
    </div>)
    
    
}


export default Accordion