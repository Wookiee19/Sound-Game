import { CircularProgress } from "@mui/material";
import appConfig from "../config";

export const CenterSection = ({
  disabled,
  round,
  Score,
  answer,
  tick,
  wrong,
  bbShow,
  aaShow,
  ccShow,
}) => {
  return (
    <div className="w-100">
      <div className="magenta mt-5">
        {disabled ? (
          <div className="overlay-loading">
            <CircularProgress />
          </div>
        ) : null}

        {round === 0 && (
          <h3 className="sub">Please pay attention to the instructions </h3>
        )}
        {round > 0 && (
          <>
            <h2 className="name">Game Name</h2>
            {appConfig.showScoreInConsole === "true" && (
              <h2 className="sub">Your Score: {Score}</h2>
            )}
            {answer === "true" && (
              <img
                src={tick}
                style={{ marginLeft: "41%" }}
                width="80"
                height="80"
                alt="img"
              ></img>
            )}
            {answer === "false" && (
              <img
                src={wrong}
                style={{ marginLeft: "41%" }}
                width="60"
                height="60"
                alt="img"
              ></img>
            )}

            {bbShow && (
              <div>
                {answer === "false" && (
                  <h3 className="sub">
                    {appConfig.feedbackTextWrong}
                    {appConfig.showAnswer && (
                      <div className="sub">{aaShow} </div>
                    )}
                  </h3>
                )}
                {answer === "false" && (
                  <h3 className="sub">
                    {appConfig.showAnswer && (
                      <div className="sub">
                        {" "}
                        <img
                          src={require(`../Assets/Button/0${ccShow}_${bbShow}.png`)}
                          height="50"
                          width="50"
                          alt="img"
                        ></img>
                      </div>
                    )}
                  </h3>
                )}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};
