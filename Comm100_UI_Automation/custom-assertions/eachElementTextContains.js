/**
 * Checks that all elements located by given selector have contain specified text
 *
 * ```
 *    this.demoTest = function (client) {
 *      browser.assert.eachElementTextContains("div.somclass","expectedText");
 *    };
 * ```
 *
 */

var util = require("util");
exports.assertion = function (elementSelector, expectedText, msg) {

    this.message = msg || util.format("Testing if elements located by '%s' has text '%s'", elementSelector, expectedText);
    this.successMessage = "Verified %s elements located by locator '%s' contain text '%s'";

    this.expected = expectedText;

    this.pass = function (value) {
        var bool = true;
        var expectedValue = this.expected;
        value.forEach(function (current) {
            if (!(((current.toLowerCase()).indexOf(expectedValue.toLowerCase())) > -1)) {
                bool = false;
            }
        });
        if (bool) {
            this.message = util.format(this.successMessage, value.length, elementSelector, expectedText);
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