var config = require('fs').readFileSync(__dirname + '/../../.jshintrc');
require('hint-hint')(__dirname + '/../../lib/index.js', JSON.parse(config.toString()));