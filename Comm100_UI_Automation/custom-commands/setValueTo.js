/**
 * Clear and enter value
 * @param locator
 * @param textToBeEntered
 * @param callback
 * @returns {exports}
 */
exports.command = function (locator, textToBeEntered, callback) {
    callback = callback || function () {
        };
    //todo is there any way of adding this to nightwatch log instead
    this.clearValue(locator)
        .setValue(locator, textToBeEntered, callback);
    return this; // allows the command to be chained.
};