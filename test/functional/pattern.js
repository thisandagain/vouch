var test    = require('tap').test,
    vouch   = require('../../lib/index.js');

var input   = {
    foo:    "abc"
};

var schema  = {
    "type": "object",
    "properties": {
        "foo": {
            "type": "string",
            "required": true,
            "pattern": "/[A-Z]/g"
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