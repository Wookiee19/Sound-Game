import { CSVLink, CSVDownload } from "react-csv";

const csvData = [
  ["key","RandomCommand","userInput"],
  ["a1111", "charli-11", "charli-11"],
  ["a1111", "charli-11", "charli-11"],
  ["a1111", "charli-11", "charli-11"],
  ["a1111", "charli-11", "charli-11"],
  
];
<CSVLink data={csvData}>Download me</CSVLink>;
