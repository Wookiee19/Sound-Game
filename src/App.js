import { React } from "react";
import Main from "./components/main";
import "./App.css";
import "./style.css";

function App() {
  return (
    <div className="body">
      {localStorage.removeItem("Scores")}
      <Main />
    </div>
  );
}

export default App;
