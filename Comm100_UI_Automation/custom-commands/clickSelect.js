

exports.command = function (locatorToDropDown, locatorToOption, callback) {
    callback = callback || function () {
        };
    //var optionLocator = locatorToDropDown + ">option[value='" + valueToBeSelected + "']";
    this.click(locatorToDropDown).pause(2000).click(locatorToOption,callback);
    return this; // allows the command to be chained.
};