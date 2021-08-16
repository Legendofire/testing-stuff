import React, { useState } from 'react'
import FAQ from './components/FAQ'
import Header from './components/Header'

const App = () => {
  const [faqs, setFaqs] = useState([
    {
      question: 'How many programmers does it take to screw in a lightbulb?',
      answer: "None. We don't address hardware issues.",
      open: false,
    },
    {
      question: 'Who is the most awesome person?',
      answer: 'You are.',
      open: false,
    },
    {
      question:
        'How many questions does it take to make a successful FAQ Page?',
      answer: 'This many.',
      open: false,
    },
  ])

  const toggleFAQ = index => {
    setFaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open // this flips it ---> if it is open, it will close it and vice-versa
        } else {
          faq.open = false
        }
        return faq
      })
    )
  }

  return (
    <div className='App'>
      <Header />
      <div className='faqs'>
        {faqs.map((faq, i) => (
          <FAQ faq={faq} index={i} key={i} toggleFAQ={toggleFAQ} />
        ))}
      </div>
    </div>
  )
}

export default App
