import {useState, useMemo, createContext} from 'react';

import Home from './components/Home';
import GlobalStyle from './styles/global';

import {ThemeProvider} from 'styled-components';
import theme from './styles/theme/default';

export const ModeTheme = createContext('dark');

function App() {
  //estado da aplicação (dark ou light)
  const [mode, setMode] = useState('dark');

  //O hook useMemo salva o valor do tema para não ficar recalculando quando acontecer alguma renderização na tela.
  const currentTheme = useMemo(()=>{
    return theme[mode] || theme.dark
  }, [mode])

  return (
    <ModeTheme.Provider value={ {mode : mode, setMode : setMode}}>
      <ThemeProvider theme={currentTheme}>
        <GlobalStyle />
        <Home />
    </ThemeProvider>
    </ModeTheme.Provider>
  );
}

export default App;
