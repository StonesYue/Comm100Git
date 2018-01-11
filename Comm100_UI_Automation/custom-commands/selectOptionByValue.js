/**
 * Selects option from dropdown by value
 * @param locatorToDropDown
 * @param valueToBeSelected
 * @returns {exports}
 */
//todo look what they provide https://github.com/maxgalbu/nightwatch-custom-commands-assertions
exports.command = function (locatorToDropDown, valueToBeSelected, callback) {
    callback = callback || function () {
        };
    var optionLocator = locatorToDropDown + ">option[value='" + valueToBeSelected + "']";
    this.click(locatorToDropDown).waitForElementVisible(optionLocator, 2000).click(optionLocator, callback);
    return this; // allows the command to be chained.
};