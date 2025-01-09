import { StrictMode } from 'react';

import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'styled-components';

import { Details } from './pages/Details';
import GlobalStyle from './pages/styles/global';
import theme from './pages/styles/theme';

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Details />
    </ThemeProvider>
  </StrictMode>
);
