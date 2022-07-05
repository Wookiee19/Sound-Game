import React, { useRef } from 'react'
import uniqueRandom from 'unique-random';
import "./buttons .css";
import { useState } from 'react';
import { useEffect } from 'react';
import config from "../config";
import Csv from './csv';

import Slider from "./Slider";

import "./styles.css";
import UserInputCheck from "./userInputCheck"
import Names from "./names"
import { fontSize } from '@mui/system';
import Blink from 'react-blink-text';
import "./slider.css"
import appConfig from "../config";
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import ff from "../Assets/Button/02_Blue.png"


let max = 7;
var file="00";
const AA=["Charlie","Ringo", "Laker", "Hopper", "Arrow", "Tiger","Eagle","Baron"];
const BB=["Blue","Red","White","Green"];
const CC=["1","2", "3", "4", "5", "6", "7","8"];
var i=0;

function Buttons() {

  const [key,setKey]=useState();
  const [userInput,setuserInput]=useState([""]);
  const [generated,setGenerated]=useState(["Generated"]);
  const [sliderInput,setSliderInput]=useState([""]);
  const [ value, setValue ] = useState(0);
  const [Score,setScore]=useState("0")
  const [disabled, setDisabled] = useState(false);
  const [initial,setInitial]=useState(0);
  const [round,setRound]=useState(0);
  const [answer,setAnswer]=useState("true");
  const [input,setInput]=useState("");
  const [aaShow,setaaShow]=useState("");
  const [bbShow,setbbShow]=useState("");
  const [ccShow,setccshow]=useState("");
  const [csvUser,setCsvUser]=useState(["USER"]);
  const [csvGenerated,setcsvGenerated]=useState(["Generated"]);
  const [csvResult,setCsvResult]=useState(["Result"]);
  var counter;
  var userToPost ;
  var startTime=[];
  var dead; 
  var text;
  // const [text, setText] = useState('');
  var a=0;
   function timeout()  {
   
    console.log("time",counter)
    console.log("xx1")
     if(round%appConfig.Trials==0 && initial<=7){
      setInitial(initial+1)
        if(initial==7)
        {
            dead=1;
        }
      // console.log("first",initial)
   }
    
}

const _handleIndexChange = (index) => {
  setValue(index);
};


  function assigment(a){
   
    setuserInput( userInput => [...userInput, a]);
    // console.log("user",userInput)
  
    
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
    
    var precision = 100;
    var text=(`${"0"}${slider}${keypad}`);
    setInput(text);
    if(i%2==0)
    setCsvUser(csvUser => [...csvUser, text])
    i++;
   console.log("first",keypad);
   console.log("user",text)
   console.log("random",generated[generated.length - 1])
   
    if(text==generated[generated.length - 1])
    {
      // console.log("Score11",10);
      setAnswer("true");
      if(i%2==0)
      setCsvResult(csvResult => [...csvResult, "true"])
      return Math.round(Math.random() * (10 * precision - 1 * precision) + 1 * precision) / (1*precision);
      
    }
    else
    {if(i%2==0)
      
      setCsvResult(csvResult => [...csvResult, "false"])
      setAnswer("false");
    return 0;
    }
    
    
   
    
  }
  function data(slider,keypad,file){
   userToPost = {
    key: uuidv4(),
name: localStorage.getItem("Code"),
gameName: `${"0"}${slider}${keypad}`,
gameMatrix: "null",
userSelectedName: generated[generated.length - 1],
userSelectedMatrix: "null",
time: "null"
};
  }
  const send = async () => {
    const response = await axios
        .post(appConfig+'/capture-activity', userToPost)
        .catch((error) => console.log('Error: ', error));
    if (response && response.data) {
        console.log(response);
        console.log(response.data);
    }
};
  function assigmentRandom(a){
    
    setGenerated( generated => [...generated, a]);
    // console.log("gen",generated);
    
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
   data(parseInt(Score)+parseInt(calc(value,key,file)));
   send();
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
    if(initial<8 && dead!=1){

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
      
        
    <div class="flex-container">
    <div class="flex-child1 magenta">
  
    <div style={{ marginLeft: "7%" }}>
      <div style={{ marginLeft: "-17%", marginTop:"-25%" }}>
    <Slider onChange={_handleIndexChange} currentIndex={value} />
    </div>
      {/* <div class="bar">
      <button  onClick={() => {setValue(0)}} class="div1"  role="button"> Charlie <span class="value"></span></button>

      <button  onClick={() => {setValue(1)}} class="div6"  role="button"> Ringo <span class="value"></span></button>
      <button  onClick={() => {setValue(2)}} class="div3"  role="button"> Laker <span class="value"></span></button>
      <button  onClick={() => {setValue(3)}} class="div7"  role="button"> Hopper <span class="value"></span></button>
      <button  onClick={() => {setValue(4)}} class="div5"  role="button"> Arrow <span class="value"></span></button>
      <button  onClick={() => {setValue(5)}} class="div7"  role="button"> Tiger <span class="value"></span></button>
      <button  onClick={() => {setValue(6)}} class="div4"  role="button"> Eagle <span class="value"></span></button>
      <button  onClick={() => {setValue(7)}} class="div1"  role="button"> Baron <span class="value"></span></button>
      
</div> */}
<div className="frame">
  
   <img className="frame1" onClick={() => {setValue(0)}} src={require('../Assets/Slider/Charlie.png')} height="40" />
   <img className="frame1" onClick={() => {setValue(1)}}src={require('../Assets/Slider/Ringgo.png')} height="40" />
   <img className="frame1" onClick={() => {setValue(2)}} src={require('../Assets/Slider/Laker.png')} height="40" />
   <img className="frame1" onClick={() => {setValue(3)}} src={require('../Assets/Slider/Hopper.png')} height="40" />
   <img className="frame1" onClick={() => {setValue(4)}} src={require('../Assets/Slider/Arrow.png')} height="40" />
   <img className="frame1" onClick={() => {setValue(5)}}  src={require('../Assets/Slider/Tiger.png')} height="40" />
   <img className="frame1"  onClick={() => {setValue(6)}} src={require('../Assets/Slider/Eagle.png')} height="40" />
   <img className="frame1" onClick={() => {setValue(7)}} src={require('../Assets/Slider/Baron.png')} height="40" />
</div>

   </div>   
</div>

<div class="flex-child magenta ">
  <h2 className='name'>Game Name</h2>
  
  {/* <h3>Generated File Number:{" "}{generated[generated.length - 1]}</h3>
  <h3>User Input: {input}</h3> */}
   <h3 className='sub'>Your Score: {Score}</h3>
  <h3 className='sub'>Answer : {answer}</h3>
 
  {answer=="true" && <h3 className='sub'>{appConfig.feedbackTextRight} </h3>}
  {answer=="false" && <h3 className='sub'>{appConfig.feedbackTextWrong}{appConfig.showAnswer && <div className='sub'>Ready {aaShow} goto {bbShow} {ccShow} now</div>}</h3>}
  {/* <Blink color='green' text='Updating...' fontSize='90'>
          _
        </Blink>  */}
        
</div>


<div class="flex-child2">
 

  <table id="matrix">
    
   
    <tr>
    <td>
        <button  onClick={() => {assigment("0000");setKey("0000");disable();setRound(round+1);}}  disabled={disabled} ><img src={require('../Assets/Button/01_Blue.png')}  width="20" height="20"/></button>
        
        </td>
      <td>
      <button   onClick={() => {assigment("0100");setKey("0100");disable();setRound(round+1);}}   disabled={disabled} role="button"><img src={ require('../Assets/Button/01_Red.png') } width="20" height="20" /></button>
        
        
        </td>
       
       
        <td>
        <button  onClick={() => {assigment("0200");setKey("0200");disable();setRound(round+1);}}  disabled={disabled} role="button"><img src={ require('../Assets/Button/01_White.png') } width="20" height="20" /></button>
        
        </td>
        <td>
        <button  onClick={() => {assigment("0300");setKey("0300");disable();setRound(round+1);setKey("0100")}}   disabled={disabled} role="button"><img src={ require('../Assets/Button/01_Green.png') } width="20" height="20" /></button>
       
        </td>
      
      
    </tr>
    <tr>
    <td>
        <button onClick={() => {assigment("0001");assigment("0001");disable();setRound(round+1);}}  disabled={disabled} role="button"><img src={require('../Assets/Button/02_Blue.png')}  width="20" height="20"/></button>
      
        </td>
      <td>
        <button onClick={() => {assigment("0101");setKey("0101");disable();setRound(round+1);}}    disabled={disabled} role="button"><img src={ require('../Assets/Button/02_Red.png') } width="20" height="20" /></button>
       
        
        </td>
        <td>
        <button onClick={() => {setKey("0201");assigment("0201");disable();setRound(round+1);}}  disabled={disabled} role="button"><img src={ require('../Assets/Button/02_White.png') } width="20" height="20" /></button>
        
        </td>
        <td>
        <button onClick={() => {assigment("0301");setKey("0301");disable();setRound(round+1);}}   disabled={disabled} role="button"><img src={ require('../Assets/Button/02_Green.png') } width="20" height="20" /></button>
        {/* <audio ref={audioPlayer} src={aaa} /> */}
        </td>
        
        
      
      
    </tr>
    <tr>
    <td>
        <button onClick={() => {assigment("0002");setKey("0002");disable();setRound(round+1);}}  disabled={disabled} role="button"><img src={ require('../Assets/Button/03_Blue.png') } width="20" height="20" /></button>
      
        </td>
      <td>
        <button onClick={() => {setKey("0102");assigment("0102");disable();setRound(round+1);}}    disabled={disabled} role="button"><img src={ require('../Assets/Button/03_Red.png') } width="20" height="20" /></button>
       
        
        </td>
        
       
        <td>
        <button onClick={() => {assigment("0202");setKey("0202");disable();setRound(round+1);}}  disabled={disabled} role="button"><img src={ require('../Assets/Button/03_White.png') } width="20" height="20" /></button>
        
        </td>
        <td>
        <button onClick={() => {assigment("0302");setKey("0302");disable();setRound(round+1);}}   disabled={disabled} role="button"><img src={ require('../Assets/Button/03_Green.png') } width="20" height="20" /></button>
        {/* <audio ref={audioPlayer} src={aaa} /> */}
        </td>
      
      
    </tr>
    <tr>
    <td>
        <button onClick={() => {assigment("0003");setKey("0003");disable();setRound(round+1);}}  disabled={disabled} role="button"><img src={ require('../Assets/Button/04_Blue.png') } width="20" height="20" /></button>
      
        </td>
      <td>
        <button onClick={() => {assigment("0103");setKey("0103");disable();setRound(round+1);}}    disabled={disabled} role="button"><img src={ require('../Assets/Button/04_Red.png') } width="20" height="20" /></button>
       
        
        </td>
       
        
        <td>
        <button onClick={() => {assigment("0203");setKey("0203");disable();setRound(round+1);}}  disabled={disabled} role="button"><img src={ require('../Assets/Button/04_White.png') } width="20" height="20" /></button>
        
        </td>
        <td>
        <button onClick={() => {assigment("0303");setKey("0303");disable();setRound(round+1);}}   disabled={disabled} role="button"><img src={ require('../Assets/Button/04_Green.png') } width="20" height="20" /></button>
        {/* <audio ref={audioPlayer} src={aaa} /> */}
        </td>
      
      
    </tr>
    <tr>
    <td>
        <button onClick={() => {assigment("0004");setKey("0004");disable();setRound(round+1);}}  disabled={disabled} role="button"><img src={ require('../Assets/Button/05_Blue.png') } width="20" height="20" /></button>
      
        </td>
      <td>
        <button onClick={() => {assigment("0104");setKey("0104");disable();setRound(round+1);}}    disabled={disabled} role="button"><img src={ require('../Assets/Button/05_Red.png') } width="20" height="20" /></button>
       
        
        </td>
       
        
        <td>
        <button onClick={() => {assigment("0204");setKey("0204");disable();setRound(round+1);}}  disabled={disabled} role="button"><img src={ require('../Assets/Button/05_White.png') } width="20" height="20" /></button>
        
        </td>
        <td>
        <button onClick={() => {assigment("0304");setKey("0304");disable();setRound(round+1);}}   disabled={disabled} role="button"><img src={ require('../Assets/Button/05_Green.png') } width="20" height="20" /></button>
        {/* <audio ref={audioPlayer} src={aaa} /> */}
        </td>
      
      
    </tr>
    <tr>
    <td>
        <button onClick={() => {assigment("0005");setKey("0005");disable();setRound(round+1);}}  disabled={disabled} role="button"><img src={ require('../Assets/Button/06_Blue.png') } width="20" height="20" /></button>
      
        </td>
      <td>
        <button onClick={() => {assigment("0105");setKey("0105");disable();setRound(round+1);}}    disabled={disabled} role="button"><img src={ require('../Assets/Button/06_Red.png') } width="20" height="20" /></button>
       
        
        </td>
       
        
        <td>
        <button onClick={() => {assigment("0205");setKey("0205");disable();setRound(round+1);}}  disabled={disabled} role="button"><img src={ require('../Assets/Button/06_White.png') } width="20" height="20" /></button>
        
        </td>
        <td>
        <button onClick={() => {assigment("0305");setKey("0305");disable();setRound(round+1);}}   disabled={disabled} role="button"><img src={ require('../Assets/Button/06_Green.png') } width="20" height="20" /></button>
        {/* <audio ref={audioPlayer} src={aaa} /> */}
        </td>
      
      
    </tr>
    <tr>
      <td>
        <button onClick={() => {assigment("0006");setKey("0006");disable();setRound(round+1);}}  disabled={disabled} role="button"><img src={ require('../Assets/Button/07_Blue.png') } width="20" height="20" /></button>
      
        </td>
      <td>
        <button onClick={() => {assigment("0106");setKey("0106");disable();setRound(round+1);}}    disabled={disabled} role="button"><img src={ require('../Assets/Button/07_Red.png') } width="20" height="20" /></button>
       
        
        </td>
       
        
        <td>
        <button onClick={() => {assigment("0206");setKey("0206");disable();setRound(round+1);}}  disabled={disabled} role="button"><img src={ require('../Assets/Button/07_White.png') } width="20" height="20" /></button>
        
        </td>
        <td>
        <button onClick={() => {assigment("0306");setKey("0306");disable();setRound(round+1);}}   disabled={disabled} role="button"><img src={ require('../Assets/Button/07_Green.png') } width="20" height="20" /></button>
        {/* <audio ref={audioPlayer} src={aaa} /> */}
        </td>
      
      
    </tr>
    <tr>
    <td>
        <button onClick={() => {assigment("0007");setKey("0007");disable();setRound(round+1);}}  disabled={disabled} role="button"><img src={ require('../Assets/Button/08_Blue.png') } width="20" height="20" /></button>
      
        </td>
      <td>
        <button onClick={() => {assigment("0107");setKey("0107");disable();setRound(round+1);}}    disabled={disabled} role="button"><img src={ require('../Assets/Button/08_Red.png') } width="20" height="20" /></button>
       
        
        </td>
       
       
        <td>
        <button onClick={() => {assigment("0207");setKey("0207");disable();setRound(round+1);}}  disabled={disabled} role="button"><img src={ require('../Assets/Button/08_White.png') } width="20" height="20" /></button>
        
        </td>
        <td>
        <button onClick={() => {assigment("0307");setKey("0307");disable();setRound(round+1);}}   disabled={disabled} role="button"><img src={ require('../Assets/Button/02_Green.png') } width="20" height="20" /></button>
        {/* <audio ref={audioPlayer} src={aaa} /> */}
        </td>
   
      
    </tr>
   
    </table>

    </div>

</div></>  }


{initial==8 &&
<>

{console.log("generated",generated)}
{console.log("csvUser",csvUser)}
{console.log("csvResult",csvResult)}
<Csv value1={generated} value2={csvUser} value3={csvResult}/>
 </>
}

    </div>
  )
}

export default Buttons