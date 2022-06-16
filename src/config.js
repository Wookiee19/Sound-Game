var appConfig={
    'speed' : '1000',                                  //speed of game
    'video-url' : '',                               //instruction fideo
    'adaptive': 'false',
    'total-trials':'7',                             //total rounds
    'allowRepetition':"true",
    'opts' : {                                      //video options
        'height': '390',
        'width': '640',
        'playerVars': {
          // https://developers.google.com/youtube/player_parameters
          'autoplay': 1,
        },
      }
      
};

module.exports=appConfig;