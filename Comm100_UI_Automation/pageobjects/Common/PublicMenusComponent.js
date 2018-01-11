var clickMenu = {
    // 点击一级菜单
    clickFirstMenu: function (firstMenu, callback) {
        callback  = callback || function (){
        };
        this.click(firstMenu);
//            this.getAttribute(secondMenu,'class',function(result){
//                if(result.value == 'menuLiSec'){
//                    this.click(secondMenu);
//                }
//            });
    },
   // 点击一级菜单和二级菜单
    clickMenus: function (firstMenu, secondMenu, callback) {
        callback = callback || function (){
        };
        this.click(firstMenu);
        // SecondMenu必须定位到item一级，也就是包含class="menuliSel"的层级
        this.waitForElementPresent(secondMenu, 4000);
        this.getAttribute(secondMenu, 'class', function (result){
            if(result.value == 'menuLiSec'){
                this.click(secondMenu);
            }
        });
    }

}


module.exports = {

    commands: [clickMenu],

    elements: {
        dashboardButton: {
            selector: '#ctl00_hlDashboard'
        },
        getOnlineAndChatButton: {
            selector: '.hlGetOnlineAndChatNSel'
        },
        installationButton: {
            selector: '#ctl00_hlInstallCode'
        },
        liveChatCodeButton: {
            selector: '#ctl00_hlLiveChatCode'
        },
        deskAndMobileAppsButton: {
            selector: '#ctl00_hlClientAndApp'
        },
        campainsButton: {
            selector: '#ctl00_hlCustomize'
        },
        
        settingsButton: {
            selector: '#ctl00_hlSettings'
        },
        cannedMessagesButton: {
            selector: '#ctl00_hlCannedMessage'
        },
        departmentsButton: {
            selector: '#ctl00_hlDepartments'
        },
        chatbotQuestionBaseButton: {
            selector: '#ctl00_hlChatbotQuestionbase'
        },
        questionsButton: {
            selector: '#ctl00_itemChatbotQuestions'
        },

        questionLearningButton: {
            selector: '#ctl00_itemChatbotQuestionLearning'
        },

        securityButton: {
            selector: ' #ctl00_hlSecurity'
        },

        secureFormsButton: {
            selector: '#ctl00_itemPCIForms'
        },
        campains: {
            selector: '#ctl00_hlCustomize'
        },
        prechat: {
            selector: '#ctl00_hlPreChat'
        }
    }
};
