/**
 * Checks if url does not contain undefined
 *
 * ```
 *    this.demoTest = function (client) {
 *      browser.assert.undefinedNotPresentInUrl(url);
 *    };
 * ```
 */

exports.assertion = function (pageName, msg) {
//FIXME replace this with elementsTextAreUnique
    this.message = msg || `Verifying that the ${pageName} url does not contain undefined`;

    this.expected = true;

    this.pass = function (value) {
        return value === this.expected;
    };

    this.value = function (result) {
        return result;
    };

    this.command = function (callback) {
        this.api.url(result => callback(!result.value.includes("undefined") && !result.value.includes("NaN") && !result.value.includes("null")));
    };

};
