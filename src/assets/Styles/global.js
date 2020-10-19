import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;

    &:focus {
      outline: 0;
    }
  }

  body {
    color: ${props => props.theme.colors.text};
    background: ${props => props.theme.colors.background};
  }

  body, input, button, textarea {
    font: 400  16px Roboto, sans-serif;
  }
`;
