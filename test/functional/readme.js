var test    = require('tap').test,
    vouch   = require('../../lib/index.js');

var input   = {
    foo:    123,
    baz:    false
};

var schema  = {
    "type": "object",
    "additionalProperties": true,
    "properties": {
        "foo": {
            "type": "string",
            "required": true
        }
    }
};

vouch({
    input:  input, 
    schema: schema
}, function (err) {
    console.dir(err);
    test('functional', function (t) {

    });
});