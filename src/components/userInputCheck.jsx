import { useState } from "react";

function UserInputCheck(keypad, slider, generated) {
  const [text, setText] = useState("");
  setText(`${keypad}${slider}`);
  if (text === generated) {
    return 10;
  }
}

export default UserInputCheck;
