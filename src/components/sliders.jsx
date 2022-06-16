import * as React from "react";
import Stack from "@mui/material/Stack";
import Slider from "@mui/material/Slider";
import "./slider.css"

function valuetext(value) {
    return `${value}°C`;
  }
  
  const marks = [
    {
      value: 0,
      label: "Charlie"
    },
    {
      value: 12.5,
      label: "Ringo"
    }, 
    {
      value:25,
      label: "Laker"
    },
    {
      value: 37.5,
      label: "Hopper"
    },
    {
      value: 50,
      label: "Tiger"
    },
    {
      value: 67.5,
      label: "Eagle"
    },
    {
      value: 80,
      label: "Baron"
    }
  ];
  
  export default function Sliders() {
    return (
      <Stack sx={{ height: 250, marginTop:"-25%", marginLeft:"2%" }}  spacing={1} direction="row">
        <Slider
        
          getAriaLabel={() => "Temperature"}
          orientation="vertical"
          getAriaValueText={valuetext}
          defaultValue={[20]}
          valueLabelDisplay="auto"
          marks={marks}
        />
      </Stack>
    );
  }
  