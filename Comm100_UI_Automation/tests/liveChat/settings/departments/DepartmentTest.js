var departmentsPage = '';
var enablePrompt = '';
var disablePrompt = '';

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

    'Verify departmentList Page': function (client){
        departmentsPage = client.page.DepartmentsPage();
        departmentsPage.getAttribute('@ifEnableButton', 'checked', function (result){
            console.log(result.value + '123123123123123');
            if (result.value == 'true') {
                departmentsPage.verifyElementsOfPageWhenDepartmentEnable();
            }else {
                departmentsPage.verifyElementsOfPageWhenDepartmentDisable();
            }
        })
    }

    // 'Verify IfEnable Button': function (client){
    //     departmentsPage = client.page.DepartmentsPage();
    //     disablePrompt = client.globals.livechat_department_disable_prompt;
    //     enablePrompt = client.globals.livechat_department_enable_prompt;
    //     departmentsPage.getAttribute('@ifEnableButton', 'checked', function (result){
    //         console.log(result.value + '123123123123123');
    //         if (result.value == 'true') {
    //             departmentsPage.clickByJs('@ifEnableButton', function (){
    //                 departmentsPage.verifyEnableOrDisablePrompt(disablePrompt);
    //                 departmentsPage.verifyElementsOfPageWhenDepartmentDisable();
    //             });
    //         }else {
    //             departmentsPage.clickByJs('@ifEnableButton', function (){
    //                 departmentsPage.verifyEnableOrDisablePrompt(enablePrompt);
    //                 departmentsPage.verifyElementsOfPageWhenDepartmentEnable();
    //             });
    //         }
    //     })
    // }
};
