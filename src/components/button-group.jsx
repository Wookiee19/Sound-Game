export const ButtonGroup = ({
  disabled,
  currentKey,
  assigment,
  setReload,
  set,
  stopButton,
  disable,
  startButton,
  roundUpdate,
  reload,
}) => {
  return (
    <table id="matrix" style={{ opacity: disabled ? 0.5 : 1 }}>
      <tbody>
        <tr>
          <td>
            <button
              onClick={() => {
                // clickSound();
                currentKey.current = "0000";
                assigment("0000");
                setReload(!reload);
                // output();
                set();
                stopButton();
                disable();
                startButton();
                roundUpdate("button");
              }}
              disabled={disabled}
            >
              <img
                src={require("../Assets/Button/01_Blue.png")}
                width="45"
                height="45"
                alt="img"
              />
            </button>
          </td>
          <td>
            <button
              onClickCapture={() => {
                assigment("0100");
                currentKey.current = "0100";
                setReload(!reload);
                // output();
                set();
                stopButton();
                disable();
                startButton();
                roundUpdate("button");
              }}
              disabled={disabled}
            >
              <img
                src={require("../Assets/Button/01_Red.png")}
                width="45"
                height="45"
                alt="img"
              />
            </button>
          </td>

          <td>
            <button
              onClickCapture={() => {
                assigment("0200");
                currentKey.current = "0200";
                setReload(!reload);
                // output();
                set();
                stopButton();
                disable();
                startButton();
                roundUpdate("button");
              }}
              disabled={disabled}
            >
              <img
                src={require("../Assets/Button/01_White.png")}
                width="45"
                height="45"
                alt="img"
              />
            </button>
          </td>
          <td>
            <button
              onClickCapture={() => {
                assigment("0300");
                currentKey.current = "0300";
                setReload(!reload);
                // output();
                set();
                stopButton();
                disable();
                startButton();
                roundUpdate("button");
              }}
              disabled={disabled}
            >
              <img
                src={require("../Assets/Button/01_Green.png")}
                width="45"
                height="45"
                alt="img"
              />
            </button>
          </td>
        </tr>
        <tr>
          <td>
            <button
              onClickCapture={() => {
                assigment("0001");
                assigment("0001");
                setReload(!reload);
                // output();
                set();
                stopButton();
                disable();
                startButton();
                roundUpdate("button");
              }}
              disabled={disabled}
            >
              <img
                src={require("../Assets/Button/02_Blue.png")}
                width="45"
                height="45"
                alt="img"
              />
            </button>
          </td>
          <td>
            <button
              onClickCapture={() => {
                assigment("0101");
                currentKey.current = "0101";
                setReload(!reload);
                // output();
                set();
                stopButton();
                disable();
                startButton();
                roundUpdate("button");
              }}
              disabled={disabled}
            >
              <img
                src={require("../Assets/Button/02_Red.png")}
                width="45"
                height="45"
                alt="img"
              />
            </button>
          </td>
          <td>
            <button
              onClickCapture={() => {
                currentKey.current = "0201";
                assigment("0201");
                setReload(!reload);
                // output();
                set();
                stopButton();
                disable();
                startButton();
                roundUpdate("button");
              }}
              disabled={disabled}
            >
              <img
                src={require("../Assets/Button/02_White.png")}
                width="45"
                height="45"
                alt="img"
              />
            </button>
          </td>
          <td>
            <button
              onClickCapture={() => {
                assigment("0301");
                currentKey.current = "0301";
                setReload(!reload);
                // output();
                set();
                stopButton();
                disable();
                startButton();
                roundUpdate("button");
              }}
              disabled={disabled}
            >
              <img
                src={require("../Assets/Button/02_Green.png")}
                width="45"
                height="45"
                alt="img"
              />
            </button>
          </td>
        </tr>
        <tr>
          <td>
            <button
              onClickCapture={() => {
                assigment("0002");
                currentKey.current = "0002";
                setReload(!reload);
                // output();
                set();
                stopButton();
                disable();
                startButton();
                roundUpdate("button");
              }}
              disabled={disabled}
            >
              <img
                src={require("../Assets/Button/03_Blue.png")}
                width="45"
                height="45"
                alt="img"
              />
            </button>
          </td>
          <td>
            <button
              onClickCapture={() => {
                currentKey.current = "0102";
                assigment("0102");
                setReload(!reload);
                // output();
                set();
                stopButton();
                disable();
                startButton();
                roundUpdate("button");
              }}
              disabled={disabled}
            >
              <img
                src={require("../Assets/Button/03_Red.png")}
                width="45"
                height="45"
                alt="img"
              />
            </button>
          </td>

          <td>
            <button
              onClickCapture={() => {
                assigment("0202");
                currentKey.current = "0202";
                setReload(!reload);
                // output();
                set();
                stopButton();
                disable();
                startButton();
                roundUpdate("button");
              }}
              disabled={disabled}
            >
              <img
                src={require("../Assets/Button/03_White.png")}
                width="45"
                height="45"
                alt="img"
              />
            </button>
          </td>
          <td>
            <button
              onClickCapture={() => {
                assigment("0302");
                currentKey.current = "0302";
                setReload(!reload);
                // output();
                set();
                stopButton();
                disable();
                startButton();
                roundUpdate("button");
              }}
              disabled={disabled}
            >
              <img
                src={require("../Assets/Button/03_Green.png")}
                width="45"
                height="45"
                alt="img"
              />
            </button>
          </td>
        </tr>
        <tr>
          <td>
            <button
              onClickCapture={() => {
                assigment("0003");
                currentKey.current = "0003";
                setReload(!reload);
                // output();
                set();
                stopButton();
                disable();
                startButton();
                roundUpdate("button");
              }}
              disabled={disabled}
            >
              <img
                src={require("../Assets/Button/04_Blue.png")}
                width="45"
                height="45"
                alt="img"
              />
            </button>
          </td>
          <td>
            <button
              onClickCapture={() => {
                assigment("0103");
                currentKey.current = "0103";
                setReload(!reload);
                // output();
                set();
                stopButton();
                disable();
                startButton();
                roundUpdate("button");
              }}
              disabled={disabled}
            >
              <img
                src={require("../Assets/Button/04_Red.png")}
                width="45"
                alt="img"
                height="45"
              />
            </button>
          </td>

          <td>
            <button
              onClickCapture={() => {
                assigment("0203");
                currentKey.current = "0203";
                setReload(!reload);
                // output();
                set();
                stopButton();
                disable();
                startButton();
                roundUpdate("button");
              }}
              disabled={disabled}
            >
              <img
                src={require("../Assets/Button/04_White.png")}
                width="45"
                height="45"
                alt="img"
              />
            </button>
          </td>
          <td>
            <button
              onClickCapture={() => {
                assigment("0303");
                currentKey.current = "0303";
                setReload(!reload);
                // output();
                set();
                stopButton();
                disable();
                startButton();
                roundUpdate("button");
              }}
              disabled={disabled}
            >
              <img
                src={require("../Assets/Button/04_Green.png")}
                width="45"
                height="45"
                alt="img"
              />
            </button>
          </td>
        </tr>
        <tr>
          <td>
            <button
              onClickCapture={() => {
                assigment("0004");
                currentKey.current = "0004";
                setReload(!reload);
                // output();
                set();
                stopButton();
                disable();
                startButton();
                roundUpdate("button");
              }}
              disabled={disabled}
            >
              <img
                src={require("../Assets/Button/05_Blue.png")}
                width="45"
                height="45"
                alt="img"
              />
            </button>
          </td>
          <td>
            <button
              onClickCapture={() => {
                assigment("0104");
                currentKey.current = "0104";
                setReload(!reload);
                // output();
                set();
                stopButton();
                disable();
                startButton();
                roundUpdate("button");
              }}
              disabled={disabled}
            >
              <img
                src={require("../Assets/Button/05_Red.png")}
                width="45"
                height="45"
                alt="img"
              />
            </button>
          </td>

          <td>
            <button
              onClickCapture={() => {
                assigment("0204");
                currentKey.current = "0204";
                setReload(!reload);
                // output();
                set();
                stopButton();
                disable();
                startButton();
                roundUpdate("button");
              }}
              disabled={disabled}
            >
              <img
                src={require("../Assets/Button/05_White.png")}
                width="45"
                height="45"
                alt="img"
              />
            </button>
          </td>
          <td>
            <button
              onClickCapture={() => {
                assigment("0304");
                currentKey.current = "0304";
                setReload(!reload);
                // output();
                set();
                stopButton();
                disable();
                startButton();
                roundUpdate("button");
              }}
              disabled={disabled}
            >
              <img
                src={require("../Assets/Button/05_Green.png")}
                width="45"
                height="45"
                alt="img"
              />
            </button>
          </td>
        </tr>
        <tr>
          <td>
            <button
              onClickCapture={() => {
                assigment("0005");
                currentKey.current = "0005";
                setReload(!reload);
                // output();
                set();
                stopButton();
                disable();
                startButton();
                roundUpdate("button");
              }}
              disabled={disabled}
            >
              <img
                src={require("../Assets/Button/06_Blue.png")}
                width="45"
                height="45"
                alt="img"
              />
            </button>
          </td>
          <td>
            <button
              onClickCapture={() => {
                assigment("0105");
                currentKey.current = "0105";
                setReload(!reload);
                // output();
                set();
                stopButton();
                disable();
                startButton();
                roundUpdate("button");
              }}
              disabled={disabled}
            >
              <img
                src={require("../Assets/Button/06_Red.png")}
                width="45"
                height="45"
                alt="img"
              />
            </button>
          </td>

          <td>
            <button
              onClickCapture={() => {
                assigment("0205");
                currentKey.current = "0205";
                setReload(!reload);
                // output();
                set();
                stopButton();
                disable();
                startButton();
                roundUpdate("button");
              }}
              disabled={disabled}
            >
              <img
                src={require("../Assets/Button/06_White.png")}
                width="45"
                height="45"
                alt="img"
              />
            </button>
          </td>
          <td>
            <button
              onClickCapture={() => {
                assigment("0305");
                currentKey.current = "0305";
                setReload(!reload);
                // output();
                set();
                stopButton();
                disable();
                startButton();
                roundUpdate("button");
              }}
              disabled={disabled}
            >
              <img
                src={require("../Assets/Button/06_Green.png")}
                width="45"
                height="45"
                alt="img"
              />
            </button>
          </td>
        </tr>
        <tr>
          <td>
            <button
              onClickCapture={() => {
                assigment("0006");
                currentKey.current = "0006";
                setReload(!reload);
                // output();
                set();
                stopButton();
                disable();
                startButton();
                roundUpdate("button");
              }}
              disabled={disabled}
            >
              <img
                src={require("../Assets/Button/07_Blue.png")}
                width="45"
                height="45"
                alt="img"
              />
            </button>
          </td>
          <td>
            <button
              onClickCapture={() => {
                assigment("0106");
                currentKey.current = "0106";
                setReload(!reload);
                // output();
                set();
                stopButton();
                disable();
                startButton();
                roundUpdate("button");
              }}
              disabled={disabled}
            >
              <img
                src={require("../Assets/Button/07_Red.png")}
                width="45"
                height="45"
                alt="img"
              />
            </button>
          </td>

          <td>
            <button
              onClickCapture={() => {
                assigment("0206");
                currentKey.current = "0206";
                setReload(!reload);
                // output();
                set();
                stopButton();
                disable();
                startButton();
                roundUpdate("button");
              }}
              disabled={disabled}
            >
              <img
                src={require("../Assets/Button/07_White.png")}
                width="45"
                height="45"
                alt="img"
              />
            </button>
          </td>
          <td>
            <button
              onClickCapture={() => {
                assigment("0306");
                currentKey.current = "0306";
                setReload(!reload);
                // output();
                set();
                stopButton();
                disable();
                startButton();
                roundUpdate("button");
              }}
              disabled={disabled}
            >
              <img
                src={require("../Assets/Button/07_Green.png")}
                width="45"
                height="45"
                alt="img"
              />
            </button>
          </td>
        </tr>
        <tr>
          <td>
            <button
              onClickCapture={() => {
                assigment("0007");
                currentKey.current = "0007";
                setReload(!reload);
                // output();
                set();
                stopButton();
                disable();
                startButton();
                roundUpdate("button");
              }}
              disabled={disabled}
            >
              <img
                src={require("../Assets/Button/08_Blue.png")}
                width="45"
                height="45"
                alt="img"
              />
            </button>
          </td>
          <td>
            <button
              onClickCapture={() => {
                assigment("0107");
                currentKey.current = "0107";
                setReload(!reload);
                // output();
                set();
                stopButton();
                disable();
                startButton();
                roundUpdate("button");
              }}
              disabled={disabled}
            >
              <img
                src={require("../Assets/Button/08_Red.png")}
                width="45"
                height="45"
                alt="img"
              />
            </button>
          </td>

          <td>
            <button
              onClickCapture={() => {
                assigment("0207");
                currentKey.current = "0207";
                setReload(!reload);
                // output();
                set();
                stopButton();
                disable();
                startButton();
                roundUpdate("button");
              }}
              disabled={disabled}
            >
              <img
                src={require("../Assets/Button/08_White.png")}
                width="45"
                height="45"
                alt="img"
              />
            </button>
          </td>
          <td>
            <button
              onClickCapture={() => {
                assigment("0307");
                currentKey.current = "0307";
                setReload(!reload);
                // output();
                set();
                stopButton();
                disable();
                startButton();
                roundUpdate("button");
              }}
              disabled={disabled}
            >
              <img
                src={require("../Assets/Button/08_Green.png")}
                width="45"
                height="45"
                alt="greenpng"
              />
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};
