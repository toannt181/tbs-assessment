import { createGlobalStyle } from 'styled-components'
import 'normalize.css'

export default createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: #f6f6f9;
    color: #555555;
  }

  ul,
  li {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
`
