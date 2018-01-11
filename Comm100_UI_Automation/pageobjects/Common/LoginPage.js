var storeFrontAction = {
	/**
     * Navigate with a callback
     */
    navigate: function (callback) {
        this.api.url(this.url(), callback);
    },

    /**
     * Sign in action
     */
    signIn: function (callback) {
        var argv = require('minimist')(process.argv.slice(2));
        var stage = argv.stage || 'test';
        var username;
        var password;
        if (stage === 'prod') {
            username = this.api.globals.prodUserName;
            password = this.api.globals.prodPassword;
        }
        else {
            username = this.api.globals.userName;
            password = this.api.globals.password;
        }
        /*this.api.url(`${this.api.launchUrl}/devtools/login?email=${username}&password=${password}`, function () {
            this.expect.element('body').text.to.contain('Status: SUCCESS');
            callback();
        });  */
		var self = this;
        self.waitForElementVisible('@userName', 60000, function () {
            self.setValueTo('@userName', username)
                .setValueTo('@password', password)
                .api.pause(2000, function () {                 //fixme can we create a custom command to wait till ajax completes
                    self.clickByJs('@signInButton', function () {
                        self.waitForElementNotPresent('@userName', callback);
                    });
                });
        });
    },

//    loginAndClickMenus: function(firstMenu,secondMenu,callback) {
//             callback = callback || function () {
//                    };
//            this.signIn(function() {
//                this.clickByJs(firstMenu,function(){
//                    this.expect.element(secondMenu).to.be.visible;
//                    this.click(secondMenu);
//                    //this.waitForElementPresent(secondMenu,3000);
//                });
//            })
//    }

//    loginAndClickMenus: function(firstMenu,secondMenu,callback) {
//                 callback = callback || function () {
//                        };
//
//                  this.execute(  this.signIn(function() {
//                                               this.clickByJs(firstMenu,function(){
//                                                   this.expect.element(secondMenu).to.be.visible;
//                                                   this.click(secondMenu);
//                                                   //this.waitForElementPresent(secondMenu,3000);
//                                                return true});
//                                           }, [cssSelector],function (){
//                                                                         callback.call(this);
//                                                                     }))
//                this.execute( this.signIn(function() {
//                                                    this.clickByJs(firstMenu,function(){
//                                                        this.expect.element(secondMenu).to.be.visible;
//                                                        this.click(secondMenu);
//                                                        //this.waitForElementPresent(secondMenu,3000);
//                                                    });
//                                                return true}),
//               [cssSelector],function (){
//                                     callback.call(this);
//                                 })
//                        //this.waitForElementPresent(secondMenu,3000);
//                    };

};

module.exports = {

	url: function () {
    return this.api.launchUrl + '/adminmanage/login.aspx';
},

    commands: [storeFrontAction],

    elements: {
        userName: {
            selector: '#txtEmail'
        },
        password: {
            selector: '#txtPassword'
        },
        signInButton: {
            selector: '#btnLogin'
        },
        forgetPassWord: {
            selector: '#linkbtnClickhere'
        },
        autoSignIn: {
            selector: '.checkbox'
        }
    }
};
