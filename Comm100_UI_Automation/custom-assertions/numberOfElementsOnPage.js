/**
 * Asserts number of elements on page
 *
 * ```
 *    this.demoTest = function (client) {
 *      browser.assert.numberOfElementsOnPage("div.offerCard",25);
 *    };
 * ```
 */
var util = require("util");

exports.assertion = function (element, expectedNumberOnPage, msg) {

    this.message = msg || util.format("Testing if the number of elements located by '%s' are %s.", element, expectedNumberOnPage);

    this.expected = expectedNumberOnPage;

    this.pass = function (value) {
        return value === this.expected;
    };

    this.value = function (result) {
        return result;
    };

    this.command = function (callback) {
        this.api.getNumberOfElements(element,callback);
        return this;
    };

};