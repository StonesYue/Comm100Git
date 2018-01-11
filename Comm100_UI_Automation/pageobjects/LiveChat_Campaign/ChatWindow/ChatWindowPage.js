module.exports = {
    
    //    commands: [storeFrontAction],
    
        elements: {
    
            campaignSelect :{
                selector : '#switch-codeplan>label:nth-child(2)>select'
            },

            //style
            classicStyleButton : {
                selector : '.chatwindow-style-Classic'
            },

            circleStyleButton : {
                selector : '.chatwindow-style-Circle>img'
            },

            bubbleStyleButton : {
                selector : '.chatwindow-style-Bubble'
            },


            //Header
            agentInfoRadio : {
                selector : '#if-show-branding-image>li:nth-child(1)>label'
            },

            displayNameCheckbox : {
                selector : '#show-agent-info>div:nth-child(1)>label:nth-child(1)'
            },

            avatarCheckbox : {
                selector : '#show-agent-info>div:nth-child(1)>label:nth-child(2)'
            },

            titleCheckbox : {
                selector : '#show-agent-info>div:nth-child(1)>label:nth-child(3)'
            },

            bioCheckbox : {
                selector : '#show-agent-info>div:nth-child(1)>label:nth-child(4)'
            },

            goToTheAgentListLinkButton : {
                selector : '#gotoAgent'
            },

            bannerImageRadio : {
                selector : '#if-show-branding-image>li:nth-child(3)>label'
            },

            fromGalleryLinkButton : {
                selector : '.from-gallery'
            },

            fromMyComputerLinkButton : {
                selector : '.from-my-computer'
            },

            avatarAndLogoRadio : {
                selector : '#if-show-branding-image>li:nth-child(5)>label'
            },

            displayAgentAvatarRadio : {
                selector : '#show-avatar-logo>li:nth-child(1)>label'
            },

            changeAgentsAvatarsLinkButton : {
                selector : '#ctl00_M_edit_operators_link'
            },

            displayCompanyLogoRadio : {
                selector : '#show-avatar-logo>li:nth-child(2)>label'
            },

            uploadLinkButton : {
                selector : '#img1-file'
            },

            //Body
            displayAvatarWithMessageRadio : {
                selector : '#if-show-chatwindow-boby>div>ul>li:nth-child(1)>label'
            },

            ownCssLinkButton : {
                selector : '#custom-css'
            },

            //Type
           switchLinkButton : {
                selector : '#switch-window-type'
            },

            //Title
            titleInput : {
                selector : '#chat-window-title'
            },

            //optionsForVistors
            optionsForVistorsButton : {
                selector : '.divChatWindowOption>div:nth-child(1)>span'
            },

            displayPrintCheckbox : {
                selector : '#divOptionContent>ul:nth-child(1)>li:nth-child(2)>label'
            },

            displaytTranscriptCheckbox : {
                selector : '#divOptionContent>ul:nth-child(1)>li:nth-child(3)>label'
            },

            switchToOfflineCheckbox : {
                selector : '#divOptionContent>ul:nth-child(1)>li:nth-child(6)>label'
            },

            displaySendingFilesCheckbox : {
                selector : '.feature-advanced-chat-func>li>label'
            },

            displayAudioCheckbox : {
                selector : '#ctl00_M_audioVideoChatSwitch>li:nth-child(1)>label'
            },
          
            displayVideoCheckbox : {
                selector : '#ctl00_M_audioVideoChatSwitch>li:nth-child(2)>label'
            },

            setEmailFromAddressLinkText : {
                selector : '#setEmailAddress'
            },

            customizeEmailSubjectLinkText : {
                selector : '#skipToLanguagePage'
            },

            useMyOwnSMTPServerLinkText : {
                selector : '#smtp-server'
            },

            //Advanced
            advancedButton : {
                selector : '[style="margin-top:40px;"]>span'
            },

            ifAutomaticallyEndChatsCheckbox : {
                selector : '#divOptionContent2>ul>li:nth-child(2)>label'
            },

            AutomaticallyEndTimeSelect : {
                selector : '#ddlStopChatTimes>label:nth-child(2)>select'
            },

            

            ifAutomaticallyEmailCheckbox : {
                selector : '#divOptionContent2>ul>li:nth-child(3)>label'
            },

            toInput : {
                selector : '#txtChatWindowEmailAddress'
            },

            subjectInput : {
                selector : '#txtChatWindowEmailSubject'
            },

            insertDynamicInfoLinkText : {
                selector : '#lnkInsertMacro'
            },


            
        }
    }