import {React, useState} from 'react'
import Main from './components/main';
import "./App.css";
import Modal from "./components/modal";
import useModal from './components/useModal';
import "./style.css"


function App() {
  const [show, setShow] = useState(false);
  const [code, setCode] = useState("");
  const {isShowing, toggle} = useModal();
  return (
    <div className='body'>
      {!show  && <div>
      
        <input type="text" value={code}   size="30" onChange={(e) => setCode(e.target.value)}/>
     
    <button onClick={() => setShow(show => !show)} class="button-29" role="button">Play</button>
    <button className="button-default" onClick={toggle}>Instruction</button>
      <Modal
        isShowing={isShowing}
        hide={toggle}
      />
      </div>
      
            }





        
        
      {show && <Main/>}
    

    </div>
  )
}

export default App