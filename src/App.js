import {React, useState} from 'react'
import Main from './components/main';
import "./App.css";
import Modal from "./components/modal";
import useModal from './components/useModal';
import "./style.css"



function App() {
  const [show, setShow] = useState(false);
  const [code, setCode] = useState(["UserName"]);
  const[disable,setDisable]=useState(true);
  const {isShowing, toggle} = useModal();
  function assign(a){
    setCode( code => [...code, a]);
    setDisable(false);
  }
  return (
    <div className='body'>
      
      {!show  && <div>
      
        <input type="text"  placeholder="Select an Username" size="20"   onChange={(e) => {assign(e.target.value)} }/>
     
    <button onClick={() => setShow(show => !show)} disabled={disable} class="button-29" role="button">Play</button>
    {localStorage.setItem("Code", code)};
    {console.log("yyyy",localStorage.getItem("Code"))}
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