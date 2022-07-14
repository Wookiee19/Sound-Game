const appConfig={
    ButtonDisable:"true", 
    //disable button after round Keypad only
    feedbackTextRight:'Corect Answer',
    //Text shown to user for correct answer
    feedbackTextWrong:'Wrong Answer',
    //Text shown to user for incorrect answer
    showAnswer:true,
    //Show answer to user for incorrect answer
    durationBetweenRound : '1500', 
    //Duration Between folder change for speed voice/instruction
    
    audioPlayAfter: '5000',
    //audio will play after x sec when game starts
    videoUrl : '', 
    //instruction video Url currently hardcoded
    
    Trials:'2', 
    //Total rounds in same speed
    url:'https://omc0dwxiy7.execute-api.ap-south-1.amazonaws.com',
    opts : {           
    //video options
        height: '390',
        //height of video player for instruction
        width: '640',
        //width of video player for instruction
        playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
        //1- If you wnat video to auto play 0-If you want your video to click on play
        },
      }
      
};
export default appConfig;

