import React, { useState } from "react";
import ExportReactCSV from "./ExportReactCSV";



function csv(generated) {
  // const [customers, setCustomers] = useState(customersData());
  var userInput=[],generatedData=[],userkey,answer=[],time=[];
  let name=localStorage.getItem("code");
  let val1=generated.value1;
  let val2=generated.value2;
  let val3=generated.value3;
  let val4=generated.value4;
  let rem1=val1.splice(1,1);
  let rem2=val2.splice(1,1);
  let rem3=val3.splice(1,1);
  let rem4=val4.splice(1,1)
  const headers = [
    { label: "Generated", key: "Generated" },
    { label: "User Input", key: "UserInput" },
    { label: "Answer", key: "Answer" },
    { label: "Time", key: "Time" },
    { label: "Username", key: "Username" }
  ];

  function customersData() {
    const custs = [];
   

    for (let i = 0; i <= 25; i++) {
      custs[i] = {
        
        Generated: val2[i],
        UserInput: val1[i],
        Answer: val3[i],
        Time: val4[i],
        Username:name
       
      };
    }
    return custs;
  }



  return (
    <div className="App">
     
          <ExportReactCSV
            csvHeaders={headers}
            csvData={customersData()}
            fileName={name}
          />
       
     
    </div>
  );
}

export default csv;



