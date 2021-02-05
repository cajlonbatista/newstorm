import React from 'react';

import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Header from '../components/Header/Header';
import TitleBar from '../components/TitleBar/TitleBar';
import GlobalStyles from '../global/global';
import Routes from '../routes/routes';

import pallete from '../global/themes/pallete';
import AppStyles from './styles';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={pallete}>
        <AppStyles>
          <TitleBar />
          <main>
            <GlobalStyles />
            <Header />
            <Routes />
          </main>
        </AppStyles>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
