## vouch
#### JSON schema validation ... for humans.

Vouch is a layer on top of [JSV](https://github.com/garycourt/JSV) which provides human-friendly errors and a *slightly* simpler interface for JSON schema validation.

[![Build Status](https://travis-ci.org/thisandagain/vouch.png?branch=master)](https://travis-ci.org/thisandagain/vouch)

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

### Custom Error Messages
The main benefit of `vouch` is the ability to easily create custom error messages. The included `dict.json` file will give you the basic idea of how this works in principle, but let's use the following as an example:

```javascript
var vouch    = require('vouch');

vouch({
    input:  input, 
    schema: schema,
    dict:   {
        'maximum': 'Yo! \"__instance__\" is way larger than __detail__!'
    }
}, function (err) {
    if (err) return console.log(err);  // Human friendly errors!
    // Yay! No errors.
});
```

In this instance, an error of type `maximum` will result in a custom error. The `__instance__` and `__detail__` variables can be used to inject detail into the resulting error message.

### Testing
```bash
npm test
```