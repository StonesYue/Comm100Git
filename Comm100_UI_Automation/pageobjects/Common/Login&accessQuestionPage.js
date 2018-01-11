LoginAndaccessQuestionPage = function (client) {
    var loginPage = client.page.LoginPage();
    var dashBoardpage = client.page.DashboardPage();
    loginPage.navigate(function () {
       loginPage.signIn(function () {
           dashBoardpage.expect.element('@chatbotQuestionBaseButton').to.be.visible;
       });
    });
     //client.useCss();
     dashBoardpage.click('@chatbotQuestionBaseButton');
     dashBoardpage.waitForElementPresent('@questionsButton',3000)
     //dashBoardpage.click('@questionsButton');
}
module.exports = LoginAndaccessQuestionPage;