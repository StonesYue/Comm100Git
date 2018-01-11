

module.exports = {
    '@tags': ['stones'],
    'Sign in the comm100': function (client) {
        var LoginPage = client.page.LoginPage();
        var PublicMenus = client.page.PublicMenus();
        LoginPage.navigate(function () {
            LoginPage.signIn();
            PublicMenus.clickMenus('@chatbotQuestionBaseButton', '@questionsButton', function () {
                client.pause(3000);
            });
        });
//        console.log(client.globals.livachat_login_usename);
    },

    'Add a question': function (client) {
        var QuestionListPage = client.page.QuestionsListPage();
        client.pause(5000);
        QuestionListPage.expect.element('@addQuestionButton').to.be.visible;
        var NewQuestionPage = client.page.NewQuestionPage();
        QuestionListPage.clickByJs('@addQuestionButton', function () {
            NewQuestionPage.setValue('@standardQuestion', client.globals.livechat_addQuestion_name);
            NewQuestionPage.click('@answerOfLinkButton');
            NewQuestionPage.setValue('@insertlinkOfUrl', client.globals.livechat_addQuestion_link);
            NewQuestionPage.click('@insertlinkOfOpenin');
            NewQuestionPage.click('@insertlinkOfOpeninOption2');
            NewQuestionPage.click('@insertlinkOfOkButton');
            NewQuestionPage.click('@saveButton');
        });
        QuestionListPage.expect.element('@questionName').text.to.equals('what url is it?');
        QuestionListPage.expect.element('@questionName').text.to.equals('what url is it?');
        client.end();
    }
}
;
