import React, { useRef } from "react";
import "./buttons .css";
import { useState } from "react";
import { useEffect } from "react";
import config from "../config";

import Slider from "./Slider";
import wrong from "../Assets/cancel.png";
import tick from "../Assets/check.png";
import "./styles.css";
import "./slider.css";
import sapceship from "../Assets/background2.jpg";
import appConfig from "../config";
import { v4 as uuidv4 } from "uuid";
import audioCorrect from "../Audio/add/correct.wav";
import audioWrong from "../Audio/add/wrong.wav";
import { ImageGroup } from "./name-group";
import slideChange from "../Assets/slidechange.wav";
import { ButtonGroup } from "./button-group";
import { DialogComponent } from "./diaglog";
import { CenterSection } from "./center-section";
import ModalInstruction from "./modal";
import useModal from "./useModal";
import { Button } from "@mui/material";
const playfile = require("../Audio/add/click.wav");

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
var rfile;
var file = "00";

var i = 0;
function Buttons() {
  const [open, setOpen] = React.useState(false);
  const key = useRef();
  const answerValueRef = useRef();
  const initialValueRef = useRef(0);
  const triggerPlayCorrectAudio = createTriggerPlayAudio("btnCorrect");
  const triggerPlayWrongAudio = createTriggerPlayAudio("btnWrong");

  const [reload, setReload] = useState();
  const [userInput, setuserInput] = useState([""]);
  const [generated, setGenerated] = useState([""]);
  const [value, setValue] = useState(0);
  const [Score, setScore] = useState(0);
  const [disabled, setDisabled] = useState(false);
  const [initial, setInitial] = useState(0);
  const [round, setRound] = useState(0);
  const [answer, setAnswer] = useState("true");
  const [aaShow, setaaShow] = useState("");
  const [bbShow, setbbShow] = useState("");
  const [ccShow, setccshow] = useState("");
  const [csvUser, setCsvUser] = useState([""]);
  const [csvResult, setCsvResult] = useState([""]);
  const [startTime, setStartTime] = useState();
  const [diffrence, setDiffrence] = useState(0);
  const [time, setTime] = useState([""]);
  const [dead, setDead] = React.useState(0);
  const [audioSpeed, setaudioSpeed] = useState("18");
  const [code, setCode] = useState();
  const [show, setShow] = useState(false);

  const [disables, setDisables] = useState(true);

  var date;
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
    setValue(index);
    playAudioFunc(slideChange);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason && reason === "backdropClick") return;
    setOpen(false);
  };

  function assigment(a) {
    key.current = a;
    setuserInput((userInput) => [...userInput, a]);
  }
  function disable() {
    setDisabled(true);
    setTimeout(() => {
      setDisabled(false);
    }, config.durationBetweenRound);
  }

  function roundUpdate(check) {
    responceAudio();
    if(initialValueRef.current === 8) {
      handleClickOpen();
    }
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
    var text = `${"0"}${slider}${key.current ?? "00"}`;
    if (i % 2 === 0) {
      setCsvUser((csvUser) => [...csvUser, text]);
      setTime((time) => [...time, diffrence]);
    }
    i++;
    console.log("===>", text, generated[generated.length - 1]);
    if (text === generated[generated.length - 1]) {
      setAnswer("true");
      answerValueRef.current = "true";
      if (i % 2 === 0) setCsvResult((csvResult) => [...csvResult, "true"]);
      var res = 10 - diffrence / 1000;
      if (res < 0) return 1;
      else return res;
    } else {
      if (i % 2 === 0);
      setCsvResult((csvResult) => [...csvResult, "false"]);
      setAnswer("false");
      answerValueRef.current = "false";
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
    console.log({ SEC: calc(value, key, file) });
    if (rfile) file = rfile.slice(8, 14);
    setScore(parseInt(Score) + parseInt(calc(value, key, file)));
    data(parseInt(Score) + parseInt(calc(value, key, file)));
    assigmentRandom(file);
  }

  function playAudio(initial) {
    rfile =
      eval(`speed${initial}`)[
        Math.floor(Math.random() * eval(`speed${initial}`).length)
      ] ?? "talker2_010203_spd_66.wav";
    const randomSong = require(`../Audio/${rfile}`);
    // var audio1 = new Audio(randomSong);
    // audio1.load();
    if (rfile) file = rfile.slice(8, 14);
    assigmentRandom(file);
    playQuestionAudioFunc(randomSong)
    // setTimeout(() => {
    //   audio1.play();
    // }, 500);
    startButton();
  }

  function responceAudio() {
    if (initial !== 0) {
  
      if (answerValueRef.current === "false") {
        triggerPlayWrongAudio();
      }
      if (answerValueRef.current === "true") {
        triggerPlayCorrectAudio();
      }
    }
  }

  const handleChangeRound = (isFirstTime) => {
    timeout();
    output();
    if (initial < 8 && dead !== 1) {
      if (initial > 0);
      disable();
      if(isFirstTime){
        // initialValueRef.current = initial;
        document.getElementById("btnQuestion").click();
      } else {
        if(questionTimeout) clearTimeout(questionTimeout);
        // initialValueRef.current = initial;
        questionTimeout = setTimeout(() => {
          document.getElementById("btnQuestion").click();
        }, 300);
      }
    }
  };

  useEffect(() => {
    if (show && round) {
      handleChangeRound();
    }
  }, [round, show]);

  useEffect(() => {
    console.log({ Score });
  }, [Score]);

  const playclick = () => {
    playAudioFunc(playfile);
    setTimeout(() => {
      setShow((preShow) => !preShow);
      handleChangeRound(true);
    }, 300);
  };

  // for first home screen
  const { isShowing, toggle } = useModal();

  function assign(a) {
    setCode(code);
    date = new Date();
    let result = a.concat("_", date);
    localStorage.setItem("code", result);
    setDisables(false);
  }

  return (
    <>
      <div style={{display: "none"}}>
        <Button id="btnCorrect" onClick={createPlayAudioFunc(audioCorrect)} />
        <Button id="btnWrong" onClick={createPlayAudioFunc(audioWrong)}/>
        <Button id="btnQuestion" onClick={() => playAudio(initialValueRef.current)}/>

        <audio id="audioTagId" controls src="" />
        <audio id="audioQuestionId" controls src="" />
      </div>
      {show ? (
        <img
          src={sapceship}
          width="100%"
          height="100%"
          className="over"
          alt="background"
        />
      ) : null}
      {!show ? (
        <div className="row container-fluid col-12 bipund">
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
              onClick={playclick}
              disabled={disables}
              className="button-29 my-5"
            >
              Play Now
            </button>

            <button className="button-default" onClick={toggle}>
              Instruction
            </button>
            <ModalInstruction isShowing={isShowing} hide={toggle} />
          </div>
        </div>
      ) : (
        <div
          className="makebottom w-100 ml-5 mr-1"
          style={{ overflow: "hidden" }}
        >
          <div className="container-fluid d-flex col-12">
            <DialogComponent
              open={open}
              handleClose={handleClose}
              Score={Score}
              initial={initial}
              generated={generated}
              csvUser={csvUser}
              csvResult={csvResult}
              time={time}
              afterBlock={afterBlock}
            />
            <div className="col-4 row ">
              <div className="col-2 p-3">
                <Slider onChange={_handleIndexChange} currentIndex={value} />
              </div>
              <div className="col-3">
                <ImageGroup setValue={_handleIndexChange} />
              </div>
            </div>
            <div className="col-4 bg-light rounded" style={{ opacity: 0.8 }}>
              <CenterSection
                disabled={disabled}
                round={round}
                Score={Score}
                answer={answer}
                tick={tick}
                wrong={wrong}
                bbShow={bbShow}
                aaShow={aaShow}
                ccShow={ccShow}
              />
            </div>
            <div className="col-4 mt-3">
              <ButtonGroup
                disabled={disabled}
                currentKey={key}
                assigment={assigment}
                setReload={setReload}
                set={set}
                stopButton={stopButton}
                disable={disable}
                startButton={startButton}
                roundUpdate={roundUpdate}
                reload={reload}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Buttons;
var questionTimeout;

const createTriggerPlayAudio = (btnId) => () => {
  try {
    document.getElementById(btnId).click();
  } catch (error) {
    console.log("audio", error);
  }
}

const createPlayAudioFunc = audioUrl => () => playAudioFunc(audioUrl);

const playAudioFunc = audioUrl => {
  var btnAudioEl = document.getElementById('audioTagId');
  handlePlayAudio(audioUrl, btnAudioEl);
}

const playQuestionAudioFunc = audioUrl => {
  var questionAudioEl = document.getElementById('audioQuestionId');
  handlePlayAudio(audioUrl, questionAudioEl);
}

const handlePlayAudio = (audioUrl, audioEl) => {
  try {
    audioEl.src = audioUrl;
    audioEl.load(); //call this to just preload the audio without playing
    audioEl.play(); //call this to play the song right away
  } catch (error) {
    console.log(audioUrl, error);
    // Try again
    audioEl.play();
  }
}
