var properties = require("properties");
var extend = require("extend");
var glob = require("glob");
var chromedriver = require('chromedriver');
const fs = require('fs-extra');

module.exports = {
    // textContainer = [],
    waitForConditionTimeout: 60000,
    userName: "comm100training2@comm100.com",
    password: "Aa000000",
    prodUserName: "nash@comm100test.com",
    prodPassword: "Aa000000",

    before : function(done) {
        var argv = require("minimist")(process.argv.slice(2));
        if(argv.browser === undefined){
            chromedriver.start();
        }
        done();
    },

    after : function(done) {
        var argv = require("minimist")(process.argv.slice(2));
        if(argv.browser === undefined) {
            chromedriver.stop();
        }
        done();
    },
    saveBrowserLogs: function (client) {
        var filePath = './reports/logfile/' + client.currentTest.module.replace(/\//g, "");
        return new Promise((resolve, reject) => {
            if (client.sessionId) {
                client.getLog('browser', (browserLogs)  => {
                    fs.ensureDir(filePath, (error) => {
                        if (error) reject(error)
                        fs.writeFile(filePath + '/testCaseLog.txt', JSON.stringify(browserLogs), (err) => {
                            if (err) {
                                reject(err.msg);
                            } else {
                                resolve("Logs saved")
                            }
                        });
                    });
                });
            } else {
                reject("Session has already ended");
            }
        });
    },
    saveScreenshot: function (client) {
        var filePath = './reports/logfile/' + client.currentTest.module.replace(/\//g, "");
        return new Promise((resolve, reject) => {
            if (client.sessionId) {
                if (client.currentTest.results.failed > 0 || client.currentTest.results.errors > 0) {
                    var screenshotPath = filePath + '/screenshot.png';
                    client.saveScreenshot(screenshotPath, (result)  => {
                        if (!result || result.status !== 0) {
                            reject('Error saving screenshot...'+ result);
                        } else resolve("Screenshot saved")
                    });
                }
            } else {
                reject("Session has already ended");
            }
        });
    },

    beforeEach: function (client, done) {
        var argv = require("minimist")(process.argv.slice(2));
        var isMobile = argv.mobile || false;
        //ready for custom parameter
        glob("testdata/*.properties", function (er, files) {
            files.forEach(function (currentFile) {
                properties.parse(currentFile, {path: true}, function (error, obj) {
                    client.globals = extend(client.globals, obj);
                });
            });
        });

        //so on we can have specs with names like tablet,iphone etc to run on different resolutions
        if (isMobile) {
            client.globals.isMobile = true;
            client.resizeWindow(320, 586);
        } else{
            client.maximizeWindow();
        }
    },

    afterEach: function (client, done) {
        const logsPromise = this.saveBrowserLogs(client);
        const screenshotPromise = this.saveScreenshot(client);
        client.end();
        Promise.all([logsPromise,screenshotPromise])
        .then((msg1) => {
            console.log(msg1);
        })
        .catch(msg => {
            console.log(msg);
        })
        .then(done);
    },

    getElementSelector: function (client, element) {
        if (client.api.globals.isMobile) {
            element = "mobile" + element.substring(0,1).toUpperCase() + element.substring(1);
        } else {
            element =  element;
        }
        return element;
    }
};
