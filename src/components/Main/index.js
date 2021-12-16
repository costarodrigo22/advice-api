import {useState} from 'react';

import {Container} from './styles';

export default function Main(){
  const [advices, setAdvices] = useState([]);
  const [loaded, setLoaded] = useState(false);

  const getUser = async () => {
    const response = await fetch('https://api.adviceslip.com/advice');
    const json = await response.json();
    setAdvices(json.slip.advice);
    setLoaded(true);
    console.log(response);
  }

  return(
    <Container>
      <h3>
        {loaded === true ? advices :
         "Click in the button to get a prhase of advice...  "
        }
      </h3>
      <div className="container-button">
        <button onClick={getUser}>Advice</button>
      </div>
    </Container>
  );
}