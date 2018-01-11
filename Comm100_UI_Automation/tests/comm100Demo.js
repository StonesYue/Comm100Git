/**
 * This is a comm100 sample test
 * @author nash
 * @type sample
 * @testtype Automated
 */
module.exports = {
    '@tags': ['P1', 'smoke'],
    'Sign in the comm100': function (client) {
		var loginPage = client.page.LoginPage();
		console.log(client.globals.testname);
		var dashBoardpage = client.page.DashboardPage();
		loginPage.navigate(function () {
    loginPage.signIn(function () {
        dashBoardpage.expect.element('@settingsButton').to.be.visible;
    });
});
		dashBoardpage.click('@settingsButton');
    },

    'Add A Canned Message' : function (client) {
        var CannedMessageListPage = client.page.CannedMessageListPage();
        CannedMessageListPage.expect.element('@newMessageButton').to.be.visible;
		var CannedMessageAddPage = client.page.CannedMessageAddPage();
		CannedMessageListPage.clickByJs('@newMessageButton', function () {
        CannedMessageAddPage.setValue('@newMessageName', 'new Message');
    CannedMessageAddPage.setValue('@newMessageText', 'Auto Add Message');
    CannedMessageAddPage.click('@saveButton');
		});
        CannedMessageListPage.verifyNumOfCannedMessage();
    },

    'Update A Canned Message' : function (client) {
        var CannedMessageListPage = client.page.CannedMessageListPage();
        CannedMessageListPage.expect.element('@newMessageButton').to.be.visible;
  		var CannedMessageAddPage = client.page.CannedMessageAddPage();
  		CannedMessageListPage.clickByJs('@firstMessageUpdate', function () {
      CannedMessageAddPage.setValue('@newMessageName', 'update Message');
      CannedMessageAddPage.setValue('@newMessageText', 'Auto update Message');
      CannedMessageAddPage.click('@saveButton');
  		});
  		CannedMessageListPage.verifyNumOfCannedMessage();
    },

    'Delete A Canned Message' : function (client) {
        var CannedMessageListPage = client.page.CannedMessageListPage();
        CannedMessageListPage.expect.element('@newMessageButton').to.be.visible;
  		var CannedMessageAddPage = client.page.CannedMessageAddPage();
  		CannedMessageListPage.clickByJs('@firstMessageDelete', function () {
      client.acceptAlert();
  		});
        CannedMessageListPage.verifyNumOfCannedMessage();
    }
};
