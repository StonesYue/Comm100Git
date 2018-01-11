var domainData = require("./data/domain");
var settingsData = require("./settings.json");

module.exports = (function (settings) {
    //launch_url constructor
    //Only way to pass setting is to add a value for each environment
    var argv = require("minimist")(process.argv.slice(2));
    var stageString = argv.stage || "test";
    var isJenkinRun = argv.autoscaleGrid || false;
    var browser = argv.browser || "chromelocal";
    var isStubbed = false;
    var runSerially = argv.runSerially || false;

    if (runSerially) {
        settings.test_workers.enabled = false;
    }

    var needBrowserStackToRun = false;
    switch (browser) {
        case "safari":
        case "ie10":

        case "ie11":
            needBrowserStackToRun = true;
            break;
        case "firefox":

        case "chrome":
            //do nothing
            break;
        default:
        //chrome is default browser
    }

    if (isJenkinRun || needBrowserStackToRun) {
        settings.selenium.start_process = false;
        settings.parallel_process_delay = 100;
    }

    for (var env in settings.test_settings) {

        if (browser === "chromelocal") { //use chromedriver to run tests and not selenium
            settings.test_settings[env].desiredCapabilities.browserName = "chrome";
            settings.test_settings[env].selenium_port = 9515;
            settings.test_settings[env].default_path_prefix = "";
            settings.test_settings[env].desiredCapabilities.chromeOptions = {"args": ["--no-sandbox"]};
            settings.selenium.start_process = false;

        } else if (browser === "phantom") {
            settings.test_settings[env].desiredCapabilities.browserName = "phantomjs";
            settings.test_settings[env].desiredCapabilities["phantomjs.binary.path"] = "node_modules/.bin/phantomjs"
            settings.test_settings[env].desiredCapabilities["phantomjs.cli.args"] = ['--ignore-ssl-errors=true'];
        } else {
            settings.test_settings[env].desiredCapabilities.browserName = browser;
            settings.test_settings[env].desiredCapabilities.loggingPrefs = {"browser": "ALL"};
        }

        if (!domainData.hasOwnProperty(env)) {
            //TODO process should exit from here
            throw new Error("Invalid site");
        }
        if(!domainData[env].hasOwnProperty(stageString)){
            throw new Error("Invalid stage");
        }
        if (isJenkinRun) {
            settings.test_settings[env].selenium_host = settingsData.autoscaleGrid.gridAddress;
            settings.test_settings[env].selenium_port = settingsData.autoscaleGrid.gridPort;
        }

        if (needBrowserStackToRun) {
            var browserCapabilities = settingsData.browserStack.browserSettings[browser.toLocaleLowerCase()];
            settings.test_settings[env].selenium_host = settingsData.browserStack.gridAddress;
            settings.test_settings[env].selenium_port = settingsData.browserStack.gridPort;
            settings.test_settings[env].use_ssl = true;

            settings.test_settings[env].desiredCapabilities.browserName = browserCapabilities.browser;
            settings.test_settings[env].desiredCapabilities.os = browserCapabilities.os;
            settings.test_settings[env].desiredCapabilities.os_version = browserCapabilities.os_version;
            settings.test_settings[env].desiredCapabilities.resolution = browserCapabilities.resolution;
            settings.test_settings[env].desiredCapabilities.browser_version = browserCapabilities.browser_version;
            settings.test_settings[env].desiredCapabilities["browserstack.local"] = true;
            settings.test_settings[env].desiredCapabilities["browserstack.key"] = settingsData.browserStack.key;
            settings.test_settings[env].desiredCapabilities["browserstack.user"] = settingsData.browserStack.username;
        }

        settings.test_settings[env].launch_url = domainData[env][stageString];
        settings.test_settings[env].isStubbed = isStubbed;
    }

    //Setting chromedriver path at runtime to run on different architectures
    if (process.platform === "darwin") {
        settings.selenium.cli_args["webdriver.chrome.driver"] = "selenium-resources/chromedriver";
    }
    else if (process.platform === "win32" || process.platform === "win64") {
        settings.selenium.cli_args["webdriver.chrome.driver"] = "selenium-resources/WindowsDrivers/chromedriver.exe";
    }
    return settings;

})
(require("./nightwatch.json"));