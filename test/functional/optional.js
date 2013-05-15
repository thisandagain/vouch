var test    = require('tap').test,
    vouch   = require('../../lib/index.js');

var input   = {
    baz:    false
};

var schema  = {
    "type": "object",
    "additionalProperties": true,
    "properties": {
        "foo": {
            "type": "string",
            "optional": false
        }
    }
};

vouch({
    input:  input, 
    schema: schema
}, function (err) {
    console.dir(err);
    test('functional', function (t) {
        t.type(err, 'string', 'error is a string');
        t.end();
    });
});