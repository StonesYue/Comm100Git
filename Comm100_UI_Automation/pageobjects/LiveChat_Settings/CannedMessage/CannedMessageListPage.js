var storeFrontAction = {
    verifyNumOfCannedMessage: function () {
        var that = this;
        this.getNumberOfElements('@numberOfMessageList', function (result) {
            that.expect.element('@numberOfMessageText').text.to.equals(result);
        });
    },
    verifyPublicElement: function () {
        var that = this;
        var cannedMessagsTitle = this.api.globals.livechat_cannedMessagesList_title_text;
        this.getText('@cannedMessagesTitle', function (result) {
            that.assert.equal(result.value, cannedMessagsTitle);
        });
        this.expect.element('@publicButton').to.be.visible;
        this.expect.element('@privateButton').to.be.visible;
        var ctgPublicElement = this.section.ctgPublic;
        ctgPublicElement.expect.element('@manageButton').to.be.visible;
        ctgPublicElement.expect.element('@categorySelectLabel').to.be.visible;
        var cntPublicElement = this.section.cntPublic;
        cntPublicElement.expect.element('@newMessageButton').to.be.visible;
        cntPublicElement.expect.element('@table').to.be.visible;
    },

    verifyPublicCategory: function () {
        var ctgPublicElement = this.section.ctgPublic;
        ctgPublicElement.click('@categorySelect');
        ctgPublicElement.waitForElementVisible('@elementBySelected', 2000);
        var categorySelectText = this.api.globals.livechat_cannedMessagesList_category_select;
        ctgPublicElement.getText('@elementBySelected', function (result) {
            this.assert.equal(result.value, categorySelectText);
            ctgPublicElement.click('@elementBySelected');
            this.pause(2000);
            ctgPublicElement.getAttribute('[value="649"]', 'selected', function (result1) {
                this.assert.equal(result1.value, 'true');
            });

        });

    },

};

module.exports = {

    commands: [storeFrontAction],
    elements:{
        cannedMessagesTitle: {
            selector: '#ctl00_lblTitle'
        },
        publicButton: {
            selector: '#menuPublic'
        },
        privateButton: {
            selector: '#menuPrivate'
        }
    },
    sections: {
        ctgPublic: {
            selector: '#ctgpublic',
            elements: {
                manageButton: {
                    selector: '.rightlink.PublicPermission'
                },
                categorySelectLabel: {
                    selector: '#ctgpublic>[class="dropdown"]'
                },
                categorySelect: {
                    selector: '#ctl00_M_ddlCategory'
                },
                elementBySelected: {
                    selector: '#ctl00_M_ddlCategory>[value="649"]'
                }

            }
        },

        cntPublic: {
            selector: '#cntpublic',
            elements: {
                newMessageButton: {
                    selector: '#ctl00_M_btnNewMessage'
                },
                table: {
                    selector: '#cntpublic>.divTable>table'
                },
                firstMessageDelButton: {
                    selector: '.delete-icon.toptooltip'
                },
                firstMessagUpdateButton: {
                    selector: '.edit-icon.toptooltip'
                },
                nameTableList: {
                    selector: '#cntpublic>div:nth-child(2)>table>tbody>tr[class*="trStyle"]>td:nth-child(2)'
                },
                messageTableList: {
                    selector: '#cntpublic>div:nth-child(2)>table>tbody>tr[class*="trStyle"]>td:nth-child(3)'
                },
                shortcutsTableList: {
                    selector: '#cntpublic>div:nth-child(2)>table>tbody>tr[class*="trStyle"]>td:nth-child(4)'
                },
                editMessageButton: {
                    selector: '.edit-icon.toptooltip'
                },
                delMessageButton: {
                    selector: '.delete-icon.toptooltip'
                },
                numberMessageText: {
                    selector: '#cntpublic>div:nth-child(3)>div>span:last-child'
                },
                numberMessageList: {
                    selector: '#cntpublic>div:nth-child(2)>table>tbody>tr[class*="trStyle"]'
                },
                pageSizeSelect: {
                    selector: ' #cntpublic>div:nth-child(3)>div>label>select'
                }
            }
        },

        ctgPrivate: {
            selector: '#ctgprivate',
            elements: {
                manageButton: {
                    selector: '#ctl00_M_lbtn'
                },
                categorySelectLabel: {
                    selector: '#ctgprivate>[class="dropdown"]'
                },
                categorySelect: {
                    selector: '#ctl00_M_ddlPrivateCategory'
                },
            }
        },

        cntPrivate: {
            selector: '#cntprivate',
            elements: {
                newMessageButton: {
                    selector: '#ctl00_M_btnNewPrivateMessage'
                },
                table: {
                    selector: '#cntprivate>.divTable>table'
                },
                firstMessageDelButton: {
                    selector: '#cntprivate>div:nth-child(2)>table>tbody>tr:nth-child(2)>td:nth-child(5)>a:nth-child(2)'
                },
                firstMessagUpdateButton: {
                    selector: '#cntprivate>div:nth-child(2)>table>tbody>tr:nth-child(2)>td:nth-child(5)>a:first-child'
                },
                nameTableList: {
                    selector: '#cntprivate>div:nth-child(2)>table>tbody>tr[class*="trStyle"]>td:nth-child(2)'
                },
                messageTableList: {
                    selector: '#cntprivate>div:nth-child(2)>table>tbody>tr[class*="trStyle"]>td:nth-child(3)'
                },
                shortcutsTableList: {
                    selector: '#cntprivate>div:nth-child(2)>table>tbody>tr[class*="trStyle"]>td:nth-child(4)'
                },
                editMessageButton: {
                    selector: '.edit-icon.toptooltip'
                },
                delMessageButton: {
                    selector: '.delete-icon.toptooltip'
                },
                numberMessageText: {
                    selector: '#cntprivate>div:nth-child(3)>div>span:last-child'
                },
                numberMessageList: {
                    selector: '#cntprivate>div:nth-child(2)>table>tbody>tr[class*="trStyle"]'
                },
                pageSizeSelect: {
                    selector: ' #cntprivate>div:nth-child(3)>div>label>select'
                }
            }
        }




    // elements: {
    //     newMessageButton: {
    //         selector: '#ctl00_M_btnNewMessage'
    //     },
    //     firstMessageDelete: {
    //         selector: '.delete-icon.toptooltip'
    //     },
    //     firstMessageUpdate: {
    //         selector: '.edit-icon.toptooltip'
    //     },
    //     numberOfMessage: {
    //         selector: '.ASPNetPager>span:last-child'
    //     },
    //     numberOfMessageList: {
    //         selector: '.edit-icon.toptooltip'
    //     }
    // }
    }
};
