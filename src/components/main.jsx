import React, { useState,useEffect } from 'react';
import { CSVLink, CSVDownload } from "react-csv";
import './main.css';
import sapceship from "../Assets/spaceship.png";
import space from "../Assets/spaces.gif";
import Buttons from './buttons';
import Panel from './panel';
import Sliders from './sliders';
import fog1 from "../Assets/fog1.gif";
import fog2 from "../Assets/fog2.gif";
import astroid from "../Assets/astoid.gif";


const images = [fog1, fog2,space,Sliders];
function Main() {
  const csvData = [
    ["firstname", "lastname", "email"],
    ["Ahmed", "Tomi", "ah@smthing.co.com"],
    ["Raed", "Labes", "rl@smthing.co.com"],
    ["Yezzi", "Min l3b", "ymin@cocococo.com"]
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showElement, setShowElement] = React.useState(true);
  const [end, setEnd] = React.useState(false);
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
      {!end && <button onClick={() => setEnd(end => !end)}>End</button>}
      {end && <CSVLink data={csvData} onClick={() => setEnd(end => !end)}>Download me</CSVLink>}
    </div>
  );
}

export default Main;
