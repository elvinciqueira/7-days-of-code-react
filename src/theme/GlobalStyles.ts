import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  a,
  button,
  input {
      transition: .3s ease-in-out;
  }

  button {
      cursor: pointer;
  }
  
  
  body {
    font-family: 'Montserrat', sans-serif;
  }
  
  @media(min-width: 920px) {
    body {
      background-image: url('/images/body-shape.svg'), url('/images/bg.jpg');
      background-repeat: no-repeat, repeat-x;
      background-position: right top;
    }
  }

  main {
    max-width: 1200px;
    margin: auto;
  }

  a:hover,
  a:focus,
  button:hover,
  button:focus {
      opacity: .5;
  }
`;

export default GlobalStyles;