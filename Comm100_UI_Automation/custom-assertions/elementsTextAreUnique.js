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

exports.assertion = function (elementSelector, msg) {
//TODO modify array message on failure,you can not possibly know which string was repeated.
// TODO there must some built in function to perform this
    this.message = msg || util.format("Verifying that elements located by %s have unique text", elementSelector);

    this.expected = true;

    this.pass = function (value) {
        return value === this.expected;
    };

    this.value = function (result) {
        return result;
    };

    this.command = function (callback) {
        this.api.getElementsText(elementSelector, function (resultArrayString) {
            var bool = true;
            var valuesSoFar = {};
            for (var i = 0; i < resultArrayString.length; i++) {
                var value = resultArrayString[i].toLowerCase();
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
        });
    };

};