import React from 'react'
import PropTypes from 'prop-types'

// since there is no state in this component, there is really no reason for it to be a class component
// class Navbar extends Component {
//   static defaultProps = {
//     title: 'Github Finder',
//     icon: 'fab fa-github',
//   }

//   static propTypes = {
//     title: PropTypes.string.isRequired,
//     icon: PropTypes.string.isRequired,
//   }

//   render() {
//     return (
//       <nav className='navbar bg-primary'>
//         {/* <i className='fab fa-github' /> */}
//         <i className={this.props.icon} />
//         {this.props.title}
//       </nav>
//     )
//   }
// }

// export default Navbar

const Navbar = ({ icon, title }) => {
  // instead of defaultProps
  return (
    <nav className='navbar bg-primary'>
      {/* <i className='fab fa-github' /> */}
      <i className={icon} />
      {title}
    </nav>
  )
}
Navbar.defaultProps = {
  title: 'Github Finder',
  icon: 'fab fa-github',
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
}

export default Navbar
