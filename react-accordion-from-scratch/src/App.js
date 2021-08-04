import './App.css'

function App() {
  return (
    <div className='wrapper'>
      <div className='accordion'>
        {data.map((item, i) => (
          <div className='item'>
            <div className='title'>
              <h2>{item.question}</h2>
            </div>
            <div className='answer'>{item.answer}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

const data = [
  {
    question: 'How many programmers does it take to screw in a lightbulb?',
    answer: "None. We don't address hardware issues.",
  },
  {
    question: 'Who is the most awesome person?',
    answer: 'You. The Viewer.',
  },
  {
    question: 'How many questions does it take to make a successful FAQ Page?',
    answer: 'This many.',
  },
]

export default App
