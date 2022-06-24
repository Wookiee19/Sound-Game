import React, { useRef } from 'react'
import uniqueRandom from 'unique-random';
import "./buttons .css";
import { useState } from 'react';
import { useEffect } from 'react';
import config from "../config";
import Csv from './csv';
import Slider from "react-custom-slider";
import UserInputCheck from "./userInputCheck"
import Names from "./names"
import { fontSize } from '@mui/system';
import Blink from 'react-blink-text';
import "./slider.css"
import appConfig from "../config"

let max = 7;
var file="00";
const AA=["Charlie","Ringo", "Laker", "Hopper", "Arrow", "Tiger","Eagle","Baron"];
const BB=["Blue","Red","White","Green"];
const CC=["1","2", "3", "4", "5", "6", "7","8"];

function Buttons() {

  const [key,setKey]=useState();
  const [userInput,setuserInput]=useState(["UserKeypad"]);
  const [generated,setGenerated]=useState(["Generated"]);
  const [sliderInput,setSliderInput]=useState(["UserSlider"]);
  const [ value, setValue ] = React.useState(0);
  const [Score,setScore]=useState("0")
  const [disabled, setDisabled] = useState(false);
  const [initial,setInitial]=useState(0);
  const [round,setRound]=useState(0);
  const [answer,setAnswer]=useState("true");
  const [input,setInput]=useState("");
  const [aaShow,setaaShow]=useState("");
  const [bbShow,setbbShow]=useState("");
  const [ccShow,setccshow]=useState("");
  var text;
  // const [text, setText] = useState('');
  var a=0;
   function timeout()  {

     if(round%2==0 && initial<=7){
      setInitial(initial+1)
      // console.log("first",initial)
   }
    
}


  function assigment(a){
   
    setuserInput( userInput => [...userInput, a]);
    // console.log("user",userInput)
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
  function calc(slider,keypad,file)
  {
    var text=(`${"0"}${slider}${keypad}`);
    setInput(text);
  //  console.log("first",keypad);
  //  console.log("user",text)
  //  console.log("random",generated[generated.length - 1])
   
    if(text==generated[generated.length - 1])
    {
      // console.log("Score11",10);
      setAnswer("true");
      return 10;
      
    }
    else
    {
      // console.log("Score66666");
      setAnswer("false");
    return 0;
    }
    
    
  }
  function assigmentRandom(a){
    
    setGenerated( generated => [...generated, a]);
    // console.log("gen",generated);
    localStorage.setItem("generated",generated);
  }


  function output(){
    const chars = file.split('');
    console.log("bb",chars[4])
    setaaShow(AA[chars[1]]);
    setbbShow(BB[chars[3]]);
    setccshow(CC[chars[5]]);
    console.log("first",aaShow);
    console.log("first",bbShow);
    console.log("first",ccShow);
  }

  function playAudio() {
    
    
    const getRandomFromRange = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
      
    };
       file="0"+getRandomFromRange(0,7)+"0"+getRandomFromRange(0,3)+"0"+getRandomFromRange(0,8);
   console.log(file);
  //  var fileNo=initial+file;
   setScore(parseInt(Score)+parseInt(calc(value,key,file)));
   localStorage.setItem("scores",Score);
    // console.log("Score",Score);
   assigmentRandom(file);
   if(initial<8){
    const randomSong = require(`../Audio/Talker${initial}/${file}.wav`);
    // console.log("file",file)
    new Audio(randomSong).play()
    // {console.log("randomSong",randomSong)}
 
   
    
   }
  
  }
  useEffect(() => {
    timeout();
    output();
    if(initial<8){
    disable();
    playAudio(); 
    }
    
  
   
  },[round])
  useEffect(() => {
    console.log("value",value);
    
  
   
  },[value])

  return (
    <div>
      
      { initial<8 &&
     <>
      <div>
      <div style={{ margin: 10 }}>
      <div>
      
      <div class="bar">
  <div class="div1" >
  Charlie
    <span class="value"></span>
  </div>

  <div class="div6 ">
  Ringo
    <span class="value"></span>
  </div>
  <div class="div3">
  Laker
    <span class="value"></span>
  </div>
  <div class="div4">
  Hopper
    <span class="value"></span>
  </div>
  <div class="div5">
  Arrow
    <span class="value"></span>
  </div>
  <div class="div6">
  Tiger
    <span class="value"></span>
  </div>
  <div class="div7">
  Eagle
    <span class="value"></span>
  </div>
  <div class="div1">
  Baron
    <span class="value"></span>
  </div>
</div>




    </div>
<div style={{ marginLeft: "7%" }}>
      <Slider
        value={value}
        // defaultValue	number (required)	initial value
        defaultValue={1}
        // showValue	true, false, 'active'	displays current value on a label
        showValue={false}
        // valueLabelColor	string
        valueLabelColor={"red"}
        // valueLabelActiveColor	string
  
        // valueLabelPadding	number
  
        // valueLabelStyle	object	user custom style for value label
  
        // min	number	min slider value
        min={0}
        // max	number	max slider value
        max={7}
        // stepSize	number	interval between 2 steps (default is 1)
        stepSize={1}
        // disabled	boolean
  
        // disabledColor	string	color used when the slider is disabled
  
        // onChange	function (callback)	called every time value changes ( value as argument)
        onChange={(value) => setValue(value)}
        // onRelease	function (callback)	called once slider is released ( value as argument)
  
        // valueRenderer	function (callback)	used by value label (to display a unit such as %)
  
        // trackLength	number	track's height or width (depending on the orientation)
        trackLength={max * 118}
        // trackColor	string
        trackColor={"green"}
        // trackThickness	number
        trackThickness={15}
        // trackShape	'squared', 'rounded'
        trackShape="squared"
        // trackStyle	object	user custom styling for track
  
        // fillTrack	boolean
  
        // fillColor	string
        fillColor={"green"}
        // handlerSize	number	sets handler diameter (both width and height)
        handlerSize={33}
        // handlerWidth	number
  
        // handlerHeight	number
  
        // handlerShape	'squared', 'rounded'
        handlerShape={"squared"}
        // handlerColor	string
        handlerColor={"red"}
        // handlerBorderColor
        handlerBorderColor={"#333333"}
        // handlerActiveColor	string	handler color when slider is being used
        handlerActiveColor={"#4d4d4d"}
        // handlerStyle	object	user custom styling for handler
  
        // fontSize	number	used by markers
  
        // fontColor	string	used by markers
  
        // markers	number	numbers of markers to display
        markers={7}
        // markersSize	number	markers container's height or width (depending on the orientation)
        // markersSize={1}
        // showMarkers	true, false, 'hidden', 'active', 'inactive'	'active' displays the markers only when slider is beeing used, 'inactive' the opposite
        showMarkers={false}
        // grabCursor	boolean	when true shows a grabbing cursor as slider is beeing used
  
        // vertical	boolean	slider's layout horizontal or vertical
  
        // invertMarkers	boolean	switch slider and markers positions
        invertMarkers={false}
        // style	object	user custom style for slider's root container
      />
   </div> 
     
    </div> 
    </div>
        
    <div class="flex-container">

<div class="flex-child magenta">
  <h2>Console</h2>
  
  <h3>Generated File Number:{" "}{generated[generated.length - 1]}</h3>
  <h3>User Input: {input}</h3>
  <h3>Answer : {answer}</h3>
  <h3>Your Score: {Score}</h3>
  {answer=="true" && <h3>{appConfig.feedbackTextRight} </h3>}
  {answer=="false" && <h3>{appConfig.feedbackTextWrong}{appConfig.showAnswer && <div>Ready {aaShow} goto {bbShow} {ccShow} now</div>}</h3>}
  <Blink color='green' text='Updating...' fontSize='90'>
          _
        </Blink> 
</div>

<div class="">
 

  <table id="matrix">
    
    <h3 style={{color:"Red" ,fontWeight:"bold"}}>Score:{"  "}{Score}</h3>
    <tr>
    <td>
        <button  onClick={() => {assigment("0000");setKey("0000");disable();setRound(round+1);}} class="button-58" disabled={disabled} role="button"><span>01</span></button>
       
        </td>
      <td>
      <button   onClick={() => {assigment("0100");setKey("0100");disable();setRound(round+1);}}  class="button-78" disabled={disabled} role="button"><span>01</span></button>
        
        
        </td>
       
       
        <td>
        <button  onClick={() => {assigment("0200");setKey("0200");disable();setRound(round+1);}} class="button-48" disabled={disabled} role="button"><span>01</span></button>
        
        </td>
        <td>
        <button  onClick={() => {assigment("0300");setKey("0300");disable();setRound(round+1);setKey("0100")}}  class="button-68" disabled={disabled} role="button"><span>01</span></button>
       
        </td>
      
      
    </tr>
    <tr>
    <td>
        <button onClick={() => {assigment("0001");assigment("0001");disable();setRound(round+1);}} class="button-58" disabled={disabled} role="button"><span>02</span></button>
      
        </td>
      <td>
        <button onClick={() => {assigment("0101");setKey("0101");disable();setRound(round+1);}}   class="button-78" disabled={disabled} role="button"><span>02</span></button>
       
        
        </td>
        <td>
        <button onClick={() => {setKey("0201");assigment("0201");disable();setRound(round+1);}} class="button-48" disabled={disabled} role="button"><span>02</span></button>
        
        </td>
        <td>
        <button onClick={() => {assigment("0301");setKey("0301");disable();setRound(round+1);}}  class="button-68" disabled={disabled} role="button"><span>02</span></button>
        {/* <audio ref={audioPlayer} src={aaa} /> */}
        </td>
        
        
      
      
    </tr>
    <tr>
    <td>
        <button onClick={() => {assigment("0002");setKey("0002");disable();setRound(round+1);}} class="button-58" disabled={disabled} role="button"><span>03</span></button>
      
        </td>
      <td>
        <button onClick={() => {setKey("0102");assigment("0102");disable();setRound(round+1);}}   class="button-78" disabled={disabled} role="button"><span>03</span></button>
       
        
        </td>
        
       
        <td>
        <button onClick={() => {assigment("0202");setKey("0202");disable();setRound(round+1);}} class="button-48" disabled={disabled} role="button"><span>03</span></button>
        
        </td>
        <td>
        <button onClick={() => {assigment("0302");setKey("0302");disable();setRound(round+1);}}  class="button-68" disabled={disabled} role="button"><span>03</span></button>
        {/* <audio ref={audioPlayer} src={aaa} /> */}
        </td>
      
      
    </tr>
    <tr>
    <td>
        <button onClick={() => {assigment("0003");setKey("0003");disable();setRound(round+1);}} class="button-58" disabled={disabled} role="button"><span>04</span></button>
      
        </td>
      <td>
        <button onClick={() => {assigment("0103");setKey("0103");disable();setRound(round+1);}}   class="button-78" disabled={disabled} role="button"><span>04</span></button>
       
        
        </td>
       
        
        <td>
        <button onClick={() => {assigment("0203");setKey("0203");disable();setRound(round+1);}} class="button-48" disabled={disabled} role="button"><span>04</span></button>
        
        </td>
        <td>
        <button onClick={() => {assigment("0303");setKey("0303");disable();setRound(round+1);}}  class="button-68" disabled={disabled} role="button"><span>04</span></button>
        {/* <audio ref={audioPlayer} src={aaa} /> */}
        </td>
      
      
    </tr>
    <tr>
    <td>
        <button onClick={() => {assigment("0004");setKey("0004");disable();setRound(round+1);}} class="button-58" disabled={disabled} role="button"><span>05</span></button>
      
        </td>
      <td>
        <button onClick={() => {assigment("0104");setKey("0104");disable();setRound(round+1);}}   class="button-78" disabled={disabled} role="button"><span>05</span></button>
       
        
        </td>
       
        
        <td>
        <button onClick={() => {assigment("0204");setKey("0204");disable();setRound(round+1);}} class="button-48" disabled={disabled} role="button"><span>05</span></button>
        
        </td>
        <td>
        <button onClick={() => {assigment("0304");setKey("0304");disable();setRound(round+1);}}  class="button-68" disabled={disabled} role="button"><span>05</span></button>
        {/* <audio ref={audioPlayer} src={aaa} /> */}
        </td>
      
      
    </tr>
    <tr>
    <td>
        <button onClick={() => {assigment("0005");setKey("0005");disable();setRound(round+1);}} class="button-58" disabled={disabled} role="button"><span>06</span></button>
      
        </td>
      <td>
        <button onClick={() => {assigment("0105");setKey("0105");disable();setRound(round+1);}}   class="button-78" disabled={disabled} role="button"><span>06</span></button>
       
        
        </td>
       
        
        <td>
        <button onClick={() => {assigment("0205");setKey("0205");disable();setRound(round+1);}} class="button-48" disabled={disabled} role="button"><span>06</span></button>
        
        </td>
        <td>
        <button onClick={() => {assigment("0305");setKey("0305");disable();setRound(round+1);}}  class="button-68" disabled={disabled} role="button"><span>06</span></button>
        {/* <audio ref={audioPlayer} src={aaa} /> */}
        </td>
      
      
    </tr>
    <tr>
      <td>
        <button onClick={() => {assigment("0006");setKey("0006");disable();setRound(round+1);}} class="button-58" disabled={disabled} role="button"><span>07</span></button>
      
        </td>
      <td>
        <button onClick={() => {assigment("0106");setKey("0106");disable();setRound(round+1);}}   class="button-78" disabled={disabled} role="button"><span>07</span></button>
       
        
        </td>
       
        
        <td>
        <button onClick={() => {assigment("0206");setKey("0206");disable();setRound(round+1);}} class="button-48" disabled={disabled} role="button"><span>07</span></button>
        
        </td>
        <td>
        <button onClick={() => {assigment("0306");setKey("0306");disable();setRound(round+1);}}  class="button-68" disabled={disabled} role="button"><span>07</span></button>
        {/* <audio ref={audioPlayer} src={aaa} /> */}
        </td>
      
      
    </tr>
    <tr>
    <td>
        <button onClick={() => {assigment("0007");setKey("0007");disable();setRound(round+1);}} class="button-58" disabled={disabled} role="button"><span>08</span></button>
      
        </td>
      <td>
        <button onClick={() => {assigment("0107");setKey("0107");disable();setRound(round+1);}}   class="button-78" disabled={disabled} role="button"><span>08</span></button>
       
        
        </td>
       
       
        <td>
        <button onClick={() => {assigment("0207");setKey("0207");disable();setRound(round+1);}} class="button-48" disabled={disabled} role="button"><span>08</span></button>
        
        </td>
        <td>
        <button onClick={() => {assigment("0307");setKey("0307");disable();setRound(round+1);}}  class="button-68" disabled={disabled} role="button"><span>08</span></button>
        {/* <audio ref={audioPlayer} src={aaa} /> */}
        </td>
   
      
    </tr>
   
    </table>

    </div>

</div></>  }


{initial==8 &&
<Csv/>
}

    </div>
  )
}

export default Buttons