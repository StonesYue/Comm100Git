// var prompt = '';
var actions = {
    verifyNumOfDepartments: function () {
        var that = this;
        this.getNumberOfElements('@numberOfMessageList', function (result) {
            that.expect.element('@numberOfMessage').text.to.equals(result);
        });
    },

    verifyElementsOfPageWhenDepartmentDisable: function (){
        var departmentTitle = this.api.globals.livechat_departments_title_text;
        this.getText('@departmentTitle', function (result) {
            this.assert.equal(result.value, departmentTitle);
            // this.verify.visible('@ifEnableButton');
        }); 
        this.expect.element('@ifEnableDiv').to.be.visible;
    },

    verifyElementsOfPageWhenDepartmentEnable: function () {
        var departmentTitle = this.api.globals.livechat_departments_title_text;
        this.getText('@departmentTitle', function (result) {
            this.assert.equal(result.value, departmentTitle);
        }); 
        this.expect.element('@ifEnableDiv').to.be.visible;
        // this.verify.visible('@ifEnableButton');
        this.expect.element('@addDeprtmentsButton').to.be.visible;
        this.expect.element('@table').to.be.visible;
    },

    verifyEnableOrDisablePrompt: function (prompt){
        this.getText('@promptOfIfEnable', function (result) {
            this.assert.equal(result.value, prompt);
        }); 
    },

    verifyTableOfDepartments: function (nameLocator, descriptionLocator, name, description) {
        this.getElementsText(nameLocator, function (result) {
            for(var i = 0;i < result.length;i++) {
                if(result[i] === name) {
                    this.assert.equal(result[i], name);
                }
            }
        });
        this.getElementsText(descriptionLocator, function (result) {
            for(var i = 0;i < result.length;i++) {
                if(result[i] === description) {
                    this.assert.equal(result[i], description);
                }
            }
        });
    }

    // verifyTableOfDepartments: function (arrayLocator, arrayField){
    //     for(var i = 0;i < arrayLocator.length;i++){
    //         this.getElementsText(arrayLocator[i], function (result) {
    //             for(var j = 0;j < result.length;i++) {
    //                 if(result[j] === arrayField[i]) {
    //                     this.assert.equal(result[j], arrayField[i]);
    //                 }
    //             }
    //         });
    //     }
    // }


};
module.exports = {
    commands: [actions],

    elements: {
        departmentTitle: {
            selector: '#ctl00_lblTitle'
        },
        ifEnableDiv: {
            selector: '.divContent.hiddeb>table>tbody>tr>td>span>div'
        },
        ifEnableButton: {
            selector: '#ctl00_M_Chk_IfOpenDepartment'
        },
        promptOfIfEnable: {
            selector: '.dialogtext'
        },
        table: {
            selector: '.divTable>table'
        },
        addDeprtmentsButton: {
            selector: '#ctl00_M_btnNewDepartment'
        },

        delFirstDepartmentButton: {
            selector: '.delete-icon.toptooltip'
        },

        okButton: {
            selector: '#ctl00_cphThickBox_btnDeleteCategory_OK>span'
        },

        cancelButton: {
            selector: '#ctl00_cphThickBox_btnDeleteCategory_Cancel'
        },

        nameOfDepartments: {
            selector: '.the-table>tbody>tr:nth-child(2)>td:nth-child(2)'
        },

        editDepartmentButton: {
            selector: '.edit-icon.toptooltip'
        },

        delSuccessNotice: {
            selector: '.dialogtext'
        },
        nameOfTable: {
            selector: '#ctl00_M_divDefaultDepartment>.divTable>.the-table>tbody>tr[class]>td:nth-child(2)'
        },
        descriptionOfTable: {
            selector: '#ctl00_M_divDefaultDepartment>.divTable>.the-table>tbody>tr[class]>td:nth-child(3)'
        }
    }
};
