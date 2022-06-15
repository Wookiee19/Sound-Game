<<<<<<< Updated upstream
import logo from './logo.svg';
import './App.css';
import sapceship from "./Assets/spaceship.png";
import space from "./Assets/giphy.gif";
import Buttons from './components/buttons';
import Panel from './components/panel';
import Sliders from './components/sliders';
function App() {
  return (
    <div className="App">
      <Panel/>
      <Sliders />
      <img src={sapceship} width="100%" height="100%" class="over" />
      <img src={space} width="100%" height="100%" class="under" />
      <Buttons/>
     
=======
import {React, useState} from 'react'
import Main from './components/main';

function App() {
  const [show, setShow] = useState(false);
  return (
    <div>
      {!show  && < button onClick={() => setShow(show => !show)}>Play</button>}
        
        
      {show && <Main/>}
    
>>>>>>> Stashed changes
    </div>
  )
}

export default App