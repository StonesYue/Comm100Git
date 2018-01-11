var storeFrontAction = {
    'PublicMenus': function () {
        return this.api.page.PublicMenusComponent();
    },

    'PageHeader': function () {
        return this.api.page.PageHeader();
    },

    'PageFooter': function () {
        return this.api.page.PageFooter();
    }
};


module.exports = {
    commands: [storeFrontAction],

    elements:{

        getOnlineAndChat: {
            selector: '.hlGetOnlineAndChatNSel'
        },

        userName: {
            selector: '[name="email"]'
        },
        password: {
            selector: '[name="password"]'
        },
        OkButton: {
            selector: '.Modal__action--2Jb-1>button:nth-child(1)>span'
        },
        visitor: {
            selector: '.AgentTab__tabItem--2gTJn.AgentTab__selected--1vPZi'
        }
    }
};
