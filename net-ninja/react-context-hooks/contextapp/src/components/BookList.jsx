import React, { useContext } from 'react'
import { BookContext } from '../contexts/BookContext'
//import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext'

// export default class BookList extends Component {
//   static contextType = ThemeContext

//   render() {
//     const { isLightTheme, light, dark } = this.context
//     //each of these is being stored in a separate const ---> destructuring
//     //we are getting these properties in the context and storing them in variable with the same name as the property
//     const theme = isLightTheme ? light : dark
//     return (
//
//         <div
//           className='book-list'
//           style={{ background: theme.bg, color: theme.text }}
//         >
//           <ul>
//             <li style={{ background: theme.ui }}>the way of kings</li>
//             <li style={{ background: theme.ui }}>the name of the wind</li>
//             <li style={{ background: theme.ui }}>the final empire</li>
//           </ul>
//         </div>
//
//     )
//   }
// }

// USING CONTEXT IN A FUNCTIONAL COMPONENT
const BookList = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext)
  const { books } = useContext(BookContext)
  const theme = isLightTheme ? light : dark
  return (
    <div
      className='book-list'
      style={{ color: theme.text, background: theme.bg }}
    >
      <ul>
        {books.map(book => {
          return (
            <li key={book.id} style={{ background: theme.ui }}>
              {book.title}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default BookList
