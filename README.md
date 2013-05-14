## vouch
#### JSON schema validation ... for humans.

Vouch is a layer on top of [JSV](https://github.com/garycourt/JSV) which provides human-friendly errors and a *slightly* simpler interface for JSON schema validation.

### Installation
```bash
npm install vouch
```

### Basic Use
```javascript
var vouch    = require('vouch');

vouch(input, schema, function (err) {
    if (err) {
        console.log(err);  // Human friendly errors!
    } else {
        // Yay! No errors.
    }
});
```

### Testing
```bash
npm test
```