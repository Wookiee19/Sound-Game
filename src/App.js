import React, { useState,useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import sapceship from "./Assets/spaceship.png";
import space from "./Assets/spaces.gif";
import Buttons from './components/buttons';
import Panel from './components/panel';
import Sliders from './components/sliders';
import fog1 from "./Assets/fog1.gif";
import fog2 from "./Assets/fog2.gif";
import astroid from "./Assets/astoid.gif";


const images = [fog1, fog2,space,Sliders];
function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showElement, setShowElement] = React.useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
        if(currentIndex === images.length - 1) {
            setCurrentIndex(0);
        } 
        else {
             setCurrentIndex(currentIndex + 1);
        }
    }, 5000)
    setTimeout(function () {
      setShowElement(false);
    }, 2200);
    
    // return () => clearInterval(intervalId);
}, [])
  return (
<<<<<<< Updated upstream
    <div className="App">
      <Panel/>
      <Sliders />
      {showElement ? (
          <img src={astroid} width="100%" height="100%" class="over" />
        ) : (
          <img src={images[currentIndex]} width="100%" height="100%" class="under" />
        )}{" "}
      <img src={sapceship} width="100%" height="100%" class="over" />
      
      <Buttons/>
=======
    <div >
      
      {localStorage.removeItem("Scores")}
      {!show  && <div className=' background-image1' style={{marginLeft:"5%"}}>
      
        <input type="text"  placeholder="Select an Username" size="20"   onChange={(e) => {assign(e.target.value)} }/>
>>>>>>> Stashed changes
     
    </div>
  );
}

export default App;
