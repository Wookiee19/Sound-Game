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
      value: 25,
      label: "Delta"
    },
    {
      value: 50,
      label: "Echo"
    },
    {
      value: 75,
      label: "Juliett"
    },
    {
      value: 100,
      label: "Juliett"
    }
  ];
  
  export default function Sliders() {
    return (
      <Stack sx={{ height: 500, marginTop:"-18%", marginLeft:"2%" }}  spacing={1} direction="row">
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
  