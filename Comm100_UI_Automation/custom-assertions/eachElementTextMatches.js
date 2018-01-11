/**
 * Checks that all elements located by given selector have given text that matches regex
 *
 * ```
 *    this.demoTest = function (client) {
 *      client.assert.eachElementTextMatches("div.somclass",".*");
 *    };
 * ```
 *
 */

var util = require("util");
exports.assertion = function (elementSelector, regexExpression, msg) {

    this.message = msg || util.format("Testing if elements located by '%s' has text that matches '%s'", elementSelector, regexExpression);

    this.successMessage = "Verified %s elements located by locator '%s' have text that matches '%s'";

    this.expected = regexExpression;

    this.pass = function (value) {
        var regexExpression = new RegExp(this.expected);
        var bool = true;
        value.forEach(function (current) {
            if (!regexExpression.test(current)) {
                bool = false;
            }
        });
        if (bool) {
            this.message = util.format(this.successMessage, value.length, elementSelector, regexExpression);
        }
        return bool;
    };

    this.value = function (result) {
        return result;
    };

    this.command = function (callback) {
        this.api.getElementsText(elementSelector, function (result) {
            callback(result);
        });
        return this;
    };

};