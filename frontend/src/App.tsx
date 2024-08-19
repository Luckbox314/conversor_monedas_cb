import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import theme from './styles/theme';
import { CurrencyConverter } from './components';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <CurrencyConverter />
    </ThemeProvider>
  );
}

export default App;
