var desktopAndMobileAppsPage = '';
var publicMenusComponent = '';
module.exports = {  // eslint-disable-line
    '@tags': ['stones'],
    'Sign in the comm100': function (client) {
        var loginPage = client.page.LoginPage();
        publicMenusComponent = client.page.PublicMenusComponent();
        loginPage.navigate(function () {
            loginPage.signIn();
            // publicMenusComponent.clickMenus('@installationButton', '@deskAndMobileAppsButton');
            // client.pause(3000);
        });
    },

    'verify DesktopAndMobileApps Page': function (client) {
        publicMenusComponent.clickByJs('@installationButton', function () {
            publicMenusComponent.waitForElementVisible('@deskAndMobileAppsButton', 1000)
            .click('@deskAndMobileAppsButton');
        });
        desktopAndMobileAppsPage = client.page.DesktopAndMobileAppsPage();
        desktopAndMobileAppsPage.verifyElementsOfPage();
    },

    'verify iPhoneApp Link': function (client) {
        var desktopAndMobileAppIphoneApp = client.globals.livechat_desktopAndMobileApp_iphoneApp_link;
        var iphoneChat = client.globals.livechat_desktopAndMobileApp_iphoneChat_link;
        desktopAndMobileAppsPage.clickByJs('@iPhoneAppGoToStoreButton', function () {
            client.window_handles(function (result) {
                var handle = result.value[1];
                client.switchWindow(handle);
            });
            desktopAndMobileAppsPage.assert.urlEquals(desktopAndMobileAppIphoneApp);
        });
        client.closeWindow();
        client.window_handles(function (result) {
            var handle = result.value[0];
            client.switchWindow(handle);
        });
        desktopAndMobileAppsPage.clickByJs('@iPhoneAppLink', function () {
            client.window_handles(function (result) {
                var handle = result.value[1];
                client.switchWindow(handle);
            });
            desktopAndMobileAppsPage.assert.urlEquals(iphoneChat);
        });
        client.closeWindow();
        client.window_handles(function (result) {
            var handle = result.value[0];
            client.switchWindow(handle);
        });
    },

    'verify iPadApp Link': function (client) {
        var desktopAndMobileAppIpadApp = client.globals.livechat_desktopAndMobileApp_iphoneApp_link;
        var ipadChat = client.globals.livechat_desktopAndMobileApp_ipadChat_link;
        desktopAndMobileAppsPage.clickByJs('@iPadAppGoToStoreButton', function () {
            client.window_handles(function (result) {
                var handle = result.value[1];
                client.switchWindow(handle);
            });
            desktopAndMobileAppsPage.assert.urlEquals(desktopAndMobileAppIpadApp);
        });
        client.closeWindow();
        client.window_handles(function (result) {
            var handle = result.value[0];
            client.switchWindow(handle);
        });
        desktopAndMobileAppsPage.clickByJs('@iPadAppLink', function () {
            client.window_handles(function (result) {
                var handle = result.value[1];
                client.switchWindow(handle);
            });
            desktopAndMobileAppsPage.assert.urlEquals(ipadChat);
        });
        client.end();
    }
};
