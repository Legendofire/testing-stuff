import React, { Component } from 'react'

export class Search extends Component {
  state = { text: '' }
  onChange = e => this.setState({ [e.target.name]: e.target.value })
  // instead of text: e.target.value
  // here, it will be text because that it the name of the input field but this way this onChange event is reusable for other inputs

  onSubmit = e => {
    e.preventDefault()
    //console.log(this.state.text)
    this.props.searchUsers(this.state.text) // we are passing this prop up to the parent component
    this.setState({ text: '' }) // this is how we make sure the text field is cleared afterwards
  }
  // if I didn't use an arrow function here, I'd have to explicitly bind the "this" to the function (see below on the form)

  //   onSubmit(e) {
  //     e.preventDefault()
  //     console.log(this.state.text)
  //   }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit} className='form'>
          {/* and we'd have to add here {this.onSubmit.bind(this)} */}
          <input
            type='text'
            name='text'
            placeholder='Search Users'
            value={this.state.text}
            onChange={this.onChange}
          />
          {/* the form input should be a component level state */}
          <input
            type='submit'
            className='btn btn-dark btn-block'
            value='Search'
          />
        </form>
      </div>
    )
  }
}

export default Search
