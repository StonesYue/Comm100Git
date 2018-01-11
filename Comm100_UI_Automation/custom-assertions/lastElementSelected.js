/**
 * Checks if the last element located by specified locator is selected
 *
 * ```
 *    this.demoTest = function (client) {
 *      browser.assert.lastElementSelected("input[type="checkbox"]");
 *    };
 * ```
 *
 */

var util = require("util");
exports.assertion = function (elementSelector, msg) {

    this.message = msg || util.format("Testing if last element located by '%s' is enabled", elementSelector);

    this.expected = true;

    this.pass = function (value) {
        return value === this.expected;
    };

    this.value = function (result) {
        return result;
    };

    this.command = function (callback) {
        var that = this.api;
        that.elements("css selector", elementSelector, function (elements) {
            that.elementIdSelected(elements.value[elements.value.length - 1].ELEMENT, function (result) {
                callback(result.value);
            });
        });
        return this;
    };

};