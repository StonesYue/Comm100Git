var writeFiles = require('../../../data/writeFile');  // eslint-disable-line
module.exports = {  // eslint-disable-line
    '@tags': ['stones'],
    'Sign in the comm100': function (client) {
        var LoginPage = client.page.LoginPage();
        var PublicMenusComponent = client.page.PublicMenusComponent();
        LoginPage.navigate(function () {
            LoginPage.signIn();
            PublicMenusComponent.clickFirstMenu('@getOnlineAndChatButton');
            client.pause(3000);
        });
    },

    'Sign in AgentConsole': function (client) {
        client.window_handles(function (result) {
            var handle = result.value[1];
            console.log('windowsHanlds: ' + handle);
            client.switchWindow(handle);
        });
        var GetOnlineAndChatPage = client.page.GetOnlineAndChatPage();
        client.pause(2000);
        GetOnlineAndChatPage.isPresent('@OkButton', function (data) {
            if(data === true) {
                GetOnlineAndChatPage.expect.element('@OkButton').to.be.visible;
                GetOnlineAndChatPage.click('@OkButton');
            }
        });
        client.pause(2000);
        var arr = ['xcccc=1111', 'yyyyy=2222', 'mmmmmmm=3333', '123=44444'];
        // writeFiles.writeFilesByOneLine('./testdata/ChatButton.properties', 'rtrr=1231231234444');
        writeFiles.writeFilesByArray('./testdata/ChatButton.properties', arr);
        GetOnlineAndChatPage.expect.element('@visitor').to.be.visible;
        client.end();
    }
};
