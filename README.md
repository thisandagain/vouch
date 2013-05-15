## vouch
#### JSON schema validation ... for humans.

[![Build Status](https://travis-ci.org/thisandagain/vouch.png?branch=master)](https://travis-ci.org/thisandagain/vouch)

Vouch is a layer on top of [JSV](https://github.com/garycourt/JSV) which provides human-friendly errors and a *slightly* simpler interface for JSON schema validation.

### Installation
```bash
npm install vouch
```

### Basic Use
```javascript
var vouch    = require('vouch');

vouch({
    input:  input, 
    schema: schema
}, function (err) {
    if (err) return console.log(err);  // Human friendly errors!
    // Yay! No errors.
});
```

### Testing
```bash
npm test
```