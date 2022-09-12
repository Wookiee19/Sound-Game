import React, { useRef } from "react";
import "./buttons .css";
import { useState } from "react";
import { useEffect } from "react";
import config from "../config";
import Csv from "./csv";
import Slider from "./Slider";
import wrong from "../Assets/cancel.png";
import tick from "../Assets/check.png";
import "./styles.css";
import "./slider.css";
import appConfig from "../config";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import audioCorrect from "../Audio/add/correct.wav";
import audioWrong from "../Audio/add/wrong.wav";
import buttonAudio from "../Audio/add/click.wav";
import { ImageGroup } from "./name-group";
import { CircularProgress } from "@mui/material";
import slideChange from "../Assets/slidechange.mp3";
// const randomSong = audioWrong;
// const randomSong = audioCorrect;
var audio1 = new Audio(audioWrong);
var audio11 = new Audio(audioCorrect);
var slidechangeAudio = new Audio(slideChange);

const AA = [
  "Charlie",
  "Ringo",
  "Laker",
  "Hopper",
  "Arrow",
  "Tiger",
  "Eagle",
  "Baron",
];
const BB = ["Blue", "Red", "White", "Green"];
const CC = ["1", "2", "3", "4", "5", "6", "7", "8"];
var i = 0;
function Buttons() {
  const [open, setOpen] = React.useState(false);
  const key = useRef();
  const [rfile, setRfile] = React.useState("");
  const [file, setFile] = React.useState("00");
  const [va, setVa] = useState();
  const [reload, setReload] = useState();
  const [userInput, setuserInput] = useState([""]);
  const [generated, setGenerated] = useState([""]);
  const [sliderInput, setSliderInput] = useState([""]);
  const [value, setValue] = useState(0);
  const [Score, setScore] = useState(0);
  const [disabled, setDisabled] = useState(false);
  const [initial, setInitial] = useState(0);
  const [round, setRound] = useState(0);
  const [answer, setAnswer] = useState("true");
  const [block, setBlock] = useState("false");
  const [input, setInput] = useState("");
  const [aaShow, setaaShow] = useState("");
  const [bbShow, setbbShow] = useState("");
  const [ccShow, setccshow] = useState("");
  const [csvUser, setCsvUser] = useState([""]);
  const [csvGenerated, setcsvGenerated] = useState([""]);
  const [csvResult, setCsvResult] = useState([""]);
  const [startTime, setStartTime] = useState();
  const [diffrence, setDiffrence] = useState(0);
  const [show1, setShow1] = useState(false);
  const [time, setTime] = useState([""]);
  const [dead, setDead] = React.useState(0);
  var counter;
  var userToPost;
  const speed7 = [
    "talker2_060105_spd_24.wav",
    "talker2_050107_spd_24.wav",
    "talker2_040307_spd_24.wav",
    "talker2_040301_spd_24.wav",
    "talker2_030305_spd_24.wav",
    "talker2_030102_spd_24.wav",
    "talker2_020007_spd_24.wav",
    "talker2_020001_spd_24.wav",
    "talker2_020000_spd_24.wav",
    "talker2_010201_spd_24.wav",
    "talker2_010102_spd_24.wav",
    "talker2_000306_spd_24.wav",
    "talker2_000105_spd_24.wav",
    "talker0_070200_spd_24.wav",
    "talker0_070105_spd_24.wav",
    "talker0_070100_spd_24.wav",
    "talker0_060007_spd_24.wav",
    "talker0_050100_spd_24.wav",
    "talker0_040307_spd_24.wav",
    "talker0_040105_spd_24.wav",
    "talker0_040101_spd_24.wav",
    "talker0_040100_spd_24.wav",
    "talker0_040000_spd_24.wav",
    "talker0_030306_spd_24.wav",
    "talker0_030305_spd_24.wav",
    "talker0_030100_spd_24.wav",
    "talker0_020101_spd_24.wav",
    "talker0_010207_spd_24.wav",
    "talker0_010002_spd_24.wav",
    "talker0_000307_spd_24.wav",
    "talker2_070105_spd_24.wav",
    "talker2_070005_spd_24.wav",
    "talker2_060200_spd_24.wav",
    "talker2_060106_spd_24.wav",
  ];
  const speed6 = [
    "talker2_070203_spd_30.wav",
    "talker2_070201_spd_30.wav",
    "talker2_070101_spd_30.wav",
    "talker2_060303_spd_30.wav",
    "talker2_060300_spd_30.wav",
    "talker2_060206_spd_30.wav",
    "talker2_060203_spd_30.wav",
    "talker2_060200_spd_30.wav",
    "talker2_060106_spd_30.wav",
    "talker2_050302_spd_30.wav",
    "talker2_050104_spd_30.wav",
    "talker2_050101_spd_30.wav",
    "talker2_050004_spd_30.wav",
    "talker2_040205_spd_30.wav",
    "talker2_030303_spd_30.wav",
    "talker2_030102_spd_30.wav",
    "talker2_010207_spd_30.wav",
    "talker0_070206_spd_30.wav",
    "talker0_070005_spd_30.wav",
    "talker0_060106_spd_30.wav",
    "talker0_060105_spd_30.wav",
    "talker0_060001_spd_30.wav",
    "talker0_050303_spd_30.wav",
    "talker0_050102_spd_30.wav",
    "talker0_050006_spd_30.wav",
    "talker0_040307_spd_30.wav",
    "talker0_040200_spd_30.wav",
    "talker0_030304_spd_30.wav",
    "talker0_030001_spd_30.wav",
    "talker0_020302_spd_30.wav",
    "talker0_020200_spd_30.wav",
    "talker0_020106_spd_30.wav",
    "talker0_010201_spd_30.wav",
    "talker0_010100_spd_30.wav",
    "talker0_000202_spd_30.wav",
  ];
  const speed5 = [
    "talker2_060307_spd_36.wav",
    "talker2_060107_spd_36.wav",
    "talker2_060104_spd_36.wav",
    "talker2_060103_spd_36.wav",
    "talker2_060000_spd_36.wav",
    "talker2_050204_spd_36.wav",
    "talker2_050200_spd_36.wav",
    "talker2_040200_spd_36.wav",
    "talker2_030104_spd_36.wav",
    "talker2_030101_spd_36.wav",
    "talker2_030003_spd_36.wav",
    "talker2_020304_spd_36.wav",
    "talker2_020000_spd_36.wav",
    "talker2_010301_spd_36.wav",
    "talker2_010007_spd_36.wav",
    "talker2_010003_spd_36.wav",
    "talker2_000306_spd_36.wav",
    "talker0_070100_spd_36.wav",
    "talker0_060306_spd_36.wav",
    "talker0_060201_spd_36.wav",
    "talker0_050100_spd_36.wav",
    "talker0_040307_spd_36.wav",
    "talker0_040204_spd_36.wav",
    "talker0_040003_spd_36.wav",
    "talker0_030303_spd_36.wav",
    "talker0_020207_spd_36.wav",
    "talker0_020107_spd_36.wav",
    "talker0_020005_spd_36.wav",
    "talker0_020003_spd_36.wav",
    "talker0_020001_spd_36.wav",
    "talker0_010301_spd_36.wav",
    "talker0_010204_spd_36.wav",
    "talker0_010100_spd_36.wav",
    "talker0_000107_spd_36.wav",
    "talker0_000004_spd_36.wav",
    "talker2_070100_spd_36.wav",
  ];
  const speed4 = [
    "talker2_060005_spd_42.wav",
    "talker2_060004_spd_42.wav",
    "talker2_050205_spd_42.wav",
    "talker2_040305_spd_42.wav",
    "talker2_040100_spd_42.wav",
    "talker2_030103_spd_42.wav",
    "talker2_020204_spd_42.wav",
    "talker2_020102_spd_42.wav",
    "talker2_020007_spd_42.wav",
    "talker2_020001_spd_42.wav",
    "talker2_010304_spd_42.wav",
    "talker2_000306_spd_42.wav",
    "talker2_000302_spd_42.wav",
    "talker0_070307_spd_42.wav",
    "talker0_060205_spd_42.wav",
    "talker0_060201_spd_42.wav",
    "talker0_060106_spd_42.wav",
    "talker0_050300_spd_42.wav",
    "talker0_050200_spd_42.wav",
    "talker0_050106_spd_42.wav",
    "talker0_040003_spd_42.wav",
    "talker0_040001_spd_42.wav",
    "talker0_030305_spd_42.wav",
    "talker0_030300_spd_42.wav",
    "talker0_030203_spd_42.wav",
    "talker0_030201_spd_42.wav",
    "talker0_030103_spd_42.wav",
    "talker0_020302_spd_42.wav",
    "talker0_020002_spd_42.wav",
    "talker0_010100_spd_42.wav",
    "talker0_000007_spd_42.wav",
    "talker2_070200_spd_42.wav",
    "talker2_070104_spd_42.wav",
    "talker2_060303_spd_42.wav",
    "talker2_060205_spd_42.wav",
    "talker2_060105_spd_42.wav",
  ];
  const speed3 = [
    "talker2_070006_spd_48.wav",
    "talker2_050302_spd_48.wav",
    "talker2_050204_spd_48.wav",
    "talker2_050103_spd_48.wav",
    "talker2_050006_spd_48.wav",
    "talker2_050005_spd_48.wav",
    "talker2_040301_spd_48.wav",
    "talker2_040101_spd_48.wav",
    "talker2_030202_spd_48.wav",
    "talker2_030103_spd_48.wav",
    "talker2_020103_spd_48.wav",
    "talker2_020002_spd_48.wav",
    "talker2_010101_spd_48.wav",
    "talker2_000207_spd_48.wav",
    "talker0_070107_spd_48.wav",
    "talker0_060305_spd_48.wav",
    "talker0_060007_spd_48.wav",
    "talker0_050204_spd_48.wav",
    "talker0_040204_spd_48.wav",
    "talker0_040100_spd_48.wav",
    "talker0_030201_spd_48.wav",
    "talker0_020307_spd_48.wav",
    "talker0_020301_spd_48.wav",
    "talker0_020106_spd_48.wav",
    "talker0_020103_spd_48.wav",
    "talker0_020100_spd_48.wav",
    "talker0_020003_spd_48.wav",
    "talker0_010006_spd_48.wav",
    "talker0_000201_spd_48.wav",
    "talker0_000200_spd_48.wav",
    "talker2_070301_spd_48.wav",
    "talker2_070206_spd_48.wav",
    "talker2_070107_spd_48.wav",
  ];

  const speed2 = [
    "talker2_040202_spd_54.wav",
    "talker2_030304_spd_54.wav",
    "talker2_030301_spd_54.wav",
    "talker2_030207_spd_54.wav",
    "talker2_020107_spd_54.wav",
    "talker2_010304_spd_54.wav",
    "talker2_010203_spd_54.wav",
    "talker2_010102_spd_54.wav",
    "talker2_010100_spd_54.wav",
    "talker2_000006_spd_54.wav",
    "talker0_070003_spd_54.wav",
    "talker0_070001_spd_54.wav",
    "talker0_060106_spd_54.wav",
    "talker0_060104_spd_54.wav",
    "talker0_050105_spd_54.wav",
    "talker0_050006_spd_54.wav",
    "talker0_040101_spd_54.wav",
    "talker0_030003_spd_54.wav",
    "talker0_020305_spd_54.wav",
    "talker0_020304_spd_54.wav",
    "talker0_020202_spd_54.wav",
    "talker0_020200_spd_54.wav",
    "talker0_020003_spd_54.wav",
    "talker0_000307_spd_54.wav",
    "talker0_000300_spd_54.wav",
    "talker0_000202_spd_54.wav",
    "talker0_000102_spd_54.wav",
    "talker0_000101_spd_54.wav",
    "talker2_070307_spd_54.wav",
    "talker2_070007_spd_54.wav",
    "talker2_070003_spd_54.wav",
    "talker2_060300_spd_54.wav",
    "talker2_060004_spd_54.wav",
    "talker2_040301_spd_54.wav",
  ];
  const speed1 = [
    "talker2_070002_spd_60.wav",
    "talker2_060304_spd_60.wav",
    "talker2_060205_spd_60.wav",
    "talker2_050302_spd_60.wav",
    "talker2_050205_spd_60.wav",
    "talker2_050100_spd_60.wav",
    "talker2_050007_spd_60.wav",
    "talker2_040303_spd_60.wav",
    "talker2_030207_spd_60.wav",
    "talker2_030101_spd_60.wav",
    "talker2_020306_spd_60.wav",
    "talker2_020207_spd_60.wav",
    "talker2_020104_spd_60.wav",
    "talker2_020005_spd_60.wav",
    "talker2_020002_spd_60.wav",
    "talker2_020000_spd_60.wav",
    "talker2_010104_spd_60.wav",
    "talker0_070304_spd_60.wav",
    "talker0_070207_spd_60.wav",
    "talker0_070200_spd_60.wav",
    "talker0_050300_spd_60.wav",
    "talker0_050004_spd_60.wav",
    "talker0_050002_spd_60.wav",
    "talker0_040205_spd_60.wav",
    "talker0_040106_spd_60.wav",
    "talker0_030204_spd_60.wav",
    "talker0_030003_spd_60.wav",
    "talker0_020305_spd_60.wav",
    "talker0_020302_spd_60.wav",
    "talker0_020300_spd_60.wav",
    "talker0_010105_spd_60.wav",
    "talker0_010005_spd_60.wav",
    "talker0_000003_spd_60.wav",
    "talker0_000000_spd_60.wav",
    "talker2_070003_spd_60.wav",
  ];
  const speed0 = [
    "talker2_070101_spd_66.wav",
    "talker2_070007_spd_66.wav",
    "talker2_070003_spd_66.wav",
    "talker2_060302_spd_66.wav",
    "talker2_060203_spd_66.wav",
    "talker2_050306_spd_66.wav",
    "talker2_050104_spd_66.wav",
    "talker2_040105_spd_66.wav",
    "talker2_040104_spd_66.wav",
    "talker2_040007_spd_66.wav",
    "talker2_030100_spd_66.wav",
    "talker2_020304_spd_66.wav",
    "talker2_020004_spd_66.wav",
    "talker2_010206_spd_66.wav",
    "talker2_010203_spd_66.wav",
    "talker2_010202_spd_66.wav",
    "talker2_000004_spd_66.wav",
    "talker0_070107_spd_66.wav",
    "talker0_060301_spd_66.wav",
    "talker0_060006_spd_66.wav",
    "talker0_060003_spd_66.wav",
    "talker0_050207_spd_66.wav",
    "talker0_050105_spd_66.wav",
    "talker0_050005_spd_66.wav",
    "talker0_040205_spd_66.wav",
    "talker0_040101_spd_66.wav",
    "talker0_030304_spd_66.wav",
    "talker0_030300_spd_66.wav",
    "talker0_020204_spd_66.wav",
    "talker0_020203_spd_66.wav",
    "talker0_020201_spd_66.wav",
    "talker0_020000_spd_66.wav",
    "talker0_010103_spd_66.wav",
    "talker0_000001_spd_66.wav",
    "talker0_000000_spd_66.wav",
    "talker2_070305_spd_66.wav",
  ];

  const [audioSpeed, setaudioSpeed] = useState("18");
  // var startTime;
  // const [text, setText] = useState('');

  function timeout() {
    if (round % appConfig.Trials === 0 && initial <= 7) {
      setInitial(initial + 1);
      setaudioSpeed(parseInt(audioSpeed) + initial + (6 - initial));
      if (initial === 7) {
        setDead(1);
      }
    }
  }

  const _handleIndexChange = (index) => {
    slidechangeAudio.play();
    setValue(index);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason && reason === "backdropClick") return;
    setOpen(false);
  };

  function assigment(a) {
    setuserInput((userInput) => [...userInput, a]);
  }
  function disable() {
    setDisabled(true);
    setTimeout(() => {
      setDisabled(false);
    }, config.durationBetweenRound);
  }

  React.useEffect(() => {
    if (open) {
      responceAudio();
    }
  }, [open]);

  function roundUpdate(check) {
    if (check === "button" && round % appConfig.Trials === 0) {
      setRound(round + 1);
    } else {
      handleClickOpen();
    }
  }
  function afterBlock() {
    setRound(round + 1);
    handleClose();
  }
  function startButton() {
    setStartTime(Date.now());
  }
  function stopButton() {
    var endTime = Date.now();
    setDiffrence(endTime - startTime);
  }

  function calc(slider) {
    var text = `${"0"}${slider}${key.current}`;
    setInput(text);
    if (i % 2 === 0) {
      setCsvUser((csvUser) => [...csvUser, text]);
      setTime((time) => [...time, diffrence]);
    }
    i++;

    if (text === generated[generated.length - 1]) {
      setAnswer("true");
      if (i % 2 === 0) setCsvResult((csvResult) => [...csvResult, "true"]);
      var res = 10 - diffrence / 1000;
      if (res < 0) return 1;
      else return res;
    } else {
      if (i % 2 === 0);
      setCsvResult((csvResult) => [...csvResult, "false"]);
      setAnswer("false");
      return 0;
    }
  }
  function data(slider, keypad, file) {
    userToPost = {
      key: uuidv4(),
      name: localStorage.getItem("Code"),
      gameName: `${"0"}${slider}${keypad}`,
      gameMatrix: "null",
      userSelectedName: generated[generated.length - 1],
      userSelectedMatrix: "null",
      time: "null",
    };
  }
  const send = async () => {
    const response = await axios
      .post(appConfig + "/capture-activity", userToPost)
      .catch((error) => console.log("Error: ", error));
    if (response && response.data) {
    }
  };

  function assigmentRandom(a) {
    setGenerated((generated) => [...generated, a]);
  }

  function output() {
    const chars = file.split("");
    setaaShow(AA[chars[1]]);
    setbbShow(BB[chars[3]]);
    setccshow(CC[chars[5]]);
  }
  function set() {
    // if (key.current) {
    if (rfile) setFile(rfile.slice(8, 14));
    setScore(parseInt(Score) + parseInt(calc(value, key, file)));
    data(parseInt(Score) + parseInt(calc(value, key, file)));
    assigmentRandom(file);
    // }
  }
  function playAudio() {
    setRfile(
      eval(`speed${initial}`)[
        Math.floor(Math.random() * eval(`speed${initial}`).length)
      ] ?? "talker2_010203_spd_66.wav"
    );
  }
  React.useEffect(() => {
    if (rfile) {
      const randomSong = require(`../Audio/${rfile}`);
      var audio1 = new Audio(randomSong);
      set();
      if (initial < 8) {
        audio1.load();
        audio1.play();
        startButton();
      }
    }
  }, [rfile]);

  function responceAudio() {
    if (initial !== 0) {
      if (answer === "false") {
        audio1.play();
      }
      if (answer === "true") {
        audio11.play();
      }
    }
  }

  useEffect(() => {
    timeout();
    output();
    responceAudio();
    if (initial < 8 && dead !== 1) {
      if (initial > 0);
      disable();
      console.log("inside play sound", initial);
      setTimeout(() => {
        playAudio();
      }, 300);
    }
  }, [round]);

  useEffect(() => {
    setVa(key);
  }, [key]);

  return (
    <div className="container-fluid d-flex col-12">
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        PaperProps={{
          style: {
            // backgroundColor: "#2EA0DE",
            backgroundColor: "#fff",
            borderRadius: 20,
            // backgroundImage:
            //   "url(https://img.freepik.com/free-photo/abstract-luxury-gradient-blue-background-smooth-dark-blue-with-black-vignette-studio-banner_1258-87854.jpg?w=740&t=st=1659332876~exp=1659333476~hmac=ecb85be2b178efeacc1af797871746470e17d254fb1a1d60d68b899876831969)",
            // boxShadow: "none",
          },
        }}
      >
        <DialogTitle id="alert-dialog-title">
          <h2 style={{ fontFamily: "Noto sans" }}>{appConfig.popUpHeading}</h2>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <h3 className="sub" style={{ fontFamily: "Noto sans" }}>
              Your Score: {parseInt(Score) ?? "0"}
            </h3>
            {initial === 8 && (
              <>
                <h2 className="sub">Game Over</h2>
                <Csv
                  value1={generated}
                  value2={csvUser}
                  value3={csvResult}
                  value4={time}
                />
              </>
            )}
          </DialogContentText>
        </DialogContent>
        <div style={{ backgroundColor: "#2EA0DE" }}>
          {initial !== 8 && (
            <DialogActions>
              <Button
                onClick={afterBlock}
                autoFocus
                className="sub"
                style={{
                  color: "#fff",
                  textAlign: "center",
                  textDecoration: "underline",
                }}
              >
                {" "}
                <h5>{appConfig.popUpNextButton}</h5>
              </Button>
            </DialogActions>
          )}
          {initial === 8 && (
            <DialogActions>
              <Button
                autoFocus
                style={{
                  color: "#fff",
                  textAlign: "center",
                  textDecoration: "underline",
                }}
              >
                <h5>{appConfig.popUpEndButton}</h5>
              </Button>
            </DialogActions>
          )}
        </div>
      </Dialog>

      <div className="col-4 row ">
        <div className="col-2 p-3">
          <Slider onChange={_handleIndexChange} currentIndex={value} />
        </div>
        <div className="col-3">
          <ImageGroup setValue={_handleIndexChange} />
        </div>
      </div>
      <div className="col-4 bg-light rounded" style={{ opacity: 0.8 }}>
        <div className="w-100">
          <div className="magenta mt-5">
            {disabled ? (
              <div className="overlay-loading">
                <CircularProgress />
              </div>
            ) : null}

            {round === 0 && (
              <h3 className="sub">Please pay attention to the instructions </h3>
            )}
            {round > 0 && (
              <>
                <h2 className="name">Game Name</h2>
                {appConfig.showScoreInConsole == "true" && (
                  <h2 className="sub">Your Score: {Score}</h2>
                )}
                {answer === "true" && (
                  <img
                    src={tick}
                    style={{ marginLeft: "41%" }}
                    width="80"
                    height="80"
                    alt="img"
                  ></img>
                )}
                {answer === "false" && (
                  <img
                    src={wrong}
                    style={{ marginLeft: "41%" }}
                    width="60"
                    height="60"
                    alt="img"
                  ></img>
                )}

                {bbShow && (
                  <div>
                    {answer === "false" && (
                      <h3 className="sub">
                        {appConfig.feedbackTextWrong}
                        {appConfig.showAnswer && (
                          <div className="sub">{aaShow} </div>
                        )}
                      </h3>
                    )}
                    {answer === "false" && (
                      <h3 className="sub">
                        {appConfig.showAnswer && (
                          <div className="sub">
                            {" "}
                            <img
                              src={require(`../Assets/Button/0${ccShow}_${bbShow}.png`)}
                              height="50"
                              width="50"
                              alt="img"
                            ></img>
                          </div>
                        )}
                      </h3>
                    )}
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
      <div className="col-4 mt-3">
        <table id="matrix" style={{ opacity: disabled ? 0.5 : 1 }}>
          <tr>
            <td>
              <button
                onClick={() => {
                  // clickSound();
                  key.current = "0000";
                  assigment("0000");
                  setReload(!reload);
                  // output();
                  set();
                  stopButton();
                  disable();
                  startButton();
                  roundUpdate("button");
                }}
                disabled={disabled}
              >
                <img
                  src={require("../Assets/Button/01_Blue.png")}
                  width="45"
                  height="45"
                  alt="img"
                />
              </button>
            </td>
            <td>
              <button
                onClickCapture={() => {
                  assigment("0100");
                  key.current = "0100";
                  setReload(!reload);
                  // output();
                  set();
                  stopButton();
                  disable();
                  startButton();
                  roundUpdate("button");
                }}
                disabled={disabled}
              >
                <img
                  src={require("../Assets/Button/01_Red.png")}
                  width="45"
                  height="45"
                  alt="img"
                />
              </button>
            </td>

            <td>
              <button
                onClickCapture={() => {
                  assigment("0200");
                  key.current = "0200";
                  setReload(!reload);
                  // output();
                  set();
                  stopButton();
                  disable();
                  startButton();
                  roundUpdate("button");
                }}
                disabled={disabled}
              >
                <img
                  src={require("../Assets/Button/01_White.png")}
                  width="45"
                  height="45"
                  alt="img"
                />
              </button>
            </td>
            <td>
              <button
                onClickCapture={() => {
                  assigment("0300");
                  key.current = "0300";
                  setReload(!reload);
                  // output();
                  set();
                  stopButton();
                  disable();
                  startButton();
                  roundUpdate("button");
                }}
                disabled={disabled}
              >
                <img
                  src={require("../Assets/Button/01_Green.png")}
                  width="45"
                  height="45"
                  alt="img"
                />
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <button
                onClickCapture={() => {
                  assigment("0001");
                  assigment("0001");
                  setReload(!reload);
                  // output();
                  set();
                  stopButton();
                  disable();
                  startButton();
                  roundUpdate("button");
                }}
                disabled={disabled}
              >
                <img
                  src={require("../Assets/Button/02_Blue.png")}
                  width="45"
                  height="45"
                  alt="img"
                />
              </button>
            </td>
            <td>
              <button
                onClickCapture={() => {
                  assigment("0101");
                  key.current = "0101";
                  setReload(!reload);
                  // output();
                  set();
                  stopButton();
                  disable();
                  startButton();
                  roundUpdate("button");
                }}
                disabled={disabled}
              >
                <img
                  src={require("../Assets/Button/02_Red.png")}
                  width="45"
                  height="45"
                  alt="img"
                />
              </button>
            </td>
            <td>
              <button
                onClickCapture={() => {
                  key.current = "0201";
                  assigment("0201");
                  setReload(!reload);
                  // output();
                  set();
                  stopButton();
                  disable();
                  startButton();
                  roundUpdate("button");
                }}
                disabled={disabled}
              >
                <img
                  src={require("../Assets/Button/02_White.png")}
                  width="45"
                  height="45"
                  alt="img"
                />
              </button>
            </td>
            <td>
              <button
                onClickCapture={() => {
                  assigment("0301");
                  key.current = "0301";
                  setReload(!reload);
                  // output();
                  set();
                  stopButton();
                  disable();
                  startButton();
                  roundUpdate("button");
                }}
                disabled={disabled}
              >
                <img
                  src={require("../Assets/Button/02_Green.png")}
                  width="45"
                  height="45"
                  alt="img"
                />
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <button
                onClickCapture={() => {
                  assigment("0002");
                  key.current = "0002";
                  setReload(!reload);
                  // output();
                  set();
                  stopButton();
                  disable();
                  startButton();
                  roundUpdate("button");
                }}
                disabled={disabled}
              >
                <img
                  src={require("../Assets/Button/03_Blue.png")}
                  width="45"
                  height="45"
                  alt="img"
                />
              </button>
            </td>
            <td>
              <button
                onClickCapture={() => {
                  key.current = "0102";
                  assigment("0102");
                  setReload(!reload);
                  // output();
                  set();
                  stopButton();
                  disable();
                  startButton();
                  roundUpdate("button");
                }}
                disabled={disabled}
              >
                <img
                  src={require("../Assets/Button/03_Red.png")}
                  width="45"
                  height="45"
                  alt="img"
                />
              </button>
            </td>

            <td>
              <button
                onClickCapture={() => {
                  assigment("0202");
                  key.current = "0202";
                  setReload(!reload);
                  // output();
                  set();
                  stopButton();
                  disable();
                  startButton();
                  roundUpdate("button");
                }}
                disabled={disabled}
              >
                <img
                  src={require("../Assets/Button/03_White.png")}
                  width="45"
                  height="45"
                  alt="img"
                />
              </button>
            </td>
            <td>
              <button
                onClickCapture={() => {
                  assigment("0302");
                  key.current = "0302";
                  setReload(!reload);
                  // output();
                  set();
                  stopButton();
                  disable();
                  startButton();
                  roundUpdate("button");
                }}
                disabled={disabled}
              >
                <img
                  src={require("../Assets/Button/03_Green.png")}
                  width="45"
                  height="45"
                  alt="img"
                />
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <button
                onClickCapture={() => {
                  assigment("0003");
                  key.current = "0003";
                  setReload(!reload);
                  // output();
                  set();
                  stopButton();
                  disable();
                  startButton();
                  roundUpdate("button");
                }}
                disabled={disabled}
              >
                <img
                  src={require("../Assets/Button/04_Blue.png")}
                  width="45"
                  height="45"
                  alt="img"
                />
              </button>
            </td>
            <td>
              <button
                onClickCapture={() => {
                  assigment("0103");
                  key.current = "0103";
                  setReload(!reload);
                  // output();
                  set();
                  stopButton();
                  disable();
                  startButton();
                  roundUpdate("button");
                }}
                disabled={disabled}
              >
                <img
                  src={require("../Assets/Button/04_Red.png")}
                  width="45"
                  alt="img"
                  height="45"
                />
              </button>
            </td>

            <td>
              <button
                onClickCapture={() => {
                  assigment("0203");
                  key.current = "0203";
                  setReload(!reload);
                  // output();
                  set();
                  stopButton();
                  disable();
                  startButton();
                  roundUpdate("button");
                }}
                disabled={disabled}
              >
                <img
                  src={require("../Assets/Button/04_White.png")}
                  width="45"
                  height="45"
                  alt="img"
                />
              </button>
            </td>
            <td>
              <button
                onClickCapture={() => {
                  assigment("0303");
                  key.current = "0303";
                  setReload(!reload);
                  // output();
                  set();
                  stopButton();
                  disable();
                  startButton();
                  roundUpdate("button");
                }}
                disabled={disabled}
              >
                <img
                  src={require("../Assets/Button/04_Green.png")}
                  width="45"
                  height="45"
                  alt="img"
                />
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <button
                onClickCapture={() => {
                  assigment("0004");
                  key.current = "0004";
                  setReload(!reload);
                  // output();
                  set();
                  stopButton();
                  disable();
                  startButton();
                  roundUpdate("button");
                }}
                disabled={disabled}
              >
                <img
                  src={require("../Assets/Button/05_Blue.png")}
                  width="45"
                  height="45"
                  alt="img"
                />
              </button>
            </td>
            <td>
              <button
                onClickCapture={() => {
                  assigment("0104");
                  key.current = "0104";
                  setReload(!reload);
                  // output();
                  set();
                  stopButton();
                  disable();
                  startButton();
                  roundUpdate("button");
                }}
                disabled={disabled}
              >
                <img
                  src={require("../Assets/Button/05_Red.png")}
                  width="45"
                  height="45"
                  alt="img"
                />
              </button>
            </td>

            <td>
              <button
                onClickCapture={() => {
                  assigment("0204");
                  key.current = "0204";
                  setReload(!reload);
                  // output();
                  set();
                  stopButton();
                  disable();
                  startButton();
                  roundUpdate("button");
                }}
                disabled={disabled}
              >
                <img
                  src={require("../Assets/Button/05_White.png")}
                  width="45"
                  height="45"
                  alt="img"
                />
              </button>
            </td>
            <td>
              <button
                onClickCapture={() => {
                  assigment("0304");
                  key.current = "0304";
                  setReload(!reload);
                  // output();
                  set();
                  stopButton();
                  disable();
                  startButton();
                  roundUpdate("button");
                }}
                disabled={disabled}
              >
                <img
                  src={require("../Assets/Button/05_Green.png")}
                  width="45"
                  height="45"
                  alt="img"
                />
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <button
                onClickCapture={() => {
                  assigment("0005");
                  key.current = "0005";
                  setReload(!reload);
                  // output();
                  set();
                  stopButton();
                  disable();
                  startButton();
                  roundUpdate("button");
                }}
                disabled={disabled}
              >
                <img
                  src={require("../Assets/Button/06_Blue.png")}
                  width="45"
                  height="45"
                  alt="img"
                />
              </button>
            </td>
            <td>
              <button
                onClickCapture={() => {
                  assigment("0105");
                  key.current = "0105";
                  setReload(!reload);
                  // output();
                  set();
                  stopButton();
                  disable();
                  startButton();
                  roundUpdate("button");
                }}
                disabled={disabled}
              >
                <img
                  src={require("../Assets/Button/06_Red.png")}
                  width="45"
                  height="45"
                  alt="img"
                />
              </button>
            </td>

            <td>
              <button
                onClickCapture={() => {
                  assigment("0205");
                  key.current = "0205";
                  setReload(!reload);
                  // output();
                  set();
                  stopButton();
                  disable();
                  startButton();
                  roundUpdate("button");
                }}
                disabled={disabled}
              >
                <img
                  src={require("../Assets/Button/06_White.png")}
                  width="45"
                  height="45"
                  alt="img"
                />
              </button>
            </td>
            <td>
              <button
                onClickCapture={() => {
                  assigment("0305");
                  key.current = "0305";
                  setReload(!reload);
                  // output();
                  set();
                  stopButton();
                  disable();
                  startButton();
                  roundUpdate("button");
                }}
                disabled={disabled}
              >
                <img
                  src={require("../Assets/Button/06_Green.png")}
                  width="45"
                  height="45"
                  alt="img"
                />
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <button
                onClickCapture={() => {
                  assigment("0006");
                  key.current = "0006";
                  setReload(!reload);
                  // output();
                  set();
                  stopButton();
                  disable();
                  startButton();
                  roundUpdate("button");
                }}
                disabled={disabled}
              >
                <img
                  src={require("../Assets/Button/07_Blue.png")}
                  width="45"
                  height="45"
                  alt="img"
                />
              </button>
            </td>
            <td>
              <button
                onClickCapture={() => {
                  assigment("0106");
                  key.current = "0106";
                  setReload(!reload);
                  // output();
                  set();
                  stopButton();
                  disable();
                  startButton();
                  roundUpdate("button");
                }}
                disabled={disabled}
              >
                <img
                  src={require("../Assets/Button/07_Red.png")}
                  width="45"
                  height="45"
                  alt="img"
                />
              </button>
            </td>

            <td>
              <button
                onClickCapture={() => {
                  assigment("0206");
                  key.current = "0206";
                  setReload(!reload);
                  // output();
                  set();
                  stopButton();
                  disable();
                  startButton();
                  roundUpdate("button");
                }}
                disabled={disabled}
              >
                <img
                  src={require("../Assets/Button/07_White.png")}
                  width="45"
                  height="45"
                  alt="img"
                />
              </button>
            </td>
            <td>
              <button
                onClickCapture={() => {
                  assigment("0306");
                  key.current = "0306";
                  setReload(!reload);
                  // output();
                  set();
                  stopButton();
                  disable();
                  startButton();
                  roundUpdate("button");
                }}
                disabled={disabled}
              >
                <img
                  src={require("../Assets/Button/07_Green.png")}
                  width="45"
                  height="45"
                  alt="img"
                />
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <button
                onClickCapture={() => {
                  assigment("0007");
                  key.current = "0007";
                  setReload(!reload);
                  // output();
                  set();
                  stopButton();
                  disable();
                  startButton();
                  roundUpdate("button");
                }}
                disabled={disabled}
              >
                <img
                  src={require("../Assets/Button/08_Blue.png")}
                  width="45"
                  height="45"
                  alt="img"
                />
              </button>
            </td>
            <td>
              <button
                onClickCapture={() => {
                  assigment("0107");
                  key.current = "0107";
                  setReload(!reload);
                  // output();
                  set();
                  stopButton();
                  disable();
                  startButton();
                  roundUpdate("button");
                }}
                disabled={disabled}
              >
                <img
                  src={require("../Assets/Button/08_Red.png")}
                  width="45"
                  height="45"
                  alt="img"
                />
              </button>
            </td>

            <td>
              <button
                onClickCapture={() => {
                  assigment("0207");
                  key.current = "0207";
                  setReload(!reload);
                  // output();
                  set();
                  stopButton();
                  disable();
                  startButton();
                  roundUpdate("button");
                }}
                disabled={disabled}
              >
                <img
                  src={require("../Assets/Button/08_White.png")}
                  width="45"
                  height="45"
                  alt="img"
                />
              </button>
            </td>
            <td>
              <button
                onClickCapture={() => {
                  assigment("0307");
                  key.current = "0307";
                  setReload(!reload);
                  // output();
                  set();
                  stopButton();
                  disable();
                  startButton();
                  roundUpdate("button");
                }}
                disabled={disabled}
              >
                <img
                  src={require("../Assets/Button/08_Green.png")}
                  width="45"
                  height="45"
                  alt="greenpng"
                />
              </button>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default Buttons;
