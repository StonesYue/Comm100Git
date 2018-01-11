/**
 * Checks that all elements located by given selector are enabled
 *
 * ```
 *    this.demoTest = function (client) {
 *      browser.assert.eachElementEnabled("input[type="checkbox"]");
 *    };
 * ```
 *
 */

var util = require("util");
exports.assertion = function (elementSelector, msg) {

    this.message = msg || util.format("Testing if elements located by '%s' are enabled", elementSelector);

    this.expected = true;

    this.pass = function (value) {
        return value === this.expected;
    };

    this.value = function (result) {
        return result;
    };

    this.command = function (callback) {
        this.api.elements("css selector", elementSelector, function (elements) {
            var that = this;
            elements.value.forEach(function (element) {
                that.elementIdEnabled(element.ELEMENT, function (result) {
                    if (!result.value) {
                        callback(false);
                    }
                });
            });
            callback(true);
        });
        return this;
    };

};