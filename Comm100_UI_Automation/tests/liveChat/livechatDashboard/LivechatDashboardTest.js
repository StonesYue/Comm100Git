var livechatDashboardPage = '';

module.exports = {
    'Sign in the comm100': function (client) {
        var loginPage = client.page.LoginPage();
        loginPage.navigate(function () {
            loginPage.signIn();
            client.pause(3000);
        });
    },

    'verify Dashboard Page': function (client) {
        livechatDashboardPage = client.page.LivechatDashboardPage();
        livechatDashboardPage.verifyElementsOfPage();
    },

    'Verify InstalCode In Quick Access': function (client) {
        // var LivechatDashboardPage = client.page.LivechatDashboardPage();
        livechatDashboardPage.clickByJs('@installCodeLink', function () {
            var livechatcode = client.globals.livechat_domain + client.globals.livechat_Dashboard_liveChatcode_link;
            livechatDashboardPage.assert.urlContains(livechatcode);
        });
        var publicMenusComponent = client.page.PublicMenusComponent();
        publicMenusComponent.clickFirstMenu('@dashboardButton');
    },

    'Verify AddAgent In Quick Access': function (client) {
        // var LivechatDashboardPage = client.page.LivechatDashboardPage();
        livechatDashboardPage.clickByJs('@addAgentsLink', function () {
            var livechatAddAgents = client.globals.livechat_domain + client.globals.livechat_Dashboard_addAgents_link;
            livechatDashboardPage.assert.urlContains(livechatAddAgents);
        });
        var pageHeaderComponent = client.page.PageHeaderComponent();
        pageHeaderComponent.click('@livechatLink');
    },

    'Verify GetOnlineAndChat In Quick Access': function (client) {
    //    var LivechatDashboardPage = client.page.LivechatDashboardPage();
       // Dashboard.click('@getAndOnLineLink');
        livechatDashboardPage.clickByJs('@getAndOnLineLink', function () {
            client.window_handles(function (result) {
                var handle = result.value[1];
                client.switchWindow(handle);
            });
            var getOnlineAndChatPage = client.page.GetOnlineAndChatPage();
            client.pause(2000);
            getOnlineAndChatPage.isPresent('@OkButton', function (data) {
                if(data === true) {
                    getOnlineAndChatPage.expect.element('@OkButton').to.be.visible;
                    getOnlineAndChatPage.click('@OkButton');
                }
            });
            client.pause(2000);
            getOnlineAndChatPage.expect.element('@visitor').to.be.visible;
            client.end();
        });
    }
};
