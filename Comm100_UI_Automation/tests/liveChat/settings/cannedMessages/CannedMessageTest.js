var cannedMessagesPage = '';
var publicMenusComponent = '';

module.exports = {
    'Sign in the comm100': function (client) {
        var loginPage = client.page.LoginPage();
        publicMenusComponent = client.page.PublicMenusComponent();
        loginPage.navigate(function () {
            loginPage.signIn();
            // publicMenusComponent.waitForElementVisible('@campainsButton', 10000);
            publicMenusComponent.click('@settingsButton');
            client.pause(1000);
        });
    },

    'Verify cannedMessagesOfPublic Page': function (client) {
        cannedMessagesPage = client.page.CannedMessageListPage();
        cannedMessagesPage.verifyPublicElement();
        cannedMessagesPage.verifyPublicCategory();
    }
};

