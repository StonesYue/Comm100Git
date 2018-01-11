var storeFrontAction = {
    // clickMenus: function (firstMenu,secondMenu,callback) {
    //         //this.api.url(this.url(), callback);
    //         this.clickByJs(firstMenu,function(){
    //             this.expect.element(secondMenu).to.be.visible;
    //             this.click(secondMenu);
    //         });
    //     },
    verifyElementsOfPage: function () {
        this.expect.element('@dashboardTitle').to.be.visible;
        this.expect.element('@chatAndMessagesText').to.be.visible;
        this.expect.element('@QuickAccess').to.be.visible;
        this.expect.element('@AppDownload').to.be.visible;
        this.expect.element('@NewsAndTips').to.be.visible;
        this.expect.element('@Canvas').to.be.visible;
        this.expect.element('@NewsAndTipsImg').to.be.visible;
    }
};

module.exports = {

    commands: [storeFrontAction],

    elements: {
        dashboardTitle: {
            selector: '#ctl00_lblTitle'
        },
        getAndOnLineLink: {
            selector: '#ctl00_M_maximum>div:nth-child(2)>div:first-child>a'
        },
        installCodeLink: {
            selector: '#ctl00_M_aInstallCode'
        },
        addAgentsLink: {
            selector: '#ctl00_M_aAddOperators'
        },
        chatAndMessagesText: {
            selector: '#ctl00_M_dMetricsSMB>div:first-child'
        },
        QuickAccess: {
            selector: '#ctl00_M_maximum>div:first-child'
        },
        AppDownload: {
            selector: '#ctl00_M_maximum>div:nth-child(3)'
        },
        NewsAndTips: {
            selector: '#ctl00_M_maximum>div:nth-child(5)'
        },
        Canvas: {
            selector: '#report-chats-messages>div>canvas'
        },
        NewsAndTipsImg:{
            selector: '.divGetNews.norfont>ul>li>a>img'
        }
    }
};
