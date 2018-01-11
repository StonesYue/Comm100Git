module.exports = {
    '@tags': ['stones'],
    'Sign in the comm100': function (client) {
        var LoginPage = client.page.LoginPage();
        var PublicMenus = client.page.PublicMenus();
        LoginPage.navigate(function () {
           LoginPage.signIn(function () {
            PublicMenus.expect.element('@chatbotQuestionBaseButton').to.be.visible;
           });
        });
        PublicMenus.clickFirstMenu('@chatbotQuestionBaseButton',function(){
            PublicMenus.waitForElementPresent('@questionsButton',4000);
        });
    },

     'Del a question' : function(client){
        var QuestionsListPage = client.page.QuestionsListPage();
        QuestionsListPage.clickByJs('@delQuestionButton',function(){
            client.acceptAlert(function(){
//                   QuestionsListPage.clickSelect('@pageSize','@maxPageSize',function(){
//                        QuestionsListPage.verifyNumOfQuestions();
//                   });
                 QuestionsListPage.clickByJs('@pageSize',function(){
                    QuestionsListPage.clickByJs('@maxPageSize',function(){
                           QuestionsListPage.verifyNumOfQuestions();
                    });
                 });
            });
        });
        client.end();
     }
}