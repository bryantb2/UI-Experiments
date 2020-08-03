import React from 'react';
import GlobalFonts, { theme } from '../styleConstants';
import Profile from './Profile'
import { ThemeProvider } from 'styled-components';

function App() {
  return (
    <ThemeProvider theme={theme}>
        <GlobalFonts />
        <Profile />
    </ThemeProvider>
  );
}

export default App;
