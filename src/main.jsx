import { StrictMode } from "react";

import { createRoot } from "react-dom/client";
import { ThemeProvider } from "styled-components";

import { Profile } from "./pages/Profile";
import GlobalStyle from "./styles/global";
import theme from "./styles/theme";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Profile />
    </ThemeProvider>
  </StrictMode>
);
