import React from 'react';
import { Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Routes from './routes';
import history from './services/history';
import theme from './assets/Styles/theme';
import GlobalStyle from './assets/Styles/global';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router history={history}>
        <Routes />
        <GlobalStyle />
      </Router>
    </ThemeProvider>
  );
}

export default App;
