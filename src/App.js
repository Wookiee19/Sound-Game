import {React, useState} from 'react'
import Main from './components/main';
import "./App.css"

function App() {
  const [show, setShow] = useState(false);
  const [code, setCode] = useState("");
  return (
    <div className='body'>
      {!show  && <div>
      
        <input type="text" value={code}   size="30" onChange={(e) => setCode(e.target.value)}/>
     
    <button onClick={() => setShow(show => !show)} class="button-29" role="button">Play</button>
    
      </div>
      
            }





        
        
      {show && <Main/>}
    

    </div>
  )
}

export default App