const appConfig={
    path:"../Audio/Talker01",
    durationBetweenRound : '1000', //Duration Between Round
    roundSpeedIncrease:'2',
    videoUrl : '', //instruction video
    adaptive: 'false', //curently work in progress dont change
    totalTrials:'7', //total rounds
    allowRepetition:"true",
    opts : {           //video options
        height: '390',
        width: '640',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
        },
      }
      
};
export default appConfig;

