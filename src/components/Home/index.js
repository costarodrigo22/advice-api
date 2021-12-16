import { useContext } from 'react';

import { Container } from './styles';

import Header from '../Header';
import Main from '../Main';
import Footer from '../Footer';

import {ModeTheme} from '../../App';

export default function Home(){
  const theme = useContext(ModeTheme);

  function toggleTheme(){
    theme.setMode((prevMode) => (prevMode === 'dark' ? 'light' : 'dark'));
  }
  
  return(
    <Container>
      <div className="content">
        <Header onTuggleTheme={toggleTheme}/>
        <Main />
        <Footer onTuggleTheme={toggleTheme}/>
      </div>
    </Container>
  );
}


