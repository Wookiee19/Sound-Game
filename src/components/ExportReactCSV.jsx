import React from "react";
import { CSVLink } from "react-csv";
// import { Button } from "react-bootstrap";

const ExportReactCSV = ({ csvHeaders, csvData, fileName }) => {
  console.log("data=======", csvData);
  return (
    <CSVLink headers={csvHeaders} data={csvData} filename={fileName}>
      <button variant="success">Export CSV</button>
    </CSVLink>
  );
};

export default ExportReactCSV;
