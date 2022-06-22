import { CSVLink, CSVDownload } from "react-csv";
import React from 'react';
import Csv from './csv'

function csv() {
  var userInput,generatedData,userkey,slider;
  var info=[
    userInput=[localStorage.getItem("generated")],
   generatedData=[localStorage.getItem("user")],
   userkey=[localStorage.getItem("Code")],
   slider=[localStorage.getItem("slider")]
   
  ]
//  var headers = [
//     { label: "USER INPUT", key: "userInput" },
//     { label: "GENRATED DATA", key: "generatedData" },
//     { label: "USER KEY", key: "userkey" },
//     { label: "Slider", key: "slider" }
//   ];


  
  return (
    <div>
      {console.log("info",info)}
       <CSVLink data={info} >Download me</CSVLink>
    </div>
  )
}

export default csv
