/**
 * Checks if the array is unique
 *
 * ```
 *    this.demoTest = function (client) {
 *      browser.assert.arrayIsUnique(array);
 *    };
 * ```
 */
var util = require("util");

exports.assertion = function (array, msg) {
//FIXME replace this with elementsTextAreUnique
    this.message = msg || util.format("Verifying that the array consists of unique values");

    this.expected = true;

    this.pass = function (value) {
        return value === this.expected;
    };

    this.value = function (result) {
        return result;
    };

    this.command = function (callback) {
        var bool = true;
        var valuesSoFar = {};
        for (var i = 0; i < array.length; i++) {
            var value = array[i].toLowerCase();
            if (value in valuesSoFar) {
                bool = false;
                valuesSoFar[value] = false;
                break;
            }
            else {
                valuesSoFar[value] = true;
            }
        }
        callback(bool);
    };

};