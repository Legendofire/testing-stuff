// import React from 'react'

// function FAQ({ faq, index, toggleFAQ }) {
//   return (
//     <div
//       className={'faq ' + (faq.open ? 'open' : '')}
//       key={index}
//       onClick={() => toggleFAQ(index)}
//     >
//       <div className='faq-question'>{faq.question}</div>
//       <div className='faq-answer'>{faq.answer}</div>
//     </div>
//   )
// }

// export default FAQ

import React from 'react'

const FAQ = ({ faq, index }) => {
  return (
    <div className={'faq ' + (faq.open ? 'open' : '')} key={index}>
      {/* when you loop through react to display things using map, we need to give the component a key  */}
      <div className='faq-question'>{faq.question}</div>
      <div className='faq-answer'>{faq.answer}</div>
    </div>
  )
}

export default FAQ
