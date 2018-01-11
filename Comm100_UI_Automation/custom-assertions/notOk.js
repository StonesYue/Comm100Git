/**
 * Checks if the value is false
 *
 * ```
 *    this.demoTest = function (client) {
 *      browser.assert.notOk(6>2);
 *    };
 * ```
 *
 * @param {string} [message] Optional log message to display in the output. If missing, one is displayed by default.
 * @api assertions
 */

var util = require("util");
exports.assertion = function (actualValue, msg) {

    this.message = msg || util.format("Testing to be falsy");
    this.expected = false;

    this.pass = function (value) {
        return (value==false);
    };

    this.value = function(){
        return actualValue;
    };

    this.command= function(callback){
        callback();//doNothing
    };
};