// import React, { Component } from 'react'

// class Users extends Component {
//   //  we no longer need this state here because we are getting all the users from the api through props
//   //  state = {
//   //     users: [
//   //       {
//   //         id: '1',
//   //         login: 'mojombo',
//   //         avatar_url: 'https://avatars.githubusercontent.com/u/1?v=4',
//   //         html_url: 'https://github.com/mojombo',
//   //       },
//   //       {
//   //         id: 2,
//   //         login: 'defunkt',
//   //         avatar_url: 'https://avatars.githubusercontent.com/u/2?v=4',
//   //         html_url: 'https://github.com/defunkt',
//   //       },
//   //       {
//   //         id: 3,
//   //         login: 'pjhyett',
//   //         avatar_url: 'https://avatars.githubusercontent.com/u/3?v=4',
//   //         html_url: 'https://github.com/pjhyett',
//   //       },
//   //     ],
//   //   }

//   render() {
//     return (
//       <div style={userStyle}>
//         {/* and we define this userStyle below */}
//         {/* {this.state.users} */}
//         {this.props.users.map(user => (
//           <UserItem key={user.id} user={user} />
//         ))}
//       </div>
//     )
//   }
// }

// const userStyle = {
//   display: 'grid',
//   gridTemplateColumns: 'repeat(3, 1fr)',
//   gridGap: '1rem',
// }

// export default Users

// -----------------------------------------------------------------

// REFACTORING INTO A FUNCTIONAL COMPONENT ---> no reason to be a class anymore, since there is no state

import React from 'react'
import UserItem from './UserItem'
import Spinner from '../layout/Spinner'
import PropTypes from 'prop-types'

const Users = ({ users, loading }) => {
  //we are destructuring props
  if (loading) {
    return <Spinner />
  } else {
    return (
      <div style={userStyle}>
        {/* and we define this userStyle below */}
        {/* {this.props.users} */}
        {users.map(user => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
      // map is a high order array method and takes in a function
      // "each child in a list should have a unique 'key' prop ---> whenever you have a list, you need to have a unique key to avoid this warning
    )
  }
}

Users.propTypes = {
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
}

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem',
}

export default Users
