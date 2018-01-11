var liveChatCodePage = '';
var publicMenusComponent = '';
module.exports = {  // eslint-disable-line
    '@tags': ['stones'],
    'Sign in the comm100': function (client) {
        var loginPage = client.page.LoginPage();
        publicMenusComponent = client.page.PublicMenusComponent();
        loginPage.navigate(function () {
            loginPage.signIn();
            publicMenusComponent.clickFirstMenu('@installationButton');
            client.pause(3000);
        });
    },

    'verify LiveChatCode Page': function (client) {
        liveChatCodePage = client.page.LiveChatCodePage();
        liveChatCodePage.verifyElementsOfPage();
    },

    'Verify Choose a Campagin': function (client) {
        var campaginSelectText = client.globals.livechat_livechatCode_campagin_select;
        var campaginSelectValue = client.globals.livechat_livechatCode_campagin_select_value;
        liveChatCodePage.selectOptionByValue('@campaignSelect', campaginSelectValue, function (){
            liveChatCodePage.waitForElementVisible('@elementBySelected', 2000);
            liveChatCodePage.getText('@elementBySelected', function (result){
                this.assert.equal(result.value, campaginSelectText);
            });
        });
    },

    'Verify Customize Link': function (client) {
        var customizeLink = client.globals.livechat_domain + client.globals.livechat_livechatCode_customze_link;
        liveChatCodePage.clickByJs('@customizeButton', function () {
            liveChatCodePage.assert.urlContains(customizeLink);
        });
        publicMenusComponent.clickFirstMenu('@installationButton');
    },

    'Verify Email The Code': function (client) {
        var Email = client.globals.livechat_livechatCode_email_input;
        var emailSuccessPrompt = client.globals.livechat_livechatCode_emailSuccess_prompt;
        liveChatCodePage.clickByJs('@emailCodeLink', function () {
            liveChatCodePage.setValue('@emailInput', Email)
                            .clickByJs('@sendEmailButton', function () {
                                liveChatCodePage.waitForElementVisible('@sendEmailPrompt', 1000);
                                liveChatCodePage.getText('@sendEmailPrompt', function (result) {
                                    console.log(result.value);
                                    this.assert.equal(result.value, emailSuccessPrompt);
                                });
                            });
        });
    },

    'Verify Preview Jump': function (client){
        var previewLink = client.globals.livechat_domain + client.globals.livechat_livechatCode_preview_link;
        liveChatCodePage.clickByJs('@previewButton', function () {
            client.window_handles(function (result) {
                var handle = result.value[1];
                client.switchWindow(handle);
            });
            liveChatCodePage.assert.urlContains(previewLink);
        });
        client.window_handles(function (result) {
            var handle = result.value[0];
            client.switchWindow(handle);
        });
        publicMenusComponent.clickFirstMenu('@installationButton');
    },

    'Verify Advanced Jump': function (client){
        liveChatCodePage.clickByJs('@advancedButton', function (){
            liveChatCodePage.clickByJs('@extraCodeLink', function (){
                liveChatCodePage.expect.element('@extraCodeText').to.be.visible;
            })
        });
    }
};
