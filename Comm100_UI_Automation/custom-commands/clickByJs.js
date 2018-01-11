/*global $:true */
/**
 * Known issue with chrome when element is not clicked if it is not displayed window
 * use this if there is chance that element be partially displayed
 * @param cssSelector
 * @param callback
 * @returns {exports}
 */
exports.command = function (cssSelector, callback) {
    callback = callback || function () {
        };
    this.execute(function (cssSelector) {
        return $(cssSelector)[0].click();
    }, [cssSelector], function () {
        callback.call(this);
    });
    return this;
};