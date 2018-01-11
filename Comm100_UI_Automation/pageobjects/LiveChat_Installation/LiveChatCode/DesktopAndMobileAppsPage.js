var storeFrontAction = {
    /**
     * 进入页面检查基本元素是否加载显示
     */
    verifyElementsOfPage: function () {
        this.expect.element('@DesktopAndMobileAppsTitle').to.be.visible;
        this.expect.element('@DesktopImg').to.be.visible;
        this.expect.element('@iPhoneImag').to.be.visible;
        this.expect.element('@androidImg').to.be.visible;
        this.expect.element('@iPadImg').to.be.visible;
    }


};

module.exports = {

    commands: [storeFrontAction],

    elements: {
        DesktopAndMobileAppsTitle: {
            selector: '#ctl00_lblTitle'
        },
        DesktopImg: {
            selector: '[alt="Desktop"]'
        },
        iPhoneImag: {
            selector: '[alt="iPhone"]'
        },
        androidImg: {
            selector: '[alt="Android"]'
        },
        iPadImg: {
            selector: '[alt="iPad"]'
        },
        iPhoneAppLink: {
            selector: '[href="http://www.comm100.com/livechat/iphonechat.aspx"]'
        },
        iPadAppLink: {
            selector: '[href="http://www.comm100.com/livechat/ipadchat.aspx"]'
        },
        iPhoneAppGoToStoreButton: {
            selector: 'tbody>tr:first-child>td:nth-child(2)>div:nth-child(2)>div:first-child>div:nth-child(3)>a'
        },
        iPadAppGoToStoreButton: {
            selector: 'tbody>tr:nth-child(2)>td:nth-child(2)>div:nth-child(2)>div:first-child>div:nth-child(3)>a'
        }
    }
};
