/*global $:true */
/**
 * Gets number of elements that can be located by specified cssSelector
 * @param cssSelector
 * @param callback
 * @returns {exports}
 */
//fixme get number of elements should return number not object
exports.command = function (cssSelector, callback) {
    callback = callback || function () {
        };
    this.execute(function (cssSelector) {
        return $(cssSelector).length;
    },
    [cssSelector],
    function (result) {
        callback.call(this, result.value);
    });
    return this;
};