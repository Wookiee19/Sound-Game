import React from "react";

import Slider from "react-custom-slider";

var generated=["SliderInput"];
class Sliders extends React.Component {
 
  constructor(props) {
    
    super(props);
    this.state = {
      value: 1,
      range: [0, 0],
      
    };
  }
  onSliderChange = (value) => {
    if (value < 0 || value > 7) {
      return;
    }
    this.setState(
      {
        value
      },
      () => {
        
        generated= [...generated, this.state.value];
        console.log("generated",generated);
        localStorage.setItem("slider",generated)
      }
    );
  };
  

  render() {
    let max = 7;

    return (
      <div style={{ margin: 10, marginLeft:250 }}>
        
        <Slider
          dots
          // value	number (required)	continuously updated value
          value={this.state.value}
          // defaultValue	number (required)	initial value
          defaultValue={this.state.value}
          // showValue	true, false, 'active'	displays current value on a label
          showValue={false}
          // valueLabelColor	string
          valueLabelColor={"red"}
          // valueLabelActiveColor	string

          // valueLabelPadding	number

          // valueLabelStyle	object	user custom style for value label

          // min	number	min slider value
          min={0}
          // max	number	max slider value
          max={max}
          // stepSize	number	interval between 2 steps (default is 1)
          stepSize={1}
          // disabled	boolean

          // disabledColor	string	color used when the slider is disabled

          // onChange	function (callback)	called every time value changes ( value as argument)
          onChange={this.onSliderChange}
          // onRelease	function (callback)	called once slider is released ( value as argument)

          // valueRenderer	function (callback)	used by value label (to display a unit such as %)

          // trackLength	number	track's height or width (depending on the orientation)
          trackLength={max * 30}
          // trackColor	string
          trackColor={"green"}
          // trackThickness	number
          trackThickness={15}
          // trackShape	'squared', 'rounded'
          trackShape="squared"
          // trackStyle	object	user custom styling for track

          // fillTrack	boolean

          // fillColor	string
          fillColor={"green"}
          // handlerSize	number	sets handler diameter (both width and height)
          handlerSize={25}
          // handlerWidth	number

          // handlerHeight	number

          // handlerShape	'squared', 'rounded'
          handlerShape={"squared"}
          // handlerColor	string
          handlerColor={"red"}
          // handlerBorderColor
          handlerBorderColor={"#333333"}
          // handlerActiveColor	string	handler color when slider is being used
          handlerActiveColor={"#4d4d4d"}
          // handlerStyle	object	user custom styling for handler

          // fontSize	number	used by markers

          // fontColor	string	used by markers

          // markers	number	numbers of markers to display
          markers={max}
          // markersSize	number	markers container's height or width (depending on the orientation)
          // markersSize={1}
          // showMarkers	true, false, 'hidden', 'active', 'inactive'	'active' displays the markers only when slider is beeing used, 'inactive' the opposite
          showMarkers={true}
          // grabCursor	boolean	when true shows a grabbing cursor as slider is beeing used

          // vertical	boolean	slider's layout horizontal or vertical

          // invertMarkers	boolean	switch slider and markers positions
          invertMarkers={true}
          // style	object	user custom style for slider's root container
        />
      </div>
    );
  }
}

export default Sliders;
