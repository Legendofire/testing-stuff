import React, { Component } from 'react'
import './App.css'
import axios from 'axios'
import Navbar from './components/layout/Navbar'
// import UserItem from './components/users/UserItem'
import Users from './components/users/Users'
import Search from './components/users/Search'

class App extends Component {
  state = {
    users: [],
    loading: false, // this is because there is gonna be a moment before we actually get the data back and that is when we want to show the Spinner
  }

  async componentDidMount() {
    // console.log(process.env.REACT_APP_GITHUB_CLIENT_SECRET)
    this.setState({ loading: true })

    //axios deals with promises
    const res = await axios.get(
      `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    ) // if you need to store global variables, you can use .env.local

    //.then(res => console.log(res.data))
    //console.log(res.data)

    this.setState({ users: res.data, loading: false })
  }

  // Search GitHub users

  searchUsers = async text => {
    const res = await axios.get(
      `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    )
    this.setState({ users: res.data, loading: false })
  }

  render() {
    // const name = 'John Doe'
    // const loading = false
    // const showName = true
    // if (loading) {
    //   return <h4>Loading...</h4>
    // }
    // return (
    //this looks like html, but it is actually jsx (JavaScript Syntax extension)
    //<div className='App'>
    // <h1>My App</h1>
    // {loading ? (
    //  <h4>Loading...</h4>
    //    ) : (
    //<h1>Hello, {showName ? name : null}</h1> // we don't need a ternary here
    // <h1>Hello, {showName && name}</h1> // this is saying: only return name if showName is true
    //   )}
    // </div>
    //)
    //this is what it would look like without JSX --- normal HTML
    // return React.createElement(
    //   'div',
    //   { className: 'App' },
    //   React.createElement('h1', null, 'Hello from React')
    // )

    return (
      <div className='App'>
        <Navbar
        // title='Hello' this would overwrite the defaultProps
        // title='Github Finder' icon='fab fa-github' ---> we can use this to overwrite the defaultProps
        />
        {/* this title is a prop */}
        {/* <UserItem /> */}
        <div className='container'>
          <Search searchUsers={this.searchUsers} />

          <Users loading={this.state.loading} users={this.state.users} />
          {/* here, loading and users are being passed down as props in the Users component */}
        </div>
      </div>
    )
  }
}
export default App
