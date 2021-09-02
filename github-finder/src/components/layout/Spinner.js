import React, { Fragment } from 'react'
import spinner from './spinner.gif'

// return ( //on functional components, if we don't have any other code, we don't need the return keyword
// however, prettier inserts a semicolon before Fragment and that makes the implicit return stop working
const Spinner = () => {
  return (
    <Fragment>
      <img
        src={spinner}
        alt='loading...'
        style={{ width: '200px', margin: 'auto', display: 'block' }}
      />
      {/* for inline styling, we need double curly braces */}
      {/* margin auto puts the element in the center: we need display block for margin auto to work  */}
    </Fragment>
  )
}

export default Spinner
