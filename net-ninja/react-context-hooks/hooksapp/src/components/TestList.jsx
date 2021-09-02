import React from 'react'

const TestList = () => {
  const songs = [
    // { title: 'almost home', id: 1 },
    // { title: 'memory gospel', id: 2 },
    // { title: 'this wild darkness', id: 3 },
  ]

  return (
    <div>
      {console.log(songs)}
      {songs.length > 0 ? (
        <div>
          <ul>
            {songs.map(song => {
              return <li key={song.id}>{song.title}</li>
            })}
          </ul>
        </div>
      ) : (
        <h1>NO SONGS HERE</h1>
      )}
      <div>{!(16 > 25) ? 'YES' : 'NO'}</div>
    </div>
  )
}

export default TestList
