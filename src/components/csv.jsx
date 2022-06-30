import { CSVLink, CSVDownload } from "react-csv";
import React from 'react';
import './csv.css'

function csv(generated) {
 
  var userInput=[],generatedData=[],userkey,answer=[];

{console.log("csvgenetared",generated.value1)}
{console.log("csvuser",generated.value2)}
{console.log("csvresult",generated.value3)}
console.log("uuu",userInput)
  var info=[
    userInput=generated.value1,
   generatedData=generated.value2,
   answer=generated.value3,
   userkey=[localStorage.getItem("Code")],

   
  ]



  
  return (
    <div>
      {console.log("info",info)}
      

<div id="tudo">

	<div class="gameover">
	<p> GAME </p>
	<p> OVER </p>
	</div>


</div>

       <CSVLink  data={info} ><button class="button-33" role="button"><span>Download CSV</span></button></CSVLink>
       



    </div>
  )
}

export default csv
