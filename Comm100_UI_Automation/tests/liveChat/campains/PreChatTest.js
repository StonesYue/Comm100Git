
module.exports = {
    'Sign in the comm100': function (client) {
        var loginPage = client.page.LoginPage();
        loginPage.navigate(function () {
            loginPage.signIn();
            client.pause(3000);
        });
    },

//   'Update window title' : function(client){
//        var preChat = client.page.preChatPage();
//        preChat.clickByJs('@selectOfCampains',function(){
//            preChat.expect.element('@optionOfSelect').to.be.visible;
//            preChat.clickByJs('@optionOfSelect',function(){
//                 preChat.expect.element('@titleInput').to.be.visible;
//            });
//        });
//        preChat.clearValue('@titleInput')
//               .setValue('@titleInput','stones tests');
//        preChat.expect.element('@titleOfPreviewWindow').text.to.equals('stones tests');
//
//   }

};
