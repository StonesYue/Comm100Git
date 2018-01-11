/**
 * Checks if url does not contain undefined
 *
 * ```
 *    this.demoTest = function (client) {
 *      browser.assert.undefinedNotPresentInUrl(url);
 *    };
 * ```
 */
var util = require("util");

exports.assertion = function (buttonSelector, pageName, msg) {
    this.message = msg || util.format(`Verifying that the ${pageName} button selectors does not contain undefined,NaN or null`);

    this.expected = true;

    this.pass = function (buttonHrefArray) {
        var bool = buttonHrefArray.every((current) => (!current.includes("NaN")) && (!current.includes("undefined")) && (!current.includes("null")));
        if (bool) {
            this.message = `Verified buttons on page ${pageName} does not have NaN,undefined or null in href attribute`;
        }
        return bool;
    };

    this.value = function (result) {
        return result;
    };

    this.command = function (callback) {
        this.api.getElementsAttribute(buttonSelector, "href", function (result) {
            callback(result);
        });
        return this;
    };

};
