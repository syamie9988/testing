import React from 'react';
import Login from './pages/login/Login';
import { useState } from 'react';
import Topbar from './components/Topbar';
import Sidebar from './components/Sidebar';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { ColorModeContext, useMode } from './components/theme';


function App() {
  const [isSidebar, setIsSidebar] = useState(true);
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          {/* <Sidebar isSidebar={isSidebar} />  */}
          <main className="content">
            {/* <Topbar setIsSidebar={setIsSidebar} /> */}
            <Login />
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
