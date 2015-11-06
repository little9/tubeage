var assert = require('assert'),
    tubeage = require('./../index').Tubeage;
describe('Tubeage', function () {
    describe('#outputEmbedMarkup', function () {
        it('should return html markup based on the YouTube ID it is given with default quality', function () {

            var userArgs = {
                embedCode: 'bGhSHXebjbE',
                quality: 'default.jpg'
            }
            var markup = tubeage.outputEmbedMarkup(userArgs);
            var requiredMarkup = '<a href="https://www.youtube.com/watch?v=bGhSHXebjbE"><img src="http://img.youtube.com/vi/bGhSHXebjbE/default.jpg"/></a>';
            assert.equal(markup, requiredMarkup);
        });
    });
});

describe('Tubeage', function () {
    describe('#processArgs', function () {
        it('it should process the command line arguments return an object with the embed code and quality', function () {
            var args = ['node', 'index.js', 'bGhSHXebjbE'];
            var myArgs = tubeage.processArgs(args);

            var userArgs = {
                embedCode: 'bGhSHXebjbE',
                quality: 'default.jpg'
            }
            assert.equal(myArgs.embedCode, userArgs.embedCode)
            assert.equal(myArgs.quality, userArgs.quality)

        });



    });
});

describe('Tubeage', function () {
    describe('#outputEmbedMarkup', function () {
        it('should return html markup based on the YouTube ID it is given and allow you to select high quality', function () {

            var userArgs = {
                embedCode: 'bGhSHXebjbE',
                quality: 'hqdefault.jpg'
            }

            var markup = tubeage.outputEmbedMarkup(userArgs);
            var requiredMarkup = '<a href="https://www.youtube.com/watch?v=bGhSHXebjbE"><img src="http://img.youtube.com/vi/bGhSHXebjbE/hqdefault.jpg"/></a>';
            assert.equal(markup, requiredMarkup);
        });

        it('... and allow you to select medium quality', function () {
            var userArgs = {
                embedCode: 'bGhSHXebjbE',
                quality: 'mqdefault.jpg'
            }

            var markup = tubeage.outputEmbedMarkup(userArgs);
            var requiredMarkup = '<a href="https://www.youtube.com/watch?v=bGhSHXebjbE"><img src="http://img.youtube.com/vi/bGhSHXebjbE/mqdefault.jpg"/></a>';
            assert.equal(markup, requiredMarkup);
        });
        it('... and standard quality', function () {
            var userArgs = {
                embedCode: 'bGhSHXebjbE',
                quality: 'sddefault.jpg'
            }

            var markup = tubeage.outputEmbedMarkup(userArgs);
            var requiredMarkup = '<a href="https://www.youtube.com/watch?v=bGhSHXebjbE"><img src="http://img.youtube.com/vi/bGhSHXebjbE/sddefault.jpg"/></a>';
            assert.equal(markup, requiredMarkup);
        });
        it('... and maximum quality', function () {
            var userArgs = {
                embedCode: 'bGhSHXebjbE',
                quality: 'maxresdefault.jpg'
            }

            var markup = tubeage.outputEmbedMarkup(userArgs);
            var requiredMarkup = '<a href="https://www.youtube.com/watch?v=bGhSHXebjbE"><img src="http://img.youtube.com/vi/bGhSHXebjbE/maxresdefault.jpg"/></a>';
            assert.equal(markup, requiredMarkup);
        });
    });
});

