import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local('Montserrat Regular'), local('Montserrat-Regular'),
        url('/fonts/Montserrat-Regular.ttf') format('ttf');
  }

  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: local('Montserrat SemiBold'), local('Montserrat-SemiBold'),
        url('/fonts/Montserrat-SemiBold.ttf') format('ttf');
  }

  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: local('Montserrat Bold'), local('Montserrat-Bold'),
        url('/fonts/Montserrat-Bold.ttf') format('ttf');
  }

  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local('Roboto Regular'), local('Roboto-Regular'),
        url('/fonts/Roboto-Regular.ttf') format('ttf');
  }

  @font-face {
    font-family: 'Roboto Mono';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local('Roboto Mono'), local('Roboto-Mono'),
        url('/fonts/RobotoMono.ttf') format('ttf');
  }

  * {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
    vertical-align: baseline;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    &::before,
    &::after {
      box-sizing: inherit;
    }
  }

  html, body, #__next {
    height: 100vh;
  }

  ${({ theme }) => css`
    html {
      font-size: 62.5%;
      scroll-behavior: smooth;
    }

    body {
      font-family: ${theme.font.family.system1};
      font-size: ${theme.font.size.medium};
      background-color: ${theme.color.base.b1};
    }
  `}
`

export default GlobalStyles
