import { CSVLink, CSVDownload } from "react-csv";
import React from 'react';
import './csv.css'

function csv(generated) {
 
  var userInput=[],generatedData=[],userkey,answer=[];
  let name=localStorage.getItem("code");
  let val1=generated.value1;
  let val2=generated.value2;
  let val3=generated.value3;
  // let rem1=val1.splice(1,1);
  // let rem2=val2.splice(1,1);
  // let rem3=val3.splice(1,1);
  {console.log("csvgenetared",generated.value1)}
{console.log("csvuser",generated.value2)}
{console.log("csvgenetared",generated.value1)}
{console.log("csvuser",generated.value2)}
{console.log("csvresult",localStorage.getItem("code"))}
console.log("uuu",userInput)
  var info=[
    userInput=val1,
   generatedData=val2,
   answer=val3,
   userkey=[localStorage.getItem("code")],

   
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

       <CSVLink  data={info} filename={name+".csv"}><button class="button-33" role="button"><span>Download CSV</span>{console.log("dddd",name)}</button></CSVLink>
       



    </div>
  )
}

export default csv
