import React, { Component, createContext } from 'react'

export const ThemeContext = createContext()
class ThemeContextProvider extends Component {
  state = {
    isLightTheme: true,
    light: { text: '#34285c', ui: '#b1bdf0', bg: '#6674b0' },
    dark: { text: '#ddd', ui: '#34285c', bg: '#453a6b' },
  }
  toggleTheme = () => {
    this.setState({ isLightTheme: !this.state.isLightTheme })
  }
  render() {
    return (
      <ThemeContext.Provider
        value={{ ...this.state, toggleTheme: this.toggleTheme }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    )
  }
}

export default ThemeContextProvider
