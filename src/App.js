import { React, useState } from "react";
import Main from "./components/main";
import "./App.css";
import Modal from "./components/modal";
import useModal from "./components/useModal";
import "./style.css";

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
  return (
    <div className="body">
      {localStorage.removeItem("Scores")}
      {!show && (
        <div
          style={{ marginLeft: "5%" }}
          className="row container-fluid col-12"
        >
          <div className="text-center col-3">
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
              onClick={() => setShow((show) => !show)}
              disabled={disable}
              className="button-29 my-5"
            >
              Play
            </button>

            <button className="button-default" onClick={toggle}>
              Instruction
            </button>
            <Modal isShowing={isShowing} hide={toggle} />
          </div>
        </div>
      )}

      {show && <Main />}
    </div>
  );
}

export default App;
