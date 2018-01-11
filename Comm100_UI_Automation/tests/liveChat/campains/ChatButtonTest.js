var chatButtonPage = '';
var publicMenusComponent = '';
//var campaginSelectText = '';
module.exports = {
    'Sign in the comm100': function (client) {
        var loginPage = client.page.LoginPage();
        publicMenusComponent = client.page.PublicMenusComponent();
        loginPage.navigate(function () {
            loginPage.signIn();
            // publicMenusComponent.waitForElementVisible('@campainsButton', 10000);
            publicMenusComponent.click('@campainsButton');
            client.pause(1000);
        });
    },

    'Verify ChatButton Page': function (client){
        chatButtonPage = client.page.ChatButtonPage();
        var campaginSelectValue = client.globals.livechat_livechatCode_campagin_select_value;
        var campaginSelectText = client.globals.livechat_livechatCode_campagin_select;
        chatButtonPage.selectOptionByValue('@campaignSelect', campaginSelectValue, function (){
            chatButtonPage.waitForElementVisible('@elementBySelected', 2000);
            chatButtonPage.getText('@elementBySelected', function (result){
                this.assert.equal(result.value, campaginSelectText);
            });
        });
        //chatButtonPage.verifyElementsOfPage();
        //chatButtonPage.verifyChooseCampaginSelect();
    }



};
