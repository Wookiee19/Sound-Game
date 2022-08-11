export const ImageGroup = ({ setValue }) => {
  return (
    <div class="">
      <img
        className="frame1"
        onClick={() => {
          setValue(0);
        }}
        src={require("../Assets/Slider/Charlie.png")}
        height="38"
        alt="img"
      />
      <img
        className="frame1"
        onClick={() => {
          setValue(1);
        }}
        src={require("../Assets/Slider/Ringgo.png")}
        height="38"
        alt="img"
      />
      <img
        className="frame1"
        onClick={() => {
          setValue(2);
        }}
        src={require("../Assets/Slider/Laker.png")}
        height="38"
        alt="img"
      />
      <img
        className="frame1"
        onClick={() => {
          setValue(3);
        }}
        src={require("../Assets/Slider/Hopper.png")}
        height="38"
        alt="img"
      />
      <img
        className="frame1"
        onClick={() => {
          setValue(4);
        }}
        src={require("../Assets/Slider/Arrow.png")}
        height="38"
        alt="img"
      />
      <img
        className="frame1"
        onClick={() => {
          setValue(5);
        }}
        src={require("../Assets/Slider/Tiger.png")}
        height="38"
        alt="img"
      />
      <img
        className="frame1"
        onClick={() => {
          setValue(6);
        }}
        src={require("../Assets/Slider/Eagle.png")}
        height="38"
        alt="img"
      />
      <img
        className="frame1"
        onClick={() => {
          setValue(7);
        }}
        src={require("../Assets/Slider/Baron.png")}
        height="38"
        alt="img"
      />
    </div>
  );
};
