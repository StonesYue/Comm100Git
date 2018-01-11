/**
 * Checks if the element has child with the specified selector
 *
 * ```
 *    this.demoTest = function (client) {
 *      client.assert.elementHasChilderen("div","span.child");
 *    };
 * ```
 *
 */

var util = require("util");
exports.assertion = function (parentElementSelector, childrenElementSelector, msg) {

    this.message = msg || util.format("Testing if element %s has children with locator '%s'", parentElementSelector, childrenElementSelector);
    this.successMessage = "Verified element %s has %s children with locator %s";
    this.expected = 1;

    this.pass = function (value) {
        var result = value >= this.expected;
        if (result) {
            this.message = util.format(this.successMessage, parentElementSelector, value, childrenElementSelector);
        }
        return result;
    };

    this.value = function (result) {
        return result;
    };

    this.command = function (callback) {
        var that = this.api;
        that.element("css selector", parentElementSelector, function (elements) {
            that.elementIdElements(elements.value.ELEMENT, "css selector", childrenElementSelector, function (result) {
                callback(result.value.length);
            });
        });
        return this;
    };

};