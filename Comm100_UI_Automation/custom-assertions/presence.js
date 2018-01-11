/**
 * Checks Elements Visib
 *
 * ```
 *    this.demoTest = function (client) {
 *      browser.assert.presence("div.somclass",true);
 *    };
 * ```
 *
 */

var util = require("util");
exports.assertion = function (elementSelector, presenceExpected, msg) {

    this.message = msg || util.format("Testing if element '%s' present is '%s'", elementSelector, presenceExpected);

    this.successMessage = "Verified %s elements located by locator '%s' presence is '%s'";

    this.expected = presenceExpected;

    this.pass = function (value) {
        var result = value === this.expected
        if (result) {
            this.message = util.format(this.successMessage, value.length, elementSelector, this.expected);
        }
        return result;
    };

    this.value = function (result) {
        return (result.status === 0)
    };

    this.command = function (callback) {
        this.api.element('css selector',elementSelector, function (result) {
            callback(result);
        });
        return this;
    };

};