/**
 * Sets date in given input box
 */
exports.command = function (element, numOfDays, env, callback) {

    if (typeof env  === "undefined") {
        callback = function () {
        };
    } else if (typeof env  === "function") {
        callback = env;
    }
    var environment = env || this.globals.environment;
    var dateToBeReturned = utilities.getDateAfterDays(environment, numOfDays);
    this.setValueTo(element, dateToBeReturned, callback);
    return this;
};