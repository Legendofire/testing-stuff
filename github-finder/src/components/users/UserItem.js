// import React from 'react'
// import PropTypes from 'prop-types'

// ------------ USING STATE -------------

// state is a JavaScript Object

// since there is no longer state in this component, there is really no reason for it to be a class component

// class UserItem extends Component {
//   //constructor() {
//   // constructor is one of the ways to use state
//   //super() // this calls the parent class constructor

//   //this.
//   //   state = {
//   //     id: 'id',
//   //     login: 'hetzneronline',
//   //     avatar_url: 'https://avatars.githubusercontent.com/u/30047064?v=4',
//   //     html_url: 'https://github.com/hetzneronline',
//   //   }
//   //}

//   render() {
//     // const { login, avatar_url, html_url } = this.state
//     const { login, avatar_url, html_url } = this.props.user
//     // here, we are destructuring --> pulling stuff out from the state object, so we don't have to keep repeating this.state
//     return (
//       <div className='card text-center'>
//         <img
//           src={avatar_url}
//           alt='avatar'
//           className='round-img'
//           style={{ width: '60px' }}
//         />
//         {/* <h3>{this.state.login}</h3> ---> we don't need the this.state anymore because the state is destructured above*/}
//         <h3>{login}</h3>
//         <div>
//           <a href={html_url} className='btn btn-dark btn-sm my-1'>
//             More
//           </a>
//         </div>
//       </div>
//     )
//   }
// }

// export default UserItem

// REFACTORING INTO A FUNCTIONAL COMPONENT ---> no reason to be a class anymore, since there is no state

import React from 'react'
import PropTypes from 'prop-types'

const UserItem = ({ user: { login, avatar_url, html_url } }) => {
  // const { login, avatar_url, html_url } = props.user
  // here, we are destructuring props passed on to the component --> pulling stuff out from that object
  return (
    <div className='card text-center'>
      <img
        src={avatar_url}
        alt='avatar'
        className='round-img'
        style={{ width: '60px' }}
      />

      <h3>{login}</h3>
      <div>
        <a href={html_url} className='btn btn-dark btn-sm my-1'>
          More
        </a>
      </div>
    </div>
  )
}
UserItem.propType = {
  user: PropTypes.object.isRequired,
}

export default UserItem
