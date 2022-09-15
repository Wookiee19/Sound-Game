import { React, useState } from "react";
import Main from "./components/main";
import "./App.css";
import useModal from "./components/useModal";
import "./style.css";
import ModalInstruction from "./components/modal";
const playfile = require("./Audio/add/click.wav");

function App() {
  const [show, setShow] = useState(false);
  const [code, setCode] = useState();
  const [disable, setDisable] = useState(true);
  const { isShowing, toggle } = useModal();
  var date;
  function assign(a) {
    setCode(code);
    date = new Date();
    let result = a.concat("_", date);
    localStorage.setItem("code", result);
    setDisable(false);
  }
  const changeLayout = () => {
    const plynow = new Audio(playfile);
    plynow.play();
    setTimeout(() => {
      setShow((show) => !show);
    }, 300);
  };
  return (
    <div className="body">
      {localStorage.removeItem("Scores")}
      {!show && (
        <div className="row container-fluid col-12">
          <div
            className="row w-25 col-12 vertical-center"
            style={{ flexDirection: "column" }}
          >
            <input
              type="text"
              placeholder="Select an Username"
              size="20"
              style={{ height: 40, borderRadius: 10, textAlign: "center" }}
              onChange={(e) => {
                assign(e.target.value);
              }}
            />

            <button
              onClick={() => {
                changeLayout();
              }}
              disabled={disable}
              className="button-29 my-5"
            >
              Play
            </button>

            <button className="button-default" onClick={toggle}>
              Instruction
            </button>
            <ModalInstruction isShowing={isShowing} hide={toggle} />
          </div>
        </div>
      )}

      {show && <Main />}
    </div>
  );
}

export default App;
