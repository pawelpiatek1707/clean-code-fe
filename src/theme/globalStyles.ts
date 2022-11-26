import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
*,
*::after,
*::before{
  margin: 0;
  padding: 0;
  box-sizing: inherit;
  /*styles for all things on my page*/
}

  body {
    margin: 0;
    padding: 0;
    font-family: Poppins;
    box-sizing: border-box;
  }
`;
