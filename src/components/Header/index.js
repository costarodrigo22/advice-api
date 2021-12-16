import {useContext} from 'react';

import { Container } from "./styles";

import {ModeTheme} from '../../App';

export default function Header(props){
  const theme = useContext(ModeTheme);
  
  return(
    <Container >
      <h2>Follow advice</h2>
      <button onClick={props.onTuggleTheme}>
        {theme.mode === 'dark' ? '🌞' : '🌚' }
      </button>
    </Container>
  );
}