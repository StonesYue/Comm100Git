/**
 * Gets text from all the element that can be located from css selector
 * @param element
 * @param callback
 * @returns {exports}
 */
exports.command = function (element, callback) {
    callback = callback || function () {
        };
    this.array = [];
    var selectorString = "";
    //FIXME this is temporary solution for using sections
    //plan is to use recursive strategy that nightwatch uses
    if (typeof element === "object") {
        element.forEach(function (el) {
            // css descendant strategy
            selectorString = selectorString + " " + el.selector;
        });

    } else {
        selectorString = element;
    }
    this.elements("css selector", selectorString, function (elements) {
        var that = this;
        elements.value.forEach(function (element, index, array) {
            var self = that;
            that.elementIdText(element.ELEMENT, function (result) {
                self.array.push(result.value);
                if (index === (array.length - 1)) {
                    if (typeof callback === "function") {
                        callback.call(self, self.array);
                    }
                }
            });
        });
    });
    return this;
};