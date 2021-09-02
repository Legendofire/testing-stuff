import React, { useState, useEffect } from 'react'
import { v4 } from 'uuid'
//this a package that allows us to create a unique ID each time
import NewSongForm from './NewSongForm'

//HOOKS
//hooks are just SPECIAL FUNCTIONS and they allow us to do things inside functional components in react that normally we'd only be able to do in a class components, for example, use state

//useState() --> use state within a functional component

//useEffect() --> run code when a component renders (or re-renders)
//USE EFFECT --> takes as a parameter a CALLBACK function that runs every time the component renders or re-renders / every time the data in our component changes and also on the initial render
//useEffect is a bit like a life cycle method that we use in a class component
//in functional components we do not have access to those life cycles methods

//useContext() --> consume context inside a functional component

// ----------- USING STATE INSIDE A FUNCTIONAL COMPONENT WITH USE STATE -------------

const SongList = () => {
  const [songs, setSongs] = useState([
    //here we are just invoking a function
    //this hook/function accepts an argument that is going to be the initial value for this piece of state that we want to use ---> we are defining the properties of state inside this function, like we would in a class component with state = {}
    //this hook/function returns an array and this array contains two values: the first value is the actual data (the piece of state itself) and the second value is a function which we can use to edit that piece of state ---> it returns those two values inside an array, so we can use array destructuring to get these two different values
    //this hook returns two things:
    //1. the actual value of the state
    //2. a function to change that value
    { title: 'almost home', id: 1 },
    { title: 'memory gospel', id: 2 },
    { title: 'this wild darkness', id: 3 },
  ])
  const [age, setAge] = useState(20)
  //we can use useState several times inside a component

  const addSong = title => {
    setSongs([...songs, { title, id: v4() }])
    //this function that we get back from useState is used to change the data
    //inside setSongs we pass whatever value we want this data to be which is going to completely replace whatever the current value of songs is ---> we can't just add something extra into it; we have to output the whole thing. Therefore, we need to use the spread syntax "..." to say "take the current songs and spread them into this new array" and then we want an additional item in this new array which will be a new object
  }

  useEffect(() => {
    console.log('use Effect hook ran', songs)
  }, [songs]) //this means we only want to use this callback function when the songs data changes
  useEffect(() => {
    console.log('use Effect hook ran', age)
  }, [age])

  return (
    <div className='song-list'>
      <ul>
        {/* <li>this wild darkness</li>
        <li>memory gospel</li> */}
        {songs.map(song => {
          return <li key={song.id}>{song.title}</li>
          //when we cycle through things like this, react expects us to provide a key property that is unique to each element and that is why each element contains an id property
        })}
      </ul>
      <NewSongForm addSong={addSong} />
      {/* we are using a standard prop here */}
      <button onClick={() => setAge(age + 1)}>Add 1 to age: {age}</button>
    </div>
  )
}
//
export default SongList
