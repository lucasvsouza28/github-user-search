import { useState } from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import { DarkTheme } from './themes';
import GlobalStyles from './global.styles';
import { UserContextProvider } from './contexts/UserContext';
import { Home } from './pages/Home';

function App() {
  const [theme, setTheme] = useState<DefaultTheme>(DarkTheme);

  return (
      <div className="App">
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <UserContextProvider>
              <Home
                currentTheme={theme}
                setTheme={setTheme}
              />
            </UserContextProvider>
        </ThemeProvider>
      </div>
  )
}

export default App
