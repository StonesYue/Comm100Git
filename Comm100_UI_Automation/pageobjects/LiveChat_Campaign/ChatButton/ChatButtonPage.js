

var storeFrontAction = {
    verifyElementsOfPage: function () {
        // campaginSelectValue = this.api.globals.livechat_livechatCode_campagin_select_value;
        // var campaginSelectText = this.api.globals.livechat_livechatCode_campagin_select;
        // this.waitForElementVisible('@campaignSelect', 2000);
        // this.selectOptionByValue('@campaignSelect', campaginSelectValue);
        // this.chooseCampaginSelect(campaginSelectText, campaginSelectValue);
        // this.verifyChooseCampaginSelect();
        // this.getText('@elementBySelected', function (result){
        //     this.assert.equal(result.value, campaginSelectText);
        // });
        this.getText('@chatButtonTitle', function (result) {
            this.assert.equal(result.value, 'Chat Button');
        });
        this.expect.element('@colorInput').to.be.visible;
        this.expect.element('@adaptiveButton').to.be.visible;
        this.expect.element('@imageButton').to.be.visible;
        this.expect.element('@textLinkButton').to.be.visible;
        this.expect.element('@advancedButton').to.be.visible;
        this.expect.element('@colorInput').to.be.visible;
        this.expect.element('@agentOnlineImg').to.be.visible;
        this.expect.element('@agentOfflineImg').to.be.visible;
    },
    // verifyChooseCampaginSelect: function (){
    //     campaginSelectValue = this.api.globals.livechat_livechatCode_campagin_select_value;
    //     campaginSelectText = this.api.globals.livechat_livechatCode_campagin_select;
    //     this.selectOptionByValue('@campaignSelect', campaginSelectValue, function (){
    //         this.waitForElementVisible('@elementBySelected', 2000);
    //         this.getText('@elementBySelected', function (result){
    //             this.assert.equal(result.value, campaginSelectText);
    //         });
    //     });
    // }
};


module.exports = {

    commands: [storeFrontAction],

    elements: {
        chatButtonTitle:{
            selector: '#ctl00_lblTitle'
        },
        campaignSelect:{
            selector: '#switch-codeplan>label:nth-child(2)>select'
        },
        elementBySelected:{
            selector: '#switch-codeplan>label:nth-child(2)>span:nth-child(2)'
        },
        adaptiveButton: {
            selector: '#chat-button-type>ul>li:nth-child(1)'
        },
        imageButton: {
            selector: '#chat-button-type>ul>li:nth-child(2)'
        },
        textLinkButton: {
            selector: '#chat-button-type>ul>li:nth-child(3)'
        },
        advancedButton: {
            selector: '.spanH2Title'
        },
        hideOfflineButton: {
            selector: '#divOptionContent>ul>li:nth-child(1)'
        },
        saveChangesButton: {
            selector: '#btn-save-changes'
        },
        discardButton: {
            selector: '#btn-discard'
        },

        /**
         * preview
         */
        agentOnlineImg: {
            selector: '#preview-Adaptive>div:nth-child(4)>div:nth-child(1)>div>div'
        },
        agentOfflineImg: {
            selector: '#preview-Adaptive>div:nth-child(4)>div:nth-child(2)>div>div'
        },

        /**
         * color
         */
        colorInput: {
            selector: '#chatbutton-themeColor'
        },
            /*
            Image Desktop View
            */
        fromGalleryLinkButton: {
            selector: '.from-gallery'
        },

        fromMyComputerLinkButton: {
            selector: '.from-my-computer'
        },
        staticImageRadioButton: {
            selector: '#if-float>div:nth-child(1)>div'
        },

        floatImageRadioButton: {
            selector: '#if-float>div:nth-child(2)>div'
        },
        positionSelect: {
            selector: '#float-position-type'
        },

        offsetFromTopInput: {
            selector: ' #offset-from-top-val'
        },

        pixelsRadioButton: {
            selector: '#offset-from-top>div:nth-child(2)>label:nth-child(2)'
        },

        percentRadioButton: {
            selector: '#offset-from-top>div:nth-child(2)>label:nth-child(3)'
        },
        switchToAdvancedButton: {
            selector: '#aPositionSwitchToAdvanced'
        },
        switchToBasicButton: {
            selector: '#aPositionSwitchToBasic'
        },
            // TextContent
        textContentInput: {
            selector: '#button-text'
        }

    }
};
