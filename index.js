#!/usr/bin/env node

var Tubeage = {

    strings : {
        thumbnailUrl: 'http://img.youtube.com/vi/YOUTUBEID/THUMBQUALITY',
        youTubeUrl: 'https://www.youtube.com/watch?v=YOUTUBEID',
        markUp: '<a href="YOUTUBEURL"><img src="THUMBURL"/></a>',
        noEmbedCodeError : 'You should provide a YouTube embed code'
    },
    youTubeQuality : {
        default : 'default.jpg',
        sd : 'sddefault.jpg',
        hq : 'hqdefault.jpg',
        mq : 'mqdefault.jpg',
        max : 'maxresdefault.jpg'
    },
    userArgs : {
        embedCode : 'undefined',
        quality : 'undefined'
    },
    outputEmbedMarkup: function (args) {
       
        var ytUrl = Tubeage.strings.youTubeUrl.replace('YOUTUBEID', args.embedCode);
        var thumbUrl = Tubeage.strings.thumbnailUrl
                       .replace('YOUTUBEID', args.embedCode)
                       .replace('THUMBQUALITY', args.quality);
        var markUp = Tubeage.strings.markUp.replace('YOUTUBEURL', ytUrl)
                                           .replace('THUMBURL', thumbUrl);

        return markUp;
    },
    processArgs: function (args) {  

        var myArgs = Tubeage.userArgs;

        if (typeof args[2] === 'undefined'){ 
            console.log(Tubeage.strings.noEmbedCodeError)
        } else {
            myArgs.embedCode = args[2];
        }

        if (typeof args[3] === 'undefined'){ 
            myArgs.quality = Tubeage.youTubeQuality.default;
        } else {
            myArgs.quality = Tubeage.youTubeQuality[args[3]];
        }
        
        return myArgs;
        
    }
};

console.log(Tubeage.outputEmbedMarkup(Tubeage.processArgs(process.argv)));
module.exports.Tubeage = Tubeage;
