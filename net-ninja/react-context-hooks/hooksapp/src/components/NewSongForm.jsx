import React, { useState } from 'react'

//USE EFFECT --> takes as a parameter a CALLBACK function that runs every time the component renders or re-renders / every time the data in our component changes and also on the initial render
//useEffect is a bit like a life cycle method that we use in a class component
//in functional components we do not have access to those life cycles methods

const NewSongForm = ({ addSong }) => {
  const [title, setTitle] = useState('')
  const handleSubmit = e => {
    e.preventDefault() //because we don't want the whole page to refresh every time
    addSong(title) // this will add a new song title to the list
    setTitle('') // this will clear the input field right after I click the button to add a new song
  }
  // e is the event object
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Song name:</label>
        <input
          type='text'
          value={title}
          required
          onChange={e => setTitle(e.target.value)}
        />
        {/* that's gonna get us the value of whatever is inside this input field at that moment in time and it's going to apply to the state , keeping it in sync with whatever is inside this input field*/}
        <input type='submit' value='add song' />
      </form>
    </div>
  )
}

export default NewSongForm
