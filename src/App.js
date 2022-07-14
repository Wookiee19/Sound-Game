import {React, useState} from 'react'
import Main from './components/main';
import "./App.css";
import Modal from "./components/modal";
import useModal from './components/useModal';
import "./style.css"
import backgr from "./Assets/background.jpg"



function App() {
  const [show, setShow] = useState(false);
  const [code, setCode] = useState();
  const[disable,setDisable]=useState(true);
  const {isShowing, toggle} = useModal();
  function assign(a){
    setCode( code );
    localStorage.setItem("code",a)
    setDisable(false);
  }
  return (
    <div className='body'>
      
      {localStorage.removeItem("Scores")}
      {!show  && <div style={{marginLeft:"5%"}}>
      
    <input type="text"  placeholder="Select an Username" size="20"   onChange={(e) => {assign(e.target.value)} }/>
     
    <button onClick={() => setShow(show => !show)} disabled={disable} class="button-29" role="button">Play</button>
    
    {console.log("yyyy",localStorage.getItem("code"))}
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