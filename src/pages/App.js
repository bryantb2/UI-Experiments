import React from 'react';
import GlobalFonts, { theme } from '../styleConstants';
import Profile from './Profile'
import { ThemeProvider } from 'styled-components';
import { GutterGrid } from '../components';

function App() {
  return (
    <ThemeProvider theme={theme}>
        <GlobalFonts />
        <GutterGrid>
            <Profile />
        </GutterGrid>
    </ThemeProvider>
  );
}

export default App;
