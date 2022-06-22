import React, { useRef } from 'react'
import uniqueRandom from 'unique-random';
import "./buttons .css";
import { useState } from 'react';
import { useEffect } from 'react';
import config from "../config";
import Csv from './csv'

function Buttons() {
  // var audioPlayer = useRef();
  const [userInput,setuserInput]=useState(["UserKeypad"]);
  const [generated,setGenerated]=useState(["Generated"]);

  const [disabled, setDisabled] = useState(false);
  const [initial,setInitial]=useState(0);
  var a=0;
   setTimeout(() => {
     if(initial<=7){
      setInitial(initial+1)
      
   }
    
},config.durationBetweenRound);
  function assigment(a){
   
    setuserInput( userInput => [...userInput, a]);
    console.log("user",userInput)
    localStorage.setItem("user",userInput);
    
  }
  function disable(){
    if(config.ButtonDisable){
    setDisabled(true);
    setTimeout(() => {
        setDisabled(false);
    }, config.durationBetweenRound);}
    else 
    setDisabled(false);


    
  }
  function assigmentRandom(a){
    
    setGenerated( generated => [...generated, a]);
    console.log("gen",generated);
    localStorage.setItem("generated",generated);
  }

  function playAudio() {
    
    const getRandomFromRange = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
      
    };
    
    
   

    
    var file="0"+getRandomFromRange(0,7)+"0"+getRandomFromRange(0,3)+"0"+getRandomFromRange(0,8);
   console.log(file);
   var fileNo=initial+file;
   console.log("fileNo",fileNo);
   assigmentRandom(file);
   if(initial<8){
    const randomSong = require(`../Audio/Talker${initial}/${file}.wav`);
    console.log("i",initial)
    new Audio(randomSong).play()
    {console.log("randomSong",randomSong)}
    
   }
  }
  useEffect(() => {
    disable();playAudio();
   
    
  
   
  },[])
  

  return (
    <div>
      
      {initial==8 &&  <Csv/>}
     
      <div>
  <table id="matrix">
    <tr>
      <td>
        <button   onClick={() => {assigment("R01");disable();playAudio();}}  class="button-78" disabled={disabled} role="button"><span>01</span></button>
        
        
        </td>
        <td>
        <button  onClick={() => {assigment("G01");disable();playAudio();}}  class="button-68" disabled={disabled} role="button"><span>01</span></button>
       
        </td>
        <td>
        <button  onClick={() => {assigment("B01");disable();playAudio();}} class="button-58" disabled={disabled} role="button"><span>01</span></button>
       
        </td>
        <td>
        <button  onClick={() => {assigment("W01");disable();playAudio();}} class="button-48" disabled={disabled} role="button"><span>01</span></button>
        
        </td>
      
      
    </tr>
    <tr>
      <td>
        <button onClick={() => {assigment("R02");disable();playAudio();}}   class="button-78" disabled={disabled} role="button"><span>02</span></button>
       
        
        </td>
        <td>
        <button onClick={() => {assigment("G02");disable();playAudio();}}  class="button-68" disabled={disabled} role="button"><span>02</span></button>
        {/* <audio ref={audioPlayer} src={aaa} /> */}
        </td>
        <td>
        <button onClick={() => {assigment("B02");disable();playAudio();}} class="button-58" disabled={disabled} role="button"><span>02</span></button>
      
        </td>
        <td>
        <button onClick={() => {assigment("W02");disable();playAudio();}} class="button-48" disabled={disabled} role="button"><span>02</span></button>
        
        </td>
      
      
    </tr>
    <tr>
      <td>
        <button onClick={() => {assigment("R03");disable();playAudio();}}   class="button-78" disabled={disabled} role="button"><span>03</span></button>
       
        
        </td>
        <td>
        <button onClick={() => {assigment("G03");disable();playAudio();}}  class="button-68" disabled={disabled} role="button"><span>03</span></button>
        {/* <audio ref={audioPlayer} src={aaa} /> */}
        </td>
        <td>
        <button onClick={() => {assigment("B03");disable();playAudio();}} class="button-58" disabled={disabled} role="button"><span>03</span></button>
      
        </td>
        <td>
        <button onClick={() => {assigment("W03");disable();playAudio();}} class="button-48" disabled={disabled} role="button"><span>03</span></button>
        
        </td>
      
      
    </tr>
    <tr>
      <td>
        <button onClick={() => {assigment("R04");disable();playAudio();}}   class="button-78" disabled={disabled} role="button"><span>04</span></button>
       
        
        </td>
        <td>
        <button onClick={() => {assigment("G04");disable();playAudio();}}  class="button-68" disabled={disabled} role="button"><span>04</span></button>
        {/* <audio ref={audioPlayer} src={aaa} /> */}
        </td>
        <td>
        <button onClick={() => {assigment("B04");disable();playAudio();}} class="button-58" disabled={disabled} role="button"><span>04</span></button>
      
        </td>
        <td>
        <button onClick={() => {assigment("W04");disable();playAudio();}} class="button-48" disabled={disabled} role="button"><span>04</span></button>
        
        </td>
      
      
    </tr>
    <tr>
      <td>
        <button onClick={() => {assigment("R05");disable();playAudio();}}   class="button-78" disabled={disabled} role="button"><span>05</span></button>
       
        
        </td>
        <td>
        <button onClick={() => {assigment("G05");disable();playAudio();}}  class="button-68" disabled={disabled} role="button"><span>05</span></button>
        {/* <audio ref={audioPlayer} src={aaa} /> */}
        </td>
        <td>
        <button onClick={() => {assigment("B05");disable();playAudio();}} class="button-58" disabled={disabled} role="button"><span>05</span></button>
      
        </td>
        <td>
        <button onClick={() => {assigment("W05");disable();playAudio();}} class="button-48" disabled={disabled} role="button"><span>05</span></button>
        
        </td>
      
      
    </tr>
    <tr>
      <td>
        <button onClick={() => {assigment("R06");disable();playAudio();}}   class="button-78" disabled={disabled} role="button"><span>06</span></button>
       
        
        </td>
        <td>
        <button onClick={() => {assigment("G06");disable();playAudio();}}  class="button-68" disabled={disabled} role="button"><span>06</span></button>
        {/* <audio ref={audioPlayer} src={aaa} /> */}
        </td>
        <td>
        <button onClick={() => {assigment("B06");disable();playAudio();}} class="button-58" disabled={disabled} role="button"><span>06</span></button>
      
        </td>
        <td>
        <button onClick={() => {assigment("W06");disable();playAudio();}} class="button-48" disabled={disabled} role="button"><span>06</span></button>
        
        </td>
      
      
    </tr>
    <tr>
      <td>
        <button onClick={() => {assigment("R07");disable();playAudio();}}   class="button-78" disabled={disabled} role="button"><span>07</span></button>
       
        
        </td>
        <td>
        <button onClick={() => {assigment("G07");disable();playAudio();}}  class="button-68" disabled={disabled} role="button"><span>07</span></button>
        {/* <audio ref={audioPlayer} src={aaa} /> */}
        </td>
        <td>
        <button onClick={() => {assigment("B07");disable();playAudio();}} class="button-58" disabled={disabled} role="button"><span>07</span></button>
      
        </td>
        <td>
        <button onClick={() => {assigment("W07");disable();playAudio();}} class="button-48" disabled={disabled} role="button"><span>07</span></button>
        
        </td>
      
      
    </tr>
    <tr>
      <td>
        <button onClick={() => {assigment("R08");disable();playAudio();}}   class="button-78" disabled={disabled} role="button"><span>08</span></button>
       
        
        </td>
        <td>
        <button onClick={() => {assigment("G08");disable();playAudio();}}  class="button-68" disabled={disabled} role="button"><span>08</span></button>
        {/* <audio ref={audioPlayer} src={aaa} /> */}
        </td>
        <td>
        <button onClick={() => {assigment("B08");disable();playAudio();}} class="button-58" disabled={disabled} role="button"><span>08</span></button>
      
        </td>
        <td>
        <button onClick={() => {assigment("W08");disable();playAudio();}} class="button-48" disabled={disabled} role="button"><span>08</span></button>
        
        </td>
   
      
    </tr>
   
    </table>
</div>

    </div>
  )
}

export default Buttons