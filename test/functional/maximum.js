var test    = require('tap').test,
    vouch   = require('../../lib/index.js');

var input   = {
    foo:    10
};

var schema  = {
    "type": "object",
    "additionalProperties": true,
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
    schema: schema
}, function (err) {
    console.dir(err);
    test('functional', function (t) {
        t.type(err, 'string', 'error is a string');
        t.end();
    });
});