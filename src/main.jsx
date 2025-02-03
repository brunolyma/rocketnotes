import { StrictMode } from 'react';

import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'styled-components';

import { MyContext } from './myContext';
import { Routes } from './routes';
import GlobalStyle from './styles/global';
import theme from './styles/theme';

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <MyContext.Provider value={{ email: "bruno@email.com" }}>
        <Routes />
      </MyContext.Provider>
    </ThemeProvider>
  </StrictMode>
);
