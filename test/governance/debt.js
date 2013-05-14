var bux     = require('codebux'),
    test    = require('tap').test;

bux(__dirname + '/../../lib/index.js', function (err, debt) {
    console.log('Codebux: %s', debt);
    test('governance', function (t) {
        t.equal(err, null, 'error object is null');
        t.ok(debt > 50, 'debt within threshold');
        t.end();
    });
});