#!/usr/bin/env node

var Tubage = {
    settings: {
        thumbnailUrl: "http://img.youtube.com/vi/YOUTUBEID/THUMBQUALITY",
        standardQuality: "sddefault.jpg",
        youTubeUrl: "https://www.youtube.com/watch?v=YOUTUBEID",
        markUp: '<a href="YOUTUBEURL"><img src="THUMBURL"/></a>',
    },
    outputEmbedMarkup: function (youTubeId) {
        var ytUrl = Tubage.settings.youTubeUrl.replace("YOUTUBEID", youTubeId);
        var thumbUrl = Tubage.settings.thumbnailUrl
                       .replace("YOUTUBEID", youTubeId)
                       .replace("THUMBQUALITY", Tubage.settings.standardQuality);
        var markUp = Tubage.settings.markUp.replace('YOUTUBEURL', ytUrl)
                                           .replace('THUMBURL', thumbUrl);

        
        return markUp;
    },
    processArgs: function (args) {  
        var idArg = args[2];
        return idArg;
    }
};

console.log(Tubage.outputEmbedMarkup(Tubage.processArgs(process.argv)));
module.exports.Tubage = Tubage;
