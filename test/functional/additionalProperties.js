var test    = require('tap').test,
    vouch   = require('../../lib/index.js');

var input   = {
    foo:    "bar",
    baz:    false
};

var schema  = {
    "type": "object",
    "additionalProperties": false,
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
        t.type(err, 'string', 'error is a string');
        t.end();
    });
});