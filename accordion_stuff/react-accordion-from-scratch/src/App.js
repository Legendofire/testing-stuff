import React, { useState } from 'react'
import './App.css'

function App() {
  const [selected, setSelected] = useState(null)

  const toggle = i => {
    if (selected === i) {
      return setSelected(null)
    } else {
      setSelected(i)
    }
  }
  const data = [
    {
      question: 'Question 1?',
      answer: 'Answer to question 1',
    },
    {
      question: 'Question 2?',
      answer: 'Answer to question 2.',
    },
    {
      question: 'Question 3?',
      answer: 'Answer to question 3.',
    },
  ]

  return (
    <div className='wrapper'>
      <div className='accordion'>
        {data.map((item, i) => (
          <div className='item' key={i}>
            <div className='title' onClick={() => toggle(i)}>
              <h2>{item.question}</h2>
              <span>{selected === i ? '-' : '+'}</span>
            </div>
            <div className={selected === i ? 'content show' : 'content'}>
              {item.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
