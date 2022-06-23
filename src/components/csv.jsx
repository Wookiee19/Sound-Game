import { CSVLink, CSVDownload } from "react-csv";
import React from 'react';
import './csv.css'

function csv() {
  var userInput,generatedData,userkey,slider;
  var info=[
    userInput=[localStorage.getItem("generated")],
   generatedData=[localStorage.getItem("user")],
   userkey=[localStorage.getItem("Code")],
   slider=[localStorage.getItem("slider")]
   
  ]



  
  return (
    <div>
      {console.log("info",info)}
       <CSVLink  data={info} ><button class="button-33" role="button"><span>Download CSV</span></button></CSVLink>
       



    </div>
  )
}

export default csv
