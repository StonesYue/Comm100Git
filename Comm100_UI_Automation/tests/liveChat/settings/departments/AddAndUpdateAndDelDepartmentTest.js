var departmentsPage = '';
var addDepartmentName = '';
var addDepartmentDescription = '';
var addDepartmentPage = '';
var updateDepartmentDescription = '';
var updateDepartmentName = '';

module.exports = {
    '@tags': ['P1', 'smoke'],
    'Sign in the comm100': function (client) {
        var loginPage = client.page.LoginPage();
        var publicMenusComponent = client.page.PublicMenusComponent();
        loginPage.navigate(function () {
            loginPage.signIn(function () {
                publicMenusComponent.expect.element('@settingsButton').to.be.visible;
            });
        });
        publicMenusComponent.click('@settingsButton')
                            .waitForElementPresent('@departmentsButton', 2000);
        publicMenusComponent.click('@departmentsButton');

    },

    // 'Damo': function (client){
    //     departmentsPage = client.page.DepartmentsPage();
    //     departmentsPage.getElementsText('#ctl00_M_divDefaultDepartment>.divTable>.the-table>tbody>tr[class]>td:nth-child(2)', function (result){
    //         console.log(result.toString());
    //         console.log(result.length);
    //         for(var i = 0;i < result.length;i++){
    //             if(result[i] =='B'){
    //                 console.log(result[i] + '123123123213');
    //             }
    //         }
    //     });
    //     // client.elements('css selector', '#ctl00_M_divDefaultDepartment>.divTable>.the-table>tbody>tr[class]>td:nth-child(2)', function (res) {
    //     //     console.log(res.value);
    //     // });
    // },

    'Verify addDepartment Page': function (client) {
        departmentsPage = client.page.DepartmentsPage();
        departmentsPage.expect.element('@addDeprtmentsButton').to.be.visible;
        departmentsPage.click('@addDeprtmentsButton');
        addDepartmentPage = client.page.AddAndUpdateDepartmentPage();
        addDepartmentPage.verifyElementsOfPage();
    },

    'Add A Department': function (client) {
        addDepartmentName = client.globals.livechat_addDepartment_name_input;
        addDepartmentDescription = client.globals.livechat_addDepartment_description_input;
        console.log(addDepartmentName + '12312312312312' + addDepartmentDescription);
        addDepartmentPage.setValue('@nameInput', addDepartmentName);
        addDepartmentPage.setValue('@descriptionInput', addDepartmentDescription);
        addDepartmentPage.click('@notAgentSelectValue');
        addDepartmentPage.click('@addAgentButton');
        addDepartmentPage.expect.element('@agentSelectValue').to.be.visible;
        addDepartmentPage.click('@saveButton');
        // locator = ['@nameOfTable', '@descriptionOfTable'];
        // var fieldOfTable = [addDepartmentName, addDepartmentName];
        // departmentsPage.verifyTableOfDepartments(locator, fieldOfTable);
        departmentsPage.verifyTableOfDepartments('@nameOfTable', '@descriptionOfTable', addDepartmentName, addDepartmentName);
      // client.end();
    },

    'Update A Canned Department': function (client) {
        updateDepartmentName = client.globals.livechat_addDepartment_nameUpdate_input;
        updateDepartmentDescription = client.globals.livechat_addDepartment_descriptionUpdate_input;
        departmentsPage.clickByJs('@editDepartmentButton', function () {
            addDepartmentPage.clearValue('@nameInput');
            addDepartmentPage.setValue('@nameInput', updateDepartmentName);
            addDepartmentPage.clearValue('@descriptionInput');
            addDepartmentPage.setValue('@descriptionInput', updateDepartmentDescription);
            addDepartmentPage.click('@saveButton');
        });
        // locator = ['@nameOfTable', '@descriptionOfTable'];
        // var fieldOfTable = [updateDepartmentName, updateDepartmentDescription];
        // for(var i = 0;i < fieldOfTable.length; i++){
        //     console.log(fieldOfTable[i] + '1111111111111111111111');
        // }
        // departmentsPage.verifyTableOfDepartments(locator, fieldOfTable);
        departmentsPage.verifyTableOfDepartments('@nameOfTable', '@descriptionOfTable', updateDepartmentName, updateDepartmentDescription);
    },

    'Del A Department': function (client) {
        // var departmentsPage = client.page.DepartmentsPage();
        departmentsPage.expect.element('@delFirstDepartmentButton').to.be.visible;
        var initCount;
        departmentsPage.getNumberOfElements('@editDepartmentButton', function (result) {
            initCount = result;
            console.log('initCount:  ' + initCount);
        });
        departmentsPage.clickByJs('@delFirstDepartmentButton', function () {
            departmentsPage.waitForElementPresent('@okButton', 1000);
            departmentsPage.click('@okButton');
            client.acceptAlert();
            departmentsPage.expect.element('@delSuccessNotice').text.to.equals('Department deleted successfully.');
        });
        departmentsPage.getNumberOfElements('@editDepartmentButton', function (result) {
            this.assert.equal(result, initCount - 1);
        });
        client.end();
    }
};



