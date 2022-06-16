import React, { useRef } from 'react'
import "./buttons .css";
import aaa from "../Audio/Talker1/000000.wav"
import a1 from "../Audio/Talker2/000100.wav"
import a2 from "../Audio/Talker1/000302.wav"
import a3 from "../Audio/Talker1/020102.wav"
import a4 from "../Audio/Talker1/070104.wav"
function Buttons() {
  var audioPlayer = [];

  function playAudio() {
    audioPlayer.current.play();
    audioPlayer=[null]
  }

  return (
    <div>
      <div>
  <table id="matrix">
    <tr>
      <td>
        <button onClick={playAudio}  audioPlayer={a1} class="button-78" role="button"><span>01</span></button>
        <audio ref={audioPlayer} src={a2} />
        {console.log("feedback recored")}
        </td>
        <td>
        <button onClick={playAudio} audioPlayer={aaa} class="button-78" role="button"><span>02</span></button>
        {/* <audio ref={audioPlayer} src={aaa} /> */}
        </td>
        <td>
        <button onClick={playAudio} class="button-78" role="button"><span>03</span></button>
        <audio ref={audioPlayer} src={a3} />
        </td>
        <td>
        <button onClick={playAudio} class="button-78" role="button"><span>04</span></button>
        <audio ref={audioPlayer} src={a4} />
        </td>
      <td><button class="button-78" role="button">05</button></td>
    </tr>
  
    <tr>
    <td>
        <button class="button-68" role="button"><span>06</span></button></td>
        <td>
        <button class="button-68" role="button"><span>07</span></button></td>
        <td>
        <button class="button-68" role="button"><span>08</span></button></td>
        
      <td><button class="button-68" role="button">09</button></td>
      <td><button class="button-68" role="button">10</button></td>
    </tr>
    <tr>
    <td>
        <button class="button-58" role="button"><span>11</span></button></td>
        <td>
        <button class="button-58" role="button"><span>12</span></button></td>
        <td>
        <button class="button-58" role="button"><span>13</span></button></td>
        
      <td><button class="button-58" role="button">14</button></td>
      <td><button class="button-58" role="button">15</button></td>
    </tr>
    <tr>
    <td>
        <button class="button-48" role="button"><span>16</span></button></td>
        <td>
        <button class="button-48" role="button"><span>17</span></button></td>
        <td>
        <button class="button-48" role="button"><span>18</span></button></td>
        
      <td><button class="button-48" role="button">19</button></td>
      <td><button class="button-48" role="button">20</button></td>
    </tr>
    <tr>
    <td>
        <button class="button-88" role="button"><span>21</span></button></td>
        <td>
        <button class="button-88" role="button"><span>22</span></button></td>
        <td>
        <button class="button-88" role="button"><span>23</span></button></td>
        
      <td><button class="button-88" role="button">24</button></td>
      <td><button class="button-88" role="button">25</button></td>
    </tr>
    {/* <tr>
    <td>
        <button class="button-78" role="button"><span>26</span></button></td>
        <td>
        <button class="button-78" role="button"><span>27</span></button></td>
        <td>
        <button class="button-78" role="button"><span>28</span></button></td>
        
      <td><button class="button-78" role="button">29</button></td>
      <td><button class="button-78" role="button">30</button></td>
    </tr> */}
    {/* <tr>
    <td>
        <button class="button-78" role="button"><span>31</span></button></td>
        <td>
        <button class="button-78" role="button"><span>32</span></button></td>
        <td>
        <button class="button-78" role="button"><span>33</span></button></td>
        
      <td><button class="button-78" role="button">34</button></td>
      <td><button class="button-78" role="button">35</button></td>
    </tr> */}
    {/* <tr>
    <td>
        <button class="button-78" role="button"><span>36</span></button></td>
        <td>
        <button class="button-78" role="button"><span>37</span></button></td>
        <td>
        <button class="button-78" role="button"><span>38</span></button></td>
        
      <td><button class="button-78" role="button">39</button></td>
      <td><button class="button-78" role="button">40</button></td>
    </tr> */}
  </table>
</div>

    </div>
  )
}

export default Buttons