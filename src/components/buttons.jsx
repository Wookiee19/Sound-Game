import React from 'react'
import "./buttons .css";
import audio from "../Audio/Talker0/000000.wav"

function buttons() {
  const audio = new Audio(
    "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
  );

  const start = () => {
    audio.play();
  };

  return (
    <div>
      <div>
  <table id="matrix">
    <tr>
      <td>
        <button onClick={start} class="button-78" role="button"><span>01</span></button></td>
        <td>
        <button class="button-78" role="button">02</button></td>
        <td>
        <button class="button-78" role="button"><span>03</span></button></td>
        <td>
        <button class="button-78" role="button"><span>04</span></button></td>
      <td><button class="button-78" role="button">05</button></td>
    </tr>
  
    <tr>
    <td>
        <button class="button-78" role="button"><span>06</span></button></td>
        <td>
        <button class="button-78" role="button"><span>07</span></button></td>
        <td>
        <button class="button-78" role="button"><span>08</span></button></td>
        
      <td><button class="button-78" role="button">09</button></td>
      <td><button class="button-78" role="button">10</button></td>
    </tr>
    <tr>
    <td>
        <button class="button-78" role="button"><span>11</span></button></td>
        <td>
        <button class="button-78" role="button"><span>12</span></button></td>
        <td>
        <button class="button-78" role="button"><span>13</span></button></td>
        
      <td><button class="button-78" role="button">14</button></td>
      <td><button class="button-78" role="button">15</button></td>
    </tr>
    <tr>
    <td>
        <button class="button-78" role="button"><span>16</span></button></td>
        <td>
        <button class="button-78" role="button"><span>17</span></button></td>
        <td>
        <button class="button-78" role="button"><span>18</span></button></td>
        
      <td><button class="button-78" role="button">19</button></td>
      <td><button class="button-78" role="button">20</button></td>
    </tr>
    <tr>
    <td>
        <button class="button-78" role="button"><span>21</span></button></td>
        <td>
        <button class="button-78" role="button"><span>22</span></button></td>
        <td>
        <button class="button-78" role="button"><span>23</span></button></td>
        
      <td><button class="button-78" role="button">24</button></td>
      <td><button class="button-78" role="button">25</button></td>
    </tr>
    <tr>
    <td>
        <button class="button-78" role="button"><span>26</span></button></td>
        <td>
        <button class="button-78" role="button"><span>27</span></button></td>
        <td>
        <button class="button-78" role="button"><span>28</span></button></td>
        
      <td><button class="button-78" role="button">29</button></td>
      <td><button class="button-78" role="button">30</button></td>
    </tr>
    <tr>
    <td>
        <button class="button-78" role="button"><span>31</span></button></td>
        <td>
        <button class="button-78" role="button"><span>32</span></button></td>
        <td>
        <button class="button-78" role="button"><span>33</span></button></td>
        
      <td><button class="button-78" role="button">34</button></td>
      <td><button class="button-78" role="button">35</button></td>
    </tr>
    <tr>
    <td>
        <button class="button-78" role="button"><span>36</span></button></td>
        <td>
        <button class="button-78" role="button"><span>37</span></button></td>
        <td>
        <button class="button-78" role="button"><span>38</span></button></td>
        
      <td><button class="button-78" role="button">39</button></td>
      <td><button class="button-78" role="button">40</button></td>
    </tr>
  </table>
</div>

    </div>
  )
}

export default buttons