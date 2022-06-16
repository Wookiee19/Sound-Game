import React, { useRef } from 'react'
import "./buttons .css";
import aaa from "../Audio/Talker1/070307.wav"
import a1 from "../Audio/Talker6/050001.wav"
import a2 from "../Audio/Talker1/010000.wav"
import a3 from "../Audio/Talker1/020000.wav"
import a4 from "../Audio/Talker1/030000.wav"
function Buttons() {
  var audioPlayer = useRef();
  const songsCollections = [require('../Audio/Talker1/070307.wav'),require('../Audio/Talker1/060307.wav'),require('../Audio/Talker1/050307.wav'),require('../Audio/Talker1/040307.wav'),require('../Audio/Talker1/030307.wav')];

  

  function playAudio() {
    const getRandomFromRange = (min, max) => {
      return Math.floor(Math.random() * (max - min) + min);
    };
    
    const randomSongIndex = getRandomFromRange(0, songsCollections.length);
    
   
    
    const randomSong = songsCollections[randomSongIndex];
    new Audio(randomSong).play()
  }

  return (
    <div>
      <div>
  <table id="matrix">
    <tr>
      <td>
        <button   onClick={playAudio}  class="button-78" role="button"><span>01</span></button>
        
        {console.log("feedback recored")}
        </td>
        <td>
        <button  onClick={playAudio}  class="button-68" role="button"><span>01</span></button>
       
        </td>
        <td>
        <button onClick={playAudio} class="button-58" role="button"><span>01</span></button>
       
        </td>
        <td>
        <button onClick={playAudio} class="button-48" role="button"><span>01</span></button>
        
        </td>
      
      
    </tr>
    <tr>
      <td>
        <button onClick={playAudio}   class="button-78" role="button"><span>02</span></button>
       
        {console.log("feedback recored")}
        </td>
        <td>
        <button onClick={playAudio}  class="button-68" role="button"><span>02</span></button>
        {/* <audio ref={audioPlayer} src={aaa} /> */}
        </td>
        <td>
        <button onClick={playAudio} class="button-58" role="button"><span>02</span></button>
      
        </td>
        <td>
        <button onClick={playAudio} class="button-48" role="button"><span>02</span></button>
        
        </td>
      
      
    </tr>
    <tr>
      <td>
        <button onClick={playAudio}   class="button-78" role="button"><span>03</span></button>
       
        {console.log("feedback recored")}
        </td>
        <td>
        <button onClick={playAudio}  class="button-68" role="button"><span>03</span></button>
        {/* <audio ref={audioPlayer} src={aaa} /> */}
        </td>
        <td>
        <button onClick={playAudio} class="button-58" role="button"><span>03</span></button>
      
        </td>
        <td>
        <button onClick={playAudio} class="button-48" role="button"><span>03</span></button>
        
        </td>
      
      
    </tr>
    <tr>
      <td>
        <button onClick={playAudio}   class="button-78" role="button"><span>04</span></button>
       
        {console.log("feedback recored")}
        </td>
        <td>
        <button onClick={playAudio}  class="button-68" role="button"><span>04</span></button>
        {/* <audio ref={audioPlayer} src={aaa} /> */}
        </td>
        <td>
        <button onClick={playAudio} class="button-58" role="button"><span>04</span></button>
      
        </td>
        <td>
        <button onClick={playAudio} class="button-48" role="button"><span>04</span></button>
        
        </td>
      
      
    </tr>
    <tr>
      <td>
        <button onClick={playAudio}   class="button-78" role="button"><span>05</span></button>
       
        {console.log("feedback recored")}
        </td>
        <td>
        <button onClick={playAudio}  class="button-68" role="button"><span>05</span></button>
        {/* <audio ref={audioPlayer} src={aaa} /> */}
        </td>
        <td>
        <button onClick={playAudio} class="button-58" role="button"><span>05</span></button>
      
        </td>
        <td>
        <button onClick={playAudio} class="button-48" role="button"><span>05</span></button>
        
        </td>
      
      
    </tr>
    <tr>
      <td>
        <button onClick={playAudio}   class="button-78" role="button"><span>06</span></button>
       
        {console.log("feedback recored")}
        </td>
        <td>
        <button onClick={playAudio}  class="button-68" role="button"><span>06</span></button>
        {/* <audio ref={audioPlayer} src={aaa} /> */}
        </td>
        <td>
        <button onClick={playAudio} class="button-58" role="button"><span>06</span></button>
      
        </td>
        <td>
        <button onClick={playAudio} class="button-48" role="button"><span>06</span></button>
        
        </td>
      
      
    </tr>
    <tr>
      <td>
        <button onClick={playAudio}   class="button-78" role="button"><span>07</span></button>
       
        {console.log("feedback recored")}
        </td>
        <td>
        <button onClick={playAudio}  class="button-68" role="button"><span>07</span></button>
        {/* <audio ref={audioPlayer} src={aaa} /> */}
        </td>
        <td>
        <button onClick={playAudio} class="button-58" role="button"><span>07</span></button>
      
        </td>
        <td>
        <button onClick={playAudio} class="button-48" role="button"><span>07</span></button>
        
        </td>
      
      
    </tr>
    <tr>
      <td>
        <button onClick={playAudio}   class="button-78" role="button"><span>08</span></button>
       
        {console.log("feedback recored")}
        </td>
        <td>
        <button onClick={playAudio}  class="button-68" role="button"><span>08</span></button>
        {/* <audio ref={audioPlayer} src={aaa} /> */}
        </td>
        <td>
        <button onClick={playAudio} class="button-58" role="button"><span>08</span></button>
      
        </td>
        <td>
        <button onClick={playAudio} class="button-48" role="button"><span>08</span></button>
        
        </td>
   
      
    </tr>
   
    </table>
</div>

    </div>
  )
}

export default Buttons