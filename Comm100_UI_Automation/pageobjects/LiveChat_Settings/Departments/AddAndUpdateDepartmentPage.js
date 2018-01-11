var storeFrontAction = {
    verifyElementsOfPage: function () {
        var addDepartmentTitle = this.api.globals.livechat_addDepartment_title_text;
        this.getText('@addNewDepartmentTitle', function (result) {
            this.assert.equal(result.value, addDepartmentTitle);
        });
        this.expect.element('@notAgentSelect').to.be.visible;
        this.expect.element('@agentSelect').to.be.visible;
        this.expect.element('@nameInput').to.be.visible;
        this.expect.element('@descriptionInput').to.be.visible;
        this.expect.element('@saveButton').to.be.visible;
        this.expect.element('@cancelButton').to.be.visible;
    }
}


module.exports = {
    commands: [storeFrontAction],
    elements: {
        addNewDepartmentTitle: {
            selector: '#ctl00_lblTitle'
        },
        notAgentSelect: {
            selector: '#ctl00_M_lstChildAllValue'
        },
        notAgentSelectValue: {
            selector: '#ctl00_M_lstChildAllValue>option[value="23"]'
        },
        addAgentButton: {
            selector: '#ctl00_M_imgBtnAddOne'
        },
        agentSelect: {
            selector: '#ctl00_M_lstChildAllowedValue'
        },
        agentSelectValue: {
            selector: '#ctl00_M_lstChildAllowedValue>option[value="23"]'
        },
        nameInput: {
            selector: '#ctl00_M_txtName'
        },
        descriptionInput: {
            selector: '#ctl00_M_txtDescription'
        },
        saveButton: {
            selector: '#ctl00_M_btnSave2'
        },
        cancelButton: {
            selector: '#ctl00_M_btnCancel2'
        }
    }
};
