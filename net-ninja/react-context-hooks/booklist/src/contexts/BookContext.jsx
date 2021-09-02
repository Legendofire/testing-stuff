import React, { createContext, useState } from 'react'
import { v4 } from 'uuid'

export const BookContext = createContext()

const BookContextProvider = props => {
  const [books, setBooks] = useState([
    { title: 'name of the wind', author: 'patrick rothfuss', id: 1 },
    { title: 'the final empire', author: 'brandon sanderson', id: 2 },
  ])

  const addBook = (title, author) => {
    setBooks([...books, { title, author, id: v4() }]) // shorthand/same as {title: title, author: author }
  }
  const removeBook = id => {
    setBooks(books.filter(book => book.id !== id))
    //filter iterates through the array and performs a callback function to each item of the array, keeping the ones that match the set condition and removing the ones that don't thus returning a new filtered array
  }
  return (
    <BookContext.Provider value={{ books, addBook, removeBook }}>
      {props.children}
      {/* ---> this represents the components that the BookContextProvider component is going to wrap */}
    </BookContext.Provider>
  )
}

export default BookContextProvider
