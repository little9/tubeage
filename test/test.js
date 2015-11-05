var assert = require('assert'),
    tubage = require('./../index').Tubage;
describe('Tubeage', function () {
    describe('#outputEmbedMarkup', function () {
        it('should return html markup based on the YouTube ID it is given', function () {
            var markup = tubage.outputEmbedMarkup("bGhSHXebjbE");
            var requiredMarkup = '<a href="https://www.youtube.com/watch?v=bGhSHXebjbE"><img src="http://img.youtube.com/vi/bGhSHXebjbE/sddefault.jpg"/></a>';
            assert.equal(markup, requiredMarkup);
        });
    });
});

