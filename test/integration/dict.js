var test    = require('tap').test,
    vouch   = require('../../lib/index.js');

var input   = {
    foo:    10
};

var schema  = {
    "type": "object",
    "properties": {
        "foo": {
            "type": "number",
            "required": true,
            "maximum": 1
        }
    }
};

vouch({
    input:  input, 
    schema: schema,
    dict:   {
        "maximum": "Yo! \"__instance__\" is way larger than __detail__!"
    }
}, function (err) {
    console.dir(err);
    test('functional', function (t) {
        t.type(err, 'string', 'error is a string');
        t.equal(err, 'Yo! "foo" is way larger than 1!', 'error is of expected result');
        t.end();
    });
});