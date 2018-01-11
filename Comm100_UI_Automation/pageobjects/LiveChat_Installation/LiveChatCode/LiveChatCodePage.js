var storeFrontAction = {
    /**
     * 进入页面检查基本元素是否加载显示
     */
    verifyElementsOfPage: function () {
        this.expect.element('@liveChatCodeTitle').to.be.visible;
        // this.expect.element('@campaignSelect').to.be.visible;
        this.expect.element('@customizeButton').to.be.visible;
        this.expect.element('@emailCodeLink').to.be.visible;
        this.expect.element('@installCodeText').to.be.visible;
        this.expect.element('@previewButton').to.be.visible;
        this.expect.element('@installCodeText').to.be.visible;
    }


};

module.exports = {

    commands: [storeFrontAction],

    elements: {
        liveChatCodeTitle: {
            selector: '#ctl00_lblTitle'
        },
        campaignSelect: {
            selector: '#ctl00_M_dxComboxPlans'
        },
        elementBySelected: {
            selector: '#ctl00_M_divSelectPlan>label:nth-child(2)>span:nth-child(2)'
        },
        customizeButton: {
            selector: '#ctl00_M_lbtnManage'
        },
        emailCodeLink: {
            selector: '#ctl00_M_divStep>a'
        },
        emailInput: {
            selector: '#textEmailAaddress'
        },
        sendEmailButton: {
            selector: '#btnSendEmail'
        },
        sendEmailPrompt: {
            selector: '#spanEmailSend'
        },
        installCodeText: {
            selector: '#ctl00_M_txtHTML'
        },
        previewButton: {
            selector: '#ctl00_M_lnkPreview'
        },
        advancedButton: {
            selector: '#aOMAdditional'
        },
        extraCodeLink: {
            selector: '#ctl00_M_divSecondPlan>a'
        },
        extraCodeText: {
            selector: '#ctl00_cphThickBox_txtHTMLSecond'
        }
    }
};
