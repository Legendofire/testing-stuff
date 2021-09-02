import React, { useContext, useState } from 'react'
import { BookContext } from '../contexts/BookContext'

const NewBookForm = () => {
  const { addBook } = useContext(BookContext)
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')

  return (
    <form>
      <input
        type='text'
        placeholder='book title'
        value={title}
        onChange={e => setTitle(e.target.value)}
        required
        // we want to pass in the value that the user types in the input field and we can get that with e.target.value
      />
      <input
        type='text'
        placeholder='author'
        value={author}
        onChange={e => setTitle(e.target.value)}
        required
      />
    </form>
  )
}

export default NewBookForm
