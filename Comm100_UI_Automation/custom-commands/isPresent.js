/**
 * Returns value if element is present on page
 * @param locator
 * @param callback
 * @returns {exports}
 */
exports.command = function (locator, callback) {
    callback = callback || function () {
        };
    var self = this;
    self.element("css selector", locator, function (result) {
        if (result.status === -1) {
            callback.call(self, false);
        }
        else
            callback.call(self, true);
    });

    return this; // allows the command to be chained.
};