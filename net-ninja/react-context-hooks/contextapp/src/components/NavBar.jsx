//import React, { Component } from "react";
import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'
import { AuthContext } from '../contexts/AuthContext'

// class NavBar extends Component {
//   //static contextType = ThemeContext; ---> ONE WAY TO CONSUME CONTEXT
//   render() {
//     //console.log(this.context);
//     //const { isLightTheme, light, dark } = this.context;
//     //each of these is being stored in a separate const ---> destructuring
//     //we are getting these properties in the context and storing them in variable with the same name as the property
//     //const theme = isLightTheme ? light : dark;
//     return (
//       <AuthContext.Consumer>
//         {(authContext) => (
//           <ThemeContext.Consumer>
//             {/* ---> ANOTHER WAY TO CONSUME CONTEXT */}
//             {(themeContext) => {
//               // {(context) => {
//               const { isAuthenticated, toggleAuth } = authContext;
//               const { isLightTheme, light, dark } = themeContext;
//               const theme = isLightTheme ? light : dark;
//               return (
//                 <nav style={{ background: theme.ui, color: theme.text }}>
//                   <h1>Context App</h1>
//                   <div onClick={toggleAuth}>
//                     {isAuthenticated ? "Logged in." : "Logged out."}
//                   </div>
//                   <ul>
//                     <li>Home</li>
//                     <li>About</li>
//                     <li>Contact</li>
//                   </ul>
//                 </nav>
//               );
//             }}
//           </ThemeContext.Consumer>
//         )}
//       </AuthContext.Consumer>
//     );
//   }
// }

// export default NavBar;

const Navbar = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext)
  const { isAuthenticated, toggleAuth } = useContext(AuthContext)
  const theme = isLightTheme ? light : dark
  return (
    <nav style={{ background: theme.ui, color: theme.text }}>
      <h1>Context App</h1>
      <div onClick={() => toggleAuth()}>
        {isAuthenticated ? 'Logged in' : 'Logged out'}
      </div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  )
}

export default Navbar
