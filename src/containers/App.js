import React from 'react';
import GlobalFonts, { theme } from '../styleConstants';
import Profile from './Profile'
import { ThemeProvder } from 'styled-components';

function App() {
  return (
    <ThemeProvder theme={theme}>
        <GlobalFonts />
        <Profile />
    </ThemeProvder>
  );
}

export default App;
