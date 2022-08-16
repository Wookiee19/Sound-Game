import React, { useState, useEffect } from "react";
import "./main.css";
import sapceship from "../Assets/background2.jpg";
import Buttons from "./buttons";
import Score from "./Score";

const images = [];
function Main() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showElement, setShowElement] = React.useState(true);
  const [end, setEnd] = React.useState(false);
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (currentIndex === images.length - 1) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex(currentIndex + 1);
      }
    }, 5000);
    setTimeout(function () {
      setShowElement(false);
    }, 2200);
  }, []);
  return (
    <div className="App">
      <Score />
      <div class="makebottom ml-5 mr-1" style={{ overflow: "hidden" }}>
        <Buttons />
      </div>
      <img
        src={sapceship}
        width="100%"
        height="100%"
        class="over"
        alt="background"
      />
    </div>
  );
}

export default Main;
