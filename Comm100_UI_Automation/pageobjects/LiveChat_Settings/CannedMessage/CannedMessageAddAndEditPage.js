var storeFrontAction = {};

module.exports = {
    commands: [storeFrontAction],
    elements: {
        newMessageName: {
            selector: '#ctl00_M_txtTitle'
        },
        newMessageText: {
            selector: '#ctl00_M_txtMessage'
        },
        shortCuts: {
            selector: '#ctl00_M_txtShortcuts'
        },
        saveButton: {
            selector: '#ctl00_M_btnSaveButtom'
        },
        cancelButton: {
            selector: '#ctl00_M_btnCancelButton'
            }
        }
};
