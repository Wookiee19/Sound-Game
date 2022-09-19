import React, { useState, useEffect } from "react";
import "./main.css";

import Buttons from "./buttons";
import Score from "./Score";

const images = [];
function Main() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showElement, setShowElement] = React.useState(true);
  const [end, setEnd] = React.useState(false);

  useEffect(() => {
    setInterval(() => {
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

      <Buttons />
    </div>
  );
}

export default Main;
