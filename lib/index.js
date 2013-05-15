/**
 * JSON schema validation ... for humans.
 *
 * @package vouch
 * @author Andrew Sliwinski <andrew@diy.org>
 */

/**
 * Dependencies
 */
var _       = require('lodash'),
    JSV     = require('JSV').JSV;

var dict    = require('./dict.json'),
    env     = JSV.createEnvironment();

/**
 * Build error response.
 *
 * @param {Object} JSV error
 * @param {Object} Dictionary hash table
 *
 * @return {String}
 */
function build (error, dict) {
    console.dir(error);
    var instance    = error.uri.split('/').pop();
    var detail      = error.details;
    var response    = dict[error.attribute];

    // Check for response
    if (typeof response === 'undefined') response = error.message;

    // Replace vars
    response = response.replace('__instance__', instance);
    response = response.replace('__detail__', detail);

    return response;
}

/**
 * Export
 */
module.exports = function (opts, callback) {
    // Parse options
    var json        = (typeof opts.input === 'undefined') ? null : opts.input;
    var schema      = (typeof opts.schema === 'undefined') ? null : opts.schema;
    var dictionary  = (typeof opts.dict === 'undefined') ? dict : opts.dict;

    // Validate (JSV)
    var report = env.validate(json, schema);
    if (report.errors.length === 0) return callback(null);

    // Build
    var response    = build(report.errors[0], dictionary);

    // Return
    callback(response);
};