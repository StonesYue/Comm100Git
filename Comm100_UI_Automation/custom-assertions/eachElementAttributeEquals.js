/**
 * Checks that all elements located by given selector have specified attribute equal to specified value
 *
 * ```
 *    this.demoTest = function (client) {
 *      browser.assert.eachElementAttributeEqauls("div.somclass","attributeName","attributeValue");
 *    };
 * ```
 *
 */

var util = require("util");
exports.assertion = function (elementSelector, attribute, expectedValue, msg) {

    this.message = msg || util.format("Testing if elements located by '%s' has '%s' with value '%s'", elementSelector, attribute, expectedValue);

    this.successMessage = "Verified %s elements located by locator '%s' have attribute '%s' with value '%s'";

    this.expected = expectedValue;

    this.pass = function (value) {
        var bool = true;
        var expectedValue = this.expected;
        value.forEach(function (current) {
            if (current !== expectedValue) {
                bool = false;
            }
        });
        if (bool) {
            this.message = util.format(this.successMessage, value.length, elementSelector, attribute, expectedValue);
        }
        return bool;
    };

    this.value = function (result) {
        return result;
    };

    this.command = function (callback) {
        this.api.getElementsAttribute(elementSelector, attribute, function (result) {
            callback(result);
        });
        return this;
    };

};